import Router from "koa-router";
import path from "path";
import { isVerifyRequired, enbcrypt, debcrypt } from "../../utils/tools";
import { uploadImageToQiniu } from "../../utils/qiniu";
import { ERROR_HANDLE } from "../../utils/common";
import auth from "../../utils/jwt";
import { uploadSuccess } from "../../utils/common";
const router = new Router({
  prefix: "/",
});

router.get("/", async (ctx) => {
  ctx.body = {
    msg: "欢迎～",
  };
});

// 因为默认的prefix是/所以在这个位置则不需要输入/upload这样
router.post("upload", auth, async (ctx) => {
  const { filepath } = ctx.request.files.file || {};
  // 判断是否有验证码，后期添加验证码程序并且校验验证码
  const { isValid, errors } = isVerifyRequired({ filepath });
  if (!isValid) {
    ctx.body = {
      code: -1,
      isSuccess: false,
      msg: errors,
    };
    return false;
  }
  const url = await uploadImageToQiniu(filepath);
  if (url) {
    ctx.body = uploadSuccess(url);
  } else {
    ERROR_HANDLE(ctx);
  }
});

export default router;
