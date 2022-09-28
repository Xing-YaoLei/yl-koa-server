import Router from "koa-router";
import jwt from "jsonwebtoken";
import {
  createUser,
  finUserAlready,
  editUserInfo,
  rePasswordController,
} from "../../controllers/UserController";
import { isVerifyRequired, enbcrypt, debcrypt } from "../../utils/tools";
import { ERROR_HANDLE, ERROR_NOREG } from "../../utils/common";
import keys from "../../utils/keys";
import auth from "../../utils/jwt";

const router = new Router({
  prefix: "/users",
});

router.get("/", async (ctx) => {
  ctx.body = {
    msg: "user部分的接口",
  };
});

/**
 * @desc 用户注册功能
 * @params code userName password
 * 需要提供用户名和密码以及 预留的code 可以是邮箱验证码 也可以是手机验证码，后续添加
 * 前端方面也可以直接调用login接口完成 注册即登录
 */
router.post("/register", async (ctx) => {
  const { userName, password, code } = ctx.request.body;
  // 判断是否有验证码，后期添加验证码程序并且校验验证码
  const { isValid, errors } = isVerifyRequired({ userName, password, code });
  if (!isValid) {
    ctx.body = {
      code: -1,
      isSuccess: false,
      msg: errors,
    };
    return false;
  }
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
      userName,
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
});

/**
 * 用户登录
 * 接受的参数为userName 和password
 * 返回token
 */

router.post("/login", async (ctx) => {
  // 获取用户的
  const { userName, password } = ctx.request.body;
  const { isValid, errors } = isVerifyRequired({ userName, password });
  if (!isValid) {
    ctx.body = {
      code: -1,
      isSuccess: false,
      msg: errors,
    };
    return false;
  }
  const findUser = await finUserAlready(userName);
  if (findUser) {
    // 使用bcrypt方法进行密码与数据库中加密的密码进行校验
    const isFindUser = await debcrypt(password, findUser.password);
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
    ERROR_NOREG(ctx);
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
          ...findUser
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
    ERROR_HANDLE(ctx);
  }
});

/**
 * 修改用户信息
 * auth需要传递token
 * 从token中获取到当前用户的用户名等内容
 * 返回用户的各项用户信息
 *
 */
router.post("/edit", auth, async (ctx) => {
  const { id } = ctx.state.user;
  try {
    const result = await editUserInfo(id, ctx.request.body);
    if (result) {
      ctx.body = {
        status: 200,
        code: 1,
        isSuccess: true,
        data: {
          ...result,
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
    ERROR_HANDLE(ctx);
  }
});

/**
 * 修改密码
 * auth
 * 密码修改需要手机号码的验证短信才允许 不需要输入旧密码
 */
router.post("/repassword", auth, async (ctx) => {
  const { id } = ctx.state.user;
  const { code, newPassword } = ctx.request.body;
  const { isValid, errors } = isVerifyRequired({ code, newPassword });
  if (!isValid) {
    ctx.body = {
      code: -1,
      isSuccess: false,
      msg: errors,
    };
    return false;
  }
  // 前方需要添加一个额外的逻辑 需要通过验证短信验证码才允许进行密码的重置
  const result = await rePasswordController(id, newPassword);
  if (result) {
    ctx.body = {
      status: 200,
      code: 1,
      isSuccess: true,
      data: {
        msg: "密码修改成功",
      },
    };
    return false;
  }
  ERROR_HANDLE(ctx);
});

export default router;
