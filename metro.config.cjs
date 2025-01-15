// metro.config.js
const { getDefaultConfig } = require('metro-config');
const { withNativeWind } = require('nativewind');

module.exports = withNativeWind(getDefaultConfig());
