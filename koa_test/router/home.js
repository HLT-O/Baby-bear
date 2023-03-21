// 这个文件专门用来存放关于首页的所有接口

const Router = require("koa-router");
const home = new Router();
const db = require("../utils/db");

// 写对应的接口
home.get("/", async (ctx) => {
  ctx.body = "首页";
});

// 获取儿童文章
home.get("/child/article", async (ctx) => {
  let myData = await new Promise((resolve, reject) => {
    return db.query(`select * from child_articles`, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
  ctx.body = myData;
});

// 获取儿童视频
home.get("/child/video", async (ctx) => {
  let myData = await new Promise((resolve, reject) => {
    return db.query(`select * from child_videos`, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
  ctx.body = myData;
});

// 获取家长文章
home.get("/adult/article", async (ctx) => {
  let myData = await new Promise((resolve, reject) => {
    return db.query(`select * from adult_article`, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
  ctx.body = myData;
});

// 具体家长文章接口
home.get("/adult/article_info", async (ctx) => {
  let id = ctx.query.id;
  let myData = await new Promise((resolve, reject) => {
    return db.query(
      `select * from adult_article where id=${id}`,
      (err, data) => {
        if (err) throw err;
        resolve(data);
      }
    );
  });
  ctx.body = myData;
});

// 获取家长视频
home.get("/adult/video", async (ctx) => {
  let myData = await new Promise((resolve, reject) => {
    return db.query(`select * from adult_video`, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
  ctx.body = myData;
});

// 获取轮播图
home.get("/banner", async (ctx) => {
  let myData = await new Promise((resolve, reject) => {
    return db.query(`select * from banners`, (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });
  ctx.body = myData;
});

module.exports = home;
