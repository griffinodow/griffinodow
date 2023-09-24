import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import RemoveEmptyScriptsPlugin from "webpack-remove-empty-scripts";

export default {
  entry: "./src/index.scss",
  output: {
    path: path.resolve("dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/site.webmanifest", to: "site.webmanifest" },
        { from: "src/images", to: "images" },
        { from: "src/favicon.ico", to: "favicon.ico" },
      ],
    }),
  ],
};
