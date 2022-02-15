const bcrypt = require("bcryptjs");
/**
 * 密码加密
 * @param {*} pwd
 * @returns
 */
function enbcrypt(password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt);
}

export default enbcrypt;
