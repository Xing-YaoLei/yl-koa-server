import{d as e,a,E as l,r as t,_ as o,P as r,ab as s,U as d,e as u,o as i,i as n,w as p,x as m,h as c,B as g,j as f,f as h,n as b,F as v,ac as w,a8 as V,m as y,ad as _,ae as D,V as I,af as C,ag as L,ah as S,t as U,ai as k}from"./index.729f6c65.js";import{g as q}from"./roles.b9cf0a1e.js";import{f as z}from"./department.60632773.js";import{a as P,c as O}from"./FormValidation.dcbc89b2.js";import{u as x,_ as E,b as j}from"./usePagination.0efc074a.js";const B=e("initStore",(()=>{const e=a([]),t=a([]);return{getRolesList:()=>new Promise(((a,t)=>{q().then((o=>{1==o.rspCode?(e.value=o.rspData.map((e=>({value:e.id,label:e.name,status:e.status}))),a(e)):(l.error("初始化车队列表失败"),t())}))})),getDepartmentList:()=>new Promise(((e,a)=>{z({}).then((l=>{var o,r;1==l.rspCode?(t.value=null==(r=null==(o=l.rspData)?void 0:o.list)?void 0:r.map((e=>({label:e.name,value:e.id}))),e(t)):a(new Error("请求部门列表"))}))})),DepartmentList:t,RolesList:e}})),F={formItems:[{field:"department",label:"部门:",placeholder:"请选择部门",type:"select",options:[]},{field:"username",label:"姓名:",placeholder:"请输入姓名",type:"input"},{field:"role",label:"角色:",placeholder:"请选择角色",type:"select",options:B().RolesList}]},W=t([{prop:"no",label:"员工编号",isShow:!0},{prop:"username",label:"姓名",isShow:!0},{prop:"account",label:"手机号",isShow:!0},{prop:"cropAccount",label:"企业微信账号",isShow:!0},{prop:"departmentList",label:"部门",isShow:!0},{prop:"roleList",label:"角色",isShow:!0,custom:!0},{prop:"cropDepartment",label:"企业微信部门",isShow:!0},{prop:"status",label:"员工状态",isShow:!0,custom:!0},{prop:"createDateTime",label:"创建时间",isShow:!0},{prop:"createBy",label:"创建人",isShow:!0},{prop:"handle",label:"操作",isShow:!0,custom:!0}]),H=t({no:[{required:!0,message:"请输入员工编号",trigger:"blur"}],username:[{required:!0,message:"请输入员工名称",trigger:"blur"},{min:2,max:10,message:"长度应为2-10位",trigger:"blur"}],gender:[{required:!0,message:"请选择性别",trigger:"change"}],account:[{validator:P,trigger:"blur"}],password:[{validator:O,message:"请输登录密码",trigger:"blur"}],departmentIdList:[{required:!0,message:"请选择部门",trigger:"blur"}],roleIdList:[{required:!0,message:"请选择角色",trigger:"blur"}]}),R={class:"dialog-footer"},A=o({__name:"index",props:{addUserDialogVisibility:{type:Boolean,required:!0},rules:{type:Object,required:!0},addOrEditHandleID:{type:Boolean,required:!0},form:{type:Object}},emits:["addDialogSave","addDialogOnCancel"],setup(e,{emit:l}){const t=e,o="170px",V=B(),y=B(),{DepartmentList:_}=r(y),D=a(),{addUserDialogVisibility:I,addOrEditHandleID:C,form:L}=s(t),S=()=>{l("addDialogOnCancel",D.value,L)};d((()=>{t.addOrEditHandleID.value}));const U=()=>{l("addDialogSave",D.value,L)};return(a,l)=>{const t=u("el-input"),r=u("el-form-item"),s=u("el-option"),d=u("el-select"),y=u("el-switch"),k=u("el-form"),q=u("el-button"),z=u("el-dialog");return i(),n(z,{"show-close":!1,width:"600px",modelValue:f(I),"onUpdate:modelValue":l[9]||(l[9]=e=>w(I)?I.value=e:null),onClose:S,title:1==f(C)?"添加员工":"编辑员工"},{footer:p((()=>[m("span",R,[c(q,{onClick:l[8]||(l[8]=e=>S(D.value))},{default:p((()=>[g("取消")])),_:1}),c(q,{type:"primary",onClick:U},{default:p((()=>[g(" 保存 ")])),_:1})])])),default:p((()=>[c(k,{rules:e.rules,ref_key:"addUserFormRef",ref:D,model:f(L)},{default:p((()=>[c(r,{label:"员工编号:","label-width":o,prop:"no",required:""},{default:p((()=>[c(t,{modelValue:f(L).no,"onUpdate:modelValue":l[0]||(l[0]=e=>f(L).no=e),class:"ItemWidth",placeholder:"请输入员工编号",autocomplete:"off"},null,8,["modelValue"])])),_:1}),c(r,{label:"员工名称:","label-width":o,prop:"username",required:""},{default:p((()=>[c(t,{modelValue:f(L).username,"onUpdate:modelValue":l[1]||(l[1]=e=>f(L).username=e),class:"ItemWidth",placeholder:"请输入员工名称",autocomplete:"off"},null,8,["modelValue"])])),_:1}),c(r,{label:"性别:","label-width":o,prop:"gender",required:""},{default:p((()=>[c(d,{class:"ItemWidth",placeholder:"请选择性别",modelValue:f(L).gender,"onUpdate:modelValue":l[2]||(l[2]=e=>f(L).gender=e)},{default:p((()=>[c(s,{label:"男",value:1}),c(s,{label:"女",value:0})])),_:1},8,["modelValue"])])),_:1}),c(r,{label:"登录账号:","label-width":o,prop:"account"},{default:p((()=>[c(t,{modelValue:f(L).account,"onUpdate:modelValue":l[3]||(l[3]=e=>f(L).account=e),placeholder:"请输入手机账号用于登录账号",class:"ItemWidth",autocomplete:"off"},null,8,["modelValue"])])),_:1}),c(r,{label:"登录密码:","label-width":o,prop:"password"},{default:p((()=>[c(t,{modelValue:f(L).password,"onUpdate:modelValue":l[4]||(l[4]=e=>f(L).password=e),placeholder:"请输入登录密码",class:"ItemWidth",autocomplete:"off"},null,8,["modelValue"])])),_:1}),c(r,{label:"部门:","label-width":o,prop:"departmentIdList",required:""},{default:p((()=>[c(d,{modelValue:f(L).departmentIdList,"onUpdate:modelValue":l[5]||(l[5]=e=>f(L).departmentIdList=e),multiple:"",placeholder:"请选择部门",class:"ItemWidth"},{default:p((()=>[(i(!0),h(v,null,b(f(_),(e=>(i(),n(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(r,{label:"角色:",placeholder:"请选择角色",prop:"roleIdList","label-width":o,required:""},{default:p((()=>[c(d,{modelValue:f(L).roleIdList,"onUpdate:modelValue":l[6]||(l[6]=e=>f(L).roleIdList=e),multiple:"",class:"ItemWidth"},{default:p((()=>[(i(!0),h(v,null,b(f(V).RolesList,(e=>(i(),n(s,{key:e.label,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(r,{"label-width":o,label:"员工状态:"},{default:p((()=>[c(y,{modelValue:f(L).status,"onUpdate:modelValue":l[7]||(l[7]=e=>f(L).status=e),class:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue","title"])}}},[["__scopeId","data-v-aab077b2"]]);const N={class:"app-container"},T={class:"pager-wrapper"},$=o({__name:"index",setup(e){var t;const o=a({}),r=a(!1),s=a(!0),{paginationData:b,handleCurrentChange:v,handleSizeChange:w}=x(),q=a(!1);d((()=>{$({}),B().getRolesList().then((e=>{F.formItems.forEach((a=>{"role"==a.field&&(a.options=e.value)}))})),B().getDepartmentList().then((e=>{F.formItems.forEach((a=>{"department"==a.field&&(a.options=e.value)}))}))}));const z=e=>{k.confirm(`正在删除用户：${e.username}，确认删除？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{var a;(a=e.id,V({url:`/account/deleteUserById/${a}`,method:"delete"})).then((()=>{l.success("删除成功"),$()}))}))},P=()=>{q.value=!0,s.value=!0},O=a([]),R=a(null),$=async e=>{r.value=!0,await function(e){return V({url:"/account/queryUserList",method:"post",data:e||{}})}({...e,pageNum:b.currentPage,pageSize:b.pageSize}).then((e=>{const{pageNum:a,total:l,list:t}=e.rspData;r.value=!1,b.total=l,O.value=t,b.currentPage=a})).catch((()=>{O.value=[]})).finally((()=>{r.value=!1}))},G=()=>{1===b.currentPage&&$(M.value),b.currentPage=1},J=null!=(t=null==F?void 0:F.formItems)?t:[],K={};J.map((e=>{K[e.field]=""}));const M=a(K),Q=()=>{var e;null==(e=R.value)||e.resetForm(),1===b.currentPage&&$(),b.currentPage=1},X=async(e,a)=>{e&&await e.validate(((t,o)=>{var r;t&&((r=a.value,V({url:"/account/editUser",method:"post",data:r||{}})).then((e=>{1==e.rspCode&&($(),1==s.value?l.success("新增成功"):l.success("修改成功"))})),q.value=!1,e.resetFields())}))},Y=e=>{e.resetFields(),q.value=!1};return y([()=>b.currentPage,()=>b.pageSize],$),(e,a)=>{const l=u("el-button"),t=u("el-pagination"),d=u("el-card"),V=_("loading");return i(),h("div",N,[c(E,D(f(F),{modelValue:M.value,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value=e),ref_key:"editForm",ref:R}),{lastBtn:p((()=>[c(l,{type:"primary",icon:f(C),onClick:G},{default:p((()=>[g("查询")])),_:1},8,["icon"]),c(l,{icon:f(L),onClick:Q},{default:p((()=>[g("重置")])),_:1},8,["icon"])])),_:1},16,["modelValue"]),I((i(),n(d,null,{default:p((()=>[c(j,{tableData:O.value,columnList:f(W)},{OtherHandle:p((()=>[c(l,{type:"primary",icon:f(S),onClick:P},{default:p((()=>[g("新增")])),_:1},8,["icon"])])),status:p((e=>[m("div",null,U(e.row.status?"正常":"停用"),1)])),roleList:p((e=>[m("div",null,U(e.row.roleList[0]?e.row.roleList[0].roleName:""),1)])),handle:p((e=>[c(l,{type:"primary",link:"",size:"small",onClick:a=>{return l=e.row,o.value=l,o.value,s.value=!1,void(q.value=!0);var l}},{default:p((()=>[g("修改")])),_:2},1032,["onClick"]),c(l,{type:"danger",link:"",size:"small",onClick:a=>z(e.row)},{default:p((()=>[g("删除")])),_:2},1032,["onClick"])])),_:1},8,["tableData","columnList"]),m("div",T,[c(t,{background:"",layout:f(b).layout,"page-sizes":f(b).pageSizes,total:f(b).total,"page-size":f(b).pageSize,currentPage:f(b).currentPage,onSizeChange:f(w),onCurrentChange:f(v)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[V,r.value]]),c(A,{rules:f(H),form:o.value,addOrEditHandleID:s.value,addUserDialogVisibility:q.value,onAddDialogOnCancel:Y,onAddDialogSave:X},null,8,["rules","form","addOrEditHandleID","addUserDialogVisibility"])])}}},[["__scopeId","data-v-6b58938a"]]);export{$ as default};
