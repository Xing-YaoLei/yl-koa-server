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
  const method = ctx.method.toLowerCase();
  // 发送数据请求
  if (method === "get") {
    const params = ctx.query;
    const result = await request.get({
      uri: params.url,
      json: true,
    });
    ctx.body = successResponse(result);
  } else if (method === "post") {
    const data = ctx.request.body;
    const result = await request.post({
      uri: data.url,
      body: data,
      json: true,
    });
    ctx.body = successResponse(result);
  } else if (method === "put") {
    const params = ctx.query;
    const result = await request.put({
      uri: params.url,
      body: params,
      json: true,
    });
    ctx.body = successResponse(result);
  } else if (method == "delete") {
    const params = ctx.params;
    const result = await request.delete({
      uri: `${params.url}/${params.id}`,
      json: true,
    });
    ctx.body = successResponse(result);
  }
});

export default router;
