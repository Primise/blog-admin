'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async searchAll(){
    const users = await this.app.mysql.select('');
    return {users};
  }
}