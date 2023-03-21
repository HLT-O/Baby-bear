// 这个文件专门用来存放关于登录和注册的所有接口

const Router = require("koa-router");
const login = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../utils/db");
const jwt = require("jsonwebtoken");

// 拿到前端post过来的数据
login.use(bodyparser());

// 登录接口
login.post("/", async (ctx) => {
  let myphone = ctx.request.body.phone;
  let mypwd = ctx.request.body.password;
  let myidentity = ctx.request.body.myidentity;
  console.log(myphone, mypwd);
  let searchSql = "select * from users where phone=" + myphone;
  let myarr = await new Promise((resolve, reject) => {
    return db.query(searchSql, (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data); // 扔出去一个数组
    });
  });

  if (myarr.length > 0) {
    if (myarr[0].password == mypwd) {
      ctx.body = {
        code: 200,
        msg: "登录成功",
        token: myarr[0].token,
        phone: myarr[0].phone,
        id: myarr[0].id,
        identity: myarr[0].identity,
        childPhone: myarr[0].child_phone,
      };
      console.log(myarr[0]);
    } else {
      ctx.body = {
        code: 400,
        msg: "账号或密码错误",
      };
    }
  }
});

// 注册接口
login.post("/register", async (ctx) => {
  let myphone = ctx.request.body.phone;
  let mypwd = ctx.request.body.password;
  let myidentity = ctx.request.body.identity;
  let childPhone = ctx.request.body.childPhone;
  console.log(mypwd);
  // 创建一个token
  let mytoken = jwt.sign(
    {
      myphone: myphone,
      mypwd: mypwd,
      myidentity: myidentity,
    },
    "secret",
    { expiresIn: 3600 }
  );
  let insertSql;
  if (myidentity == 3) {
    insertSql = `insert into users (phone,password,identity,token,child_Phone) values (${myphone},'${mypwd}','${myidentity}','${mytoken}',${childPhone})`;
  } else {
    insertSql = `insert into users (phone,password,identity,token) values (${myphone},'${mypwd}','${myidentity}','${mytoken}')`;
  }

  let result = new Promise((resolve, reject) => {
    return db.query(insertSql, (err, data) => {
      if (err) throw err;
      console.log(data);
      let obj = {
        msg: "注册成功",
        token: mytoken,
        phone: myphone,
      };
      resolve(obj);
    });
  });
  ctx.body = result;
});

module.exports = login;
