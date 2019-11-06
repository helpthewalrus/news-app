const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = [
  {
    entry: {
      app: "./src/index.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "News App",
        template: "index.html"
      }),
      new CleanWebpackPlugin()
    ],
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000,
      disableHostCheck: false,
      hot: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-proposal-class-properties"]
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  includePaths: ["./node_modules"]
                }
              }
            }
          ]
        }
      ]
    }
  }
];
