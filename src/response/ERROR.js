export const ERROR_HANDLE = (ctx) => {
  // 服务端异常错误
  return (ctx.body = {
    status: 500,
    code: -3,
    isSuccess: false,
    msg: "服务端错误，请检查错误或联系管理员",
  });
};

export const ERROR_NOREG = (ctx) => {
  // 用户未注册调用内容 传入接口中的ctx
  return (ctx.body = {
    status: 404,
    code: -2,
    isSuccess: false,
    msg: "该账号暂未注册,请先注册",
  });
};
