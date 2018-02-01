const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src',
  output: {
    library: 'the-tab-package-smart-home',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    filename: 'the-tab-package-smart-home.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /\/node_modules\//,
        loaders: ['babel-loader']
      },
      {
        test: /.less/,
        loaders: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          }
        }, 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less'],
  },
  plugins: [],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }));
  // config.output.libraryTarget = 'commonjs';
}

module.exports = config;
