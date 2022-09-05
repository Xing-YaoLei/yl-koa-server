import Router from "koa-router";
import qiniuConfigToken from '../../utils/qiniu'


const router = new Router({
  prefix: "/upload",
});

router.get("/", async (ctx) => {
  console.log(qiniuConfigToken)
  ctx.body = {
    msg: "欢迎～",
  };
});

export default router;
