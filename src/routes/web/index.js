import Router from "koa-router";

const router = new Router({
  prefix: "/",
});

router.get("/", async (ctx) => {
  ctx.body = {
    msg: "欢迎～",
  };
});

export default router;
