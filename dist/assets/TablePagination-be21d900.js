import{j as e,r as K,b as X,e as nt,_ as s,a as at}from"./index-6b0a12f1.js";import{a as lt,g as it,s as P,d as F,e as rt}from"./Box-fd20700d.js";import{a as ct,K as ut}from"./KeyboardArrowRight-9ecdb651.js";import{c as Y,d as Q,n as pt}from"./List-fa5ce5f1.js";import{I as D}from"./IconButton-1ea28135.js";import{T as G}from"./TableRow-afc66ed5.js";import{T as dt}from"./Toolbar-8e330d82.js";import{S as gt,c as bt}from"./Select-e55aa3d1.js";import{M as Bt}from"./MenuItem-60e0cbd1.js";const mt=Y(e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Pt=Y(e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),ht=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],xt=K.forwardRef(function(o,B){var R,h,y,M,$,k,x,u;const{backIconButtonProps:A,count:I,disabled:f=!1,getItemAriaLabel:p,nextIconButtonProps:z,onPageChange:v,page:a,rowsPerPage:g,showFirstButton:b,showLastButton:L,slots:d={},slotProps:n={}}=o,H=X(o,ht),l=nt(),U=m=>{v(m,0)},E=m=>{v(m,a-1)},T=m=>{v(m,a+1)},i=m=>{v(m,Math.max(0,Math.ceil(I/g)-1))},r=(R=d.firstButton)!=null?R:D,w=(h=d.lastButton)!=null?h:D,S=(y=d.nextButton)!=null?y:D,_=(M=d.previousButton)!=null?M:D,C=($=d.firstButtonIcon)!=null?$:mt,N=(k=d.lastButtonIcon)!=null?k:Pt,c=(x=d.nextButtonIcon)!=null?x:ct,W=(u=d.previousButtonIcon)!=null?u:ut,Z=l?w:r,O=l?S:_,tt=l?_:S,ot=l?r:w,et=l?n.lastButton:n.firstButton,q=l?n.nextButton:n.previousButton,J=l?n.previousButton:n.nextButton,st=l?n.firstButton:n.lastButton;return e.jsxs("div",s({ref:B},H,{children:[b&&e.jsx(Z,s({onClick:U,disabled:f||a===0,"aria-label":p("first",a),title:p("first",a)},et,{children:l?e.jsx(N,s({},n.lastButtonIcon)):e.jsx(C,s({},n.firstButtonIcon))})),e.jsx(O,s({onClick:E,disabled:f||a===0,color:"inherit","aria-label":p("previous",a),title:p("previous",a)},q??A,{children:l?e.jsx(c,s({},n.nextButtonIcon)):e.jsx(W,s({},n.previousButtonIcon))})),e.jsx(tt,s({onClick:T,disabled:f||(I!==-1?a>=Math.ceil(I/g)-1:!1),color:"inherit","aria-label":p("next",a),title:p("next",a)},J??z,{children:l?e.jsx(W,s({},n.previousButtonIcon)):e.jsx(c,s({},n.nextButtonIcon))})),L&&e.jsx(ot,s({onClick:i,disabled:f||a>=Math.ceil(I/g)-1,"aria-label":p("last",a),title:p("last",a)},st,{children:l?e.jsx(C,s({},n.firstButtonIcon)):e.jsx(N,s({},n.lastButtonIcon))}))]}))}),It=xt;function ft(t){return it("MuiTablePagination",t)}const vt=lt("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),j=vt;var V;const Rt=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],Lt=P(G,{name:"MuiTablePagination",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}})),Tt=P(dt,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(t,o)=>s({[`& .${j.actions}`]:o.actions},o.toolbar)})(({theme:t})=>({minHeight:52,paddingRight:2,[`${t.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${j.actions}`]:{flexShrink:0,marginLeft:20}})),wt=P("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(t,o)=>o.spacer})({flex:"1 1 100%"}),St=P("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(t,o)=>o.selectLabel})(({theme:t})=>s({},t.typography.body2,{flexShrink:0})),Ct=P(gt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(t,o)=>s({[`& .${j.selectIcon}`]:o.selectIcon,[`& .${j.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${j.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),jt=P(Bt,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(t,o)=>o.menuItem})({}),yt=P("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(t,o)=>o.displayedRows})(({theme:t})=>s({},t.typography.body2,{flexShrink:0}));function Mt({from:t,to:o,count:B}){return`${t}–${o} of ${B!==-1?B:`more than ${o}`}`}function $t(t){return`Go to ${t} page`}const kt=t=>{const{classes:o}=t;return rt({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},ft,o)},At=K.forwardRef(function(o,B){var R;const h=at({props:o,name:"MuiTablePagination"}),{ActionsComponent:y=It,backIconButtonProps:M,className:$,colSpan:k,component:x=G,count:u,disabled:A=!1,getItemAriaLabel:I=$t,labelDisplayedRows:f=Mt,labelRowsPerPage:p="Rows per page:",nextIconButtonProps:z,onPageChange:v,onRowsPerPageChange:a,page:g,rowsPerPage:b,rowsPerPageOptions:L=[10,25,50,100],SelectProps:d={},showFirstButton:n=!1,showLastButton:H=!1,slotProps:l={},slots:U={}}=h,E=X(h,Rt),T=h,i=kt(T),r=(R=l==null?void 0:l.select)!=null?R:d,w=r.native?"option":jt;let S;(x===G||x==="td")&&(S=k||1e3);const _=Q(r.id),C=Q(r.labelId),N=()=>u===-1?(g+1)*b:b===-1?u:Math.min(u,(g+1)*b);return e.jsx(Lt,s({colSpan:S,ref:B,as:x,ownerState:T,className:F(i.root,$)},E,{children:e.jsxs(Tt,{className:i.toolbar,children:[e.jsx(wt,{className:i.spacer}),L.length>1&&e.jsx(St,{className:i.selectLabel,id:C,children:p}),L.length>1&&e.jsx(Ct,s({variant:"standard"},!r.variant&&{input:V||(V=e.jsx(bt,{}))},{value:b,onChange:a,id:_,labelId:C},r,{classes:s({},r.classes,{root:F(i.input,i.selectRoot,(r.classes||{}).root),select:F(i.select,(r.classes||{}).select),icon:F(i.selectIcon,(r.classes||{}).icon)}),disabled:A,children:L.map(c=>K.createElement(w,s({},!pt(w)&&{ownerState:T},{className:i.menuItem,key:c.label?c.label:c,value:c.value?c.value:c}),c.label?c.label:c))})),e.jsx(yt,{className:i.displayedRows,children:f({from:u===0?0:g*b+1,to:N(),count:u===-1?-1:u,page:g})}),e.jsx(y,{className:i.actions,backIconButtonProps:M,count:u,nextIconButtonProps:z,onPageChange:v,page:g,rowsPerPage:b,showFirstButton:n,showLastButton:H,slotProps:l.actions,slots:U.actions,getItemAriaLabel:I,disabled:A})]})}))}),Gt=At;export{Gt as T};
