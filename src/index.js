import Koa from "koa";
import Router from "koa-router";
import consola from "consola";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import serve from "koa-static";
import json from 'koa-json'
import usersAPI from './routes/web/users'

const app = new Koa();
const router = new Router();

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
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(serve(__dirname + "/public/"));
app.use(
  cors({
    credentails: true,
    origin: (ctx) => {
      let origin = ctx.request.header.origin;
      return origin;
    },
  })
);

async function start() {
  const host = process.env.HOST || "127.0.0.1";
  const port = process.env.PORT || 3000;
  app.use(usersAPI.routes()).use(router.allowedMethods())
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
