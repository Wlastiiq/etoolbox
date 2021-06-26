(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[16],{1055:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return M})),n.d(t,"mapDispatchToProps",(function(){return A}));var r=n(42),a=n(2),c=n(0),i=n.n(c),o=n(96),u=n(94),s=n(265),l=n(250),d=n(323),b=n(525),f=n(213),j=n(526),p=n(1038),h=n(524),m=n(527),v=n(417),g=n(123),O=n.n(g),x=n(945),y=n.n(x),w=n(278),C=n(411),k=n(41),S=n(8),E=n(523),T=n(246),N=Object(S.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(E.a),P=Object(S.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(h.a),F=Object(T.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tableHeader:{backgroundColor:e.palette.primary.main},dateColumn:{textAlign:"center",minWidth:120},watchColumn:{textAlign:"center"}}})),D=n(136),R=n(412),_=n(97);function M(e){return{inputText:e.textInputs.lastGithubUsernameValue,projects:e.githubUserProjects.projects,searching:e.githubUserProjects.searching}}function A(e){return{listGithubUserProjectsRequested:function(t){return e(Object(k.c)(t))},storeInputText:function(t,n){return e(Object(_.b)(t,n))}}}t.default=Object(o.b)(M,A)(Object(s.a)()((function(e){var t="Github user projects",n=F(),c=e.inputText,o=e.searching,g=e.projects,x=e.listGithubUserProjectsRequested,k=e.storeInputText,S=i.a.useState(c),E=Object(r.a)(S,2),T=E[0],_=E[1],M=Object(D.c)().setGlobalSpinnerState;return i.a.useEffect((function(){o&&c?M({open:!0}):setTimeout((function(){return M({open:!1})}),500)}),[o,c,M]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{title:t}),Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(w.a,{iconType:O.a,title:t}),Object(a.jsxs)(l.a,{className:n.toolbar,children:[Object(a.jsx)(C.a,{autofocus:Object(s.b)("md",e.width),label:"Username",initialFilter:T,onFilterChange:function(e){_(e),x(e),k("lastGithubUsernameValue",e)}}),Object(a.jsx)(d.a,{display:"flex",flexGrow:1}),Object(a.jsx)(R.a,{count:g.length,searching:o})]}),Object(a.jsx)(b.a,{component:f.a,children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(p.a,{className:n.tableHeader,children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(N,{component:"th",scope:"row",children:"Project"}),Object(a.jsx)(N,{component:"th",scope:"row",children:"Description"}),Object(a.jsx)(N,{component:"th",scope:"row",className:n.dateColumn,children:"Updated"}),Object(a.jsx)(N,{component:"th",scope:"row",children:Object(a.jsx)(y.a,{})})]})}),Object(a.jsx)(m.a,{children:g.map((function(e){return Object(a.jsxs)(P,{children:[Object(a.jsx)(N,{children:Object(a.jsx)(v.a,{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.name})}),Object(a.jsx)(N,{children:e.description}),Object(a.jsx)(N,{className:n.dateColumn,children:new Date(e.updated_at).toLocaleDateString()}),Object(a.jsx)(N,{className:n.watchColumn,children:e.watchers_count})]},e.id)}))})]})})]})]})})))},278:function(e,t,n){"use strict";var r=n(2),a=n(64),c=n(246),i=(n(0),Object(c.a)((function(e){return{title:{wordBreak:"break-word"},titleWithIcon:{display:"flex",alignItems:"center"},titleContainer:{display:"flex",justifyContent:"center"},icon:{height:"40px",width:"40px",marginRight:e.spacing(1)}}})));t.a=function(e){var t=i(),n=e.iconType;return Object(r.jsx)("div",{className:t.titleContainer,children:Object(r.jsxs)("div",{className:t.titleWithIcon,children:[Object(r.jsx)(n,{className:t.icon}),Object(r.jsx)(a.a,{variant:"h5",className:t.title,children:e.title})]})})}},314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e,t,n){var a=this,c=r.useRef(null),i=r.useRef(0),o=r.useRef(null),u=r.useRef([]),s=r.useRef(),l=r.useRef(),d=r.useRef(e),b=r.useRef(!0);d.current=e;var f=!t&&0!==t&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");t=+t||0;var j=!!(n=n||{}).leading,p=!("trailing"in n)||!!n.trailing,h="maxWait"in n,m=h?Math.max(+n.maxWait||0,t):null,v=r.useCallback((function(e){var t=u.current,n=s.current;return u.current=s.current=null,i.current=e,l.current=d.current.apply(n,t)}),[]),g=r.useCallback((function(e,t){f&&cancelAnimationFrame(o.current),o.current=f?requestAnimationFrame(e):setTimeout(e,t)}),[f]),O=r.useCallback((function(e){if(!b.current)return!1;var n=e-c.current,r=e-i.current;return!c.current||n>=t||n<0||h&&r>=m}),[m,h,t]),x=r.useCallback((function(e){return o.current=null,p&&u.current?v(e):(u.current=s.current=null,l.current)}),[v,p]),y=r.useCallback((function(){var e=Date.now();if(O(e))return x(e);var n=e-c.current,r=e-i.current,a=t-n,o=h?Math.min(a,m-r):a;g(y,o)}),[m,h,O,g,x,t]),w=r.useCallback((function(){o.current&&(f?cancelAnimationFrame(o.current):clearTimeout(o.current)),i.current=0,u.current=c.current=s.current=o.current=null}),[f]),C=r.useCallback((function(){return o.current?x(Date.now()):l.current}),[x]);r.useEffect((function(){return b.current=!0,function(){b.current=!1}}),[]);var k=r.useCallback((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=Date.now(),d=O(r);if(u.current=e,s.current=a,c.current=r,d){if(!o.current&&b.current)return i.current=c.current,g(y,t),j?v(c.current):l.current;if(h)return g(y,t),v(c.current)}return o.current||g(y,t),l.current}),[v,j,h,O,g,y,t]),S=r.useCallback((function(){return!!o.current}),[]);return r.useMemo((function(){return{callback:k,cancel:w,flush:C,pending:S}}),[k,w,C,S])}},394:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(395);t.useDebounce=r.default;var a=n(314);t.useDebouncedCallback=a.default;var c=n(396);t.useThrottledCallback=c.default},395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(314);function c(e,t){return e===t}t.default=function(e,t,n){var i=n&&n.equalityFn||c,o=r.useState(e),u=o[0],s=o[1],l=a.default(r.useCallback((function(e){return s(e)}),[]),t,n),d=r.useRef(e);return r.useEffect((function(){i(d.current,e)||(l.callback(e),d.current=e)}),[e,l,i]),[u,{cancel:l.cancel,pending:l.pending,flush:l.flush}]}},396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(314);t.default=function(e,t,n){var a=void 0===n?{}:n,c=a.leading,i=void 0===c||c,o=a.trailing,u=void 0===o||o;return r.default(e,t,{maxWait:t,leading:i,trailing:u})}},397:function(e,t,n){"use strict";var r=n(15),a=n(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),i=(0,r(n(18)).default)(c.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=i},411:function(e,t,n){"use strict";var r=n(42),a=n(2),c=n(0),i=n.n(c),o=n(1030),u=n(1058),s=n(1028),l=n(944),d=n(251),b=n(397),f=n.n(b),j=n(246),p=Object(j.a)((function(e){return{root:{margin:e.spacing(1)}}})),h=n(394);t.a=function(e){var t=e.autofocus,n=e.initialFilter,c=e.label,b=e.onFilterChange,j=i.a.useState(""),m=Object(r.a)(j,2),v=m[0],g=m[1],O=p(),x=c||"Search",y=Object(h.useDebouncedCallback)((function(e){return b(e)}),300);return i.a.useEffect((function(){g(n)}),[n]),i.a.useEffect((function(){return y.callback(v)}),[v,y]),Object(a.jsxs)(o.a,{className:O.root,children:[Object(a.jsx)(u.a,{htmlFor:"searchField",children:x}),Object(a.jsx)(s.a,{id:"searchField",autoFocus:t,type:"text",value:v,onChange:function(e){return g(e.target.value)},endAdornment:Object(a.jsx)(l.a,{position:"end",children:Object(a.jsx)(d.a,{children:Object(a.jsx)(f.a,{})})})})]})}},412:function(e,t,n){"use strict";var r=n(42),a=n(2),c=n(0),i=n.n(c),o=n(64),u=n(246),s=Object(u.a)((function(e){return{root:{margin:e.spacing(1)}}})),l=n(53);t.a=function(e){var t=s(),n=i.a.useState(l.b),c=Object(r.a)(n,2),u=c[0],d=c[1],b=e.count,f=e.searching;return i.a.useEffect((function(){f?d("filtering\u2026"):setTimeout((function(){return d(l.b)}),800)}),[f]),Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(o.a,{align:"right",children:u}),Object(a.jsx)(o.a,{align:"right",children:b})]})}},417:function(e,t,n){"use strict";var r=n(1),a=n(5),c=n(0),i=(n(4),n(6)),o=n(13),u=n(8),s=n(68),l=n(11),d=n(64),b=c.forwardRef((function(e,t){var n=e.classes,u=e.className,b=e.color,f=void 0===b?"primary":b,j=e.component,p=void 0===j?"a":j,h=e.onBlur,m=e.onFocus,v=e.TypographyClasses,g=e.underline,O=void 0===g?"hover":g,x=e.variant,y=void 0===x?"inherit":x,w=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),C=Object(s.a)(),k=C.isFocusVisible,S=C.onBlurVisible,E=C.ref,T=c.useState(!1),N=T[0],P=T[1],F=Object(l.a)(t,E);return c.createElement(d.a,Object(r.a)({className:Object(i.a)(n.root,n["underline".concat(Object(o.a)(O))],u,N&&n.focusVisible,"button"===p&&n.button),classes:v,color:f,component:p,onBlur:function(e){N&&(S(),P(!1)),h&&h(e)},onFocus:function(e){k(e)&&P(!0),m&&m(e)},ref:F,variant:y},w))}));t.a=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b)},944:function(e,t,n){"use strict";var r=n(1),a=n(5),c=n(0),i=(n(4),n(6)),o=n(64),u=n(8),s=n(308),l=c.forwardRef((function(e,t){var n=e.children,u=e.classes,l=e.className,d=e.component,b=void 0===d?"div":d,f=e.disablePointerEvents,j=void 0!==f&&f,p=e.disableTypography,h=void 0!==p&&p,m=e.position,v=e.variant,g=Object(a.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(s.b)()||{},x=v;return v&&O.variant,O&&!x&&(x=O.variant),c.createElement(s.a.Provider,{value:null},c.createElement(b,Object(r.a)({className:Object(i.a)(u.root,l,j&&u.disablePointerEvents,O.hiddenLabel&&u.hiddenLabel,"filled"===x&&u.filled,{start:u.positionStart,end:u.positionEnd}[m],"dense"===O.margin&&u.marginDense),ref:t},g),"string"!==typeof n||h?n:c.createElement(o.a,{color:"textSecondary"},n)))}));t.a=Object(u.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(l)},945:function(e,t,n){"use strict";var r=n(15),a=n(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),i=(0,r(n(18)).default)(c.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i}}]);
//# sourceMappingURL=16.a0191686.chunk.js.map