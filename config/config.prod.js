/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = () => {
  const config = {};
  config.redis = {
    client: {
      port: 6379,
      host: 'cicd-redis',
      password: process.env.REDIS_PASSWORD,
      db: 1,
    },
  };
  config.mysql = {
    client: {
      host: 'cicd-mysql',
      port: 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  return {
    ...config,
  };
};
