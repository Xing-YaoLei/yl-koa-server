import{a8 as e}from"./index.7c4629cc.js";function t(t){return e({url:"/vehicle/fleet/addFleet",method:"post",data:t||{}})}function l(t){return e({url:"/vehicle/fleet/findFleetList",method:"post",data:t||{}})}const a=t=>e({url:"/vehicle/fleet/deleteFleet",method:"delete",params:{id:t}}),d=(t={})=>e({url:"/vehicle/fleet/editFleet",method:"post",data:t});export{t as a,a as d,d as e,l as g};
