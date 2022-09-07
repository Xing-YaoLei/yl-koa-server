import prisma from "../utils/db";
import { isVerifyRequired } from "../utils/tools";
import { errorResponse } from "../utils/common";

/**
 *
 * @param {skip,take}
 * @returns 查询所有已经发布的文章的数据
 */
export const findPosts = async ({ skip, take }) => {
  const result = await prisma.post.findMany({
    where: {
      published: true,
    },
    skip: Number(skip) || undefined,
    take: Number(take) || 10,
  });
  return result;
};
/**
 *
 * @param {*} obj
 * @returns 返回是否新增成功
 */
export const addCategory = async (obj) => {
  const { name } = obj || {};
  const { isValid, errors } = isVerifyRequired({
    name,
  });
  if (!isValid) {
    return errorResponse(errors);
  }
  const findCategory = await prisma.category.findUnique({
    where: {
      name,
    },
  });
  console.log(name)
  if (!findCategory) {
    const result = await prisma.category.create({
      data: {
        name,
      },
    });
    return result;
  }
  return false
};

/**
 *
 * @param {ctx.request.body}
 * @returns 新增文章数据
 */
export const postsCreate = async (obj) => {
  const { title, desc, content, category } = obj;
  const { isValid, errors } = isVerifyRequired({
    title,
    desc,
    content,
    category,
  });
  if (!isValid) {
    return errorResponse(errors);
  }
  const result = await prisma.post.create({
    data: {
      title,
      desc,
      content,
      category,
    },
  });
  return result
};
