import{d as g,r as m,c as F,w as t,a as i,o as b,f as o,g as l,t as h,e as y}from"./index.22b80f40.js";const f=l("Click to upload"),A=y("div",{style:{"font-size":"12px",color:"#ccc"}},"jpg/png files with a size less than 500kb",-1),D=l(" Create "),_=l("Reset"),C=g({__name:"index",setup(B){const a=m(),n=async e=>{console.log(e.form.validate,e.model),e.form&&await e.form.validate((r,u)=>{r?console.log(e.model,"model"):(console.log(r,u),console.log("error submit!",u))})},p=()=>{a.value.resetFields()},c=[{prop:"username",type:"input",value:"",label:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:["blur","change"]},{min:2,max:6,message:"\u957F\u5EA6\u5728 2 \u5230 6 \u4E2A\u5B57\u7B26",trigger:["blur","change"]}],attrs:{clearable:!0}},{prop:"password",type:"input",value:"",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur","change"]},{min:6,max:12,message:"\u5BC6\u7801\u5728 6 \u5230 12 \u4E2A\u5B57\u7B26",trigger:["blur","change"]}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"\u8BF7\u9009\u62E9\u804C\u4F4D",prop:"role",label:"\u804C\u4F4D",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"\u804C\u4F4D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"option",label:"\u7ECF\u7406",value:"1"},{type:"option",label:"\u4E3B\u7BA1",value:"2"},{type:"option",label:"\u5458\u5DE5",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"\u7231\u597D",rules:[{required:!0,message:"\u7231\u597D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"checkbox",label:"\u8DB3\u7403",value:"1"},{type:"checkbox",label:"\u7BEE\u7403",value:"2"},{type:"checkbox",label:"\u6392\u7403",value:"3"}]},{type:"radio-group",value:"",prop:"gender",label:"\u6027\u522B",rules:[{required:!0,message:"\u6027\u522B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}],children:[{type:"radio",label:"\u7537",value:"male"},{type:"radio",label:"\u5973",value:"female"},{type:"radio",label:"\u4FDD\u5BC6",value:"not"}]},{type:"upload",label:"\u4E0A\u4F20",prop:"pic",uploadAttrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:!0,limit:3,onSuccess:(e,r,u)=>{console.log(e,r,u)}},rules:[{required:!0,message:"\u56FE\u7247\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]},{type:"editor",value:"",prop:"desc",label:"\u63CF\u8FF0",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",attrs:{toolAttrs:{mode:"default",toolbarConfig:{}},editorAttrs:{mode:"default",defaultConfig:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9..."}}},rules:[{required:!0,message:"\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}]},{type:"markdownEditor",value:"",prop:"markdown",label:"MD",placeholder:"\u8BF7\u8F93\u5165MD",attrs:{height:"400px",onUploadImg:async(e,r)=>{console.log(e,r)}},rules:[{required:!0,message:"MD\u4E0D\u80FD\u4E3A\u7A7A",trigger:["blur","change"]}]}];return(e,r)=>{const u=i("el-button"),d=i("m-form");return b(),F(d,{ref_key:"form",ref:a,"label-width":"100px",options:c},{uploadArea:t(()=>[o(u,{size:"small",type:"primary"},{default:t(()=>[f]),_:1})]),uploadTip:t(()=>[A]),action:t(s=>[o(u,{type:"primary",onClick:E=>n(s)},{default:t(()=>[D]),_:2},1032,["onClick"]),o(u,{onClick:p},{default:t(()=>[_]),_:1}),l(" "+h(s),1)]),_:1},512)}}});export{C as default};