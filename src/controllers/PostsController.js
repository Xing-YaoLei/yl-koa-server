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

export const findPostsCategory = async () => {
  const result = await prisma.category.findMany();
  console.log(result);
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
  console.log(name);
  if (!findCategory) {
    const result = await prisma.category.create({
      data: {
        name,
      },
    });
    return result;
  }
  return false;
};

/**
 *
 * @param {ctx.request.body}
 * @returns 新增文章数据
 */
export const postsCreate = async (obj) => {
  const { title, desc, content, categoryId, id } = obj || {};
  const { isValid, errors } = isVerifyRequired({
    title,
    desc,
    content,
    categoryId,
  });
  if (!isValid) {
    return errorResponse(errors);
  }
  // 判断categoryId是否为数组
  try {
    // 查询数据库中所有的文章类型

    // 将获取的数据转为JSON对象
    let categoryIdList = JSON.parse(categoryId);
    // 如果为纯数字则将数组也放入数组中
    if (typeof categoryIdList === "number") {
      categoryIdList = [categoryIdList];
    }
    // 循环遍历
    const databaseCategory = await prisma.category.findMany({
      where: {
        id: {
          in:categoryIdList.map((item) => {
            return item;
          })
        }
      },
      select:{
        id:true
      }
    });
    const result = await prisma.post.create({
      data: {
        title,
        desc,
        content,
        category: {
          connect: databaseCategory,
        },
        author: {
          connect: {
            id,
          },
        },
      },
    });
    return result;
  } catch {
    return errorResponse({
      msg: "categoryId参数应该为纯数组或数组的形式",
    });
  }
};
