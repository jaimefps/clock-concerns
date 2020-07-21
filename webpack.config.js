const path = require("path");

module.exports = {
  entry: "./src/clock-web/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    publicPath: "/dist/",
    contentBase: path.resolve(__dirname, "public"),
  },
};
