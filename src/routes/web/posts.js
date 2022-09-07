import Router from "koa-router";
import { findPosts, postsCreate,findPostsCategory } from "../../controllers/PostsController";
import { isVerifyRequired } from "../../utils/tools";
import { ERROR_HANDLE, successResponse } from "../../utils/common";
import auth from "../../utils/jwt";
const router = new Router({
  prefix: "/posts",
});
/**
 * @desc 查询所有已发布的文章
 * @params skip、take 分页查询暂未完成 需要先完成新增功能后进行开发
 * 查询功能 无需登陆传递token 也可以使用
 */
router.get("/", async (ctx) => {
  const findResult = await findPosts({});
  ctx.body = successResponse(findResult);
});

router.get('/getcategory',async(ctx) => {
  const findResult = await findPostsCategory({})
  ctx.body = successResponse(findResult);
})

/**
 * @desc 新增文章内容
 * @param { category, title, desc, content }
 * @tip category需要通过getCategory接口获取具体的category类型才可以
 */
router.post("/add", auth, async (ctx) => {
  const { id } = ctx.state.user
  const result = await postsCreate({...ctx.request.body,id});
  ctx.body = result;
});

export default router;
