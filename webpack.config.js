const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const sketchName = env.sketch === undefined ? "sketch" : env.sketch;

  return {
    entry: {
      sketch: {
        import: `./src/${sketchName}.p5.js`,
      },
    },
    performance: {
      hints: false
    },
    mode: "production",
    devServer: {
      static: './dist',
      hot: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: "p5 sketch"
      })
    ],
    module: {
      rules: [
        {
          test: /\.p5\.js$/,
          use: [
            {
              loader: path.resolve('p5-global-loader.js')
            }
          ]
        },
      ],
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    optimization: {
      runtimeChunk: 'single',
      minimize: false,
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  }
}
