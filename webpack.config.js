const path = require("path");
const autoprefixer = require("autoprefixer");

module.exports = [
  {
    entry: {
      app: ["@babel/polyfill", "./src/index.js"]
    },
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist")
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
            {
              loader: "file-loader",
              options: {
                name: "app.bundle.css"
              }
            },
            { loader: "extract-loader" },
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
