const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const Dotenv = require("dotenv-webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");
const merge = require('webpack-merge');

module.exports = env => {
  const commonConfig = {
    mode: env.mode,
    output: {
      path: path.resolve(__dirname, "./dist/browser"),
      filename: "[name].js",
      libraryTarget: "umd",
      library: "Xeta",
      umdNamedDefine: true
    },
    stats: { children: false },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          options: {
            
          }
        }
      ]
    },
    plugins: [
      new Dotenv({
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true // hide any errors
      }),
      new CheckerPlugin()
    ]
  };

  const browserConfig = {
    entry: {
      xeta: "./src/browser.ts",
      "xeta.min": "./src/browser.ts"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: env.mode === "development"
              }
            },
            {
              loader: "css-loader"
            }
          ]
        }
      ]
    },
    devServer: {
      hot: true,
      writeToDisk: true,
      port: 9000,
      contentBase: path.resolve(__dirname, "./dist")
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "Xeta",
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ]
  };

  return [merge(commonConfig, browserConfig)];
};
