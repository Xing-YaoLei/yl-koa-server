import{_ as e,l,a,r as o,U as p,e as r,o as t,f as u,h as d,w as n,at as s,al as i,aw as m,ax as c,F as v,n as h,j as y,B as b,E as f,i as V,C as _,ay as g,az as k}from"./index.8d47e3e0.js";import{f as q}from"./vehicle.733588b0.js";const R=[{label:"品牌:",prop:"brandId",type:"select",placeholder:"请选择品牌",isRequired:!0,options:[]},{label:"车型名称:",prop:"modelName",type:"input",isRequired:!0,placeholder:"请输入汽车名称。如：奥迪A6"},{label:"级别:",prop:"level",type:"select",isRequired:!0,placeholder:"请选择级别",options:[]},{label:"型号:",prop:"model",type:"input",isRequired:!0,placeholder:"请输入汽车型号。如：2023款第三代330TGI超感精英版"},{label:"上市时间:",prop:"marketTime",type:"input",placeholder:"请输入上市时间"},{label:"能源类型:",prop:"fuelType",type:"select",isRequired:!0,placeholder:"请选择能源类型",options:[]},{label:"排量:",prop:"displacement",type:"input",placeholder:"请输入排量"},{label:"发动机:",prop:"engine",type:"input",placeholder:"请输入发动机类型，如：1.5T 188马力 L4"},{label:"环保标准:",prop:"environmentalProtection",type:"select",placeholder:"请选择环保标准",options:[]},{label:"纯电续航里程:",prop:"maxMileage",type:"input",placeholder:"请输入纯电续航里程"}],x={class:"app-container"},T=e({__name:"index",setup(e){const T=l(),U=a({}),D=a(),w=o({modelName:[{required:!0,message:"请输入车型名称",trigger:"blur"},{min:1,max:20,message:"长度应该在1-20之间",trigger:"blur"}]}),C=()=>{var e;const l=T.currentRoute.value.name;null==(e=D.value)||e.validate().then((e=>{if(!e)return!1;{const e="addVehicleModel"!=l?g:k;U.value.id=+T.currentRoute.value.query.id,e(U.value).then((e=>{const{rspCode:l,rspMsg:a}=e;1==l&&(f({type:"success",message:a}),T.go(-1))}))}}))},I=e=>e.map((e=>({value:e.id,label:e.name})));return p((()=>{q().then((e=>{R.filter((e=>"brandId"===e.prop))[0].options=I(null==e?void 0:e.rspData)})),s().then((e=>{R.filter((e=>"level"===e.prop))[0].options=I(null==e?void 0:e.rspData)})),i().then((e=>{R.filter((e=>"fuelType"===e.prop))[0].options=I(null==e?void 0:e.rspData)})),m().then((e=>{R.filter((e=>"environmentalProtection"===e.prop))[0].options=I(null==e?void 0:e.rspData)})),T.currentRoute.value.query.id&&c({id:T.currentRoute.value.query.id}).then((e=>{U.value=e.rspData[0]}))})),(e,l)=>{const a=r("el-option"),o=r("el-select"),p=r("el-input"),s=r("el-date-picker"),i=r("el-form-item"),m=r("el-button"),c=r("el-form"),f=r("el-card");return t(),u("div",x,[d(f,null,{default:n((()=>[d(c,{"label-width":"120px",ref_key:"formRef",ref:D,model:U.value,ruls:w},{default:n((()=>[(t(!0),u(v,null,h(y(R),(e=>(t(),V(i,{required:e.isRequired,key:e.prop,label:e.label,prop:e.prop},{default:n((()=>[e.options?(t(),V(o,{key:0,modelValue:U.value[e.prop],"onUpdate:modelValue":l=>U.value[e.prop]=l,placeholder:e.placeholder},{default:n((()=>[(t(!0),u(v,null,h(e.options,(e=>(t(),V(a,{key:e.label,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):_("",!0),e.options||"marketTime"==e.prop?_("",!0):(t(),V(p,{key:1,modelValue:U.value[e.prop],"onUpdate:modelValue":l=>U.value[e.prop]=l,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])),e.options||"marketTime"!==e.prop?_("",!0):(t(),V(s,{key:2,style:{width:"400px"},modelValue:U.value[e.prop],"onUpdate:modelValue":l=>U.value[e.prop]=l,type:"year","value-format":"x",placeholder:"请选择时间"},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["required","label","prop"])))),128)),d(i,null,{default:n((()=>[d(m,{onClick:l[0]||(l[0]=e=>y(T).go(-1))},{default:n((()=>[b("取消")])),_:1}),d(m,{type:"primary",onClick:C},{default:n((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model","ruls"])])),_:1})])}}},[["__scopeId","data-v-3d8b6981"]]);export{T as default};
