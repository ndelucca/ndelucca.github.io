const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const build_dir = "build";
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, build_dir),
    filename: "bundle.js",
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "public/img/favicons/favicon.ico",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, build_dir),
    },
    compress: true,
    port: 3000,
  },
};
