import Router from "koa-router";
import jwt from "jsonwebtoken";
import { createUser, finUserAlready } from "../../controllers/UserController";
import { ERROR_HANDLE, ERROR_NOREG } from "../../utils/common";
import keys from "../../utils/keys";
import bcrypt from "bcryptjs";
import auth from "../../utils/jwt";
import { prisma } from "@prisma/client";

const router = new Router({
  prefix: "/admin/v1/users",
});

router.get("/", async (ctx) => {
  ctx.body = {
    msg: "admin接口",
  };
});

/**
 * 后台管理系统
 * 接受的参数为userName 和password
 * 返回token
 */

router.post("/login", async (ctx) => {
  // 获取用户的
  const { userName, password } = ctx.request.body;
  if ((userName ?? "") == "" || (password ?? "") == "") {
    // 空值运算符，当userName为undefined和null的时候则会置为空 然后判断为空则进入此if条件判断中
    ctx.body = {
      msg: "error",
    };
    return false;
  }
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
    ERROR_NOREG(ctx);
  }
});

export default router;
