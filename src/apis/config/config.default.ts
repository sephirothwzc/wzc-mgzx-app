/**
 * 数据库默认设置
 */
export const sequelize = {
  options: {
    port: 53306,
    host: 'rm-8vb5a7c204kxc3g93wo.mysql.zhangbei.rds.aliyuncs.com',
    database: 'member_dev',
    username: 'root_develop',
    password: 'eegDed-gbdacu3-ntuplw',
    encrypt: false,
    dialect: 'mysql',
    define: {
      timestamps: true,
      paranoid: true,
      charset: 'utf8',
      underscored: true,
    },
    timezone: '+08:00',
    logging: console.log,
  },
  sync: false, // 本地的时候，可以通过sync: true直接createTable
};
