const crypto = require("crypto");
const salt = "MistyRain";
/**
 * 密码加密
 * @param {*} pwd 
 * @returns 
 */
function encodePWD(pwd) {
  return crypto
    .createHash("md5")
    .update(pwd + salt)
    .digest("hex");
}

export default encodePWD