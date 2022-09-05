# 接口文档

## 用户接口：/users

- 用户注册：/users/register
  - method:post


| 参数     | 介绍                                                    | 是否必填 | 格式   |
| -------- | ------------------------------------------------------- | -------- | ------ |
| code     | 接口验证码，后期通过获取验证码接口得到                  | 是       | String |
| userName | 账号,后续可以修改昵称但是不允许修改userName需要提醒用户 | 是       | String |
| password | 密码                                                    | 是       | String |

数据返回：

```json
{
    "code": 1,
    "isSuccess": true,
    "msg": "注册成功"
}
```

- 用户登陆：/users/login
  - method:post


| 参数     | 介绍         | 是否必填 | 格式   |
| -------- | ------------ | -------- | ------ |
| userName | 注册的用户名 | 是       | String |
| password | 注册的密码   | 是       | String |

数据返回：

```JSON
{
    "msg": "登录成功",
    "isSuccess": true,
    "code": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwNWU2YjllLTE1NTMtNGQxNi04MWNlLWZiODNmNDJhMTRjZiIsInVzZXJOYW1lIjoiMTIzIiwiaWF0IjoxNjYxOTM3NTUyLCJleHAiOjE2NjE5NDExNTJ9.Y9Ly-tKvgl2iZ0XnBzwVUwUYm_UTeSyy0AwlcN3ufCY"
}
```

- 获取用户信息：/users/userinfo
  - Method:get


| 参数  | 介绍                | 是否必填 | 格式         |
| ----- | ------------------- | -------- | ------------ |
| token | 在请求头处添加token | 是       | Bearer token |

```
示例：
Bearer （Bearer与token中有一个空格  token是由登陆的时候随着登陆信息返回的）eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwNWU2YjllLTE1NTMtNGQxNi04MWNlLWZiODNmNDJhMTRjZiIsInVzZXJOYW1lIjoiMTIzIiwiaWF0IjoxNjYxOTM3Nzg0LCJleHAiOjE2NjE5NDEzODR9.zZCJrRz-CoXMOcJ1Otz6I99frGNGoqriukgv1refwFQ
```

数据返回：

```json
{
    "status": 200,
    "code": 1,
    "isSuccess": true,
    "data": {
        "id": "f05e6b9e-1553-4d16-81ce-fb83f42a14cf",
        "userName": "123",
        "password": "$2a$10$haY5V592h3PCkjABzZ7OaOGKU7Jm/IT4SMTKWz6EG1dHeh9OO8l/a",
        "phone": null,
        "nickName": "一个不愿意透漏姓名的大佬",
        "address": "",
        "gender": "",
        "createAt": "2022-08-31T09:10:07.340Z",
        "updateAt": "2022-08-31T09:10:07.340Z",
        "autograph": ""
    }
}
```

- 修改用户信息：/users/edit
  - method:post

| 参数      | 介绍     | 是否必填 | 格式   |
| --------- | -------- | -------- | ------ |
| phone     | 手机号   | 否       | String |
| nickName  | 昵称     | 否       | String |
| address   | 地址     | 否       | String |
| gender    | 性别     | 否       | String |
| autograph | 个性签名 | 否       | String |

数据返回：

```json
{
    "status": 200,
    "code": 1,
    "isSuccess": true,
    "data": {
        "id": "018379d0-43ce-4862-9c1e-043a634416e6",
        "userName": "123456",
        "password": "$2a$10$ET4kMB.a7iV625jZ5I60u.KiCkHfQDSnSydb/ocAj87.oHnSY2CKC",
        "phone": "18312345667",
        "nickName": "一个不愿意透漏姓名的大佬",
        "address": "河南省郑州市",
        "gender": "",
        "createAt": "2022-09-02T04:16:25.290Z",
        "updateAt": "2022-09-02T07:10:07.779Z",
        "autograph": "",
        "identity": 0
    }
}
```

