import bcrypt from "bcryptjs";
import fs from "fs";
import CryptoJS from "crypto-js";
import { AES_SECRET } from "./keys";
/**
 * 密码加密
 * @params {*} pwd
 * @returns
 */
export const enbcrypt = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

/**
 * 密码对比
 * @params {}
 */
export const debcrypt = async (password, currentPassword) => {
  const verifyPassword = await bcrypt.compareSync(password, currentPassword);
  return verifyPassword;
};

/**
 * 隐私数据进行加密方法
 * 方法只能加密文本如果需要加密对象需要进行二次开发
 */
export const dataEncrypto = async (data) => {
  if ((data ?? "") == "") {
    return false;
  }
  const ciphertext = await CryptoJS.AES.encrypt(data, AES_SECRET).toString();
  return ciphertext;
};
/**
 * 隐私数据解密方法
 * 将密码转换为明文来进行展示
 * 方法只能对文本进行解密如果需要解密对象需要进行二次开发
 */
export const dataDecrypto = async (data) => {
  const bytes = await CryptoJS.AES.decrypt(data, AES_SECRET);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

/**
 * 判断不允许为空，如果为空则停止接口后续请求
 * 结合异常捕获 try catch进行使用
 */
export const isVerifyRequired = (rest) => {
  let isValid = false;
  let errorMsg = [];
  for (let item in rest) {
    if ((rest[item] ?? "") == "") {
      errorMsg.push(`${item}不能为空`);
    }
  }
  let msg = errorMsg.join(",");
  if (errorMsg.length == 0) {
    isValid = true;
  }
  return {
    isValid,
    errors: msg,
  };
};

/**
 * 图片上传到服务器后，将本地public文件进行删除处理，减少项目本地大小
 */

export const clearImageFile = (imagePath) => {
  fs.unlink(imagePath, ()=>{
    console.log('图片已传递至七牛云服务,本地删除完成')
  })
};


/**
 * 判断是否为手机号码
 */

export const isMobile = (phone) => {
  return /^1[3-9]\d{9}$/.test(phone)
}


