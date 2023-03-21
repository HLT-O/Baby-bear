// index.js
const Koa = require("koa");
const config = require("./config/default");
const router = require("./router");
const cors = require("koa2-cors");

const app = new Koa();

// use就是调用router中间件
// router.routes()的作用是启动路由
// router.allowMethods()的作用是 允许任何请求
app.use(cors()); //后端允许跨域访问
app.use(router.routes(), router.allowedMethods());

// app.use(async (ctx) => {
//   // await mysql.insert(addsql);
//   // await mysql.update(updatesql);
//   // await mysql.delete(deletesqcl);
//   let data = await mysql.query("SELECT * FROM users");
//   ctx.response.body = {
//     code: 1,
//     data: data,
//     mesg: "ok",
//   };
// });

app.listen(config.port);

console.log(`listening on port ${config.port}`);
