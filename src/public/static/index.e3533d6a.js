import{u as e,_ as l,b as a}from"./usePagination.218419d2.js";import{r as o,_ as d,aA as p,P as r,a as t,U as i,aB as s,m as n,e as u,ad as c,o as m,f as h,h as b,w as v,ae as f,j as g,V as S,i as C,af as V,B as y,ag as _,ah as w,x as k,ac as I,F as x,n as D,aC as q,E as z,aD as T,aE as P,C as R,J as U,K as N}from"./index.8d47e3e0.js";const L=o({formItems:[{field:"model",label:"型号:",placeholder:"请选择型号",type:"cascader",options:[]},{field:"sn",type:"input",label:"SN:",placeholder:"请输入SN码"},{field:"sim",type:"input",label:"SIM卡号:",placeholder:"请输入SIM卡号"}]}),M=o([{prop:"modelList",label:"型号",isShow:!0},{prop:"sn",label:"SN",isShow:!0},{prop:"sim",label:"SIM卡号",isShow:!0},{prop:"bleSn",label:"BLE SN",isShow:!0},{prop:"productionTime",label:"出厂日期",isShow:!0},{prop:"iccid",label:"ICCID",isShow:!0},{prop:"createDateTime",label:"创建日期",isShow:!0},{prop:"createBy",label:"创建人",isShow:!0},{prop:"handle",label:"操作",isShow:!0,custom:!0}]),B=o([{prop:"model",label:"类型:",isRequired:!0,placeholder:"请选择类型",options:[]},{prop:"sn",label:"SN:",isRequired:!0,placeholder:"请输入SN"},{prop:"port",label:"Port:",isRequired:!1,placeholder:"请输入Port"},{prop:"ip",label:"IP:",isRequired:!1,placeholder:"请输入IP"},{prop:"sim",label:"SIM卡号:",isRequired:!1,placeholder:"请输入SIM卡号"},{prop:"bleSn",label:"BLE SN:",isRequired:!0,placeholder:"请输入选择BLE SN"},{prop:"softwareVersion",label:"软件版本号:",isRequired:!1,placeholder:"请输入软件版本号"},{prop:"hardwareVersion",label:"硬件版本号:",isRequired:!1,placeholder:"请输入硬件版本号"},{prop:"productionTime",label:"出厂日期:",isRequired:!1,placeholder:"请选择日期",isDateTime:!0},{prop:"iccid",label:"ICCID:",isRequired:!0,placeholder:"请输入ICCID"},{prop:"isActive",label:"是否激活:",isRequired:!0,placeholder:"请选择",options:[{label:"已激活",value:1},{label:"未激活",value:0}]}]),E={class:"app-container"},j={class:"pager-wrapper"},H=(e=>(U("data-v-128a7000"),e=e(),N(),e))((()=>k("div",{class:"addTboxHeader"},[k("div",{class:"addTboxHeaderTitle"},"添加TBOX")],-1))),Y={class:"twoLine"},F={class:"addTboxDialogHandle"},O=d({__name:"index",setup(d){var U;const N=p(),{tboxModelList:O}=r(N),{paginationData:A,handleCurrentChange:J,handleSizeChange:K}=e(),X=t(!1),G=t("add"),Q=t([]),W=o({}),Z=t(!1),$=t(),ee=null!=(U=null==L?void 0:L.formItems)?U:[],le={};ee.map((e=>{le[e.field]=""}));const ae=t(le),oe=()=>{var e;null==(e=$.value)||e.resetForm(),pe()},de=()=>{if(ae.value.model){const{length:e,[e-1]:l}=ae.value.model;ae.value.model=l}pe(ae.value)};i((()=>{var e;N.getTboxModelList(),null==(e=null==L?void 0:L.formItems)||e.map((e=>{"model"==e.field&&(e.options=O)})),null==B||B.map((e=>{"model"==e.prop&&(e.options=O)})),pe()}));const pe=e=>{X.value=!0,s({...e,pageNum:A.currentPage,pageSize:A.pageSize}).then((e=>{if(1==e.rspCode){X.value=!1;const{pageNum:l,total:a,data:o}=e.rspData;A.currentPage=l,A.total=a,Q.value=o}}))},re=()=>{const{length:e,[e-1]:l}=W.model;W.model=l,"add"==G.value?q(W).then((e=>{1==e.rspCode&&(z.success("新增Tbox成功"),pe())})):T(W).then((e=>{1==e.rspCode&&(z.success("编辑Tbox信息成功"),pe())})),Z.value=!1},te=()=>{Z.value=!0,G.value="add"};return n([()=>A.currentPage,()=>A.pageSize],pe),(e,o)=>{const d=u("el-button"),p=u("el-pagination"),r=u("el-card"),t=u("el-option"),i=u("el-select"),s=u("el-cascader"),n=u("el-date-picker"),q=u("el-input"),z=u("el-form-item"),T=u("el-form"),U=u("el-dialog"),N=c("loading");return m(),h("div",E,[b(l,f(g(L),{modelValue:ae.value,"onUpdate:modelValue":o[0]||(o[0]=e=>ae.value=e),ref_key:"editForm",ref:$}),{lastBtn:v((()=>[b(d,{type:"primary",icon:g(V),onClick:de},{default:v((()=>[y("查询")])),_:1},8,["icon"]),b(d,{icon:g(_),onClick:oe},{default:v((()=>[y("重置")])),_:1},8,["icon"])])),_:1},16,["modelValue"]),S((m(),C(r,null,{default:v((()=>[b(a,{tableData:Q.value,columnList:g(M)},{OtherHandle:v((()=>[b(d,{icon:g(w),type:"primary",onClick:te},{default:v((()=>[y("新增")])),_:1},8,["icon"])])),handle:v((e=>[b(d,{type:"primary",text:"",size:"small",onClick:l=>{return a=e.row,Z.value=!0,G.value="edit",void Object.assign(W,a);var a}},{default:v((()=>[y("编辑")])),_:2},1032,["onClick"]),b(d,{type:"danger",text:"",size:"small",onClick:l=>{return a=e.row,void P({id:a.id}).then((e=>{}));var a}},{default:v((()=>[y("删除")])),_:2},1032,["onClick"])])),_:1},8,["tableData","columnList"]),k("div",j,[b(p,{layout:g(A).layout,"page-sizes":g(A).pageSizes,total:g(A).total,"page-size":g(A).pageSize,currentPage:g(A).currentPage,onSizeChange:g(K),onCurrentChange:g(J)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[N,X.value]]),b(U,{center:"",modelValue:Z.value,"onUpdate:modelValue":o[3]||(o[3]=e=>Z.value=e),"show-close":!0},{header:v((({})=>[H])),footer:v((()=>[k("div",F,[b(d,{type:"default",onClick:o[2]||(o[2]=e=>Z.value=!1)},{default:v((()=>[y("取消")])),_:1}),b(d,{type:"primary",onClick:re},{default:v((()=>[y("保存")])),_:1})])])),default:v((()=>[b(T,{"label-width":"90px",modelValue:W,"onUpdate:modelValue":o[1]||(o[1]=e=>I(W)?W.value=e:null)},{default:v((()=>[k("div",Y,[(m(!0),h(x,null,D(g(B),(e=>(m(),C(z,{key:e.prop,label:e.label,required:e.isRequired},{default:v((()=>[e.options&&"model"!==e.prop?(m(),C(i,{key:0,modelValue:W[e.prop],"onUpdate:modelValue":l=>W[e.prop]=l,placeholder:e.placeholder},{default:v((()=>[(m(!0),h(x,null,D(e.options,(e=>(m(),C(t,{key:e.label,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):R("",!0),"model"==e.prop?(m(),C(s,{key:1,modelValue:W[e.prop],"onUpdate:modelValue":l=>W[e.prop]=l,options:e.options},null,8,["modelValue","onUpdate:modelValue","options"])):R("",!0),e.isDateTime?(m(),C(n,{key:2,modelValue:W[e.prop],"onUpdate:modelValue":l=>W[e.prop]=l,format:"YYYY/MM/DD","value-format":"x",type:"date",placeholder:"请选择日期"},null,8,["modelValue","onUpdate:modelValue"])):R("",!0),e.options||e.isDateTime?R("",!0):(m(),C(q,{key:3,modelValue:W[e.prop],"onUpdate:modelValue":l=>W[e.prop]=l,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"]))])),_:2},1032,["label","required"])))),128))])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-128a7000"]]);export{O as default};
