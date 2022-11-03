import Koa from "koa";
import path from "path";
import Router from "koa-router";
import consola from "consola";
import koaBody from "koa-body";
// 可以替换bodyParser可以得到post请求以及支持文件上传
import cors from "koa2-cors";
import serve from "koa-static";
import json from "koa-json";
import indexAPI from "./routes/web/index";
// 用户接口
import usersAPI from "./routes/web/users";
import postsAPI from "./routes/web/posts";
// 后台管理接口
import adminUsersAPI from "./routes/admin/users";
import adminPostsAPI from "./routes/admin/posts";

const app = new Koa();
const router = new Router();

app.use(
  koaBody({
    multipart: true,
    // encoding:'gzip',
    formidable: {
      uploadDir: path.join(__dirname, "public/upload"),
      keepExtensions: true,
      maxFieldsSize: 2 * 1024 * 1024,
      onFileBegin: (name, file) => {
        // console.log(name,file)
      },
    },
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
// app.use(async (ctx, next) => {
//   ctx.set("Access-Control-Allow-Origin", ctx.headers.origin); // 如果后续需要携带cookie此处使用*会出现问题
//   ctx.set("Access-Control-Allow-Headers", "content-type");
//   ctx.set(
//     "Access-Control-Allow-Methods",
//     "OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH"
//   );
//   ctx.set("Access-Control-Allow-Credentials", true);
//   await next();
// });

async function start() {
  const host = process.env.HOST || "127.0.0.1";
  const port = process.env.PORT || 3000;
  app.use(usersAPI.routes()).use(router.allowedMethods());
  app.use(indexAPI.routes()).use(router.allowedMethods());
  app.use(postsAPI.routes()).use(router.allowedMethods());
  // 后台管理系统
  app.use(adminUsersAPI.routes()).use(router.allowedMethods());
  app.use(adminPostsAPI.routes()).use(router.allowedMethods());
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
