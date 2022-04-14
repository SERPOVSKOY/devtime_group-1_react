const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'src/images/[hash].[ext]'
    },
    module: {
        rules: [
          { 
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
            type: 'asset/resource'
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
      },
    mode: 'development',
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }), 
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({ patterns: [{ from: 'src/images', to: path.resolve(__dirname, 'dist/images') }] })
      ]
}