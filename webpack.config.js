const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const build_dir = "build";
const pages = ["index", "fountain", "ephemerides"];

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

// Cada página:
//  tiene su propio bundle a partir de un .ts específico.
//  utiliza su propio template jinja2
pages.map((page_name) => {
  entryPoints[page_name] = [];

  if (fs.existsSync(`./src/ts/${page_name}.ts`)) {
    entryPoints[page_name].push(`./src/ts/${page_name}.ts`);
  }

  if (fs.existsSync(`./src/scss/${page_name}.scss`)) {
    entryPoints[page_name].push(`./src/scss/${page_name}.scss`);
  }

  plugins.push(
    new HtmlWebpackPlugin({
      template: `!!html-loader!jinja2-loader!src/templates/${page_name}.j2`,
      filename: `${page_name}.html`,
      chunks: ["main", page_name],
    })
  );
});

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, build_dir),
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"],
    alias: {
      // El modulo tiene un bug y busca en el root en lugar del directorio de build
      ".cows": path.resolve(__dirname, "node_modules/cowsay/cows"),
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
      directory: path.resolve(__dirname, build_dir),
    },
    compress: true,
    port: 3000,
  },
};
