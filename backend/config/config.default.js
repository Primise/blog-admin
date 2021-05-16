/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621152809180_3028';

  // add your middleware config here
  config.middleware = [];


  config.cors = {
    credentials:true,
    origin:'*',
    allowMethods:'GET,POST,PUT,DELETE'
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize:{
      dialect:'mysql',
      host:'localhost',
      port: '3306',
      database: 'test',
      username: 'root',
      password: '123456', 
    }
   
  };

  return {
    ...config,
    ...userConfig,
  };
};
