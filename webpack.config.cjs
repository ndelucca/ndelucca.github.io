const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dirName = __dirname;
const buildDir = "build";

const listFiles = (directory, extension) => {
  if (!fs.existsSync(directory)) return [];

  const files = fs.readdirSync(directory);
  const filesWithoutExtension = files
    .filter((file) => path.extname(file) === extension)
    .map((file) => path.basename(file, extension));
  return filesWithoutExtension;
};

j2pages = listFiles("./src/templates/pages/", ".j2");
mdPages = listFiles("./md/", ".md");

const entryPoints = {
  main: ["./src/scss/main.scss"],
};

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
];

const globals = {};
// Cada página:
//  tiene su propio bundle a partir de un .ts específico.
//  utiliza su propio template jinja2
j2pages.forEach((pageName) => {
  entryPoints[pageName] = [];

  if (fs.existsSync(`./src/ts/${pageName}.ts`)) {
    entryPoints[pageName].push(`./src/ts/${pageName}.ts`);
  }

  if (fs.existsSync(`./src/scss/${pageName}.scss`)) {
    entryPoints[pageName].push(`./src/scss/${pageName}.scss`);
  }

  plugins.push(
    new HtmlWebpackPlugin({
      template: `!!html-loader!jinja2-loader!src/templates/pages/${pageName}.j2`,
      filename: `${pageName}.html`,
      chunks: ["main", pageName],
    })
  );
});

mdPages.forEach((pageName) => {
  entryPoints[pageName] = [];

  if (!fs.existsSync(`./md/${pageName}.md`)) {
    return;
  }

  if (fs.existsSync(`./src/ts/markdown.ts`)) {
    entryPoints[pageName].push(`./src/ts/markdown.ts`);
  }

  if (fs.existsSync(`./src/scss/markdown.scss`)) {
    entryPoints[pageName].push(`./src/scss/markdown.scss`);
  }

  globals[pageName] = fs.readFileSync(`./md/${pageName}.md`, "utf-8");

  plugins.push(
    new HtmlWebpackPlugin({
      template: `!!html-loader!jinja2-loader!src/templates/markdown.j2`,
      filename: `${pageName}.html`,
      chunks: ["main", pageName],
    })
  );
});

plugins.push(
  new webpack.DefinePlugin({
    globals: JSON.stringify(globals),
  })
);

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
