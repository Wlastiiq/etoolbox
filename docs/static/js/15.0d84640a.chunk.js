(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[15],{1050:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var o=n(0),i=n(123),a=n(317),r=n(1),c=n(3),s=(n(4),n(5)),l=n(7),d=n(110),u=o.forwardRef((function(e,t){var n=e.children,i=e.classes,a=e.className,l=e.focusVisibleClassName,u=Object(c.a)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(d.a,Object(r.a)({className:Object(s.a)(i.root,a),focusVisibleClassName:Object(s.a)(l,i.focusVisible),ref:t},u),n,o.createElement("span",{className:i.focusHighlight}))})),b=Object(l.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(u),p=n(318),m=["video","audio","picture","iframe","img"],g=o.forwardRef((function(e,t){var n=e.children,i=e.classes,a=e.className,l=e.component,d=void 0===l?"div":l,u=e.image,b=e.src,p=e.style,g=Object(c.a)(e,["children","classes","className","component","image","src","style"]),j=-1!==m.indexOf(d),x=!j&&u?Object(r.a)({backgroundImage:'url("'.concat(u,'")')},p):p;return o.createElement(d,Object(r.a)({className:Object(s.a)(i.root,a,j&&i.media,-1!=="picture img".indexOf(d)&&i.img),ref:t,style:x,src:j?u||b:void 0},g),n)})),j=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(g),x=n(460),f=n(79),h=n(322),v=n(324),O=n(319),w=n(321),y=n(320),C=n(188),N=n(129),S=n.n(N),k=n(90),W=n(136),V=n(459),M=n(2),z=Object(l.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(O.a),B=Object(l.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(y.a);function D(){var e=Object(k.c)().setToasterState;return Object(M.jsx)(w.a,{component:C.a,children:Object(M.jsx)(h.a,{"aria-label":"about this application",children:Object(M.jsxs)(v.a,{children:[Object(M.jsxs)(B,{children:[Object(M.jsx)(z,{component:"th",scope:"row",children:Object(M.jsx)(S.a,{})}),Object(M.jsx)(z,{align:"right",children:Object(M.jsx)(V.a,{href:"https://github.com/amwebexpert/etoolbox",children:"GitHub project"})})]},"github"),Object(M.jsxs)(B,{children:[Object(M.jsx)(z,{component:"th",scope:"row",children:"Version"}),Object(M.jsx)(z,{align:"right",children:"1.9.1"})]},"versionNumber"),Object(M.jsxs)(B,{children:[Object(M.jsx)(z,{component:"th",scope:"row",children:"Updated"}),Object(M.jsx)(z,{align:"right",title:Object(W.b)(),onClick:function(){var t="Build UTC timestamp: [".concat(Object(W.b)(),"]");e({open:!0,message:t,type:"info"})},children:Object(W.a)()})]},"versionDate"),Object(M.jsxs)(B,{children:[Object(M.jsx)(z,{component:"th",scope:"row",children:"Author"}),Object(M.jsx)(z,{align:"right",children:Object(M.jsx)(V.a,{href:"mailto:amwebexpert@gmail.com",children:"amwebexpert@gmail.com"})})]},"author"),Object(M.jsxs)(B,{children:[Object(M.jsx)(z,{component:"th",scope:"row",children:"Icon credits"}),Object(M.jsx)(z,{align:"right",children:Object(M.jsx)(V.a,{href:"https://therealjerrylow.com/",children:"Jerry Low"})})]},"iconMadeBy")]})})})}var T=n(142),A=Object(i.a)((function(e){return{root:{marginTop:10},rootCard:{textAlign:"center"},media:{height:240,margin:e.spacing(3)},appDescription:{marginBottom:e.spacing(4)},openSource:{marginTop:e.spacing(4)}}}));function E(){var e=A();return Object(M.jsx)(x.a,{container:!0,justifyContent:"center",className:e.root,children:Object(M.jsx)(a.a,{className:e.rootCard,children:Object(M.jsxs)(b,{children:[Object(M.jsx)(j,{className:e.media,image:T.a,title:"Web Toolbox"}),Object(M.jsxs)(p.a,{children:[Object(M.jsx)(f.a,{variant:"h5",children:"Web Toolbox"}),Object(M.jsx)(f.a,{variant:"subtitle2",className:e.appDescription,children:"Collection of web developer utilities"}),Object(M.jsx)(D,{}),Object(M.jsxs)(f.a,{variant:"subtitle2",className:e.openSource,children:["Open source app powered by ",Object(M.jsx)(V.a,{href:"https://reactjs.org/docs/create-a-new-react-app.html",children:"Create React App"})]})]})]})})})}},459:function(e,t,n){"use strict";var o=n(1),i=n(3),a=n(0),r=(n(4),n(5)),c=n(9),s=n(7),l=n(86),d=n(11),u=n(79),b=a.forwardRef((function(e,t){var n=e.classes,s=e.className,b=e.color,p=void 0===b?"primary":b,m=e.component,g=void 0===m?"a":m,j=e.onBlur,x=e.onFocus,f=e.TypographyClasses,h=e.underline,v=void 0===h?"hover":h,O=e.variant,w=void 0===O?"inherit":O,y=Object(i.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(l.a)(),N=C.isFocusVisible,S=C.onBlurVisible,k=C.ref,W=a.useState(!1),V=W[0],M=W[1],z=Object(d.a)(t,k);return a.createElement(u.a,Object(o.a)({className:Object(r.a)(n.root,n["underline".concat(Object(c.a)(v))],s,V&&n.focusVisible,"button"===g&&n.button),classes:f,color:p,component:g,onBlur:function(e){V&&(S(),M(!1)),j&&j(e)},onFocus:function(e){N(e)&&M(!0),x&&x(e)},ref:z,variant:w},y))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b)},460:function(e,t,n){"use strict";var o=n(3),i=n(1),a=n(0),r=(n(4),n(5)),c=n(7),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=a.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,b=e.component,p=void 0===b?"div":b,m=e.container,g=void 0!==m&&m,j=e.direction,x=void 0===j?"row":j,f=e.item,h=void 0!==f&&f,v=e.justify,O=e.justifyContent,w=void 0===O?"flex-start":O,y=e.lg,C=void 0!==y&&y,N=e.md,S=void 0!==N&&N,k=e.sm,W=void 0!==k&&k,V=e.spacing,M=void 0===V?0:V,z=e.wrap,B=void 0===z?"wrap":z,D=e.xl,T=void 0!==D&&D,A=e.xs,E=void 0!==A&&A,I=e.zeroMinWidth,R=void 0!==I&&I,H=Object(o.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(r.a)(d.root,u,g&&[d.container,0!==M&&d["spacing-xs-".concat(String(M))]],h&&d.item,R&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==B&&d["wrap-xs-".concat(String(B))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==(v||w)&&d["justify-content-xs-".concat(String(v||w))],!1!==E&&d["grid-xs-".concat(String(E))],!1!==W&&d["grid-sm-".concat(String(W))],!1!==S&&d["grid-md-".concat(String(S))],!1!==C&&d["grid-lg-".concat(String(C))],!1!==T&&d["grid-xl-".concat(String(T))]);return a.createElement(p,Object(i.a)({className:F,ref:t},H))})),b=Object(c.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(o){var i=e.spacing(o);0!==i&&(n["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var o={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,o):e[t.breakpoints.up(n)]=o}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=b}}]);
//# sourceMappingURL=15.0d84640a.chunk.js.map