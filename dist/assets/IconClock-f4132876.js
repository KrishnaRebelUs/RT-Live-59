import{b as x,_ as n,j as w,r as R,a as j}from"./index-6b0a12f1.js";import{c as D,g as N,a as _,s as I,d as z,e as O}from"./Box-fd20700d.js";import{e as T,m as E,f as L,c as U}from"./List-fa5ce5f1.js";import{c as F}from"./createReactComponent-4af5135f.js";const B=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],q=["component","slots","slotProps"],$=["component"];function H(e,o){const{className:t,elementType:r,ownerState:l,externalForwardedProps:a,getSlotOwnerState:c,internalForwardedProps:s}=o,b=x(o,B),{component:y,slots:p={[e]:void 0},slotProps:C={[e]:void 0}}=a,f=x(a,q),u=p[e]||r,v=T(C[e],l),P=E(n({className:t},b,{externalForwardedProps:e==="root"?f:void 0,externalSlotProps:v})),{props:{component:i},internalRef:A}=P,g=x(P.props,$),h=D(A,v==null?void 0:v.ref,o.ref),d=c?c(g):{},m=n({},l,d),S=e==="root"?i||y:i,k=L(u,n({},e==="root"&&!y&&!p[e]&&s,e!=="root"&&!p[e]&&s,g,S&&{as:S},{ref:h}),m);return Object.keys(d).forEach(M=>{delete k[M]}),[u,k]}const W=U(w.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function G(e){return N("MuiAvatar",e)}_("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const J=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],K=e=>{const{classes:o,variant:t,colorDefault:r}=e;return O({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},G,o)},Q=I("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:n({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:n({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),V=I("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),X=I(W,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function Y({crossOrigin:e,referrerPolicy:o,src:t,srcSet:r}){const[l,a]=R.useState(!1);return R.useEffect(()=>{if(!t&&!r)return;a(!1);let c=!0;const s=new Image;return s.onload=()=>{c&&a("loaded")},s.onerror=()=>{c&&a("error")},s.crossOrigin=e,s.referrerPolicy=o,s.src=t,r&&(s.srcset=r),()=>{c=!1}},[e,o,t,r]),l}const Z=R.forwardRef(function(o,t){const r=j({props:o,name:"MuiAvatar"}),{alt:l,children:a,className:c,component:s="div",slots:b={},slotProps:y={},imgProps:p,sizes:C,src:f,srcSet:u,variant:v="circular"}=r,P=x(r,J);let i=null;const A=Y(n({},p,{src:f,srcSet:u})),g=f||u,h=g&&A!=="error",d=n({},r,{colorDefault:!h,component:s,variant:v}),m=K(d),[S,k]=H("img",{className:m.img,elementType:V,externalForwardedProps:{slots:b,slotProps:{img:n({},p,y.img)}},additionalProps:{alt:l,src:f,srcSet:u,sizes:C},ownerState:d});return h?i=w.jsx(S,n({},k)):a||a===0?i=a:g&&l?i=l[0]:i=w.jsx(X,{ownerState:d,className:m.fallback}),w.jsx(Q,n({as:s,ownerState:d,className:z(m.root,c),ref:t},P,{children:i}))}),se=Z;var ae=F("briefcase","IconBriefcase",[["path",{d:"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2",key:"svg-1"}],["path",{d:"M12 12l0 .01",key:"svg-2"}],["path",{d:"M3 13a20 20 0 0 0 18 0",key:"svg-3"}]]),ne=F("clock","IconClock",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 7v5l3 3",key:"svg-1"}]]);export{se as A,ae as I,ne as a};
