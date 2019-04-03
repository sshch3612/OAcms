const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(less|css)$/, use: ["style-loader", {loader:"css-loader",options:{modules:true}}, "less-loader"] },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(png|gif)$/, loader: 'url-loader', options: { limit: 50000, name: 'images/[name]-[hash:8].[ext]' } },
      {test:/\.(jpg|png)$/,loader:'file-loader'},
      { test: /\.(mp3)$/, loader: 'url-loader', options: { limit: 0, name: 'audio/[name]-[hash:8].[ext]' } },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html',
      chunks: ['index'],
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      public: path.resolve(__dirname, 'src/public'),
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8001,
    proxy: {
      // '/api': {
      //   target: 'http://cs.xigemall.com',
      //   changeOrigin: true,
      // },
    },
  }
}