import{r as u,j as e,i as _}from"./index-6b0a12f1.js";import{P as H}from"./PageContainer-9a42d937.js";import{B as G,H as X}from"./Breadcrumb-39d0254b.js";import{D as A}from"./DashboardCard-c2b7fdbd.js";import{B as q}from"./BarChart-e3c32772.js";import{X as C,h as K}from"./index.es-7e60e70b.js";/* empty css                   */import{a as b}from"./axios-dd1c8fc2.js";import{c as F}from"./config-ed4f877b.js";import{e as M}from"./eventEmitter-d2c8b369.js";import{T as Q}from"./Tabs-a4648f7d.js";import{B as L}from"./Button-cfb93975.js";import{s as f,B as o,T as l}from"./Box-fd20700d.js";import{u as Z,G as d}from"./List-fa5ce5f1.js";import{T as ee,a as te,b as T,I as ae,c as re}from"./TabPanel-59e64069.js";import{S as ne}from"./Stack-36e907b3.js";import{I as oe}from"./IconFileArrowLeft-980af144.js";import{I as ie}from"./IconFileArrowRight-92d5c4e9.js";import{_ as V}from"./react-apexcharts.min-d561d0c6.js";import{S as se}from"./Select-e55aa3d1.js";import{I as de}from"./IconMessageExclamation-5be2a870.js";import{M as B}from"./MenuItem-60e0cbd1.js";import"./createReactComponent-4af5135f.js";import"./IconLayoutDashboard-807aee79.js";import"./Card-fa937df3.js";import"./CardContent-28ae16b7.js";import"./KeyboardArrowRight-9ecdb651.js";import"./styled-3fb3526a.js";import"./useThemeProps-1bcb54ab.js";import"./dividerClasses-7b2d94df.js";const z=f(Q)(({theme:r})=>({fontWeight:"600",fontSize:"16px",padding:0})),R=f(L)(({theme:r})=>({backgroundColor:r.palette.primary.contrast,border:"1px solid",borderColor:r.palette.primary.contrast,color:r.palette.primary.contrastText,fontSize:"15px",padding:"0",fontWeight:"600",transition:"all ease 0.3s","&:hover":{backgroundColor:r.palette.primary.main,color:r.palette.primary.contrastText,borderColor:r.palette.primary.main},"& .btn-indicator":{width:"1px",backgroundColor:r.palette.primary.main,alignSelf:"stretch",marginLeft:"4px"}})),le=f(o)(({theme:r})=>({height:"5px",display:"flex",alignItems:"center",position:"relative",backgroundColor:r.palette.success.light,borderRadius:"7px"})),ce=f(o)(({theme:r,value:n})=>({width:`${n}%`,height:"100%",backgroundColor:r.palette.success.main,borderRadius:"7px"})),pe=f(o)(({theme:r,value:n})=>({width:"50px",height:"22px",textAlign:"center",borderRadius:"7px",position:"absolute",left:`calc(${n}% - 21px)`,bottom:"15px",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",backgroundColor:r.palette.success.main,"& span":{content:'""',position:"absolute",bottom:"-3px",border:"3px solid",transform:"rotate(45deg)",right:"calc(50% - 3px)",borderColor:r.palette.success.main}})),me=f(o)(({theme:r})=>({fontSize:"20px",fontWeight:"500",color:r.palette.success.main})),k=f(o)(({theme:r})=>({padding:"5px 12px",fontWeight:"600"})),ue=async()=>{const r=sessionStorage.getItem("token"),n=sessionStorage.getItem("selectedVendorId"),c=F.UniUrl;try{const i=await b.get(`${c}/api/excel/download?disputeType=Price claim&vendorId=${n}`,{headers:{Authorization:`Bearer ${r}`},responseType:"blob"}),x=window.URL.createObjectURL(new Blob([i.data])),p=document.createElement("a");p.href=x,p.setAttribute("download","disputes.xlsx"),document.body.appendChild(p),p.click(),p.remove()}catch(i){console.error("Error downloading file:",i)}},xe=()=>{const[r,n]=u.useState("1"),[c,i]=u.useState([]),[x,p]=u.useState([]),t=Z(),P=F.UniUrl,S=async a=>{try{const m=sessionStorage.getItem("token"),g=await b.get(`${P}/shortage/getDisputeData?disputeType=Price claim&vendorId=${a}`,{headers:{Authorization:`Bearer ${m}`}});i(g.data.data)}catch(m){console.error("Error fetching data:",m)}};u.useEffect(()=>{const a=sessionStorage.getItem("selectedVendorId");a&&S(a);const m=g=>{S(g)};return M.on("vendorSelected",m),()=>{M.off("vendorSelected",m)}},[]),u.useEffect(()=>{w(c,r)},[c,r]);const $=(a,m)=>{n(m)},w=(a,m)=>{let g;switch(m){case"1":g=a.filter(y=>y.disputeStatus==="Resolved");break;case"2":g=a.filter(y=>y.disputeStatus==="Denied");break;case"3":g=a.filter(y=>y.disputeStatus===null||y.disputeStatus==="Pending");break;case"4":default:g=a;break}p(g)},v=parseFloat(sessionStorage.getItem("winRate")).toFixed(2),j=[{name:"Dispute ID",selector:a=>a.disputeId,sortable:!0,cell:a=>e.jsx(o,{children:e.jsx(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:t.palette.secondary.main},children:a.disputeId})})},{name:"Dispute Type",selector:a=>a.disputeType,sortable:!0,cell:a=>e.jsx(o,{children:e.jsx(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:t.palette.accent.main},children:a.disputeType})})},{name:"Dispute Date",selector:a=>a.disputeDate,sortable:!0,cell:a=>e.jsx(o,{children:e.jsx(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:t.palette.secondary.main},children:K(a.disputeDate).format("MM/DD/YY")})})},{name:"Dispute Status",selector:a=>a.disputeStatus,sortable:!0,cell:a=>a.disputeStatus==="Resolved"?e.jsx(o,{children:e.jsx(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:t.palette.success.main},children:a.disputeStatus})}):a.disputeStatus==="Denied"?e.jsx(o,{children:e.jsx(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:"red"},children:a.disputeStatus})}):e.jsx(o,{children:e.jsx(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:"orange"},children:"Pending"})})},{name:"Dispute Amount",selector:a=>a.totalDisputedAmount,sortable:!0,cell:a=>e.jsx(o,{children:e.jsxs(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:t.palette.secondary.main},children:["$",a.totalDisputedAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")]})})},{name:"Approved Amount (As Per Vc)",selector:a=>a.approvedAmount,sortable:!0,cell:a=>e.jsx(o,{children:e.jsx(l,{variant:"body1",fontWeight:"500",fontSize:"14px",style:{color:t.palette.secondary.main},children:a.approvedAmount!==null?`$${a.approvedAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}`:"N/A"})})}];return e.jsx(o,{children:e.jsx(d,{container:!0,spacing:2,children:e.jsx(d,{item:!0,xs:12,children:e.jsx(o,{sx:{width:"100%",typography:"body1"},children:e.jsxs(ee,{value:r,className:"table-tabs",children:[e.jsxs(o,{sx:{borderBottom:1,borderColor:"divider"},style:{display:"flex",justifyContent:"space-between",marginBottom:"20px",alignItems:"center",borderBottom:"0"},children:[e.jsxs(te,{onChange:$,indicatorColor:"secondary",className:"finops-tab",style:{overflow:"visible"},children:[e.jsx(z,{label:"Approved",value:"1",style:{color:t.palette.text.dark}}),e.jsx(z,{label:"Denied",value:"2"}),e.jsx(z,{label:"Pending",value:"3"}),e.jsx(z,{label:"All",value:"4"})]}),e.jsxs(d,{container:!0,spacing:1,justifyContent:"end",alignItems:"end",children:[e.jsx(d,{children:e.jsx(me,{style:{color:t.palette.success.main},children:"Win Rate"})}),e.jsx(d,{item:!0,xs:4,style:{paddingTop:"0"},children:e.jsx(o,{style:{width:"calc(100% - 30px)"},mx:"auto",children:e.jsxs(le,{children:[e.jsx(ce,{value:v}),e.jsxs(pe,{value:v,children:[v,"% ",e.jsx(o,{component:"span"})]})]})})}),e.jsx(d,{item:!0,style:{paddingTop:"0"},children:e.jsxs(ne,{direction:"row",spacing:2,style:{marginTop:"16px"},children:[e.jsxs(R,{children:[e.jsx(k,{children:"Import"})," ",e.jsx("span",{className:"btn-indicator"})," ",e.jsx(k,{children:e.jsx(oe,{size:"18",style:{margin:"auto",verticalAlign:"middle"}})})]}),e.jsxs(R,{onClick:ue,children:[e.jsx(k,{children:"Export"})," ",e.jsx("span",{className:"btn-indicator"})," ",e.jsx(k,{children:e.jsx(ie,{size:"18",style:{margin:"auto",verticalAlign:"middle"}})})]})]})})]})]}),e.jsx(T,{value:"1",style:{padding:0},children:e.jsx(C,{columns:j,data:x,pagination:!0})}),e.jsx(T,{value:"2",style:{padding:0},children:e.jsx(C,{columns:j,data:x,pagination:!0})}),e.jsx(T,{value:"3",style:{padding:0},children:e.jsx(C,{columns:j,data:x,pagination:!0})}),e.jsx(T,{value:"4",style:{padding:0},children:e.jsx(C,{columns:j,data:x,pagination:!0})})]})})})})})},he=({selectedYear:r})=>{const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c={deniedAmount:n.map(t=>({x:t,y:0})),approvedAmount:n.map(t=>({x:t,y:t==="Oct"?781.52:0})),deniedMedian:n.map(t=>({x:t,y:0})),approvedMedian:n.map(t=>({x:t,y:0}))},i={deniedAmount:n.map(t=>({x:t,y:0})),approvedAmount:n.map(t=>({x:t,y:0})),deniedMedian:n.map(t=>({x:t,y:0})),approvedMedian:n.map(t=>({x:t,y:0}))},x=r===2024?[{type:"rangeArea",name:"Denied Amount",data:i.deniedAmount},{type:"rangeArea",name:"Approved Amount",data:i.approvedAmount},{type:"line",name:"Denied Median",data:i.deniedMedian},{type:"line",name:"Approved Median",data:i.approvedMedian}]:[{type:"rangeArea",name:"Denied Amount",data:c.deniedAmount},{type:"rangeArea",name:"Approved Amount",data:c.approvedAmount},{type:"line",name:"Denied Median",data:c.deniedMedian},{type:"line",name:"Approved Median",data:c.approvedMedian}],p={chart:{height:350,type:"rangeArea",animations:{speed:500},toolbar:{show:!1}},colors:["#dc3545","#2edd95","#7e2e84","#55a1e8"],dataLabels:{enabled:!1},fill:{opacity:[.24,1,1]},forecastDataPoints:{count:2},stroke:{curve:"straight",width:[0,2,2]},legend:{show:!0,customLegendItems:["Denied Amount","Approved Amount"],inverseOrder:!0},title:{text:""},markers:{hover:{sizeOffset:5}},yaxis:{min:0,max:800,tickAmount:9,labels:{formatter:function(t){return"$"+t.toFixed(2)}}}};return e.jsx("div",{children:e.jsx(V,{options:p,series:x,type:"rangeArea",height:350})})},ge=({selectedYear:r})=>{const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c={deniedAmount:n.map(t=>({x:t,y:0})),approvedAmount:n.map(t=>({x:t,y:0})),deniedMedian:n.map(t=>({x:t,y:0})),approvedMedian:n.map(t=>({x:t,y:0}))},i={deniedAmount:n.map(t=>({x:t,y:0})),approvedAmount:n.map(t=>({x:t,y:0})),deniedMedian:n.map(t=>({x:t,y:0})),approvedMedian:n.map(t=>({x:t,y:0}))},x=r===2024?[{type:"rangeArea",name:"Denied Amount",data:i.deniedAmount},{type:"rangeArea",name:"Approved Amount",data:i.approvedAmount},{type:"line",name:"Denied Median",data:i.deniedMedian},{type:"line",name:"Approved Median",data:i.approvedMedian}]:[{type:"rangeArea",name:"Denied Amount",data:c.deniedAmount},{type:"rangeArea",name:"Approved Amount",data:c.approvedAmount},{type:"line",name:"Denied Median",data:c.deniedMedian},{type:"line",name:"Approved Median",data:c.approvedMedian}],p={chart:{height:350,type:"rangeArea",animations:{speed:500},toolbar:{show:!1}},colors:["#dc3545","#2edd95","#7e2e84","#55a1e8"],dataLabels:{enabled:!1},fill:{opacity:[.24,1,1]},forecastDataPoints:{count:2},stroke:{curve:"straight",width:[0,2,2]},legend:{show:!0,customLegendItems:["Denied Amount","Approved Amount"],inverseOrder:!0},title:{text:""},markers:{hover:{sizeOffset:5}},yaxis:{min:0,max:800,tickAmount:9,labels:{formatter:function(t){return"$"+t.toFixed(2)}}}};return e.jsx("div",{children:e.jsx(V,{options:p,series:x,type:"rangeArea",height:350})})},Ge=()=>{const r=_(),[n,c]=u.useState(0),[i,x]=u.useState(0),[p,t]=u.useState(0),[P,S]=u.useState(0),[$,w]=u.useState(0),[v,j]=u.useState("2023"),a=sessionStorage.getItem("selectedVendorId"),m=F.UniUrl;u.useEffect(()=>{const h=J=>{const D=sessionStorage.getItem("token"),I=sessionStorage.getItem("selectedVendorId");b.get(`${m}/overbilling/getApprovedAmount?vendorIds=${I}&disputeType=Price claim`,{headers:{Authorization:`Bearer ${D}`}}).then(s=>{c(s.data.data.approvedAmount!==void 0?parseFloat(s.data.data.approvedAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0")}).catch(s=>{console.error("Error fetching approved amount:",s)}),b.get(`${m}/overbilling/getTotalDisputed?vendorIds=${I}&disputeType=Price claim`,{headers:{Authorization:`Bearer ${D}`}}).then(s=>{x(s.data.data.totalDisputed!==void 0?parseFloat(s.data.data.totalDisputed).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0")}).catch(s=>{console.error("Error fetching total disputed amount:",s)}),b.get(`${m}/overbilling/getPendingWithAmazon?vendorIds=${I}&disputeType=Price claim`,{headers:{Authorization:`Bearer ${D}`}}).then(s=>{if(t(s.data.data.pendingWithAmazon!==void 0?parseFloat(s.data.data.pendingWithAmazon).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0"),p!==null){const Y=i>0?p/i*100:0;w(Y)}}).catch(s=>{console.error("Error fetching amount pending with Amazon:",s)}),b.get(`${m}/shortage/getTotalDisputedDeniedAmt?vendorIds=${I}&disputeType=Price claim`,{headers:{Authorization:`Bearer ${D}`}}).then(s=>{S(s.data.data.deniedAmount!==void 0?parseFloat(s.data.data.deniedAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","):"0.00")}).catch(s=>{console.error("Error fetching total disputed denied amount:",s)})},E=J=>{h()};return sessionStorage.getItem("selectedVendorId")&&h(),M.on("vendorSelected",E),()=>{M.off("vendorSelected",E)}},[]),f(L)(({theme:h})=>({backgroundColor:h.palette.primary.extraLight,border:"1px solid",borderColor:h.palette.primary.light,color:h.palette.primary.main,fontSize:"13px",padding:"3px 8px",fontWeight:"600","&:hover":{backgroundColor:h.palette.primary.main,color:"white"}}));const g=f(se)(({theme:h})=>({width:"150px",height:"40px",marginLeft:"10px",backgroundColor:"#5c84c3",color:"white",marginRight:"10px",[h.breakpoints.down("sm")]:{width:"150px"}})),y=f(o)(({theme:h})=>({position:"relative",minHeight:"200px",height:"100%"})),U=parseFloat(n.toString().replace(/,/g,"")),W=parseFloat(i.toString().replace(/,/g,"")),O=W>0?U/W*100:0;sessionStorage.setItem("winRate",O.toFixed(2));const N=h=>{j(h.target.value)};return u.useEffect(()=>{},[v]),e.jsx(H,{title:"Price Claim",children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{item:!0,xs:12,children:e.jsx(G,{titles:["Price Claim"]})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(X,{title:"Price Claim"})}),e.jsx(d,{item:!0,xs:12,children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,my:2,children:e.jsx(l,{variant:"h3",children:"Price Claim Dispute"})}),e.jsx(d,{item:!0,sm:6,md:3,children:e.jsx(y,{children:e.jsxs(A,{title:e.jsx(l,{variant:"h4",color:"#000000",children:"Total Disputed"}),children:[e.jsxs(l,{variant:"h2",sx:{color:r.palette.primary.main},children:["$",i]}),e.jsx(de,{size:"60",style:{position:"absolute",right:"25px",bottom:"30px",color:r.palette.primary.main}})]})})}),e.jsx(d,{item:!0,sm:6,md:3,children:e.jsx(y,{children:e.jsxs(A,{title:e.jsx(l,{variant:"h4",children:"Total Approved"}),children:[e.jsxs(l,{variant:"h2",sx:{color:"#2edd95"},children:["$",n]}),e.jsx(ae,{size:"60",style:{position:"absolute",right:"25px",bottom:"30px",color:"#2edd95"}})]})})}),e.jsx(d,{item:!0,sm:6,md:3,children:e.jsx(y,{children:e.jsxs(A,{title:e.jsx(l,{variant:"h4",children:"Total Pending"}),children:[e.jsxs(l,{variant:"h2",sx:{color:"#f19c53"},children:["$",p]}),e.jsx(o,{style:{position:"absolute",right:"10px",bottom:"20px"},children:e.jsx(q,{color:r.palette.accent.main,percentage:$,chartWidth:"130",chartHeight:"120",chartLableFonrSize:"16px"})})]})})}),e.jsx(d,{item:!0,sm:6,md:3,children:e.jsx(y,{children:e.jsxs(A,{title:e.jsx(l,{variant:"h4",children:"Total Denied"}),children:[e.jsxs(l,{variant:"h2",sx:{color:"#bf422a"},children:["$",P]}),e.jsx(re,{size:"60",style:{position:"absolute",right:"25px",bottom:"30px",color:"#bf422a"}})]})})})]})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(A,{title:e.jsx(l,{variant:"h4",children:"Price Claim"}),children:e.jsx(xe,{})})}),e.jsx(d,{item:!0,xs:12,children:e.jsxs(o,{display:"flex",alignItems:"center",children:[e.jsx(l,{variant:"h6",marginLeft:109,children:"Select period:"}),e.jsxs(g,{value:v,onChange:N,displayEmpty:!0,inputProps:{"aria-label":"Select year or range"},children:[e.jsx(B,{value:"",children:e.jsx("b",{children:"All Years"})}),e.jsx(B,{value:2024,children:"2024"}),e.jsx(B,{value:2023,children:"2023"})]})]})}),e.jsx(d,{item:!0,xs:12,children:e.jsx(A,{children:a==="5"?e.jsx(he,{selectedYear:v}):e.jsx(ge,{selectedYear:v})})})]})})};export{Ge as default};
