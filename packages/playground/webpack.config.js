'use strict';

const path = require('path');
const fromRoot = _ => path.resolve(__dirname, _);

const { getWebpackTools } = require('react-native-monorepo-tools');
const monorepoWebpackTools = getWebpackTools();

const webpackConfig = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: fromRoot('index.js'),
  output: {
    path: fromRoot('public'),
    filename: 'bundle.web.js',
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    devMiddleware: { publicPath: '/' },
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { esModule: false },
          },
        ],
      },
      {
        // monorepoWepackTools有坑, 必须安排在第二个，且include为空数组
        test: /\.(jsx?|tsx?)$/,
        oneOf: [
          {
            loader: 'babel-loader',
            include: [],
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.web.ts', '.ts', '.web.tsx', '.tsx', '.web.js', '.js', '.web.jsx', '.jsx'],
  },
};

monorepoWebpackTools.addNohoistAliases(webpackConfig);
monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);

console.log('webpack config:', webpackConfig.module.rules[1].oneOf);

module.exports = webpackConfig;
