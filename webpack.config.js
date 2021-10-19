const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Haste Simple Auth",
      header: "Haste Simple Auth",
      metaDesc: "Haste Simple Auth demonstrates the use of Haste Client",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    host: process.env.HOST, // default: localhost
    port: process.env.PORT, // default: 8080
    open: true, // open page in browser
  },
  experiments: {
    topLevelAwait: true,
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "app.bundle.js",
    libraryTarget: "var",
    library: "EntryPoint",
  },
};
