const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

let webpackConfig = {

  publicPath: '/',
  outputDir: 'dist',
  filenameHashing: true,

  configureWebpack: {
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
    plugins: [
      new FriendlyErrorsWebpackPlugin(),
      new CompressionPlugin()
    ],
    devServer: {
      disableHostCheck: true,
      hot: true,
      compress: false,
      port: 8081
    }
  }

}

module.exports = webpackConfig
