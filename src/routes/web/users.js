import Router from "koa-router";
import jwt from "jsonwebtoken";
import { createUser, finUserAlready } from "../../controllers/UserController";
import enbcrypt from "../../utils/tools";
import keys from "../../utils/keys";
import bcrypt from "bcryptjs";
import auth from "../../utils/jwt";

const router = new Router({
  prefix: "/users",
});

router.get("/", async (ctx) => {
  ctx.body = {
    msg: "users",
  };
});

/**
 * 用户注册功能
 * 需要提供用户名和密码以及 预留的code 可以是邮箱验证码 也可以是手机验证码，后续添加
 * 返回数据为注册成功  后续添加注册提供token可直接登录
 * 前端方面也可以直接调用login接口完成 注册即登录
 */
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

/**
 * 用户登录
 * 接受的参数为userName 和password
 * 返回token
 */

router.post("/login", async (ctx) => {
  // 获取用户的
  const { userName, password } = ctx.request.body;
  const findUser = await finUserAlready(userName);
  if (findUser) {
    // 使用bcrypt方法进行密码与数据库中加密的密码进行校验
    const isFindUser = await bcrypt.compareSync(password, findUser.password);
    if (isFindUser) {
      // 将用户的uuid放入token的hash中
      const payload = {
        id: findUser.id,
        userName: findUser.userName,
      };
      const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 });
      ctx.status = 200;
      // 并且返回200状态吗以及 成功请求的内容以及token数据
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
  } else {
    ctx.body = {
      status: 404,
      code: -2,
      isSuccess: false,
      msg: "请先注册",
    };
  }
});

/**
 * 获取用户信息
 * 无需参数
 * auth需要传递token
 * 从token中获取到当前用户的用户名等内容
 * 返回用户的各项用户信息
 */
router.get("/userInfo", auth, async (ctx) => {
  try {
    const { userName } = ctx.state.user;
    const findUser = await finUserAlready(userName);
    if (findUser) {
      ctx.body = {
        status: 200,
        code: 1,
        isSuccess: true,
        data: {
          ...findUser,
        },
      };
    } else {
      ctx.body = {
        status: 404,
        code: -1,
        isSuccess: false,
        msg: "您查找的信息不存在",
      };
    }
  } catch {
    ctx.body = {
      status: 500,
      code: -3,
      isSuccess: false,
      msg: "服务端错误，请检查错误或联系管理员",
    };
  }
});

export default router;
