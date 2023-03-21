// router的入口文件
// 引入路由
const Router = require("koa-router");
const router = new Router();
const list = require("./list");
const home = require("./home");
const login = require("./login");
const tag = require("./tag");
const log = require("./log");
const user = require("./user");

// router.get("/list",np async (ctx) => {
//   ctx.response.body = "列表页";
// });

router.use("/list", list.routes(), list.allowedMethods());
router.use("/home", home.routes(), home.allowedMethods());
router.use("/login", login.routes(), login.allowedMethods());
router.use("/tag", tag.routes(), tag.allowedMethods());
router.use("/log", log.routes(), log.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());

/**
 * 如果前端还是访问了http://localhost:3000/，
 * 后端依然给它重定向到/home下的某个路由
 */
router.redirect("/", "/home");

// 导出router给app.js使用
module.exports = router;
