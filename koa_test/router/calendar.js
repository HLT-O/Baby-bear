//这个文件专门用来存放关于日历的所有接口

const Router = require("koa-router");
const calendar = new Router();
const db = require("../utils/db");

// 获取日历
calendar.get("/", async (ctx) => {
  let myData = await new Promise((resolve, reject) => {
    return db.query(`select * from calendar`, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
  ctx.body = myData;
});

module.exports = calendar;
