import{M as t,J as p}from"./index-6b0a12f1.js";function m(n){const{theme:e,name:o,props:s}=n;return!e||!e.components||!e.components[o]||!e.components[o].defaultProps?s:t(e.components[o].defaultProps,s)}function a({props:n,name:e,defaultTheme:o,themeId:s}){let r=p(o);return s&&(r=r[s]||r),m({theme:r,name:e,props:n})}export{m as g,a as u};
