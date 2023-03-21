// 这个文件专门用来存放关于心情标签的所有接口

const Router = require("koa-router");
const tag = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../utils/db");

tag.use(bodyparser());

// 获取当前用户的所有历史标签
tag.get("/getTag", async (ctx) => {
  let user_id = ctx.query.id;
  console.log(user_id);
  let searchSql = `select * from tag where user_id=${user_id}`;
  let myarr = await new Promise((resolve, reject) => {
    return db.query(searchSql, (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  });

  ctx.body = myarr;
});

tag.get("/getChildTag", async (ctx) => {
  let childPhone = ctx.query.childPhone;
  console.log(childPhone);
  let searchSql = `select * from tag where user_id=(select id from users where phone = ${childPhone})`;
  let myarr = await new Promise((resolve, reject) => {
    return db.query(searchSql, (err, data) => {
      if (err) {
        throw err;
      }
      resolve(data);
    });
  });

  ctx.body = myarr;
});

// 插入心情标签
tag.post("/insert", async (ctx) => {
  let user_id = ctx.request.body.id;
  let tag_id = ctx.request.body.tagData.alltag[0].id;
  let tag_input = ctx.request.body.input;
  let tag_info = ctx.request.body.tagData.alltag[0].des;
  let tag_time = ctx.request.body.time;
  let tag_type = ctx.request.body.tagData.alltag[0].type;
  console.log(user_id, tag_input, tag_info, tag_time);

  let insertSql = `insert into tag (user_id,tag_id,tag_info,tag_time,tag_input,tag_type) value (${user_id},'${tag_id}','${tag_info}','${tag_time}','${tag_input}','${tag_type}')`;

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
  // ctx.body = "测试";
  ctx.body = result;
});

module.exports = tag;
