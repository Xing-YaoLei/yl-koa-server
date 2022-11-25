import{_ as e,a as l,r as a,l as t,U as u,e as d,o as i,f as o,h as r,w as s,ax as n,ay as m,x as c,F as p,n as f,j as v,az as g,B as h,aA as b,aB as V,i as _,J as y,K as N}from"./index.7c4629cc.js";import{f as x}from"./ownership.73f956ca.js";import{g as U}from"./fleet.38d02fa8.js";const I=e=>(y("data-v-2d334693"),e=e(),N(),e),A={class:"app-container"},q={class:"twoLine"},W=I((()=>c("br",null,null,-1))),k={class:"uploadList"},w={style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},j=I((()=>c("span",null,"上传图片",-1))),T={style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},D=I((()=>c("span",null,"上传图片",-1))),B={style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},C=I((()=>c("span",null,"上传图片",-1))),L={style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},R=I((()=>c("span",null,"上传图片",-1))),Y=e({__name:"index",setup(e){const y=l({vin:"",engineNo:"",modelName:"",plateNo:"",purchaseTime:"",purchaseAmount:0,purpose:"",ownerType:"",owner:"",passengersNo:"",fleet:"",node:"",colour:"",vehicleBodyImages:[],drivingLisenceImagesArr:[],transportCertificateImagesArr:[],purchaseInvoiceImagesArr:[]}),N=a({vin:[{required:!0,message:"请输入车辆识别代码",trigger:"blur"},{min:1,max:20,message:"长度应该在1-20之间",trigger:"blur"}],engineNo:[{required:!0,message:"请输入发动机编号",trigger:"blur"},{min:1,max:20,message:"长度应该在1-20之间",trigger:"blur"}],modelName:[{required:!0,message:"请选择车型",trigger:"请选择车型"}],plateNo:[{required:!0,message:"请输入车牌号码",trigger:"blur"},{min:1,max:20,message:"长度应该在1-20之间",trigger:"blur"}],purchaseAmount:[{required:!0,message:"请输入购车金额",trigger:"blur"}],purchaseTime:[{required:!0,message:"请选择购车时间",trigger:"blur"}]}),I=t(),Y=l(),M=l([]),z=l([]),F=l([]),J=(e,l)=>{},K=()=>{I.go(-1)},E=()=>{var e;null==(e=Y.value)||e.validate().then((e=>{if(!e)return!1;{const e=I.currentRoute.value.query.id?b:V;y.value.modelName=y.value.modelName[y.value.modelName.length-1],e(y.value).then((()=>{I.go(-1)}))}}))};return u((()=>{x({}).then((e=>{z.value=e.rspData.data})),U().then((e=>{F.value=e.rspData.data})),m().then((e=>{M.value=e.rspData})),I.currentRoute.value.query.id&&n({id:I.currentRoute.value.query.id}).then((e=>{y.value=e.rspData[0]}))})),(e,l)=>{const a=d("el-input"),t=d("el-form-item"),u=d("el-cascader"),n=d("el-date-picker"),m=d("el-input-number"),b=d("el-option"),V=d("el-select"),x=d("el-icon"),U=d("el-upload"),I=d("el-button"),G=d("el-form"),H=d("el-card");return i(),o("div",A,[r(H,{style:{"padding-left":"40px"}},{default:s((()=>[r(G,{model:y.value,"label-position":"right","label-width":"150px",class:"form-inline",ref_key:"formRef",ref:Y,rules:N},{default:s((()=>[c("div",q,[r(t,{label:"车辆识别代码(VIN):",prop:"vin"},{default:s((()=>[r(a,{class:"itemWidth",modelValue:y.value.vin,"onUpdate:modelValue":l[0]||(l[0]=e=>y.value.vin=e),placeholder:"请输入车辆识别代码"},null,8,["modelValue"])])),_:1}),r(t,{label:"发动机编号:",prop:"engineNo"},{default:s((()=>[r(a,{class:"itemWidth",modelValue:y.value.engineNo,"onUpdate:modelValue":l[1]||(l[1]=e=>y.value.engineNo=e),placeholder:"请输入发动机编号"},null,8,["modelValue"])])),_:1}),r(t,{label:"车型:",prop:"modelName"},{default:s((()=>[r(u,{modelValue:y.value.modelName,"onUpdate:modelValue":l[2]||(l[2]=e=>y.value.modelName=e),options:M.value},null,8,["modelValue","options"])])),_:1}),r(t,{label:"车牌号码:",required:""},{default:s((()=>[r(a,{class:"itemWidth",modelValue:y.value.plateNo,"onUpdate:modelValue":l[3]||(l[3]=e=>y.value.plateNo=e),placeholder:"请输入车牌"},null,8,["modelValue"])])),_:1}),r(t,{label:"购车时间:",required:""},{default:s((()=>[r(n,{class:"itemWidth",modelValue:y.value.purchaseTime,"onUpdate:modelValue":l[4]||(l[4]=e=>y.value.purchaseTime=e),type:"date",format:"YYYY-MM-DD","value-format":"x",placeholder:"选择购车日期"},null,8,["modelValue"])])),_:1}),r(t,{label:"购车金额:",required:""},{default:s((()=>[r(m,{class:"itemWidth",modelValue:y.value.purchaseAmount,"onUpdate:modelValue":l[5]||(l[5]=e=>y.value.purchaseAmount=e),placeholder:"请输入购车金额",precision:2,min:0},null,8,["modelValue"])])),_:1}),r(t,{label:"颜色:"},{default:s((()=>[r(a,{class:"itemWidth",modelValue:y.value.colour,"onUpdate:modelValue":l[6]||(l[6]=e=>y.value.colour=e),placeholder:"请输入颜色"},null,8,["modelValue"])])),_:1}),r(t,{label:"使用性质:"},{default:s((()=>[r(V,{class:"itemWidth",modelValue:y.value.purpose,"onUpdate:modelValue":l[7]||(l[7]=e=>y.value.purpose=e),placeholder:"请选择车型"},{default:s((()=>[r(b,{label:"运营",value:1}),r(b,{label:"网约车",value:2})])),_:1},8,["modelValue"])])),_:1}),r(t,{label:"所属类型:"},{default:s((()=>[r(V,{class:"itemWidth",modelValue:y.value.ownerType,"onUpdate:modelValue":l[8]||(l[8]=e=>y.value.ownerType=e),placeholder:"类型"},{default:s((()=>[r(b,{label:"个人",value:1}),r(b,{label:"公司",value:2})])),_:1},8,["modelValue"])])),_:1}),r(t,{label:"所属人/单位:"},{default:s((()=>[r(a,{class:"itemWidth",modelValue:y.value.owner,"onUpdate:modelValue":l[9]||(l[9]=e=>y.value.owner=e),placeholder:"请输入所属人/单位"},null,8,["modelValue"])])),_:1}),r(t,{label:"载人数量:"},{default:s((()=>[r(a,{class:"itemWidth",modelValue:y.value.passengersNo,"onUpdate:modelValue":l[10]||(l[10]=e=>y.value.passengersNo=e),modelModifiers:{number:!0},placeholder:"请输入数量"},null,8,["modelValue"])])),_:1}),r(t,{label:"所属车队:"},{default:s((()=>[r(V,{class:"itemWidth",modelValue:y.value.fleet,"onUpdate:modelValue":l[11]||(l[11]=e=>y.value.fleet=e),placeholder:"请选择所属车队"},{default:s((()=>[(i(!0),o(p,null,f(F.value,((e,l)=>(i(),_(b,{label:e.name,value:e.id,key:l},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(t,{label:"所属网点:"},{default:s((()=>[r(V,{class:"itemWidth",modelValue:y.value.node,"onUpdate:modelValue":l[12]||(l[12]=e=>y.value.node=e),placeholder:"请选择"},{default:s((()=>[(i(!0),o(p,null,f(z.value,((e,l)=>(i(),_(b,{label:e.name,value:e.id,key:l},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),W,c("div",k,[r(t,{label:"车辆图片:"},{default:s((()=>[r(U,{limit:3,"file-list":y.value.vehicleBodyImages,"onUpdate:file-list":l[13]||(l[13]=e=>y.value.vehicleBodyImages=e),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture-card","on-remove":J},{default:s((()=>[c("div",w,[r(x,null,{default:s((()=>[r(v(g))])),_:1}),j])])),_:1},8,["file-list"])])),_:1}),r(t,{label:"车辆驾驶证:"},{default:s((()=>[r(U,{limit:3,"file-list":y.value.drivingLisenceImagesArr,"onUpdate:file-list":l[14]||(l[14]=e=>y.value.drivingLisenceImagesArr=e),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture-card","on-remove":J},{default:s((()=>[c("div",T,[r(x,null,{default:s((()=>[r(v(g))])),_:1}),D])])),_:1},8,["file-list"])])),_:1}),r(t,{label:"网约车运输证:"},{default:s((()=>[r(U,{limit:3,"file-list":y.value.transportCertificateImagesArr,"onUpdate:file-list":l[15]||(l[15]=e=>y.value.transportCertificateImagesArr=e),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture-card","on-remove":J},{default:s((()=>[c("div",B,[r(x,null,{default:s((()=>[r(v(g))])),_:1}),C])])),_:1},8,["file-list"])])),_:1}),r(t,{label:"购物发票:"},{default:s((()=>[r(U,{limit:3,"file-list":y.value.purchaseInvoiceImagesArr,"onUpdate:file-list":l[16]||(l[16]=e=>y.value.purchaseInvoiceImagesArr=e),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","list-type":"picture-card","on-remove":J},{default:s((()=>[c("div",L,[r(x,null,{default:s((()=>[r(v(g))])),_:1}),R])])),_:1},8,["file-list"])])),_:1}),r(t,null,{default:s((()=>[r(I,{onClick:K},{default:s((()=>[h("取消")])),_:1}),r(I,{type:"primary",onClick:E},{default:s((()=>[h("保存")])),_:1})])),_:1})])])),_:1},8,["model","rules"])])),_:1})])}}},[["__scopeId","data-v-2d334693"]]);export{Y as default};
