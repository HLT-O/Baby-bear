const Router = require("koa-router");
const user = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../utils/db");

// 拿到前端post过来的数据
user.use(bodyparser());

// 获取应急联系人接口
user.get("/", async (ctx) => {
  let childPhone = ctx.query.childPhone;
  let identity = ctx.query.identity;
  console.log(childPhone, identity);
  let searchSql = `select * from users where child_phone = ${childPhone} and identity = ${identity};`;
  let myarr = await new Promise((resolve, reject) => {
    return db.query(searchSql, (err, data) => {
      if (err) {
        // console.log(err);
        throw err;
      }
      resolve(data); // 扔出去一个数组
    });
  });
  // console.log(myarr[0]);
  if (myarr.length > 0) {
    ctx.body = {
      code: 200,
      msg: "查找应急联系人成功",
      token: myarr[0].token,
      phone: myarr[0].phone,
      id: myarr[0].id,
      identity: myarr[0].identity,
      childPhone: myarr[0].child_phone,
    };
    console.log(myarr[0]);
    // } else {
    //   ctx.body = {
    //     code: 400,
    //     msg: "账号或密码错误",
    //   };
    // }
  }
  // ctx.body = "hello world";
});

module.exports = user;
