(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[12],{1059:function(e,t,n){"use strict";n.r(t),n.d(t,"mapStateToProps",(function(){return E})),n.d(t,"mapDispatchToProps",(function(){return _}));var r=n(23),a=n(0),c=n.n(a),o=n(53),i=n(42),s=n(334),u=n(308),l=n(328),b=n(1060),j=n(321),d=n(188),h=n(322),p=n(323),f=n(320),O=n(324),m=n(459),g=n(129),x=n.n(g),v=n(974),w=n.n(v),C=n(52),y=n(455),P=n(51),S=n(7),F=n(319),k=n(123),N=Object(S.a)((function(){return{body:{fontSize:14,whiteSpace:"normal",wordBreak:"break-word"}}}))(F.a),T=Object(S.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(f.a),D=Object(k.a)((function(e){return{root:{margin:e.spacing(1)},toolbar:{margin:0,padding:0,"& > *":{marginLeft:e.spacing(1)}},tableHeader:{backgroundColor:e.palette.primary.main},dateColumn:{textAlign:"center",minWidth:120},watchColumn:{textAlign:"center"}}})),U=n(159),V=n(456),G=n(55),z=n(2);function E(e){return{inputText:e.textInputs.lastGithubUsernameValue,projects:e.githubUserProjects.projects,searching:e.githubUserProjects.searching}}function _(e){return{listGithubUserProjectsRequested:function(t){return e(Object(P.c)(t))},storeInputText:function(t,n){return e(Object(G.b)(t,n))}}}t.default=Object(o.b)(E,_)(Object(s.a)()((function(e){var t="Github user projects",n=D(),a=e.inputText,o=e.searching,g=e.projects,v=e.listGithubUserProjectsRequested,P=e.storeInputText,S=c.a.useState(a),F=Object(r.a)(S,2),k=F[0],G=F[1],E=Object(U.c)().setGlobalSpinnerState,_=c.a.useState(0),A=Object(r.a)(_,2),B=A[0],R=A[1],H=c.a.useState(10),M=Object(r.a)(H,2),I=M[0],L=M[1];return c.a.useEffect((function(){o&&a?E({open:!0}):setTimeout((function(){return E({open:!1})}),500)}),[o,a,E]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(i.a,{title:t}),Object(z.jsxs)("div",{className:n.root,children:[Object(z.jsx)(C.a,{iconType:x.a,title:t}),Object(z.jsxs)(u.a,{className:n.toolbar,children:[Object(z.jsx)(y.a,{autofocus:Object(s.c)("md",e.width),label:"Username",initialFilter:k,onFilterChange:function(e){G(e),v(e),P("lastGithubUsernameValue",e)}}),Object(z.jsx)(l.a,{display:"flex",flexGrow:1}),Object(z.jsx)(V.a,{count:g.length,searching:o})]}),Object(z.jsx)(b.a,{rowsPerPageOptions:[5,10,25,50,100],component:"div",count:g.length,rowsPerPage:I,page:B,onPageChange:function(e,t){return R(t)},onRowsPerPageChange:function(e){L(+e.target.value),R(0)}}),Object(z.jsx)(j.a,{component:d.a,children:Object(z.jsxs)(h.a,{children:[Object(z.jsx)(p.a,{className:n.tableHeader,children:Object(z.jsxs)(f.a,{children:[Object(z.jsx)(N,{component:"th",scope:"row",children:"Project"}),Object(z.jsx)(N,{component:"th",scope:"row",children:"Description"}),Object(z.jsx)(N,{component:"th",scope:"row",className:n.dateColumn,children:"Updated"}),Object(z.jsx)(N,{component:"th",scope:"row",children:Object(z.jsx)(w.a,{})})]})}),Object(z.jsx)(O.a,{children:g.slice(B*I,B*I+I).map((function(e){return Object(z.jsxs)(T,{children:[Object(z.jsx)(N,{children:Object(z.jsx)(m.a,{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.name})}),Object(z.jsx)(N,{children:e.description}),Object(z.jsx)(N,{className:n.dateColumn,children:new Date(e.updated_at).toLocaleDateString()}),Object(z.jsx)(N,{className:n.watchColumn,children:e.watchers_count})]},e.id)}))})]})})]})]})})))},455:function(e,t,n){"use strict";var r=n(23),a=n(0),c=n.n(a),o=n(260),i=n(265),s=n(258),u=n(1047),l=n(309),b=n(516),j=n.n(b),d=n(123),h=Object(d.a)((function(e){return{root:{margin:e.spacing(1)}}})),p=n(515),f=n(2);t.a=function(e){var t=e.autofocus,n=e.initialFilter,a=e.label,b=e.onFilterChange,d=c.a.useState(""),O=Object(r.a)(d,2),m=O[0],g=O[1],x=h(),v=a||"Search",w=Object(p.useDebouncedCallback)((function(e){return b(e)}),300);return c.a.useEffect((function(){g(n)}),[n]),c.a.useEffect((function(){return w(m)}),[m,w]),Object(f.jsxs)(o.a,{className:x.root,children:[Object(f.jsx)(i.a,{htmlFor:"searchField",children:v}),Object(f.jsx)(s.a,{id:"searchField",autoFocus:t,type:"text",value:m,onChange:function(e){return g(e.target.value)},endAdornment:Object(f.jsx)(u.a,{position:"end",children:Object(f.jsx)(l.a,{children:Object(f.jsx)(j.a,{})})})})]})}},456:function(e,t,n){"use strict";var r=n(23),a=n(0),c=n.n(a),o=n(79),i=n(123),s=Object(i.a)((function(e){return{root:{margin:e.spacing(1)}}})),u=n(72),l=n(2);t.a=function(e){var t=s(),n=c.a.useState(u.b),a=Object(r.a)(n,2),i=a[0],b=a[1],j=e.count,d=e.searching;return c.a.useEffect((function(){d?b("filtering\u2026"):setTimeout((function(){return b(u.b)}),800)}),[d]),Object(l.jsxs)("div",{className:t.root,children:[Object(l.jsx)(o.a,{align:"right",children:i}),Object(l.jsx)(o.a,{align:"right",children:j})]})}},459:function(e,t,n){"use strict";var r=n(1),a=n(3),c=n(0),o=(n(4),n(5)),i=n(9),s=n(7),u=n(86),l=n(11),b=n(79),j=c.forwardRef((function(e,t){var n=e.classes,s=e.className,j=e.color,d=void 0===j?"primary":j,h=e.component,p=void 0===h?"a":h,f=e.onBlur,O=e.onFocus,m=e.TypographyClasses,g=e.underline,x=void 0===g?"hover":g,v=e.variant,w=void 0===v?"inherit":v,C=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),y=Object(u.a)(),P=y.isFocusVisible,S=y.onBlurVisible,F=y.ref,k=c.useState(!1),N=k[0],T=k[1],D=Object(l.a)(t,F);return c.createElement(b.a,Object(r.a)({className:Object(o.a)(n.root,n["underline".concat(Object(i.a)(x))],s,N&&n.focusVisible,"button"===p&&n.button),classes:m,color:d,component:p,onBlur:function(e){N&&(S(),T(!1)),f&&f(e)},onFocus:function(e){P(e)&&T(!0),O&&O(e)},ref:D,variant:w},C))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(j)},974:function(e,t,n){"use strict";var r=n(16),a=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),o=(0,r(n(19)).default)(c.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=o}}]);
//# sourceMappingURL=12.7684ce29.chunk.js.map