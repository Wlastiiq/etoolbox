(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[28],{1054:function(t,e,n){"use strict";n.r(e),n.d(e,"mapStateToProps",(function(){return T})),n.d(e,"mapDispatchToProps",(function(){return I}));var a=n(42),i=n(2),r=n(0),o=n.n(r),c=n(96),s=n(922),l=n.n(s),d=n(64),u=n(417),j=n(356),p=n(1027),b=n(250),m=n(323),x=n(529),h=n(418),O=n(419),f=n(246),g=n(265),v=n(120),C=n.n(v),y=n(97),w=n(278);var R=n(282),F=n(94),Q=Object(f.a)((function(t){return{root:{margin:t.spacing(1)},doc:{margin:t.spacing(2)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:t.spacing(1)}},generatedQR:{padding:t.spacing(2)}}})),N={errorCorrectionLevel:"H",type:"image/png",width:200,quality:.3,margin:1,color:{dark:"#000000FF",light:"#FFFFFFFF"}};function T(t){return{inputText:t.textInputs.lastQRCodeTextValue,inputOptions:t.textInputs.lastQRCodeOptions}}function I(t){return{storeInputText:function(e,n){return t(Object(y.b)(e,n))}}}e.default=Object(c.b)(T,I)(Object(g.a)()((function(t){var e="QR Code generator",n=Q(),r=t.inputText,c=t.inputOptions,s=t.storeInputText,f=o.a.useState(""),v=Object(a.a)(f,2),y=v[0],T=v[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(F.a,{title:e}),Object(i.jsxs)("div",{className:n.root,children:[Object(i.jsx)(w.a,{iconType:C.a,title:e}),Object(i.jsx)(d.a,{align:"center",className:n.doc,children:Object(i.jsx)(u.a,{target:"_blank",rel:"noreferrer",href:"https://www.npmjs.com/package/qrcode#qr-code-options",children:"Generation options documentation available here!"})}),Object(i.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(i.jsxs)(j.a,{container:!0,spacing:1,children:[Object(i.jsx)(j.a,{item:!0,md:6,sm:12,xs:12,children:Object(i.jsx)(p.a,{autoFocus:Object(g.b)("md",t.width),label:"Text to store into QR Code",placeholder:"Paste or type the content here",multiline:!0,rows:10,variant:"outlined",margin:"normal",fullWidth:!0,value:r,onChange:function(t){return s("lastQRCodeTextValue",t.target.value)}})}),Object(i.jsx)(j.a,{item:!0,md:6,sm:12,xs:12,children:Object(i.jsx)(p.a,{label:"QR Code generation options",multiline:!0,rows:10,variant:"outlined",margin:"normal",fullWidth:!0,value:c,onChange:function(t){return s("lastQRCodeOptions",t.target.value)}})})]})}),Object(i.jsxs)(b.a,{className:n.toolbar,children:[Object(i.jsx)(m.a,{display:"flex",flexGrow:1}),Object(i.jsx)(R.a,{data:y}),Object(i.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){if(r){var t=c?JSON.parse(c):N;l.a.toDataURL(r,t,(function(e,n){if(e)throw e;T(n),s("lastQRCodeOptions",function(t){if(!t)return"{}";try{var e=JSON.parse(t);return JSON.stringify(e,null,2)}catch(n){return console.error(n,t),"{}"}}(JSON.stringify(t)))}))}},disabled:!r,endIcon:Object(i.jsx)(C.a,{}),children:"Generate"})]}),y&&Object(i.jsxs)(h.a,{className:n.generatedQR,children:[Object(i.jsx)(m.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(i.jsx)("img",{src:y,alt:"QR Code"})}),Object(i.jsxs)(O.a,{children:[Object(i.jsx)(p.a,{label:"Full img tag",fullWidth:!0,value:'<img alt="QR Code" src="'.concat(y,'"/>'),margin:"normal",variant:"outlined"}),Object(i.jsx)(p.a,{label:"QR Code. Copy-paste into 'src' attribute",fullWidth:!0,value:y,margin:"normal",variant:"outlined",multiline:!0,rows:"8"})]})]})]})]})})))},278:function(t,e,n){"use strict";var a=n(2),i=n(64),r=n(246),o=(n(0),Object(r.a)((function(t){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:t.spacing(1)}}})));e.a=function(t){var e=o(),n=t.iconType;return Object(a.jsx)("div",{className:e.titleContainer,children:Object(a.jsxs)("div",{className:e.titleWithIcon,children:[Object(a.jsx)(n,{className:e.icon}),Object(a.jsx)(i.a,{variant:"h5",className:e.title,children:t.title})]})})}},282:function(t,e,n){"use strict";var a=n(2),i=(n(0),n(292)),r=n.n(i),o=n(529),c=n(291),s=n.n(c),l=n(95);e.a=function(t){var e=t.data,n=Object(l.c)().setToasterState;return Object(a.jsx)(o.a,{endIcon:Object(a.jsx)(r.a,{children:"Copy"}),onClick:function(){if(e){var t=e.substr(0,20),a="Content copied into clipboard: ".concat(t," \u2026");s.a(e,{format:"text/plain"}),n({open:!0,message:a,type:"success",autoHideDuration:2e3})}},disabled:!e,variant:"contained",color:"primary",children:"Copy"})}}}]);
//# sourceMappingURL=28.11b9e57e.chunk.js.map