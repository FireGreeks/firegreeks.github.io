import{ad as i,v as s,z as c,aQ as a,t as l}from"./index.a487fe88.js";let u=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,u=e.scrollLeft>=0,e.remove()}function f(){let e;const t=l();function n(){e=void 0}return i(n),s(n),{removeTick:n,registerTick(r){e=r,c(()=>{e===r&&(a(t)===!1&&e(),e=void 0)})}}}function p(){let e=null;const t=l();function n(){e!==null&&(clearTimeout(e),e=null)}return i(n),s(n),{removeTimeout:n,registerTimeout(r,o){n(),a(t)===!1&&(e=setTimeout(()=>{e=null,r()},o))}}}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function v(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function h(e,t,n){if(n<=t)return t;const r=n-t+1;let o=t+(e-t)%r;return o<t&&(o=r+o),o===0?0:o}function T(e,t=2,n="0"){if(e==null)return e;const r=""+e;return r.length>=t?r:new Array(t-r.length+1).join(n)+r}export{p as a,v as b,m as c,h as n,T as p,u as r,f as u};