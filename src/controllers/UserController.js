import consolaGlobalInstance from "consola";
import prisma from "../utils/db";
import { enbcrypt } from "../utils/tools";
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
    },
  });
  if (users) {
    return users;
  }
  return false;
}

/**
 *
 */

async function editUserInfo(id, userInfo) {
  const { phone, nickName, address, gender, autograph } = userInfo;
  console.log(id, userInfo);
  const currentUserInfo = await prisma.user.findUnique({
    where:{
      id
    }
  })
  const editResult = await prisma.user.update({
    where:{
      id
    },
    data:{
      phone: phone || currentUserInfo.phone,
      nickName: nickName || currentUserInfo.nickName,
      address: address || currentUserInfo.address,
      gender: gender || currentUserInfo.gender,
      autograph: autograph || currentUserInfo.autograph
    }
  })
  return editResult
}
export { createUser, finUserAlready, editUserInfo };
