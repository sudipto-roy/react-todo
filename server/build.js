const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './server/app.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname),
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            '@babel/react',
            '@babel/preset-stage-0',
            ['env', {
              target: {browsers: ['last 2 versions']}
            }]
          ]
        }
      }
    ]
  },
  externals: [webpackNodeExternals()]
};