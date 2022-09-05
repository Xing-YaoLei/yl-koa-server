import qiniu from "qiniu";

const ak = 'vbXqqxdLmaGwaTEx44zVA5xFtuZ0Y589a4VRLrRb';
// 七牛云的账号的AK
const sk = 'DWMi4K9MkWMwnUF3SBvaVAoGeejist1aCY15vqGP';
// 七牛云的账号SK
const mac = new qiniu.auth.digest.Mac(ak, sk);
// 定义鉴权对象mac
const options = {
  scope: "personpage",
  // 对象存储的名字
  expires: 7200,
  // 过期时间
  returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

export default uploadToken;
