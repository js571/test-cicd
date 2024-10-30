/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = () => {
  const config = {};
  config.redis = {
    client: {
      port: process.env.REDIS_TEST_PORT,
      host: '127.0.0.1',
      db: 1,
      password: '',
    },
  };
  config.mysql = {
    client: {
      port: '23306',
      host: 'localhost',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // console.log(config.mysql);
  return {
    ...config,
  };
};
