const bcrypt = require("bcryptjs");
/**
 * 密码加密
 * @param {*} pwd
 * @returns
 */
export const enbcrypt = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

/**
 * 判断不允许为空，如果为空则停止接口后续请求
 * 结合异常捕获 try catch进行使用
 */
export const isVerifyRequired = (rest) => {
    let isValid = false;
    let errorMsg = []
    for (let item in rest) {
      if ((rest[item] ?? "") == "") {
        errorMsg.push(`${item}不能为空`)
      }
    }
    let msg = errorMsg.join(',')
    if(errorMsg.length == 0){
      isValid = true
    }
    return {
      isValid,
      errors: msg,
    }
};
