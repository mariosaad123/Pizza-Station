const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
const { Generator } = require('webpack');

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: false,
    port: 9020,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },

      {
        test: /\.css$/i,
        use: [
           {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
           },
            "css-loader"],
      },
      {
      test:  /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'sass-loader'
        ]
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./images/[name][ext]"
        }
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./fonts/[name][ext]"
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),

    new HtmlWebpackPlugin({
      filename: "pizza.html",
      template: "./src/pizza.html"
    }),

    new HtmlWebpackPlugin({
      filename: "pizza2.html",
      template: "./src/pizza2.html"
    }),

    new HtmlWebpackPlugin({
      filename: "pizza3.html",
      template: "./src/pizza3.html"
    }),

    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html"
    }),

    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html"
    }),

    new HtmlWebpackPlugin({
      filename: "menu.html",
      template: "./src/menu.html"
    }),

    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),

    new CssMinimizerPlugin()
  ],
};