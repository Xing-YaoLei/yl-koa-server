import{r as e,_ as l,a,U as o,m as r,e as p,ad as d,o as t,f as u,h as s,w as i,ae as n,j as c,V as v,i as b,aF as h,af as m,B as f,ag as g,ah as y,x as C,t as _,F as S,n as V,aG as w,E as k,aH as q,aI as z,C as R}from"./index.ce92de4c.js";import{u as F,_ as x,b as U}from"./usePagination.5d94cc2d.js";const P={formItems:[{field:"brand",label:"品牌:",placeholder:"请选择",type:"input"},{field:"model",label:"型号:",placeholder:"请选择型号",type:"select",options:[{label:"旗舰版",value:"Good"},{label:"青春版",value:"Child"}]},{field:"cellularNetwork",label:"蜂窝网络:",placeholder:"请选择",type:"select",options:[{label:"3G",value:"3G网"},{label:"4G",value:"4G网"}]}]},B=e([{prop:"brand",label:"品牌",isShow:!0},{prop:"model",label:"型号",isShow:!0},{prop:"cellularNetwork",label:"蜂窝网络",isShow:!0},{prop:"audioFrequency",label:"音频",isShow:!0},{prop:"interfaceType",label:"接口类型",isShow:!0},{prop:"usb",label:"USB",isShow:!0},{prop:"createDateTime",label:"创建日期",isShow:!0},{prop:"createBy",label:"创建人",isShow:!0},{prop:"handle",label:"操作",isShow:!0,custom:!0}]),L=e([{prop:"BrandId",label:"品牌",isRequired:!0,placeholder:"请输入品牌"},{prop:"id",label:"型号",isRequired:!0,placeholder:"请选择型号",options:[{label:"宝马",value:1}]},{prop:"type",label:"类型",placeholder:"请选择类型",isRequired:!0,options:[{label:"宝马",value:2}]},{prop:"interfaceType",label:"接口类型",placeholder:"请选择接口类型",isRequired:!0,options:[{label:"宝马",value:2}]},{prop:"cellularNetwork",label:"蜂窝网络",placeholder:"请选择蜂窝网络",isRequired:!0,options:[{label:"宝马",value:3}]},{prop:"supplier",placeholder:"请输入供应商",label:"供应商",isRequired:!1},{prop:"ethernetProtocol",label:"以太协议栈",placeholder:"请选择以太网协议栈",isRequired:!1,options:[{label:"宝马",value:4}]},{prop:"ecall",label:"ECALL",placeholder:"请选择ECALL",isRequired:!1,options:[{label:"宝马",value:5}]},{prop:"audioFrequency",label:"音频",placeholder:"请选择音频",isRequired:!1,options:[{label:"宝马",value:6}]},{prop:"usb",label:"USB",placeholder:"请选择USB",isRequired:!1,options:[{label:"宝马",value:7}]},{prop:"cv2x",label:"C-V2X",placeholder:"请选择C-V2X",isRequired:!1,options:[{label:"宝马",value:3}]},{prop:"securityChip",label:"安全芯片",placeholder:"请选择安全芯片",isRequired:!1,options:[{label:"宝马",value:4}]},{prop:"nationalStandard",label:"国标",placeholder:"请选择国标标准",isRequired:!1,options:[{label:"宝马",value:2}]}]),T={class:"app-container"},D={class:"pager-wrapper"},G={class:"addTboxHeader"},I={class:"addTboxHeaderTitle"},N={class:"twoLine"},j=l({__name:"index",setup(e){var l;const{paginationData:j,handleCurrentChange:H,handleSizeChange:E}=F(),A=a(!1),O=a(),X=a("add"),J=a([]),K=a(!1),M=a({}),Q=a(),W=null!=(l=null==P?void 0:P.formItems)?l:[],Y={};W.map((e=>{Y[e.field]=""}));const Z=a(Y),$=()=>{var e;null==(e=Q.value)||e.resetForm(),oe()},ee=()=>{oe(Z.value)},le=()=>{var e;null==(e=O.value)||e.resetFields(),K.value=!0,X.value="add"},ae=()=>{O.value.resetFields(),"add"==X.value?w(M.value).then((e=>{1==e.rspCode&&(k.success("新增成功"),K.value=!1,O.value.resetFields(),oe())})):q(M.value).then((e=>{1==e.rspCode&&(k.success("编辑成功"),K.value=!1,O.value.resetFields(),oe())}))},oe=e=>{A.value=!0,h({...e,pageNum:j.currentPage,pageSize:j.pageSize}).then((e=>{if(1==e.rspCode){A.value=!1;const{pageNum:l,total:a,data:o}=e.rspData;j.currentPage=l,j.total=a,J.value=o}}))},re=()=>{O.value.resetFields(),K.value=!1};return o((()=>{oe()})),r([()=>j.currentPage,()=>j.pageSize],oe),(e,l)=>{const a=p("el-button"),o=p("el-pagination"),r=p("el-card"),h=p("el-option"),w=p("el-select"),q=p("el-input"),F=p("el-form-item"),W=p("el-form"),Y=p("el-dialog"),pe=d("loading");return t(),u("div",T,[s(x,n(c(P),{modelValue:Z.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Z.value=e),ref_key:"editForm",ref:Q}),{lastBtn:i((()=>[s(a,{type:"primary",icon:c(m),onClick:ee},{default:i((()=>[f("查询")])),_:1},8,["icon"]),s(a,{icon:c(g),onClick:$},{default:i((()=>[f("重置")])),_:1},8,["icon"])])),_:1},16,["modelValue"]),v((t(),b(r,null,{default:i((()=>[s(U,{tableData:J.value,columnList:c(B)},{OtherHandle:i((()=>[s(a,{icon:c(y),type:"primary",onClick:le},{default:i((()=>[f("新增")])),_:1},8,["icon"])])),handle:i((e=>[s(a,{type:"primary",text:"",size:"small",onClick:l=>{return a=e.row,K.value=!0,X.value="edit",void Object.assign(M.value,a);var a}},{default:i((()=>[f("编辑")])),_:2},1032,["onClick"]),s(a,{type:"danger",text:"",size:"small",onClick:l=>{return a=e.row,void z(a.id).then((e=>{1==e.rspCode&&(k.success("删除成功"),oe())}));var a}},{default:i((()=>[f("删除")])),_:2},1032,["onClick"])])),_:1},8,["tableData","columnList"]),C("div",D,[s(o,{layout:c(j).layout,"page-sizes":c(j).pageSizes,total:c(j).total,"page-size":c(j).pageSize,currentPage:c(j).currentPage,onSizeChange:c(E),onCurrentChange:c(H)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[pe,A.value]]),s(Y,{center:"",modelValue:K.value,"onUpdate:modelValue":l[2]||(l[2]=e=>K.value=e),"show-close":!0},{header:i((({})=>[C("div",G,[C("div",I,_("add"==X.value?"添加型号":"编辑型号"),1)])])),footer:i((()=>[s(a,{type:"default",onClick:re},{default:i((()=>[f("取消")])),_:1}),s(a,{type:"primary",onClick:ae},{default:i((()=>[f("保存")])),_:1})])),default:i((()=>[s(W,{"label-width":"120px",model:M.value,modelValue:M.value,"onUpdate:modelValue":l[1]||(l[1]=e=>M.value=e),ref_key:"addTboxDialogFormRef",ref:O},{default:i((()=>[C("div",N,[(t(!0),u(S,null,V(c(L),(e=>(t(),b(F,{key:e.prop,prop:e.prop,label:e.label},{default:i((()=>[e.options?(t(),b(w,{key:0,modelValue:M.value[e.prop],"onUpdate:modelValue":l=>M.value[e.prop]=l,placeholder:e.placeholder},{default:i((()=>[(t(!0),u(S,null,V(e.options,(e=>(t(),b(h,{key:e.label,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"])):R("",!0),e.options?R("",!0):(t(),b(q,{key:1,modelValue:M.value[e.prop],"onUpdate:modelValue":l=>M.value[e.prop]=l,placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"]))])),_:2},1032,["prop","label"])))),128))])])),_:1},8,["model","modelValue"])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-7fdbc2da"]]);export{j as default};