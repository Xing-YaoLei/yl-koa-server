import Router from "koa-router";
import jwt from "jsonwebtoken";
import { createUser, finUserAlready } from "../../controllers/UserController";
import enbcrypt from "../../utils/tools";
import keys from "../../utils/keys";
import bcrypt from "bcryptjs";
import auth from '../../utils/jwt'

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
    const isRegUser = await finUserAlready(userName);
    if (!isRegUser) {
      // 如果方法返回true 则进行
      await createUser({
        userName,
        password: enbcrypt(password),
      });
      ctx.body = {
        code: 1,
        isSuccess: true,
        msg: "注册成功",
      };
    } else {
      // 如果存在则返回用户名已经存在的结果
      ctx.body = {
        code: -1,
        isSuccess: false,
        msg: "您的用户名已存在",
      };
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

router.post("/login", async (ctx) => {
  // 获取用户的
  const { userName, password } = ctx.request.body;
  const findUser = await finUserAlready(userName);
  if (findUser) {
    const isFindUser = await bcrypt.compareSync(password, findUser.password);
    if (isFindUser) {
      const payload = {
        id: findUser.id,
      };
      const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
      ctx.status = 200;
      ctx.body = {
        msg: "登录成功",
        isSuccess: true,
        code: 1,
        token,
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 404,
        code: -1,
        isSuccess: false,
        msg: "密码错误,请尝试重新登陆",
      };
    }
  }
});

export default router;
