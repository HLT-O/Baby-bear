// index.js
const Koa = require("koa");
const config = require("./config/default.js");
const mysql = require("./mysql/index");

const app = new Koa();
// 查询语句
let sql = "SELECT * FROM users";
// 增加语句
// let addsql = "insert into tb_ceshi values(5,'kobe')";
// 修改语句
// let updatesql = "update tb_ceshi set name='stephen' where id=1";
// 删除语句
// let deletesql = "delete from tb_ceshi where id=2";

app.use(async (ctx) => {
  // await mysql.insert(addsql);
  // await mysql.update(updatesql);
  // await mysql.delete(deletesql);
  let data = await mysql.query(sql);
  ctx.body = {
    code: 200,
    data: data,
    mesg: "ok",
  };
});

app.listen(config.port);

console.log(`listening on port ${config.port}`);
module.exports = app;
