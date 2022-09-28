import consolaGlobalInstance from "consola";
import prisma from "../utils/db";
import { dataEncrypto, dataDecrypto, enbcrypt,isMobile } from "../utils/tools";

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
 * 接受的参数为手机号或者注册时候的用户名
 * @returns
 */
async function finUserAlready(userName) {
  // 这个地方可能是手机号也可能是用户名，提供一个方法判断是否为手机号码
  if(isMobile(userName)){
    const users = await prisma.user.findUnique({
      where: {
        phone: userName,
      },
    });
    if (users) {
      return users;
    }
    return false;
  }
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
 * 修改个人信息
 */

async function editUserInfo(id, userInfo) {
  const { phone, nickName, address, gender, autograph } = userInfo;
  const currentUserInfo = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  const editResult = await prisma.user.update({
    where: {
      id,
    },
    data: {
      phone: phone || currentUserInfo.phone,
      nickName: nickName || currentUserInfo.nickName,
      address: address || currentUserInfo.address,
      gender: gender || currentUserInfo.gender,
      autograph: autograph || currentUserInfo.autograph,
    },
  });
  return editResult;
}

// 修改用户密码，接受的参数为id和用户新的密码
const rePasswordController = async (id, newPassword) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: {
      password: enbcrypt(newPassword),
    },
  });
  return result;
};
export { createUser, finUserAlready, editUserInfo, rePasswordController };
