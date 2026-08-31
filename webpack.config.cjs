const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { marked } = require('marked');

const BUILD_DIR = path.resolve(__dirname, 'build');
const TEMPLATES_DIR = './src/templates/';
const MARKDOWN_DIR = './md/';
const SITE_URL = 'https://ndelucca.github.io';

/**
 * The template that renders markdown files. It is not a page of its own, so it
 * is excluded from the page scan - otherwise it ships as an empty shell.
 */
const MARKDOWN_TEMPLATE = 'markdown';

/** Title and description per page; anything unlisted falls back to its filename */
const PAGE_META = {
  index: { title: 'ndelucca@home', description: "ndelucca's personal page" },
  fountain: {
    title: 'Fountain of truth',
    description: 'A cow tells you something worth hearing today',
  },
  ephemerides: {
    title: 'Ephemerides',
    description: 'What happened on this day, a long time ago',
  },
  workout: { title: 'Workout', description: 'Monthly strength routines and load tables' },
  diet: { title: 'Diet', description: 'What to eat today, depending on whether you lift' },
  404: { title: 'Not found', description: 'This page does not exist' },
};

/**
 * Lists the basenames of the files with a given extension in a directory
 * @param {string} directory - Directory to scan
 * @param {string} extension - Extension to keep, e.g. '.hbs'
 * @returns {string[]} The basenames without their extension
 */
const listFiles = (directory, extension) => {
  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory)
    .filter(file => path.extname(file) === extension)
    .map(file => path.basename(file, extension));
};

/**
 * Metadata for one page, falling back to the page name when it is not listed
 * @param {string} pageName - The page basename
 * @returns {{title: string, description: string}} The page metadata
 */
const metaFor = pageName => {
  return PAGE_META[pageName] ?? { title: pageName, description: "ndelucca's webpage" };
};

/**
 * Drops `<script>` tags that point at a zero byte bundle.
 *
 * A page whose entry is only a stylesheet still gets a JavaScript chunk from
 * webpack, and it is empty. Without this the browser fetches a 0 byte file on
 * every such page.
 */
class RemoveEmptyScriptsPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('RemoveEmptyScripts', compilation => {
      const isEmptyScript = tag => {
        if (tag.tagName !== 'script' || !tag.attributes || !tag.attributes.src) return false;

        const assetName = path.basename(String(tag.attributes.src).split('?')[0]);
        const asset = compilation.getAsset(assetName);
        return Boolean(asset) && asset.source.size() === 0;
      };

      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tap(
        'RemoveEmptyScripts',
        data => {
          data.headTags = data.headTags.filter(tag => !isEmptyScript(tag));
          data.bodyTags = data.bodyTags.filter(tag => !isEmptyScript(tag));
          return data;
        }
      );
    });
  }
}

/**
 * Emits a sitemap listing every generated page
 */
class SitemapPlugin {
  constructor(pages) {
    this.pages = pages;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap('Sitemap', compilation => {
      compilation.hooks.processAssets.tap({ name: 'Sitemap', stage: 1000 }, () => {
        const urls = this.pages
          .map(page => {
            const location = page === 'index' ? `${SITE_URL}/` : `${SITE_URL}/${page}.html`;
            return `  <url><loc>${location}</loc></url>`;
          })
          .join('\n');

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        compilation.emitAsset('sitemap.xml', new compiler.webpack.sources.RawSource(sitemap));
      });
    });
  }
}

const markdownPages = listFiles(MARKDOWN_DIR, '.md');
const templatePages = listFiles(TEMPLATES_DIR, '.hbs').filter(page => page !== MARKDOWN_TEMPLATE);
const markdownLinks = markdownPages.map(link => ({ link }));

// Every page loads the shared bundle; page specific chunks are added below.
const entryPoints = { main: ['./src/ts/main.ts', './src/scss/main.scss'] };

const plugins = [
  new CopyWebpackPlugin({ patterns: [{ from: 'public' }] }),
  new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  new RemoveEmptyScriptsPlugin(),
  new SitemapPlugin([...templatePages.filter(page => page !== '404'), ...markdownPages]),
];

for (const pageName of templatePages) {
  const entries = [];
  if (fs.existsSync(`./src/ts/${pageName}.ts`)) entries.push(`./src/ts/${pageName}.ts`);
  if (fs.existsSync(`./src/scss/${pageName}.scss`)) entries.push(`./src/scss/${pageName}.scss`);
  if (entries.length > 0) entryPoints[pageName] = entries;

  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${pageName}.html`,
      template: `${TEMPLATES_DIR}${pageName}.hbs`,
      templateParameters: {
        ...metaFor(pageName),
        canonical: pageName === 'index' ? `${SITE_URL}/` : `${SITE_URL}/${pageName}.html`,
        siteUrl: SITE_URL,
        mdLinks: markdownLinks,
      },
      chunks: ['main', pageName],
    })
  );
}

// Markdown pages share one stylesheet chunk rather than getting one each.
if (markdownPages.length > 0) {
  entryPoints[MARKDOWN_TEMPLATE] = ['./src/scss/markdown.scss'];
}

for (const pageName of markdownPages) {
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${pageName}.html`,
      template: `${TEMPLATES_DIR}${MARKDOWN_TEMPLATE}.hbs`,
      templateParameters: {
        title: pageName,
        description: `Notes: ${pageName}`,
        canonical: `${SITE_URL}/${pageName}.html`,
        siteUrl: SITE_URL,
        mdContent: marked.parse(fs.readFileSync(`${MARKDOWN_DIR}${pageName}.md`, 'utf-8')),
        mdLinks: markdownLinks,
      },
      chunks: ['main', MARKDOWN_TEMPLATE],
    })
  );
}

module.exports = (_env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: entryPoints,
    output: {
      path: BUILD_DIR,
      // Hashed filenames let the CDN cache a bundle forever and still pick up
      // the next deploy, which plain main.js could not.
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },
    devtool: isProduction ? false : 'eval-source-map',
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          // onlyCompileBundledFiles keeps the build from type checking the test
          // suite, which tsconfig still covers for `npm run typecheck`.
          use: { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } },
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff2?)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
        },
      ],
    },
    plugins,
    devServer: {
      static: { directory: BUILD_DIR },
      compress: true,
      port: 3000,
    },
  };
};
