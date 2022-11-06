import Router from "koa-router";
import { findPosts, addCategory } from "../../controllers/PostsController";
import { successResponse, errorResponse } from "../../utils/common";
import auth from "../../utils/jwt";
const router = new Router({
  prefix: "/api/v1/admin/posts",
});
/**
 * @desc 查询所有已发布的文章
 * @params skip、take 分页查询暂未完成 需要先完成新增功能后进行开发
 * 查询功能 无需登陆传递token 也可以使用
 */
router.get("/", auth, async (ctx) => {
  const findResult = await findPosts({});
  ctx.body = successResponse(findResult);
});

router.post("/addcategory", auth, async (ctx) => {
  const addCategoryResult = await addCategory(ctx.request.body);
  if (addCategoryResult) {
    ctx.body = successResponse(addCategoryResult);
  } else {
    ctx.body = errorResponse(`${ctx.request.body.name}文章类型已存在`);
  }
});

export default router;
