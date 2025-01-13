const path = require('path');
const { getDefaultConfig } = require('metro-config');

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-css-transformer'),
  },
  resolver: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'css'], // Add css if needed
  },
};
