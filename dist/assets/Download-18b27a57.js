import{y as N,t as E,c as S,_ as x,r as b,a as R,b as k,j as t}from"./index-6b0a12f1.js";import{P as G}from"./PageContainer-9a42d937.js";import{B as X,H as J}from"./Breadcrumb-39d0254b.js";import{T as F,a as V,b as K,c as Q,d as Y}from"./TableRow-afc66ed5.js";import{c as Z,G as v,P as ee}from"./List-fa5ce5f1.js";import{a as $,g as A,s as h,T as oe,l as te,c as se,d as P,e as B,k as ne,B as w}from"./Box-fd20700d.js";import{T as re}from"./TableContainer-3b9cefc4.js";import{T as ae}from"./TablePagination-be21d900.js";import"./createReactComponent-4af5135f.js";import"./IconLayoutDashboard-807aee79.js";import"./KeyboardArrowRight-9ecdb651.js";import"./IconButton-1ea28135.js";import"./Toolbar-8e330d82.js";import"./Select-e55aa3d1.js";import"./MenuItem-60e0cbd1.js";import"./dividerClasses-7b2d94df.js";function ie(e){return A("MuiLink",e)}const le=$("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),ce=le,I={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},de=e=>I[e]||e,ue=({theme:e,ownerState:o})=>{const s=de(o.color),r=N(e,`palette.${s}`,!1)||o.color,a=N(e,`palette.${s}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:E(r,.4)},pe=ue,me=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],be=e=>{const{classes:o,component:s,focusVisible:r,underline:a}=e,l={root:["root",`underline${S(a)}`,s==="button"&&"button",r&&"focusVisible"]};return B(l,ie,o)},xe=h(oe,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[`underline${S(s.underline)}`],s.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>x({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&x({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:pe({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ce.focusVisible}`]:{outline:"auto"}})),fe=b.forwardRef(function(o,s){const r=R({props:o,name:"MuiLink"}),{className:a,color:l="primary",component:c="a",onBlur:f,onFocus:p,TypographyClasses:g,underline:y="always",variant:d="inherit",sx:u}=r,n=k(r,me),{isFocusVisibleRef:i,onBlur:D,onFocus:q,ref:H}=te(),[U,T]=b.useState(!1),_=se(s,H),z=C=>{D(C),i.current===!1&&T(!1),f&&f(C)},W=C=>{q(C),i.current===!0&&T(!0),p&&p(C)},L=x({},r,{color:l,component:c,focusVisible:U,underline:y,variant:d}),O=be(L);return t.jsx(xe,x({color:l,className:P(O.root,a),classes:g,component:c,onBlur:z,onFocus:W,ref:_,ownerState:L,variant:d,sx:[...Object.keys(I).includes(l)?[]:[{color:l}],...Array.isArray(u)?u:[u]]},n))}),ge=fe,he=Z(t.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function ye(e){return A("MuiTableSortLabel",e)}const Ce=$("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),j=Ce,ve=["active","children","className","direction","hideSortIcon","IconComponent"],Se=e=>{const{classes:o,direction:s,active:r}=e,a={root:["root",r&&"active"],icon:["icon",`iconDirection${S(s)}`]};return B(a,ye,o)},je=h(ne,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.active&&o.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${j.icon}`]:{opacity:.5}},[`&.${j.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${j.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),Pe=h("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.icon,o[`iconDirection${S(s.direction)}`]]}})(({theme:e,ownerState:o})=>x({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},o.direction==="desc"&&{transform:"rotate(0deg)"},o.direction==="asc"&&{transform:"rotate(180deg)"})),De=b.forwardRef(function(o,s){const r=R({props:o,name:"MuiTableSortLabel"}),{active:a=!1,children:l,className:c,direction:f="asc",hideSortIcon:p=!1,IconComponent:g=he}=r,y=k(r,ve),d=x({},r,{active:a,direction:f,hideSortIcon:p,IconComponent:g}),u=Se(d);return t.jsxs(je,x({className:P(u.root,c),component:"span",disableRipple:!0,ownerState:d,ref:s},y,{children:[l,p&&!a?null:t.jsx(Pe,{as:g,className:P(u.icon),ownerState:d})]}))}),Te=De,M=[{slNo:1,vendorName:"Multiple Vendor",sourcePage:"Excess CooP",subFunction:"-",requestedDate:"07/01/23 10:00 AM",status:"Completed"},{slNo:2,vendorName:"Multiple Vendor",sourcePage:"Missed Invoicing",subFunction:"-",requestedDate:"07/02/23 11:00 AM",status:"Completed"},{slNo:3,vendorName:"Multiple Vendor",sourcePage:"P&L Analysis",subFunction:"-",requestedDate:"07/03/23 12:00 PM",status:"Completed"},{slNo:4,vendorName:"Multiple Vendor",sourcePage:"Shortage Claim",subFunction:"-",requestedDate:"07/04/23 01:00 PM",status:"Completed"},{slNo:5,vendorName:"NA",sourcePage:"Price Claim",subFunction:"-",requestedDate:"07/05/23 02:00 PM",status:"Completed"}],m=h(F)(({theme:e})=>({border:"1px solid #ddd",padding:"8px",color:"black"})),Le=h(F)(({theme:e})=>({border:"1px solid #ddd",backgroundColor:"#285a9e",color:"white",fontWeight:"bold",padding:"8px"})),Ne=h(V)(({theme:e})=>({"&:nth-of-type(even)":{backgroundColor:"#f0f5ff"},"&:nth-of-type(odd)":{backgroundColor:"white"}})),Oe=()=>{const[e,o]=b.useState("asc"),[s,r]=b.useState("slNo"),[a,l]=b.useState(0),[c,f]=b.useState(10),p=(n,i)=>{o(s===i&&e==="asc"?"desc":"asc"),r(i)},g=n=>i=>{p(i,n)},y=(n,i)=>{l(i)},d=n=>{f(parseInt(n.target.value,10)),l(0)},u=M.slice().sort((n,i)=>s==="slNo"?e==="asc"?n.slNo-i.slNo:i.slNo-n.slNo:e==="asc"?n[s].localeCompare(i[s]):i[s].localeCompare(n[s]));return t.jsx(G,{title:"Download Manager",children:t.jsxs(v,{container:!0,spacing:3,children:[t.jsx(v,{item:!0,xs:12,children:t.jsx(X,{titles:["Download Manager"]})}),t.jsx(v,{item:!0,xs:12,children:t.jsx(J,{title:"Download Manager"})}),t.jsx(v,{item:!0,xs:12,children:t.jsxs(w,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[t.jsx(re,{component:ee,sx:{maxWidth:"100%",overflowX:"auto"},children:t.jsxs(K,{"aria-label":"download manager table",children:[t.jsx(Q,{children:t.jsx(V,{children:["Sl No","Vendor Name","Source Page","Sub Function","Requested Date","Status","Action"].map((n,i)=>t.jsx(Le,{sortDirection:s===n.toLowerCase().replace(" ","")?e:!1,children:t.jsx(Te,{active:s===n.toLowerCase().replace(" ",""),direction:s===n.toLowerCase().replace(" ","")?e:"asc",onClick:g(n.toLowerCase().replace(" ","")),children:n})},n))})}),t.jsx(Y,{children:u.slice(a*c,a*c+c).map(n=>t.jsxs(Ne,{children:[t.jsx(m,{children:n.slNo}),t.jsx(m,{children:n.vendorName}),t.jsx(m,{children:n.sourcePage}),t.jsx(m,{align:"center",children:n.subFunction}),t.jsx(m,{children:n.requestedDate}),t.jsx(m,{children:n.status}),t.jsx(m,{children:t.jsx(ge,{href:"#",underline:"hover",children:"Download Now"})})]},n.slNo))})]})}),t.jsx(w,{sx:{p:2,display:"flex",justifyContent:"flex-end",width:"100%"},children:t.jsx(ae,{rowsPerPageOptions:[10,15,30,50],component:"div",count:M.length,rowsPerPage:c,page:a,onPageChange:y,onRowsPerPageChange:d})})]})})]})})};export{Oe as default};
