const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log('this.app.mysql', this.app.mysql);
    const results = await this.app.mysql.select('users', {
      limit: 10, // 返回数据量
      offset: 0, // 数据偏移量
    });
    ctx.body = results;
  }
}

module.exports = HomeController;
