/* eslint valid-jsdoc: "off" */
const dotenv = require('dotenv');
dotenv.config();

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.keys = appInfo.name + '_1730252449463_3289';

  config.middleware = [];
  const userConfig = {
  };

  return {
    ...config,
    ...userConfig,
  };
};
