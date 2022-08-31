// jsonwebtoken的中间件
import koaJwt from "koa-jwt";
import keys from "../utils/keys";

const auth = koaJwt({
  secret: keys.secretOrKey,
});

/**
 * 简单测试案例
  router.get('/userinfo',auth(此处添加auth),async(ctx) => {
    ctx.status = 401
    ctx.body = {
      isSuccess:true,
    }
  })
*/

export default auth;
