import prisma from "../utils/db";
async function createUser(userInfo) {
  // 创建用户
  try {
    const { userName, password, nickName } = userInfo;
    await prisma.user.create({
      data: {
        userName,
        password,
        nickName,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

/**
 * 判断用户是否存在
 * @param {*} userName 
 * @returns 
 */
// 查询用户名是否存在，可以判断该用户是否已经注册过账号
async function findUsers(userName) {
  const users = await prisma.user.findUnique({
    where: {
      userName,
    },
  });
  if (users) {
    return false;
  }
  return true
}

export { createUser, findUsers };
