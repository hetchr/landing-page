const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: ["url-loader"]
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
          name: "[name].[ext]",
          outputPath: "img/"
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
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
        attrs: ["img:src", "link:href"]
      }
    })
  ]
};
