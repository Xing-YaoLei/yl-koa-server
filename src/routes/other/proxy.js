import Router from "koa-router";
import request from "request-promise-native";
import { successResponse, errorResponse } from "../../utils/common";

const router = new Router({
  prefix: "/api/v1/proxy",
});

/**
 * 用作跨域接口转发
 * 接收参数url、以及请求的方法method以及携带的参数
 * 收到参数后进行数据请求，解决跨域问题，然后拿到数据后返回到前端
 */

router.all("/", async (ctx) => {
  // 获取请求的地址以及请求方法
  const url = ctx.query.url;
  const method = ctx.method.toLowerCase();
  // 发送数据请求
  const response = await request({
    method,
    uri: url,
    headers: ctx.headers,
    body: ctx.request.body,
  });
  if (response) {
    ctx.body = successResponse(response);
  } else {
    ctx.body = errorResponse("请求错误");
  }
});

export default router;
