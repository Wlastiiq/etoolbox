(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[22],{1053:function(e,t,n){"use strict";n.r(t);var a=n(23),i=n(0),r=n.n(i),c=n(317),o=n(328),l=n(79),s=n(318),d=n(256),g=n(423),u=n.n(g),j=n(150),b=n.n(j),p=n(422),h=n.n(p),m=n(130),f=n(1030),x=n(52);function y(e,t){var n=function(e){var t=e.target,n=t.getBoundingClientRect(),a=n.left,i=n.top,r=e.pageX-a,c=e.pageY-i,o=t.clientWidth,l=t.clientHeight,s=t.naturalWidth,d=t.naturalHeight,g=Math.round(r/o*s),u=Math.round(c/l*d);return{px:g,py:u,width:s,height:d}}(e),a=document.createElement("canvas");a.width=n.width,a.height=n.height;var i=a.getContext("2d");i.drawImage(t,0,0);var r=i.getImageData(n.px,n.py,1,1).data;return"#"+("000000"+function(e,t,n){if(e>255||t>255||n>255)throw new Error("Invalid color component");return(e<<16|t<<8|n).toString(16)}(r[0],r[1],r[2])).slice(-6)}var O=n(123),v={marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",border:"solid 1px blue"},C=Object(O.a)((function(e){return{root:{margin:e.spacing(1)},image:{width:"100%",margin:5,border:"dashed 1px grey"},imageSelector:{margin:e.spacing(2),textAlign:"center"},toolbar:{margin:e.spacing(2)},sample:{width:"80%",height:40,paddingTop:10,marginBottom:20,borderColor:e.palette.text.disabled,borderStyle:"solid",borderWidth:1,borderRadius:e.shape.borderRadius,textAlign:"center",textShadow:"1px 1px lightgrey"}}})),w=n(71),I=n(42),E=n(2);t.default=function(){var e="Color picker",t=C(),n=r.a.useState(""),i=Object(a.a)(n,2),g=i[0],j=i[1],p=r.a.useState(""),O=Object(a.a)(p,2),S=O[0],k=O[1];function R(e){!function(e,t){if(e)for(var n=0;n<e.length;n++){var a=e[n];if(a.type.startsWith("image")){var i=new FileReader;i.onload=t,i.readAsDataURL(a.getAsFile());break}}}((e.clipboardData||e.originalEvent.clipboardData||e.originalEvent.clipboard).items,(function(e){return j(e.target.result)}))}function D(e){var t=y(e,document.getElementById("image"));k(t)}return r.a.useEffect((function(){return document.onpaste=R,function(){document.removeEventListener("onpaste",R)}}),[]),r.a.useEffect((function(){g&&document.getElementById("image").addEventListener("click",D)}),[g]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(I.a,{title:e}),Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsx)(x.a,{iconType:b.a,title:e}),Object(E.jsxs)(c.a,{children:[Object(E.jsxs)(o.a,{display:"flex",alignItems:"center",justifyContent:"center",className:t.imageSelector,children:[!g&&Object(E.jsxs)("div",{children:[Object(E.jsx)(l.a,{children:"paste image from clipboard"}),Object(E.jsx)(l.a,{children:"or select a file"}),Object(E.jsx)("input",{type:"file",color:"primary",accept:"image/*",onChange:function(e){return function(e){var t=new FileReader;t.onload=function(e){return j(e.target.result)},t.readAsDataURL(e)}(e.target.files[0])},id:"icon-button-file",style:{display:"none"}}),Object(E.jsx)("label",{htmlFor:"icon-button-file",children:Object(E.jsx)(d.a,{variant:"contained",component:"span",color:"primary",children:Object(E.jsx)(h.a,{})})})]}),g&&Object(E.jsx)(m.a,{style:v,defaultSize:{width:300,height:"100%"},children:Object(E.jsx)("img",{id:"image",src:g,alt:"Clipboard content",className:t.image})})]}),g&&Object(E.jsx)(o.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(E.jsx)(d.a,{endIcon:Object(E.jsx)(u.a,{}),variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),j(""),k("")},children:"Clear"})}),Object(E.jsxs)(s.a,{children:[Object(E.jsx)(o.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(E.jsx)("div",{className:t.sample,style:{backgroundColor:S},children:S})}),Object(E.jsx)(o.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(E.jsx)(f.a,{color:S,onChangeComplete:function(e){return k(e.hex)}})}),Object(E.jsx)(o.a,{display:"flex",alignItems:"center",justifyContent:"center",className:t.toolbar,children:Object(E.jsx)(w.a,{data:S})})]})]})]})]})}}}]);
//# sourceMappingURL=22.11070d82.chunk.js.map