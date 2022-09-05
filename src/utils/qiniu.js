import qiniu from "qiniu";
import path from "path";
import { clearImageFile } from './tools'
const qiniuBaseUrl = "http://rhlbzg7qe.bkt.clouddn.com/";
const ak = "vbXqqxdLmaGwaTEx44zVA5xFtuZ0Y589a4VRLrRb";
// 七牛云的账号的AK
const sk = "DWMi4K9MkWMwnUF3SBvaVAoGeejist1aCY15vqGP";
// 七牛云的账号SK
const mac = new qiniu.auth.digest.Mac(ak, sk);
// 定义鉴权对象mac
const options = {
  scope: "personpage",
  // 对象存储的名字
  expires: 7200,
  // 过期时间
  returnBody:
    '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

export const uploadImageToQiniu = async (imagePath) => {
  return new Promise((resolve, reject) => {
    const config = new qiniu.conf.Config();
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();
    const key = path.parse(imagePath).base;
    const uploadItem = path.normalize(imagePath);
    formUploader.putFile(
      uploadToken,
      key,
      uploadItem,
      putExtra,
      (respErr, respBody) => {
        if (respErr) {
          reject(respErr);
        } else {
          const { key } = respBody;
          resolve(qiniuBaseUrl + "" + key);
          // 删除代码本地的图片文件
          setTimeout(() => {
            clearImageFile(imagePath)
          }, 0);
        }
      }
    );
  });
};
