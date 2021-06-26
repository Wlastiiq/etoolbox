(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[23],{1035:function(e,r,t){"use strict";t.r(r),t.d(r,"mapStateToProps",(function(){return I})),t.d(r,"mapDispatchToProps",(function(){return N}));var o=t(49),n=t(2),a=t(0),p=t.n(a),i=t(93),c=t(250),s=t(317),l=t(261),u=t(521),d=t(242),f=t(112),h=t.n(f),m=t(1018),b=t(1033),y=t(94);function j(e){this.message=e}j.prototype=new Error,j.prototype.name="InvalidCharacterError";var g="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new j("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,o,n=0,a=0,p="";o=r.charAt(a++);~o&&(t=n%4?64*t+o:o,n++%4)?p+=String.fromCharCode(255&t>>(-2*n&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return p};function v(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(g(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return g(r)}}function O(e){this.message=e}O.prototype=new Error,O.prototype.name="InvalidTokenError";var x=function(e,r){if("string"!=typeof e)throw new O("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(v(e.split(".")[t]))}catch(e){throw new O("Invalid token specified: "+e.message)}};function w(e,r){if(!e)return"";try{var t=x(e,{header:r});return JSON.stringify(t,null,4)}catch(j){return j.toString()}}var C=t(274),T=t(278),S=t(91),P=Object(d.a)((function(e){return{root:{margin:e.spacing(1)},decoded:{padding:e.spacing(1),border:"1px solid grey",width:"100%",overflow:"auto"},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}}}}));function I(e){return{inputText:e.textInputs.lastJWT}}function N(e){return{storeInputText:function(r,t){return e(Object(y.b)(r,t))}}}r.default=Object(i.b)(I,N)(Object(l.a)()((function(e){var r="JWT decoder\u2026",t=P(),a=e.inputText,i=e.storeInputText,d=p.a.useState(w(a,!0)),f=Object(o.a)(d,2),y=f[0],j=f[1],g=p.a.useState(w(a,!1)),v=Object(o.a)(g,2),O=v[0],x=v[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S.a,{title:r}),Object(n.jsxs)("div",{className:t.root,children:[Object(n.jsx)(C.a,{iconType:h.a,title:r}),Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(n.jsx)(m.a,{autoFocus:Object(l.b)("md",e.width),id:"jwt",label:"JSON web token to decode",placeholder:"Paste or type the content here",multiline:!0,rows:4,variant:"outlined",margin:"normal",fullWidth:!0,value:a,onChange:function(e){return i("lastJWT",e.target.value)}})}),Object(n.jsxs)(c.a,{className:t.toolbar,children:[Object(n.jsx)(s.a,{display:"flex",flexGrow:1}),Object(n.jsx)(T.a,{data:O}),Object(n.jsx)(u.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(h.a,{children:"Decode"}),disabled:!a,onClick:function(){j(w(a,!0)),x(w(a,!1))},children:"Decode"})]}),Object(n.jsx)("div",{className:t.decoded,children:Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{language:"json",children:y}),Object(n.jsx)(b.a,{language:"json",children:O})]})})]})]})})))},274:function(e,r,t){"use strict";var o=t(2),n=t(62),a=t(242),p=(t(0),Object(a.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}})));r.a=function(e){var r=p(),t=e.iconType;return Object(o.jsx)("div",{className:r.titleContainer,children:Object(o.jsxs)("div",{className:r.titleWithIcon,children:[Object(o.jsx)(t,{className:r.icon}),Object(o.jsx)(n.a,{variant:"h5",className:r.title,children:e.title})]})})}},278:function(e,r,t){"use strict";var o=t(2),n=(t(0),t(288)),a=t.n(n),p=t(521),i=t(287),c=t.n(i),s=t(92);r.a=function(e){var r=e.data,t=Object(s.c)().setToasterState;return Object(o.jsx)(p.a,{endIcon:Object(o.jsx)(a.a,{children:"Copy"}),onClick:function(){if(r){var e=r.substr(0,20),o="Content copied into clipboard: ".concat(e," \u2026");c.a(r,{format:"text/plain"}),t({open:!0,message:o,type:"success",autoHideDuration:2e3})}},disabled:!r,variant:"contained",color:"primary",children:"Copy"})}},317:function(e,r,t){"use strict";var o=t(43),n=t(1),a=(t(4),t(64));var p=function(e){var r=function(r){var t=e(r);return r.css?Object(n.a)({},Object(a.a)(t,e(Object(n.a)({theme:r.theme},r.css))),function(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(o.a)(e.filterProps)),r};var i=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var o=function(e){return r.reduce((function(r,t){var o=t(e);return o?Object(a.a)(r,o):r}),{})};return o.propTypes={},o.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),o},c=t(22),s=t(95);function l(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var u=function(e){var r=e.prop,t=e.cssProperty,o=void 0===t?e.prop:t,n=e.themeKey,a=e.transform,p=function(e){if(null==e[r])return null;var t=e[r],p=l(e.theme,n)||{};return Object(s.a)(e,t,(function(e){var r;return"function"===typeof p?r=p(e):Array.isArray(p)?r=p[e]||e:(r=l(p,e)||e,a&&(r=a(r))),!1===o?r:Object(c.a)({},o,r)}))};return p.propTypes={},p.filterProps=[r],p};function d(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var f=i(u({prop:"border",themeKey:"borders",transform:d}),u({prop:"borderTop",themeKey:"borders",transform:d}),u({prop:"borderRight",themeKey:"borders",transform:d}),u({prop:"borderBottom",themeKey:"borders",transform:d}),u({prop:"borderLeft",themeKey:"borders",transform:d}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),h=i(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),m=i(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),b=i(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),y=i(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),j=i(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),g=u({prop:"boxShadow",themeKey:"shadows"});function v(e){return e<=1?"".concat(100*e,"%"):e}var O=u({prop:"width",transform:v}),x=u({prop:"maxWidth",transform:v}),w=u({prop:"minWidth",transform:v}),C=u({prop:"height",transform:v}),T=u({prop:"maxHeight",transform:v}),S=u({prop:"minHeight",transform:v}),P=(u({prop:"size",cssProperty:"width",transform:v}),u({prop:"size",cssProperty:"height",transform:v}),i(O,x,w,C,T,S,u({prop:"boxSizing"}))),I=t(262),N=i(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),k=t(5),K=t(0),A=t.n(K),W=t(7),R=t(30),E=t.n(R),J=t(210);function z(e,r){var t={};return Object.keys(e).forEach((function(o){-1===r.indexOf(o)&&(t[o]=e[o])})),t}var D=t(50),G=function(e){var r=function(e){return function(r){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.name,p=Object(k.a)(o,["name"]),i=a,c="function"===typeof r?function(e){return{root:function(t){return r(Object(n.a)({theme:e},t))}}}:{root:r},s=Object(J.a)(c,Object(n.a)({Component:e,name:a||e.displayName,classNamePrefix:i},p));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var l=A.a.forwardRef((function(r,o){var a=r.children,p=r.className,i=r.clone,c=r.component,l=Object(k.a)(r,["children","className","clone","component"]),u=s(r),d=Object(W.a)(u.root,p),f=l;if(t&&(f=z(f,t)),i)return A.a.cloneElement(a,Object(n.a)({className:Object(W.a)(a.props.className,d)},f));if("function"===typeof a)return a(Object(n.a)({className:d},f));var h=c||e;return A.a.createElement(h,Object(n.a)({ref:o,className:d},f),a)}));return E()(l,e),l}}(e);return function(e,t){return r(e,Object(n.a)({defaultTheme:D.a},t))}},B=p(i(f,h,m,b,y,j,g,P,I.b,N)),F=G("div")(B,{name:"MuiBox"});r.a=F}}]);
//# sourceMappingURL=23.a8348c0d.chunk.js.map