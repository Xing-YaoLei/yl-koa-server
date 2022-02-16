import consolaGlobalInstance from "consola";
import prisma from "../utils/db";
async function createUser(userInfo) {
  // 创建用户
  try {
    const { userName, password } = userInfo;
    await prisma.user.create({
      data: {
        userName,
        password,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

/**
 * 判断用户是否存在 如果存在则返回false
 * @returns
 */
async function finUserAlready(userName) {
  const users = await prisma.user.findUnique({
    where: {
      userName,
    }
  });
  if (users) {
    return users;
  }
  return false;
}

/**
 *
 */

export { createUser, finUserAlready };
