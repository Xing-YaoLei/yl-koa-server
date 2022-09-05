import Koa from "koa";
import Router from "koa-router";
import consola from "consola";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import serve from "koa-static";
import json from "koa-json";
import indexAPI from './routes/web/index'
// 用户接口
import usersAPI from "./routes/web/users";
// 后台管理接口
import adminUsersAPI from "./routes/admin/users";
// 上传接口
import uploadAPI from './routes/web/upload'

const app = new Koa();
const router = new Router();
// 接受数据请求
app.use(
  bodyParser({
    extendTypes: ["json", "form", "text"],
  })
);
// 返回数据格式转换
app.use(json());
// 定义静态资源目录
app.use(serve(__dirname + "/public/"));
// 跨域解决
app.use(
  cors({
    credentails: true,
    origin: (ctx) => {
      let origin = ctx.request.header.origin;
      return origin;
    },
  })
);
// 解决跨域问题
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", ctx.headers.origin); //此处使用*会出现问题
  ctx.set("Access-Control-Allow-Headers", "content-type");
  ctx.set(
    "Access-Control-Allow-Methods",
    "OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH"
  );
  ctx.set("Access-Control-Allow-Credentials", true);
  await next();
});

async function start() {
  const host = process.env.HOST || "127.0.0.1";
  const port = process.env.PORT || 3000;
  app.use(usersAPI.routes()).use(router.allowedMethods());
  app.use(indexAPI.routes()).use(router.allowedMethods());

  // 后台管理系统
  app.use(adminUsersAPI.routes()).use(router.allowedMethods());
  // 上传文件接口
  app.use(uploadAPI.routes()).use(router.allowedMethods());
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
