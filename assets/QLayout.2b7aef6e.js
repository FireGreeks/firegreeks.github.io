import{S as $,T as d,y as h,U as D,r as z,X as U,s as P,v as Q,Y as k,z as M,t as H,Z as B,$ as A,a0 as T,x as S,a1 as X,a2 as N,a3 as I,a4 as Y,a5 as C,a6 as Z,a7 as G}from"./index.a487fe88.js";import{g as J,a as ee,b as te,c as E}from"./scroll.92d4726f.js";var re=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const o=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},D(m.default))}});function ne(){const e=z(!U.value);return e.value===!1&&P(()=>{e.value=!0}),{isHydrated:e}}const K=typeof ResizeObserver!="undefined",_=K===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:m}){let o=null,t,i={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:r,offsetHeight:l}=t;(r!==i.width||l!==i.height)&&(i={width:r,height:l},m("resize",i))}}const{proxy:v}=H();if(v.trigger=s,K===!0){let r;const l=g=>{t=v.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):g!==!0&&M(()=>{l(!0)})};return P(()=>{l()}),Q(()=>{o!==null&&clearTimeout(o),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),k}else{let g=function(){o!==null&&(clearTimeout(o),o=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",s,B.passive),l=void 0)},b=function(){g(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",s,B.passive),u())};const{isHydrated:r}=ne();let l;return P(()=>{M(()=>{t=v.$el,t&&b()})}),Q(g),()=>{if(r.value===!0)return h("object",{class:"q--avoid-card-border",style:_.style,tabindex:-1,type:"text/html",data:_.url,"aria-hidden":"true",onLoad:b})}}}}),se=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:o}){const{proxy:{$q:t}}=H(),i=A(N,T);if(i===T)return console.error("QHeader needs to be child of QLayout"),T;const s=z(parseInt(e.heightHint,10)),u=z(!0),v=d(()=>e.reveal===!0||i.view.value.indexOf("H")!==-1||t.platform.is.ios&&i.isContainer.value===!0),r=d(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?s.value:0;const n=s.value-i.scroll.value.position;return n>0?n:0}),l=d(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),g=d(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),b=d(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=d(()=>{const n=i.rows.value.top,y={};return n[0]==="l"&&i.left.space===!0&&(y[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),n[2]==="r"&&i.right.space===!0&&(y[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),y});function c(n,y){i.update("header",n,y)}function p(n,y){n.value!==y&&(n.value=y)}function R({height:n}){p(s,n),c("size",n)}function O(n){g.value===!0&&p(u,!0),o("focusin",n)}S(()=>e.modelValue,n=>{c("space",n),p(u,!0),i.animate()}),S(r,n=>{c("offset",n)}),S(()=>e.reveal,n=>{n===!1&&p(u,e.modelValue)}),S(u,n=>{i.animate(),o("reveal",n)}),S(i.scroll,n=>{e.reveal===!0&&p(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const q={};return i.instances.header=q,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",r.value),Q(()=>{i.instances.header===q&&(i.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=X(m.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(F,{debounce:0,onResize:R})),h("header",{class:b.value,style:w.value,onFocusin:O},n)}}}),ue=$({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:o}}=H(),t=A(N,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;I(Y,!0);const i=d(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>h("div",{class:"q-page-container",style:i.value},D(m.default))}});const{passive:j}=B,oe=["both","horizontal","vertical"];var ie=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>oe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:m}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,s;S(()=>e.scrollTarget,()=>{r(),v()});function u(){t!==null&&t();const b=Math.max(0,ee(i)),w=te(i),c={top:b-o.position.top,left:w-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const p=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:b,left:w},o.directionChanged=o.direction!==p,o.delta=c,o.directionChanged===!0&&(o.direction=p,o.inflectionPoint=o.position),m("scroll",{...o})}function v(){i=J(s,e.scrollTarget),i.addEventListener("scroll",l,j),l(!0)}function r(){i!==void 0&&(i.removeEventListener("scroll",l,j),i=void 0)}function l(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[w,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(w),t=null}}}const{proxy:g}=H();return S(()=>g.$q.lang.rtl,u),P(()=>{s=g.$el.parentNode,v()}),Q(()=>{t!==null&&t(),r()}),Object.assign(g,{trigger:l,getPosition:()=>o}),k}}),ce=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:o}){const{proxy:{$q:t}}=H(),i=z(null),s=z(t.screen.height),u=z(e.container===!0?0:t.screen.width),v=z({position:0,direction:"down",inflectionPoint:0}),r=z(0),l=z(U.value===!0?0:E()),g=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=d(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),c=d(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function p(a){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};v.value=f,e.onScroll!==void 0&&o("scroll",f)}}function R(a){const{height:f,width:x}=a;let L=!1;s.value!==f&&(L=!0,s.value=f,e.onScrollHeight!==void 0&&o("scrollHeight",f),q()),u.value!==x&&(L=!0,u.value=x),L===!0&&e.onResize!==void 0&&o("resize",a)}function O({height:a}){r.value!==a&&(r.value=a,q())}function q(){if(e.container===!0){const a=s.value>r.value?E():0;l.value!==a&&(l.value=a)}}let n=null;const y={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:i,height:s,containerHeight:r,scrollbarWidth:l,totalWidth:d(()=>u.value+l.value),rows:d(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:v,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,f,x){y[a][f]=x}};if(I(N,y),E()>0){let x=function(){a=null,f.classList.remove("hide-scrollbar")},L=function(){if(a===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(x,300)},V=function(W){a!==null&&W==="remove"&&(clearTimeout(a),x()),window[`${W}EventListener`]("resize",L)},a=null;const f=document.body;S(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),Z(()=>{V("remove")})}return()=>{const a=G(m.default,[h(ie,{onScroll:p}),h(F,{onResize:R})]),f=h("div",{class:g.value,style:b.value,ref:e.container===!0?void 0:i,tabindex:-1},a);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:i},[h(F,{onResize:O}),h("div",{class:"absolute-full",style:w.value},[h("div",{class:"scroll",style:c.value},[f])])]):f}}});export{ce as Q,re as a,se as b,ue as c,F as d};