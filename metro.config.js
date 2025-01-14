<<<<<<< HEAD
/* eslint-disable quotes */
const { getDefaultConfig } = require("expo/metro-config");
=======
const { getDefaultConfig } = require("metro-config");
>>>>>>> d44f4869841627e1c3254b3785d7d916b20575a1
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

<<<<<<< HEAD
module.exports = withNativeWind(config, { input: './global.css' })
/* eslint-enable quotes */;
=======
module.exports = withNativeWind(config, { input: './global.css' })
>>>>>>> d44f4869841627e1c3254b3785d7d916b20575a1
