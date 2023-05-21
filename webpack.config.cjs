const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dirName = __dirname;
const buildDir = "build";
const templatesDir = "./src/templates/";

const listFiles = (directory, extension) => {
  if (!fs.existsSync(directory)) return [];

  const files = fs.readdirSync(directory);
  const filesWithoutExtension = files
    .filter((file) => path.extname(file) === extension)
    .map((file) => path.basename(file, extension));
  return filesWithoutExtension;
};

const loadPartials = (partialFiles) => {
  const partials = {};

  for (const file of partialFiles) {
    const filePath = path.join(templatesDir, "partials", `${file}.hbs`);
    partials[file] = fs.readFileSync(filePath, "utf-8");
  }

  return partials;
};

const mdPages = listFiles("./md/", ".md");
const hbsPages = listFiles("./src/templates/", ".hbs");
const partials = loadPartials(listFiles("./src/templates/partials/", ".hbs"));

const entryPoints = {
  main: ["./src/scss/main.scss"],
};

const globals = {};

const plugins = [
  new CopyWebpackPlugin({
    patterns: [{ from: "public" }],
  }),
  new MiniCssExtractPlugin({
    filename: (pathData) => {
      const pageName = pathData.chunk.name;
      return pageName === "main" ? "main.css" : `${pageName}.css`;
    },
  }),
  new webpack.DefinePlugin({ ...globals }),
];

hbsPages.forEach((pageName) => {
  const entries = [];

  if (fs.existsSync(`./src/ts/${pageName}.ts`)) {
    entries.push(`./src/ts/${pageName}.ts`);
  }

  if (fs.existsSync(`./src/scss/${pageName}.scss`)) {
    entries.push(`./src/scss/${pageName}.scss`);
  }

  if (entries.length != 0) {
    entryPoints[pageName] = entries;
  }

  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${pageName}.html`,
      template: `./src/templates/${pageName}.hbs`,
      templateParameters: {
        title: pageName,
        partials,
      },
      chunks: ["main", pageName],
    })
  );
});

mdPages.forEach((pageName) => {
  const entries = [];

  if (fs.existsSync(`./src/ts/markdown.ts`)) {
    entries.push(`./src/ts/markdown.ts`);
  }

  if (fs.existsSync(`./src/scss/markdown.scss`)) {
    entries.push(`./src/scss/markdown.scss`);
  }

  if (entries.length != 0) {
    entryPoints[pageName] = entries;
  }

  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${pageName}.html`,
      template: `./src/templates/${pageName}.hbs`,
      templateParameters: {
        title: pageName,
        mdFile: fs.readFileSync(`./md/${pageName}.md`, "utf-8"),
        partials,
      },
      chunks: ["main", pageName],
    })
  );
});

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(dirName, buildDir),
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"],
    alias: {
      // El modulo tiene un bug y busca en el root en lugar del directorio de build
      ".cows": path.resolve(dirName, "node_modules/cowsay/cows"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.cow$/,
        use: "raw-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
    ],
  },
  plugins: plugins,
  devServer: {
    static: {
      directory: path.resolve(dirName, buildDir),
    },
    compress: true,
    port: 3000,
  },
};
