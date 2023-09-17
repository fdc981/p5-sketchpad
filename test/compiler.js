import path from 'path';
import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.p5\.js$/,
          use: {
            loader: path.resolve(__dirname, '../p5-global-loader.js'),
            options,
          },
        },
      ],
    },
  });

  compiler.outputFileSystem = createFsFromVolume(new Volume());

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      resolve(stats);
    });
  });
};
