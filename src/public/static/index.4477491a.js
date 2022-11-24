import{u as e,_ as a,b as l}from"./usePagination.0efc074a.js";import{f as t,d as o,a as u}from"./ownership.4047eb33.js";import{r as n,a as s,U as r,m as d,e as p,ad as i,o as m,f as c,h as v,w as f,ae as g,j as h,V as y,i as _,af as b,B as V,ag as C,ah as w,x as S,t as z,ai as k,E as x}from"./index.729f6c65.js";const U={formItems:[{field:"name",label:"网点名称:",placeholder:"请输入网点名称",type:"input"}]},P=n([{prop:"name",label:"网点名称",isShow:!0},{prop:"address",label:"网点地址",isShow:!0},{prop:"volume",label:"容积率",isShow:!0},{prop:"type",label:"取换车方式",isShow:!0,custom:!0},{prop:"createDateTime",label:"创建时间",isShow:!0},{prop:"createBy",label:"创建人",isShow:!0},{prop:"handle",label:"操作",isShow:!0,custom:!0}]),B={class:"app-container"},D={class:"pager-wrapper"},j={__name:"index",setup(n){var j;const F=s(!1),{paginationData:T,handleCurrentChange:I,handleSizeChange:L}=e(),N=s([]),E=s();r((()=>{H({})}));const H=e=>{F.value=!0,t({...e,pageNum:T.currentPage,pageSize:T.pageSize}).then((e=>{const{pageNum:a,total:l,data:t}=e.rspData;T.currentPage=a,T.total=l,F.value=!1,N.value=t}))},O=s(),R=null!=(j=null==U?void 0:U.formItems)?j:[],W={};R.map((e=>{W[e.field]=""}));const $=s(W),q=()=>{var e,a;null==(e=O.value)||e.resetForm(),null==(a=E.value)||a.resetFields(),H()},A=()=>{H($.value)},G=s(!1),J=s(!0),K=()=>{J.value=!0,G.value=!0},M=()=>{u($.value).then((e=>{1==e.rspCode&&(H(),G.value=!1,1==J.value?x({type:"success",message:"新增成功"}):x({type:"success",message:"编辑修改成功"}))})).finally((()=>{var e;null==(e=E.value)||e.resetFields()}))};return d([()=>T.currentPage,()=>T.pageSize],H),(e,t)=>{const u=p("el-button"),n=p("el-pagination"),s=p("el-card"),r=p("el-input"),d=p("el-form-item"),j=p("el-option"),R=p("el-select"),W=p("el-form"),Q=p("el-dialog"),X=i("loading");return m(),c("div",B,[v(a,g(h(U),{modelValue:$.value,"onUpdate:modelValue":t[0]||(t[0]=e=>$.value=e),ref_key:"editForm",ref:O}),{lastBtn:f((()=>[v(u,{type:"primary",icon:h(b),onClick:A},{default:f((()=>[V("查询")])),_:1},8,["icon"]),v(u,{icon:h(C),onClick:q},{default:f((()=>[V("重置")])),_:1},8,["icon"])])),_:1},16,["modelValue"]),y((m(),_(s,null,{default:f((()=>[v(l,{tableData:N.value,columnList:h(P)},{OtherHandle:f((()=>[v(u,{type:"primary",icon:h(w),onClick:K},{default:f((()=>[V("新增")])),_:1},8,["icon"])])),type:f((e=>[S("div",null,z(e.row.type?"到店自取":"送车上门"),1)])),handle:f((e=>[v(u,{type:"primary",text:"",size:"small",onClick:a=>{return l=e.row,J.value=!1,$.value=l,void(G.value=!0);var l}},{default:f((()=>[V("编辑")])),_:2},1032,["onClick"]),v(u,{type:"danger",text:"",size:"small",onClick:a=>{return l=e.row,void k.confirm(`您确定要删除网点${l.name}`,"Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{o(l.id).then((e=>{1==e.rspCode?(H(),x({type:"success",message:"删除成功"})):x({type:"danger",message:"服务器超时"})})).catch((()=>{x({type:"info",message:"取消删除"})}))}));var l}},{default:f((()=>[V("删除")])),_:2},1032,["onClick"])])),_:1},8,["tableData","columnList"]),S("div",D,[v(n,{layout:h(T).layout,"page-sizes":h(T).pageSizes,total:h(T).total,"page-size":h(T).pageSize,currentPage:h(T).currentPage,onSizeChange:h(L),onCurrentChange:h(I)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[X,F.value]]),v(Q,{modelValue:G.value,"onUpdate:modelValue":t[7]||(t[7]=e=>G.value=e),title:!0===J.value?"新增网点":"编辑网点",onClose:q,width:"30%"},{footer:f((()=>[v(u,{onClick:t[6]||(t[6]=e=>G.value=!1)},{default:f((()=>[V("取消")])),_:1}),v(u,{type:"primary",onClick:M},{default:f((()=>[V("确认")])),_:1})])),default:f((()=>[v(W,{ref_key:"formRef",ref:E,model:$.value,"label-width":"120px","label-position":"right",inline:!0},{default:f((()=>[v(d,{prop:"name",label:"网点名称:"},{default:f((()=>[v(r,{modelValue:$.value.name,"onUpdate:modelValue":t[1]||(t[1]=e=>$.value.name=e),placeholder:"请输入仓库地址"},null,8,["modelValue"])])),_:1}),v(d,{prop:"contact",label:"联系电话:"},{default:f((()=>[v(r,{modelValue:$.value.contact,"onUpdate:modelValue":t[2]||(t[2]=e=>$.value.contact=e),placeholder:"请输入联系电话"},null,8,["modelValue"])])),_:1}),v(d,{prop:"type",label:"取换车方式:"},{default:f((()=>[v(R,{style:{width:"175px"},modelValue:$.value.type,"onUpdate:modelValue":t[3]||(t[3]=e=>$.value.type=e),placeholder:"请选择仓库类型"},{default:f((()=>[v(j,{label:"送车上门",value:0}),v(j,{label:"到店自取",value:1})])),_:1},8,["modelValue"])])),_:1}),v(d,{prop:"volume",label:"网点容积:"},{default:f((()=>[v(r,{modelValue:$.value.volume,"onUpdate:modelValue":t[4]||(t[4]=e=>$.value.volume=e),placeholder:"请输入容积"},null,8,["modelValue"])])),_:1}),v(d,{prop:"address",label:"网点地址:"},{default:f((()=>[v(r,{modelValue:$.value.address,"onUpdate:modelValue":t[5]||(t[5]=e=>$.value.address=e),placeholder:"请输入仓库地址"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])])}}};export{j as default};