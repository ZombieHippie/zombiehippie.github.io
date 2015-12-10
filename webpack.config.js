var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './_src/webpack-entry.js',
  output: {
    filename: 'bundle-[id].js',
    path: __dirname + "\\assets\\webpack\\",
    publicPath: "/assets/webpack/"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "babel" },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("css-loader")
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("css-loader!stylus-loader")
      },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.jade$/, loader: "jade-loader" }
    ]
  },
  resolve: {
    extensions: ["", ".coffee", ".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css", { allChunks: true })
    // , new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     except: ['$', 'exports', 'require']
    //   }
    // })
  ]
};
