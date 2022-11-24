import{r as e,_ as a,a as l,U as t,m as n,e as o,ad as r,o as u,f as i,h as d,w as s,ae as p,j as c,V as m,i as v,af as g,B as f,ag as h,ah as b,x as _,t as C,E as y}from"./index.3ccc0506.js";import{a as S,d as V,u as w,b as k,f as z}from"./department.6fed1168.js";import{u as D,_ as P,b as x}from"./usePagination.d50a23b4.js";const U={formItems:[{field:"name",label:"部门:",placeholder:"请输入部门名称",type:"input"}]},j=e([{prop:"name",label:"部门名称",isShow:!0,align:"left"},{prop:"description",label:"部门描述",isShow:!0},{prop:"createDateTime",label:"创建时间",isShow:!0},{prop:"createBy",label:"创建人",isShow:!0},{prop:"handle",label:"操作",isShow:!0,custom:!0}]),F={class:"app-container"},N={class:"pager-wrapper"},B={class:"addFleetTitle"},I=a({__name:"index",setup(a){var I;const{paginationData:O,handleCurrentChange:J,handleSizeChange:L}=D(),T=l(!1),q=l(!1),E=l({pid:"",name:"",description:""}),H=l([]),R=l([]),A=l(null),G=l(null),K=l(!1),M=null!=(I=null==U?void 0:U.formItems)?I:[],Q={};M.map((e=>{Q[e.field]=""}));const W=l(Q),X=l(null),Y=e({name:[{required:!0,message:"请输入部门名称",trigger:"blur"},{min:1,max:10,message:"长度应该在1-10之间",trigger:"blur"}]}),Z=()=>{var e;null==(e=A.value)||e.resetForm(),ne()},$=()=>{ne()},ee=()=>{var e;null==(e=G.value)||e.validate().then((e=>{if(!e)return!1;{const e=K.value?w:k;E.value.pid&&(E.value.pid=E.value.pid[E.value.pid.length-1]),e(E.value).then((e=>{const{rspCode:a,rspData:l}=e;1==a&&(q.value=!1,ne(),y({type:"success",message:l}))}))}}))},ae=()=>{E.value={}},le=()=>{oe(),q.value=!0,K.value=!1},te=e=>{},ne=()=>{T.value=!0,z({...W.value,pageNum:O.currentPage,pageSize:O.pageSize}).then((e=>{T.value=!1;const{pageNum:a,total:l,list:t}=e.rspData;O.currentPage=a,O.total=l,R.value=t}))},oe=()=>{S().then((e=>{H.value=null==e?void 0:e.rspData}))},re={checkStrictly:!0,value:"id",label:"name",children:"children"};return t((()=>{oe()})),n([()=>O.currentPage,()=>O.pageSize],ne,{immediate:!0}),(e,a)=>{const l=o("el-button"),t=o("el-popconfirm"),n=o("el-pagination"),y=o("el-card"),S=o("el-cascader"),w=o("el-form-item"),k=o("el-input"),z=o("el-form"),D=o("el-dialog"),I=r("loading");return u(),i("div",F,[d(P,p(c(U),{modelValue:W.value,"onUpdate:modelValue":a[0]||(a[0]=e=>W.value=e),ref_key:"editForm",ref:A}),{lastBtn:s((()=>[d(l,{type:"primary",icon:c(g),onClick:$},{default:s((()=>[f("查询")])),_:1},8,["icon"]),d(l,{icon:c(h),onClick:Z},{default:s((()=>[f("重置")])),_:1},8,["icon"])])),_:1},16,["modelValue"]),m((u(),v(y,null,{default:s((()=>[d(x,{tableData:R.value,columnList:c(j)},{OtherHandle:s((()=>[d(l,{icon:c(b),type:"primary",onClick:le},{default:s((()=>[f("新增")])),_:1},8,["icon"])])),handle:s((e=>[d(l,{type:"primary",link:"",onClick:a=>{var l;return((e,a)=>{X.value=0!==a,X.value,oe(),q.value=!0,K.value=!0,E.value=JSON.parse(JSON.stringify(e.row))})(e,null==(l=e.row.children)?void 0:l.length)}},{default:s((()=>[f("编辑")])),_:2},1032,["onClick"]),d(t,{title:"确定删除?",onConfirm:a=>(e=>{V({id:e.row.id}).then((()=>{ne()}))})(e)},{reference:s((()=>{var a;return[d(l,{type:"danger",link:"",disabled:0!==(null==(a=e.row.children)?void 0:a.length)},{default:s((()=>[f("删除")])),_:2},1032,["disabled"])]})),_:2},1032,["onConfirm"])])),_:1},8,["tableData","columnList"]),_("div",N,[d(n,{background:"",layout:c(O).layout,"page-sizes":c(O).pageSizes,total:c(O).total,"page-size":c(O).pageSize,currentPage:c(O).currentPage,onSizeChange:c(L),onCurrentChange:c(J)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])])),_:1})),[[I,T.value]]),d(D,{modelValue:q.value,"onUpdate:modelValue":a[5]||(a[5]=e=>q.value=e),width:"30%",class:"addDepartmentDialog","show-close":!1,onClose:ae},{header:s((()=>[_("div",B,C(K.value?"编辑部门":"新增部门"),1)])),footer:s((()=>[d(l,{type:"default",onClick:a[4]||(a[4]=e=>q.value=!1)},{default:s((()=>[f("取消")])),_:1}),d(l,{type:"primary",onClick:ee},{default:s((()=>[f("保存")])),_:1})])),default:s((()=>[d(z,{"label-width":"100px",class:"DepartmentDialog",ref_key:"addFormRef",ref:G,rules:Y,model:K.value&&E.value,"status-icon":""},{default:s((()=>[d(w,{label:"上级部门",prop:"pid"},{default:s((()=>[d(S,{modelValue:E.value.pid,"onUpdate:modelValue":a[1]||(a[1]=e=>E.value.pid=e),options:H.value,onChange:te,props:re,clearable:"",disabled:X.value},null,8,["modelValue","options","disabled"])])),_:1}),d(w,{label:"部门名称",prop:"name"},{default:s((()=>[d(k,{modelValue:E.value.name,"onUpdate:modelValue":a[2]||(a[2]=e=>E.value.name=e),placeholder:"请输入部门名称"},null,8,["modelValue"])])),_:1}),d(w,{label:"部门描述",prop:"description"},{default:s((()=>[d(k,{modelValue:E.value.description,"onUpdate:modelValue":a[3]||(a[3]=e=>E.value.description=e),placeholder:"请输入部门描述"},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"])])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-1b4fe64e"]]);export{I as default};
