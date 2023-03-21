// 这个文件专门用来存放关于日志的所有接口

const Router = require("koa-router");
const log = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../utils/db");

log.use(bodyparser());

//获取当前用户的所有日志
log.get("/getLog", async (ctx) => {
  let user_id = ctx.query.id;
  let searchSql = `select * from log where user_id=${user_id}`;
  let myData = await new Promise((resolve, reject) => {
    return db.query(searchSql, (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  });
  ctx.body = myData;
});

// 新增日志
log.post("/insertLog", async (ctx) => {
  let user_id = ctx.request.body.id;
  let log_title = ctx.request.body.logTitle;
  let log_content = ctx.request.body.logContent;
  let log_time = ctx.request.body.logTime;
  console.log(log_title);

  let insertSql = `insert into log(user_id,log_title,log_content,log_time) value(${user_id},'${log_title}','${log_content}','${log_time}')`;
  let result = new Promise((resolve, reject) => {
    return db.query(insertSql, (err, data) => {
      if (err) throw err;
      console.log(data);
      let obj = {
        msg: "插入成功",
      };
      resolve(obj);
    });
  });
  ctx.body = result;
});

// 进入具体日志
log.get("/logInfo", async (ctx) => {
  let log_id = ctx.query.log_id;
  console.log(log_id);
  let searchSql = `select * from log where log_id=${log_id}`;
  let myarr = await new Promise((resolve, reject) => {
    return db.query(searchSql, (err, data) => {
      if (err) {
        // throw err;
      }
      resolve(data);
    });
  });
  ctx.body = myarr;
});

module.exports = log;
