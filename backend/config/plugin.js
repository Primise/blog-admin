'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  //引入egg-sequelize
  sequelize:{
    enable:true,
    package:'egg-sequelize'
  },
  //引入egg-cors
  cors:{
    enable:true,
    package:'egg-cors'
  }
  // mysql:{
  //   enable:true,
  //   package:'egg-mysql'
  // }
};
