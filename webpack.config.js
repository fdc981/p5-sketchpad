const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    sketch: {
      import: './src/example-instance.p5.js',
      dependOn: 'p5',
    },
    p5: 'p5'
  },
  mode: "production",
  devServer: {
    static: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "p5 sketch"
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: false
  },
}
