import Router from "koa-router";
import request from "request";
import { isVerifyRequired } from "../../utils/tools";

const router = new Router({
  prefix: "/api/v1/cors",
});

/**
 * 用作跨域接口转发
 * 接收参数url、以及请求的方法method以及携带的参数
 * 收到参数后进行数据请求，解决跨域问题，然后拿到数据后返回到前端
 */

router.post("/", async (ctx) => {
  const { url, method, data } = ctx.request.body;
  const { isValid, errors } = isVerifyRequired({ url });
  if (!isValid) {
    ctx.body = {
      code: -1,
      isSuccess: false,
      msg: errors,
    };
    return false;
    // Other Code
  }
});

export default router;
