import Router from "koa-router";
import { createUser, findUsers } from "../../controllers/UserController";

const router = new Router({
  prefix: "/users",
});

router.get("/", async (ctx) => {
  ctx.body = {
    msg: "users",
  };
});

router.post("/register", async (ctx) => {
  const { userName, password, code } = ctx.request.body;
  // 判断是否有验证码，后期添加验证码程序并且校验验证码
  if (code) {
    // 在注册之前首先判断是否存在该用户名
    const isRegUser = await findUsers(userName)
    if(isRegUser){
      // 如果方法返回true 则进行
      await createUser({userName, password})
      ctx.body = {
        code:1,
        isSuccess: true,
        msg: '注册成功'
      }
    } else {
      // 如果存在则返回用户名已经存在的结果
      ctx.body = {
        code: -1,
        isSuccess: false,
        msg: '您的用户名已存在'
      }
    }
  } else {
    // 如果没有验证码，则返回需要填写验证码的提示信息
    ctx.status = 403;
    ctx.body = {
      code: -1,
      isSuccess: false,
      msg: "请填写验证码进行身份验证",
    };
    return false;
  }
});

export default router;
