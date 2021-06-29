const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
// const { table } = require('console');

module.exports = {
  entry: './src/index.js',
  output: {
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "skills.html",
      template: "./src/skills.html"
    }),
    new HtmlWebpackPlugin({
      filename: "projects.html",
      template: "./src/projects.html"
    }),
    new HtmlWebpackPlugin({
      filename: "contacto.html",
      template: "./src/contacto.html"
    }),
    new HtmlWebpackPlugin({
      filename: "thanks.html",
      template: "./src/thanks.html"
    }),
    new MiniCssExtractPlugin({filename: '[name].[hash].css'}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.pdf$/,
        type: "asset/resource",
        generator: {
          filename: "docs/[name][ext]"
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
    ]
  }
};
