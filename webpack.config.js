const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveServer = require("live-server");

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // Para que Webpack entienda imports con baseUrl

if (dev) {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: dev,

  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({/* options: see below */})]  // Para que Webpack entienda imports con baseUrl
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
