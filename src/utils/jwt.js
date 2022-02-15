// jsonwebtoken的中间件
import koaJwt from "koa-jwt";
import keys from "../utils/keys";

const auth = koaJwt({
  secret: keys.secretOrKey,
});

/**
  router.get('/userinfo',auth(此处添加auth),async(ctx) => {
    ctx.status = 401
    ctx.body = {
      isSuccess:true,
    }
  })
*/

export default auth;
