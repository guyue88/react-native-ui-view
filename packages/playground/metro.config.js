/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const exclusionList = require('metro-config/src/defaults/exclusionList');
const { getMetroTools, getMetroAndroidAssetsResolutionFix } = require('react-native-monorepo-tools');

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

const monorepoMetroTools = getMetroTools();

module.exports = {
  transformer: {
    publicPath: androidAssetsResolutionFix.publicPath,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },

  server: {
    enhanceMiddleware: middleware => {
      return androidAssetsResolutionFix.applyMiddleware(middleware);
    },
  },

  watchFolders: monorepoMetroTools.watchFolders,
  resolver: {
    blockList: exclusionList(monorepoMetroTools.blockList),
    extraNodeModules: monorepoMetroTools.extraNodeModules,
  },
};
