const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const build_dir = "build";
const pages = ["index", "fountain", "ephemerides"];

const entryPoints = {};

const plugins = [
  new CopyWebpackPlugin({
    patterns: [{ from: "public" }],
  }),
];

// Cada página:
//  tiene su propio bundle a partir de un .ts específico.
//  utiliza su propio template jinja2
pages.map((page_name) => {
  entryPoints[page_name] = `./src/ts/${page_name}.ts`;
  plugins.push(
    new HtmlWebpackPlugin({
      template: `!!html-loader!jinja2-loader!src/templates/${page_name}.html`,
      favicon: "public/img/favicons/favicon.ico",
      filename: `${page_name}.html`,
      chunks: [page_name], // Se asegura que solo cargue page_name.bundle.js
    })
  );
});

module.exports = {
  entry: entryPoints,
  output: {
    path: path.resolve(__dirname, build_dir),
    filename: "[name].bundle.js",
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              esModule: false,
            },
          },
          {
            loader: "jinja2-loader",
            options: {
              templateFolder: path.resolve(__dirname, "src/templates"),
              context: {},
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
      directory: path.join(__dirname, build_dir),
    },
    compress: true,
    port: 3000,
  },
};
