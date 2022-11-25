import{d as e,a,E as l,r as t,_ as o,P as r,ab as s,U as d,e as n,o as i,i as u,w as p,x as c,h as m,B as g,j as h,f,n as v,F as b,ac as w,a8 as y,m as V,ad as _,ae as D,V as I,af as L,ag as C,ah as S,t as U,ai as k}from"./index.da4b159e.js";import{g as P}from"./roles.b8dc3927.js";import{f as q}from"./department.dc6c7c30.js";import{a as z,c as O}from"./FormValidation.dcbc89b2.js";import{u as j,_ as x,b as E}from"./usePagination.21c10505.js";const B=e("initStore",(()=>{const e=a([]),t=a([]);return{getRolesList:()=>new Promise(((a,t)=>{P().then((o=>{1==o.rspCode?(e.value=o.rspData.map((e=>({value:e.id,label:e.name,status:e.status}))),a(e)):(l.error("初始化车队列表失败"),t())}))})),getDepartmentList:()=>new Promise(((e,a)=>{q({}).then((l=>{var o,r;1==l.rspCode?(t.value=null==(r=null==(o=l.rspData)?void 0:o.list)?void 0:r.map((e=>({label:e.name,value:e.id}))),e(t)):a(new Error("请求部门列表"))}))})),DepartmentList:t,RolesList:e}})),F={formItems:[{field:"department",label:"部门:",placeholder:"请选择部门",type:"select",options:[]},{field:"username",label:"姓名:",placeholder:"请输入姓名",type:"input"},{field:"role",label:"角色:",placeholder:"请选择角色",type:"select",options:[]}]},W=t([{prop:"no",label:"员工编号",isShow:!0},{prop:"username",label:"姓名",isShow:!0},{prop:"account",label:"手机号",isShow:!0},{prop:"cropAccount",label:"企业微信账号",isShow:!0},{prop:"departmentList",label:"部门",isShow:!0,custom:!0},{prop:"roleList",label:"角色",isShow:!0,custom:!0},{prop:"cropDepartment",label:"企业微信部门",isShow:!0},{prop:"status",label:"员工状态",isShow:!0,custom:!0},{prop:"createDateTime",label:"创建时间",isShow:!0},{prop:"createBy",label:"创建人",isShow:!0},{prop:"handle",label:"操作",isShow:!0,custom:!0}]),H=t({no:[{required:!0,message:"请输入员工编号",trigger:"change"}],username:[{required:!0,message:"请输入员工名称",trigger:"change"},{min:2,max:10,message:"长度应为2-10位",trigger:"change"}],gender:[{required:!0,message:"请选择性别",trigger:"change"}],account:[{validator:z,trigger:"change"}],password:[{validator:O,message:"请输登录密码",trigger:"change"}],departmentIdList:[{required:!0,message:"请选择部门",trigger:"change"}],roleIdList:[{required:!0,message:"请选择角色",trigger:"change"}]}),R=e=>{var a;const l=[];return(null==(a=e.roleList)||a)&&e.roleList.map((e=>{l.push(e.roleName)})),l.join("/")||"暂无角色"},N=e=>{var a;const l=[];return(null==(a=e.departmentList)||a)&&e.departmentList.map((e=>{l.push(e.departmentName)})),l.join("/")||"暂无部门"},A={class:"dialog-footer"},T=o({__name:"index",props:{addUserDialogVisibility:{type:Boolean,required:!0},rules:{type:Object,required:!0},addOrEditHandleID:{type:Boolean,required:!0},form:{type:Object}},emits:["addDialogSave","addDialogOnCancel"],setup(e,{emit:l}){const t=e,o="170px",y=B(),V=B(),{DepartmentList:_}=r(V),D=a(),{addUserDialogVisibility:I,addOrEditHandleID:L,form:C}=s(t),S=()=>{l("addDialogOnCancel",D.value,C)};d((()=>{t.addOrEditHandleID.value}));const U=()=>{l("addDialogSave",D.value,C)};return(a,l)=>{const t=n("el-input"),r=n("el-form-item"),s=n("el-option"),d=n("el-select"),V=n("el-switch"),k=n("el-form"),P=n("el-button"),q=n("el-dialog");return i(),u(q,{"show-close":!1,width:"600px",modelValue:h(I),"onUpdate:modelValue":l[9]||(l[9]=e=>w(I)?I.value=e:null),onClose:S,title:1==h(L)?"添加员工":"编辑员工"},{footer:p((()=>[c("span",A,[m(P,{onClick:l[8]||(l[8]=e=>S(D.value))},{default:p((()=>[g("取消")])),_:1}),m(P,{type:"primary",onClick:U},{default:p((()=>[g(" 保存 ")])),_:1})])])),default:p((()=>[m(k,{rules:e.rules,ref_key:"addUserFormRef",ref:D,model:h(C)},{default:p((()=>[m(r,{label:"员工编号:","label-width":o,prop:"no",required:""},{default:p((()=>[m(t,{modelValue:h(C).no,"onUpdate:modelValue":l[0]||(l[0]=e=>h(C).no=e),class:"ItemWidth",placeholder:"请输入员工编号",autocomplete:"off"},null,8,["modelValue"])])),_:1}),m(r,{label:"员工名称:","label-width":o,prop:"username",required:""},{default:p((()=>[m(t,{modelValue:h(C).username,"onUpdate:modelValue":l[1]||(l[1]=e=>h(C).username=e),class:"ItemWidth",placeholder:"请输入员工名称",autocomplete:"off"},null,8,["modelValue"])])),_:1}),m(r,{label:"性别:","label-width":o,prop:"gender",required:""},{default:p((()=>[m(d,{class:"ItemWidth",placeholder:"请选择性别",modelValue:h(C).gender,"onUpdate:modelValue":l[2]||(l[2]=e=>h(C).gender=e)},{default:p((()=>[m(s,{label:"男",value:1}),m(s,{label:"女",value:0})])),_:1},8,["modelValue"])])),_:1}),m(r,{label:"登录账号:","label-width":o,prop:"account"},{default:p((()=>[m(t,{modelValue:h(C).account,"onUpdate:modelValue":l[3]||(l[3]=e=>h(C).account=e),placeholder:"请输入手机账号用于登录账号",class:"ItemWidth",autocomplete:"off"},null,8,["modelValue"])])),_:1}),m(r,{label:"登录密码:","label-width":o,prop:"password"},{default:p((()=>[m(t,{modelValue:h(C).password,"onUpdate:modelValue":l[4]||(l[4]=e=>h(C).password=e),placeholder:"请输入登录密码",class:"ItemWidth",autocomplete:"off"},null,8,["modelValue"])])),_:1}),m(r,{label:"部门:","label-width":o,prop:"departmentIdList",required:""},{default:p((()=>[m(d,{modelValue:h(C).departmentIdList,"onUpdate:modelValue":l[5]||(l[5]=e=>h(C).departmentIdList=e),multiple:"",placeholder:"请选择部门",class:"ItemWidth"},{default:p((()=>[(i(!0),f(b,null,v(h(_),(e=>(i(),u(s,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(r,{label:"角色:",placeholder:"请选择角色",prop:"roleIdList","label-width":o,required:""},{default:p((()=>[m(d,{modelValue:h(C).roleIdList,"onUpdate:modelValue":l[6]||(l[6]=e=>h(C).roleIdList=e),multiple:"",class:"ItemWidth"},{default:p((()=>[(i(!0),f(b,null,v(h(y).RolesList,(e=>(i(),u(s,{key:e.label,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(r,{"label-width":o,label:"员工状态:"},{default:p((()=>[m(V,{modelValue:h(C).status,"onUpdate:modelValue":l[7]||(l[7]=e=>h(C).status=e),class:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue","title"])}}},[["__scopeId","data-v-aab077b2"]]);function $(e){return y({url:"/account/editUser",method:"post",data:e||{}})}const G={class:"app-container"},J={class:"pager-wrapper"},K=o({__name:"index",setup(e){var t;const o=a({}),r=H.password,s=a(!1),v=a(!0),{paginationData:b,handleCurrentChange:w,handleSizeChange:P}=j(),q=a(!1);d((async()=>{await Q({}),await z()}));const z=()=>{B().getRolesList().then((e=>{F.formItems.forEach((a=>{"role"==a.field&&(a.options=e.value)}))})),B().getDepartmentList().then((e=>{F.formItems.forEach((a=>{"department"==a.field&&(a.options=e.value)}))}))},O=e=>{k.confirm(`正在删除用户：${e.username}，确认删除？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{var a;(a=e.id,y({url:`/account/deleteUserById/${a}`,method:"delete"})).then((()=>{l.success("删除成功"),Q()}))}))},A=()=>{H.password=r,q.value=!0,v.value=!0},K=a([]),M=a(null),Q=async e=>{s.value=!0,await function(e){return y({url:"/account/queryUserList",method:"post",data:e||{}})}({...e,pageNum:b.currentPage,pageSize:b.pageSize}).then((e=>{const{pageNum:a,total:l,list:t}=e.rspData;s.value=!1,b.total=l,K.value=t,b.currentPage=a})).catch((()=>{K.value=[]})).finally((()=>{s.value=!1}))},X=()=>{1===b.currentPage&&Q(ee.value),b.currentPage=1},Y=null!=(t=null==F?void 0:F.formItems)?t:[],Z={};Y.map((e=>{Z[e.field]=""}));const ee=a(Z),ae=()=>{var e;null==(e=M.value)||e.resetForm(),1===b.currentPage&&Q(),b.currentPage=1},le=async(e,a)=>{e&&await e.validate(((t,o)=>{t&&(1==v.value?$(a.value).then((e=>{1==e.rspCode&&(Q(),l.success("新增成功"))})):(Reflect.deleteProperty(a.value,"password"),$(a.value).then((e=>{1==e.rspCode&&(Q(),l.success("修改成功"))}))),q.value=!1,e.resetFields())}))},te=e=>{e.resetFields(),q.value=!1};return V([()=>b.currentPage,()=>b.pageSize],Q),(e,a)=>{const l=n("el-button"),t=n("el-pagination"),r=n("el-card"),d=_("loading");return i(),f("div",G,[m(x,D(h(F),{modelValue:ee.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ee.value=e),ref_key:"editForm",ref:M}),{lastBtn:p((()=>[m(l,{type:"primary",icon:h(L),onClick:X},{default:p((()=>[g("查询")])),_:1},8,["icon"]),m(l,{icon:h(C),onClick:ae},{default:p((()=>[g("重置")])),_:1},8,["icon"])])),_:1},16,["modelValue"]),I((i(),u(r,null,{default:p((()=>[m(E,{tableData:K.value,columnList:h(W)},{OtherHandle:p((()=>[m(l,{type:"primary",icon:h(S),onClick:A},{default:p((()=>[g("新增")])),_:1},8,["icon"])])),status:p((e=>[c("div",null,U(e.row.status?"正常":"停用"),1)])),departmentList:p((e=>[c("div",null,U(h(N)(e.row)),1)])),roleList:p((e=>[c("div",null,U(h(R)(null==e?void 0:e.row)),1)])),handle:p((e=>[m(l,{type:"primary",link:"",size:"small",onClick:a=>{return l=e.row,o.value=l,H.password=[],v.value=!1,void(q.value=!0);var l}},{default:p((()=>[g("修改")])),_:2},1032,["onClick"]),m(l,{type:"danger",link:"",size:"small",onClick:a=>O(e.row)},{default:p((()=>[g("删除")])),_:2},1032,["onClick"])])),_:1},8,["tableData","columnList"]),c("div",J,[m(t,{background:"",layout:h(b).layout,"page-sizes":h(b).pageSizes,total:h(b).total,"page-size":h(b).pageSize,currentPage:h(b).currentPage,onSizeChange:h(P),onCurrentChange:h(w)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[d,s.value]]),m(T,{rules:h(H),form:o.value,addOrEditHandleID:v.value,addUserDialogVisibility:q.value,onAddDialogOnCancel:te,onAddDialogSave:le},null,8,["rules","form","addOrEditHandleID","addUserDialogVisibility"])])}}},[["__scopeId","data-v-ac4ff504"]]);export{K as default};
