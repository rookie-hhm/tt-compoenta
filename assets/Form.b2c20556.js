import{d,i as a,e as r,f,l as g,c as _,a as o,w as t,r as l,o as v,m as h,p as b,g as y}from"./index.67b0b784.js";const F=y("\u4E0A\u4F20\uFF0C\u4F60\u61C2\u5F97"),k=d({__name:"Form",setup(C){const u=a([{type:"input",prop:"username",itemAttrs:{},attrs:{onSelect(){console.log("onselect")}}},{slotName:"upload",type:"upload",prop:"fileList",modelKey:"fileList",attrs:{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:!0,limit:1,"on-success"(){console.log("onSuccess")},"on-exceed"(){alert("onexecee")},"before-upload"(){alert("beforeUpload"),console.log("onBeforeUpload")}}},{type:"select",prop:"identify",attrs:{clearable:!0,onChange(n){console.log(n,"value")}},itemAttrs:{rules:[{message:"\u503E\u8BC9\u600E",trigger:"change",required:!0}]},children:[{type:"option",value:"1",attrs:{label:"\u7ECF\u7406"}}]}]),e=a({username:"123",identify:"",fileList:r([{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}])}),s=r(null);return f(()=>{console.log(s.value.formRef.validate())}),g(e,()=>{console.log(e.username,"model"),console.log(e.fileList,"filelist")},{deep:!0}),(n,x)=>{const c=l("el-button"),p=l("el-upload"),m=l("r-form");return v(),_("div",null,[o(m,{ref_key:"baseForm",ref:s,model:e,options:u},{upload:t(({row:i})=>[o(p,h(b(i.attrs)),{default:t(()=>[o(c,null,{default:t(()=>[F]),_:1})]),_:2},1040)]),_:1},8,["model","options"])])}}});export{k as default};
