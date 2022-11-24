import{a8 as e,_ as a,r as t,l as s,a as r,e as o,o as l,f as n,x as i,h as d,w as c,j as u,a5 as p,a6 as m,B as g,t as f,J as h,K as x,E as b}from"./index.729f6c65.js";import{s as v}from"./sendSms.c8e3bb12.js";import{c as w,i as y}from"./FormValidation.dcbc89b2.js";const _=e=>(h("data-v-fae20e1e"),e=e(),x(),e),V={class:"registerPage"},C=_((()=>i("div",{class:"registerPageLeft"},null,-1))),z={class:"registerPageRight"},R={class:"register-card"},j=_((()=>i("div",{class:"title"},"欢迎使用RayAuto",-1))),k=_((()=>i("div",{class:"secondTitle"},"出行行业MaaS服务专家",-1))),E={class:"content"},D={class:"otherHandle"},I=a({__name:"index",setup(a){const h=t({text:"获取验证码",disabled:!1,countDownNumber:60,timer:null}),x=s(),_=t({}),I=r(),P=t({account:!1,code:!1}),B=()=>{const a=Object.values(P).includes(!1);if(a)return!1;var t;(t=_,e({url:"/account/register",method:"post",data:t||{}})).then((e=>{1==(null==e?void 0:e.rspCode)&&(b({message:"注册成功,三秒后自动跳转至登录界面",type:"success"}),setTimeout((()=>{x.push({name:"login"})}),3e3))}))},F=()=>{if(!P.account)return!1;P.code=!0,v({account:_.account}).then((e=>{1==e.rspCode&&(b({message:"短信验证码发送成功",type:"success"}),h.disabled=!0,h.timer&&clearInterval(h.timer),h.timer=setInterval((()=>{const e=h.countDownNumber--;h.text=`${e}秒`,e<=0&&(clearInterval(h.timer),h.countDownNumber=60,h.text="重新获取",h.disabled=!1)}),1e3))}))},N=t({account:[{validator:(a,t,s)=>{if(!t)return s(new Error("用户名不能为空"));y.test(t)?(r=_,e({url:"/account/checkExists",method:"get",params:r})).then((e=>{if(1==e.rspCode)return P.account=!0,s();0==e.rspCode&&(P.account=!1,s(new Error("您的账号已存在，即将跳转到登录页面")),setTimeout((()=>{x.push({name:"login"})}),2e3))})):s(new Error("请规范输入您的账号"));var r},trigger:"change"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"},{min:6,max:6,message:"验证码长度为6位"}],password:[{validator:w,trigger:"change"}]});return(e,a)=>{const t=o("el-input"),s=o("el-form-item"),r=o("el-button"),x=o("router-link"),b=o("el-form");return l(),n("div",V,[C,i("div",z,[i("div",R,[j,k,i("div",E,[d(b,{"label-position":"top",model:_,class:"regFormRef content",rules:N,ref_key:"regFormRef",ref:I},{default:c((()=>[d(s,{size:"large",label:"账号",prop:"account"},{default:c((()=>[d(t,{"input-style":"font-size:22px","prefix-icon":u(p),modelValue:_.account,"onUpdate:modelValue":a[0]||(a[0]=e=>_.account=e),placeholder:"请输入账号"},null,8,["prefix-icon","modelValue"])])),_:1}),d(s,{size:"large",label:"密码",prop:"password"},{default:c((()=>[d(t,{"input-style":"font-size:22px","prefix-icon":u(m),modelValue:_.password,"onUpdate:modelValue":a[1]||(a[1]=e=>_.password=e),type:"password",placeholder:"请输入密码"},null,8,["prefix-icon","modelValue"])])),_:1}),d(s,{size:"large",prop:"code",label:"验证码",class:"inputCode"},{default:c((()=>[d(t,{"input-style":"font-size:22px",placeholder:"请输入验证码",style:{width:"318px","margin-right":"18px"},modelValue:_.code,"onUpdate:modelValue":a[2]||(a[2]=e=>_.code=e)},null,8,["modelValue"]),d(r,{type:"primary",style:{width:"194px",height:"66px"},ref:"countDownRef",disabled:h.disabled,class:"getCodeButton",onClick:F},{default:c((()=>[g(f(h.text),1)])),_:1},8,["disabled"])])),_:1}),d(r,{class:"registerButton",name:"register",type:"primary",onClick:B},{default:c((()=>[g("注册")])),_:1}),i("div",D,[d(x,{class:"regOrResetPassword",to:"/login"},{default:c((()=>[g("去登录")])),_:1})])])),_:1},8,["model","rules"])])])])])}}},[["__scopeId","data-v-fae20e1e"]]);export{I as default};