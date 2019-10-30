const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.min.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9090
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      },
      {
        test: /\.(html)$/,
        loader: "html-loader",
        options: {
          attrs: ["img:src"]
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "ttf-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Hetchr",
      template: path.join(__dirname, "src/index.html"),
      filename: path.join(__dirname, "dist/index.html"),
      options: {
        attrs: ["img:src", "link:href"],
        root: path.resolve(__dirname, "src")
      }
    }),
    new CopyWebpackPlugin([
      { from: "src/img", to: "img" },
      { from: "src/font", to: "font" }
    ])
  ]
};
