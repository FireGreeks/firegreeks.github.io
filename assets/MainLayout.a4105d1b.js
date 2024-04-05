import{l as L,m as j,i as Re,p as V,r as P,c as v,a as se,k as he,q as gt,v as we,R as $e,x as tt,y as qt,z as _t,Q as le,A as yt,g as oe,B as kt,C as St,D as xt,w as B,E as wt,F as it,n as Be,G as at,H as rt,I as Lt,J as $t,K as ze,L as Pt,M as Ee,N as Bt,O as ye,P as Mt,S as ke,T as Ne,U as ut,V as je,W as nt,X as Ke,Y as st,Z as Rt,d as Se,e as zt,_ as ue,$ as fe,a0 as R,a1 as q,a2 as Et,a3 as ve,a4 as ct,a5 as At,a6 as Dt,a7 as pe,a8 as Ue,a9 as It,aa as Qt,ab as Ot,ac as Ht,ad as Vt}from"./index.3c3289c5.js";import{u as Ft,a as Xe,r as Wt,c as Nt,b as jt,d as Kt,e as Ut,f as Xt,g as Yt,h as Gt,i as xe,j as Jt,k as Zt,l as ea,m as ta,n as Ye,Q as Pe,o as ne,p as lt}from"./format.f8bc4694.js";import{u as ot}from"./use-timeout.4676a119.js";import{Q as aa}from"./QImg.2710c227.js";import{Q as Ge}from"./QList.9a047c8c.js";import{g as dt,s as ft}from"./touch.3df10340.js";import{u as Je}from"./use-quasar.99f00ec8.js";const na=L("div",{class:"q-space"});var vt=j({name:"QSpace",setup(){return()=>na}});let la=0;const oa=["click","keydown"],ia={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${la++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ra(e,c,o,l){const t=Re(gt,V);if(t===V)return console.error("QTab/QRouteTab component needs to be child of QTabs"),V;const{proxy:n}=oe(),s=P(null),b=P(null),h=P(null),u=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),r=v(()=>t.currentModel.value===e.name),M=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(r.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),_=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=v(()=>e.disable===!0||t.hasFocus.value===!0||r.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function w(g,y){if(y!==!0&&s.value!==null&&s.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&tt(g);return}if(l===void 0){t.updateModel({name:e.name}),o("click",g);return}if(l.hasRouterLink.value===!0){const k=($={})=>{let A;const D=$.to===void 0||kt($.to,e.to)===!0?t.avoidRouteWatcher=Ft():null;return l.navigateToRouterLink(g,{...$,returnRouterError:!0}).catch(I=>{A=I}).then(I=>{if(D===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,A===void 0&&(I===void 0||I.message!==void 0&&I.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),$.returnRouterError===!0)return A!==void 0?Promise.reject(A):I})};o("click",g,k),g.defaultPrevented!==!0&&k();return}o("click",g)}function E(g){qt(g,[13,32])?w(g,!0):_t(g)!==!0&&g.keyCode>=35&&g.keyCode<=40&&g.altKey!==!0&&g.metaKey!==!0&&t.onKbdNavigate(g.keyCode,n.$el)===!0&&tt(g),o("keydown",g)}function z(){const g=t.tabProps.value.narrowIndicator,y=[],k=L("div",{ref:h,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&y.push(L(le,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&y.push(L("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&y.push(e.alertIcon!==void 0?L(le,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):L("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),g===!0&&y.push(k);const $=[L("div",{class:"q-focus-helper",tabindex:-1,ref:s}),L("div",{class:_.value},yt(c.default,y))];return g===!1&&$.push(k),$}const C={name:v(()=>e.name),rootRef:b,tabIndicatorRef:h,routeData:l};se(()=>{t.unregisterTab(C)}),he(()=>{t.registerTab(C)});function p(g,y){const k={ref:b,class:M.value,tabindex:m.value,role:"tab","aria-selected":r.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:w,onKeydown:E,...y};return we(L(g,k,z()),[[$e,u.value]])}return{renderTab:p,$tabs:t}}var Le=j({name:"QRouteTab",props:{...St,...ia},emits:oa,setup(e,{slots:c,emit:o}){const l=xt({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:n}=ra(e,c,o,{exact:v(()=>e.exact),...l});return B(()=>`${e.name} | ${e.exact} | ${(l.resolvedLink.value||{}).href}`,()=>{n.verifyRouteModel()}),()=>t(l.linkTag.value,l.linkAttrs.value)}});function ua(){const e=P(!wt.value);return e.value===!1&&he(()=>{e.value=!0}),{isHydrated:e}}const pt=typeof ResizeObserver!="undefined",ht=pt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Me=j({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:c}){let o=null,l,t={width:-1,height:-1};function n(h){h===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:h,offsetHeight:u}=l;(h!==t.width||u!==t.height)&&(t={width:h,height:u},c("resize",t))}}const{proxy:b}=oe();if(b.trigger=n,pt===!0){let h;const u=r=>{l=b.$el.parentNode,l?(h=new ResizeObserver(n),h.observe(l),s()):r!==!0&&Be(()=>{u(!0)})};return he(()=>{u()}),se(()=>{o!==null&&clearTimeout(o),h!==void 0&&(h.disconnect!==void 0?h.disconnect():l&&h.unobserve(l))}),it}else{let r=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",n,at.passive),u=void 0)},M=function(){r(),l&&l.contentDocument&&(u=l.contentDocument.defaultView,u.addEventListener("resize",n,at.passive),s())};const{isHydrated:h}=ua();let u;return he(()=>{Be(()=>{l=b.$el,l&&M()})}),se(r),()=>{if(h.value===!0)return L("object",{class:"q--avoid-card-border",style:ht.style,tabindex:-1,type:"text/html",data:ht.url,"aria-hidden":"true",onLoad:M})}}}});function sa(e,c,o){const l=o===!0?["left","right"]:["top","bottom"];return`absolute-${c===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const ca=["left","center","right","justify"];var da=j({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ca.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:c,emit:o}){const{proxy:l}=oe(),{$q:t}=l,{registerTick:n}=Xe(),{registerTick:s}=Xe(),{registerTick:b}=Xe(),{registerTimeout:h,removeTimeout:u}=ot(),{registerTimeout:r,removeTimeout:M}=ot(),_=P(null),m=P(null),w=P(e.modelValue),E=P(!1),z=P(!0),C=P(!1),p=P(!1),g=[],y=P(0),k=P(!1);let $=null,A=null,D;const I=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:sa(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),F=v(()=>{const i=y.value,d=w.value;for(let a=0;a<i;a++)if(g[a].name.value===d)return!0;return!1}),U=v(()=>`q-tabs__content--align-${E.value===!0?"left":p.value===!0?"justify":e.align}`),Te=v(()=>`q-tabs row no-wrap items-center q-tabs--${E.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),X=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+U.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),Y=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ie=v(()=>e.vertical!==!0&&t.lang.rtl===!0),G=v(()=>Wt===!1&&ie.value===!0);B(ie,te),B(()=>e.modelValue,i=>{re({name:i,setCurrent:!0,skipEmit:!0})}),B(()=>e.outsideArrows,J);function re({name:i,setCurrent:d,skipEmit:a}){w.value!==i&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",i),(d===!0||e["onUpdate:modelValue"]===void 0)&&(Ae(w.value,i),w.value=i))}function J(){n(()=>{Z({width:_.value.offsetWidth,height:_.value.offsetHeight})})}function Z(i){if(Y.value===void 0||m.value===null)return;const d=i[Y.value.container],a=Math.min(m.value[Y.value.scroll],Array.prototype.reduce.call(m.value.children,(T,S)=>T+(S[Y.value.content]||0),0)),f=d>0&&a>d;E.value=f,f===!0&&s(te),p.value=d<parseInt(e.breakpoint,10)}function Ae(i,d){const a=i!=null&&i!==""?g.find(T=>T.name.value===i):null,f=d!=null&&d!==""?g.find(T=>T.name.value===d):null;if(a&&f){const T=a.tabIndicatorRef.value,S=f.tabIndicatorRef.value;$!==null&&(clearTimeout($),$=null),T.style.transition="none",T.style.transform="none",S.style.transition="none",S.style.transform="none";const x=T.getBoundingClientRect(),Q=S.getBoundingClientRect();S.style.transform=e.vertical===!0?`translate3d(0,${x.top-Q.top}px,0) scale3d(1,${Q.height?x.height/Q.height:1},1)`:`translate3d(${x.left-Q.left}px,0,0) scale3d(${Q.width?x.width/Q.width:1},1,1)`,b(()=>{$=setTimeout(()=>{$=null,S.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",S.style.transform="none"},70)})}f&&E.value===!0&&ee(f.rootRef.value)}function ee(i){const{left:d,width:a,top:f,height:T}=m.value.getBoundingClientRect(),S=i.getBoundingClientRect();let x=e.vertical===!0?S.top-f:S.left-d;if(x<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(x),te();return}x+=e.vertical===!0?S.height-T:S.width-a,x>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(x),te())}function te(){const i=m.value;if(i===null)return;const d=i.getBoundingClientRect(),a=e.vertical===!0?i.scrollTop:Math.abs(i.scrollLeft);ie.value===!0?(z.value=Math.ceil(a+d.width)<i.scrollWidth-1,C.value=a>0):(z.value=a>0,C.value=e.vertical===!0?Math.ceil(a+d.height)<i.scrollHeight:Math.ceil(a+d.width)<i.scrollWidth)}function me(i){A!==null&&clearInterval(A),A=setInterval(()=>{Qe(i)===!0&&N()},5)}function Ce(){me(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function qe(){me(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function N(){A!==null&&(clearInterval(A),A=null)}function De(i,d){const a=Array.prototype.filter.call(m.value.children,Q=>Q===d||Q.matches&&Q.matches(".q-tab.q-focusable")===!0),f=a.length;if(f===0)return;if(i===36)return ee(a[0]),a[0].focus(),!0;if(i===35)return ee(a[f-1]),a[f-1].focus(),!0;const T=i===(e.vertical===!0?38:37),S=i===(e.vertical===!0?40:39),x=T===!0?-1:S===!0?1:void 0;if(x!==void 0){const Q=ie.value===!0?-1:1,K=a.indexOf(d)+x*Q;return K>=0&&K<f&&(ee(a[K]),a[K].focus({preventScroll:!0})),!0}}const Ie=v(()=>G.value===!0?{get:i=>Math.abs(i.scrollLeft),set:(i,d)=>{i.scrollLeft=-d}}:e.vertical===!0?{get:i=>i.scrollTop,set:(i,d)=>{i.scrollTop=d}}:{get:i=>i.scrollLeft,set:(i,d)=>{i.scrollLeft=d}});function Qe(i){const d=m.value,{get:a,set:f}=Ie.value;let T=!1,S=a(d);const x=i<S?-1:1;return S+=x*5,S<0?(T=!0,S=0):(x===-1&&S<=i||x===1&&S>=i)&&(T=!0,S=i),f(d,S),te(),T}function _e(i,d){for(const a in i)if(i[a]!==d[a])return!1;return!0}function Oe(){let i=null,d={matchedLen:0,queryDiff:9999,hrefLen:0};const a=g.filter(x=>x.routeData!==void 0&&x.routeData.hasRouterLink.value===!0),{hash:f,query:T}=l.$route,S=Object.keys(T).length;for(const x of a){const Q=x.routeData.exact.value===!0;if(x.routeData[Q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:K,query:Fe,matched:Tt,href:Ct}=x.routeData.resolvedLink.value,We=Object.keys(Fe).length;if(Q===!0){if(K!==f||We!==S||_e(T,Fe)===!1)continue;i=x.name.value;break}if(K!==""&&K!==f||We!==0&&_e(Fe,T)===!1)continue;const ae={matchedLen:Tt.length,queryDiff:S-We,hrefLen:Ct.length-K.length};if(ae.matchedLen>d.matchedLen){i=x.name.value,d=ae;continue}else if(ae.matchedLen!==d.matchedLen)continue;if(ae.queryDiff<d.queryDiff)i=x.name.value,d=ae;else if(ae.queryDiff!==d.queryDiff)continue;ae.hrefLen>d.hrefLen&&(i=x.name.value,d=ae)}i===null&&g.some(x=>x.routeData===void 0&&x.name.value===w.value)===!0||re({name:i,setCurrent:!0})}function be(i){if(u(),k.value!==!0&&_.value!==null&&i.target&&typeof i.target.closest=="function"){const d=i.target.closest(".q-tab");d&&_.value.contains(d)===!0&&(k.value=!0,E.value===!0&&ee(d))}}function O(){h(()=>{k.value=!1},30)}function H(){ge.avoidRouteWatcher===!1?r(Oe):M()}function ce(){if(D===void 0){const i=B(()=>l.$route.fullPath,H);D=()=>{i(),D=void 0}}}function He(i){g.push(i),y.value++,J(),i.routeData===void 0||l.$route===void 0?r(()=>{if(E.value===!0){const d=w.value,a=d!=null&&d!==""?g.find(f=>f.name.value===d):null;a&&ee(a.rootRef.value)}}):(ce(),i.routeData.hasRouterLink.value===!0&&H())}function Ve(i){g.splice(g.indexOf(i),1),y.value--,J(),D!==void 0&&i.routeData!==void 0&&(g.every(d=>d.routeData===void 0)===!0&&D(),H())}const ge={currentModel:w,tabProps:I,hasFocus:k,hasActiveTab:F,registerTab:He,unregisterTab:Ve,verifyRouteModel:H,updateModel:re,onKbdNavigate:De,avoidRouteWatcher:!1};rt(gt,ge);function de(){$!==null&&clearTimeout($),N(),D!==void 0&&D()}let W;return se(de),Lt(()=>{W=D!==void 0,de()}),$t(()=>{W===!0&&ce(),J()}),()=>L("div",{ref:_,class:Te.value,role:"tablist",onFocusin:be,onFocusout:O},[L(Me,{onResize:Z}),L("div",{ref:m,class:X.value,onScroll:te},ze(c.default)),L(le,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N}),L(le,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(C.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:N,onMouseleavePassive:N,onTouchendPassive:N})])}}),fa=j({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:c}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:o.value,role:"toolbar"},ze(c.default))}}),va=j({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:o}){const{proxy:{$q:l}}=oe(),t=Re(Ee,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const n=P(parseInt(e.heightHint,10)),s=P(!0),b=v(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||l.platform.is.ios&&t.isContainer.value===!0),h=v(()=>{if(e.modelValue!==!0)return 0;if(b.value===!0)return s.value===!0?n.value:0;const p=n.value-t.scroll.value.position;return p>0?p:0}),u=v(()=>e.modelValue!==!0||b.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),M=v(()=>"q-header q-layout__section--marginal "+(b.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=v(()=>{const p=t.rows.value.top,g={};return p[0]==="l"&&t.left.space===!0&&(g[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),p[2]==="r"&&t.right.space===!0&&(g[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function m(p,g){t.update("header",p,g)}function w(p,g){p.value!==g&&(p.value=g)}function E({height:p}){w(n,p),m("size",p)}function z(p){r.value===!0&&w(s,!0),o("focusin",p)}B(()=>e.modelValue,p=>{m("space",p),w(s,!0),t.animate()}),B(h,p=>{m("offset",p)}),B(()=>e.reveal,p=>{p===!1&&w(s,e.modelValue)}),B(s,p=>{t.animate(),o("reveal",p)}),B(t.scroll,p=>{e.reveal===!0&&w(s,p.direction==="up"||p.position<=e.revealOffset||p.position-p.inflectionPoint<100)});const C={};return t.instances.header=C,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",h.value),se(()=>{t.instances.header===C&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const p=Pt(c.default,[]);return e.elevated===!0&&p.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),p.push(L(Me,{debounce:0,onResize:E})),L("header",{class:M.value,style:_.value,onFocusin:z},p)}}});function Ze(e,c,o){const l=nt(e);let t,n=l.left-c.event.x,s=l.top-c.event.y,b=Math.abs(n),h=Math.abs(s);const u=c.direction;u.horizontal===!0&&u.vertical!==!0?t=n<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",b>h&&(u.left===!0&&n<0?t="left":u.right===!0&&n>0&&(t="right"))):u.down===!0&&s>0?(t="down",b>h&&(u.left===!0&&n<0?t="left":u.right===!0&&n>0&&(t="right"))):u.left===!0&&n<0?(t="left",b<h&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&n>0&&(t="right",b<h&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&o===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};t=c.event.lastDir,r=!0,t==="left"||t==="right"?(l.left-=n,b=0,n=0):(l.top-=s,h=0,s=0)}return{synthetic:r,payload:{evt:e,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:l,direction:t,isFirst:c.event.isFirst,isFinal:o===!0,duration:Date.now()-c.event.time,distance:{x:b,y:h},offset:{x:n,y:s},delta:{x:l.left-c.event.lastX,y:l.top-c.event.lastY}}}}let ha=0;var et=Bt({name:"touch-pan",beforeMount(e,{value:c,modifiers:o}){if(o.mouse!==!0&&ye.has.touch!==!0)return;function l(n,s){o.mouse===!0&&s===!0?tt(n):(o.stop===!0&&je(n),o.prevent===!0&&ut(n))}const t={uid:"qvtp_"+ha++,handler:c,modifiers:o,direction:dt(o),noop:it,mouseStart(n){ft(n,t)&&Mt(n)&&(ke(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(ft(n,t)){const s=n.target;ke(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(ye.is.firefox===!0&&Ne(e,!0),t.lastEvt=n,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=n.type.indexOf("mouse")!==-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&ut(u),n.cancelBubble===!0&&je(u),Object.assign(u,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:u}}je(n)}const{left:b,top:h}=nt(n);t.event={x:b,y:h,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:b,lastY:h}},move(n){if(t.event===void 0)return;const s=nt(n),b=s.left-t.event.x,h=s.top-t.event.y;if(b===0&&h===0)return;t.lastEvt=n;const u=t.event.mouse===!0,r=()=>{l(n,u);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Nt(),t.styleCleanup=w=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),u===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};w!==void 0?setTimeout(()=>{E(),w()},50):E()}else w!==void 0&&w()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(n,t.event.mouse);const{payload:m,synthetic:w}=Ze(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=w===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(n);return}const M=Math.abs(b),_=Math.abs(h);M!==_&&(t.direction.horizontal===!0&&M>_||t.direction.vertical===!0&&M<_||t.direction.up===!0&&M<_&&h<0||t.direction.down===!0&&M<_&&h>0||t.direction.left===!0&&M>_&&b<0||t.direction.right===!0&&M>_&&b>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(Ke(t,"temp"),ye.is.firefox===!0&&Ne(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ze(n===void 0?t.lastEvt:n,t).payload);const{payload:b}=Ze(n===void 0?t.lastEvt:n,t,!0),h=()=>{t.handler(b)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const n=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";ke(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}ye.has.touch===!0&&ke(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,c){const o=e.__qtouchpan;o!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&o.end(),o.handler=c.value),o.direction=dt(c.modifiers))},beforeUnmount(e){const c=e.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),Ke(c,"main"),Ke(c,"temp"),ye.is.firefox===!0&&Ne(e,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete e.__qtouchpan)}});const mt=150;var ma=j({name:"QDrawer",inheritAttrs:!1,props:{...jt,...Kt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ut,"onLayout","miniState"],setup(e,{slots:c,emit:o,attrs:l}){const t=oe(),{proxy:{$q:n}}=t,s=Xt(e,n),{preventBodyScroll:b}=Jt(),{registerTimeout:h,removeTimeout:u}=ot(),r=Re(Ee,V);if(r===V)return console.error("QDrawer needs to be child of QLayout"),V;let M,_=null,m;const w=P(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),E=v(()=>e.mini===!0&&w.value!==!0),z=v(()=>E.value===!0?e.miniWidth:e.width),C=P(e.showIfAbove===!0&&w.value===!1?!0:e.modelValue===!0),p=v(()=>e.persistent!==!0&&(w.value===!0||Ae.value===!0));function g(a,f){if(A(),a!==!1&&r.animate(),O(0),w.value===!0){const T=r.instances[G.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),H(1),r.isContainer.value!==!0&&b(!0)}else H(0),a!==!1&&ce(!1);h(()=>{a!==!1&&ce(!0),f!==!0&&o("show",a)},mt)}function y(a,f){D(),a!==!1&&r.animate(),H(0),O(U.value*z.value),de(),f!==!0?h(()=>{o("hide",a)},mt):u()}const{show:k,hide:$}=Yt({showing:C,hideOnRouteChange:p,handleShow:g,handleHide:y}),{addToHistory:A,removeFromHistory:D}=Gt(C,$,p),I={belowBreakpoint:w,hide:$},F=v(()=>e.side==="right"),U=v(()=>(n.lang.rtl===!0?-1:1)*(F.value===!0?1:-1)),Te=P(0),X=P(!1),Y=P(!1),ie=P(z.value*U.value),G=v(()=>F.value===!0?"left":"right"),re=v(()=>C.value===!0&&w.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),J=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(F.value?"R":"L")!==-1||n.platform.is.ios===!0&&r.isContainer.value===!0),Z=v(()=>e.overlay===!1&&C.value===!0&&w.value===!1),Ae=v(()=>e.overlay===!0&&C.value===!0&&w.value===!1),ee=v(()=>"fullscreen q-drawer__backdrop"+(C.value===!1&&X.value===!1?" hidden":"")),te=v(()=>({backgroundColor:`rgba(0,0,0,${Te.value*.4})`})),me=v(()=>F.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Ce=v(()=>F.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),qe=v(()=>{const a={};return r.header.space===!0&&me.value===!1&&(J.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&Ce.value===!1&&(J.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),N=v(()=>{const a={width:`${z.value}px`,transform:`translateX(${ie.value}px)`};return w.value===!0?a:Object.assign(a,qe.value)}),De=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ie=v(()=>`q-drawer q-drawer--${e.side}`+(Y.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":C.value===!0?"":" q-layout--prevent-focus")+(w.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(J.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(me.value===!0?" q-drawer--top-padding":""))),Qe=v(()=>{const a=n.lang.rtl===!0?e.side:G.value;return[[et,Ve,void 0,{[a]:!0,mouse:!0}]]}),_e=v(()=>{const a=n.lang.rtl===!0?G.value:e.side;return[[et,ge,void 0,{[a]:!0,mouse:!0}]]}),Oe=v(()=>{const a=n.lang.rtl===!0?G.value:e.side;return[[et,ge,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function be(){i(w,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}B(w,a=>{a===!0?(M=C.value,C.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&M!==!1&&(C.value===!0?(O(0),H(0),de()):k(!1))}),B(()=>e.side,(a,f)=>{r.instances[f]===I&&(r.instances[f]=void 0,r[f].space=!1,r[f].offset=0),r.instances[a]=I,r[a].size=z.value,r[a].space=Z.value,r[a].offset=re.value}),B(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&be()}),B(()=>e.behavior+e.breakpoint,be),B(r.isContainer,a=>{C.value===!0&&b(a!==!0),a===!0&&be()}),B(r.scrollbarWidth,()=>{O(C.value===!0?0:void 0)}),B(re,a=>{W("offset",a)}),B(Z,a=>{o("onLayout",a),W("space",a)}),B(F,()=>{O()}),B(z,a=>{O(),d(e.miniToOverlay,a)}),B(()=>e.miniToOverlay,a=>{d(a,z.value)}),B(()=>n.lang.rtl,()=>{O()}),B(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(He(),r.animate())}),B(E,a=>{o("miniState",a)});function O(a){a===void 0?Be(()=>{a=C.value===!0?0:z.value,O(U.value*a)}):(r.isContainer.value===!0&&F.value===!0&&(w.value===!0||Math.abs(a)===z.value)&&(a+=U.value*r.scrollbarWidth.value),ie.value=a)}function H(a){Te.value=a}function ce(a){const f=a===!0?"remove":r.isContainer.value!==!0?"add":"";f!==""&&document.body.classList[f]("q-body--drawer-toggle")}function He(){_!==null&&clearTimeout(_),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),Y.value=!0,_=setTimeout(()=>{_=null,Y.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ve(a){if(C.value!==!1)return;const f=z.value,T=xe(a.distance.x,0,f);if(a.isFinal===!0){T>=Math.min(75,f)===!0?k():(r.animate(),H(0),O(U.value*f)),X.value=!1;return}O((n.lang.rtl===!0?F.value!==!0:F.value)?Math.max(f-T,0):Math.min(0,T-f)),H(xe(T/f,0,1)),a.isFirst===!0&&(X.value=!0)}function ge(a){if(C.value!==!0)return;const f=z.value,T=a.direction===e.side,S=(n.lang.rtl===!0?T!==!0:T)?xe(a.distance.x,0,f):0;if(a.isFinal===!0){Math.abs(S)<Math.min(75,f)===!0?(r.animate(),H(1),O(0)):$(),X.value=!1;return}O(U.value*S),H(xe(1-S/f,0,1)),a.isFirst===!0&&(X.value=!0)}function de(){b(!1),ce(!0)}function W(a,f){r.update(e.side,a,f)}function i(a,f){a.value!==f&&(a.value=f)}function d(a,f){W("size",a===!0?e.miniWidth:f)}return r.instances[e.side]=I,d(e.miniToOverlay,z.value),W("space",Z.value),W("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&C.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),he(()=>{o("onLayout",Z.value),o("miniState",E.value),M=e.showIfAbove===!0;const a=()=>{(C.value===!0?g:y)(!1,!0)};if(r.totalWidth.value!==0){Be(a);return}m=B(r.totalWidth,()=>{m(),m=void 0,C.value===!1&&e.showIfAbove===!0&&w.value===!1?k(!1):a()})}),se(()=>{m!==void 0&&m(),_!==null&&(clearTimeout(_),_=null),C.value===!0&&de(),r.instances[e.side]===I&&(r.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const a=[];w.value===!0&&(e.noSwipeOpen===!1&&a.push(we(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Qe.value)),a.push(st("div",{ref:"backdrop",class:ee.value,style:te.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&C.value===!0,()=>Oe.value)));const f=E.value===!0&&c.mini!==void 0,T=[L("div",{...l,key:""+f,class:[De.value,l.class]},f===!0?c.mini():ze(c.default))];return e.elevated===!0&&C.value===!0&&T.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(st("aside",{ref:"content",class:Ie.value,style:N.value},T,"contentclose",e.noSwipeClose!==!0&&w.value===!0,()=>_e.value)),L("div",{class:"q-drawer-container"},a)}}}),ba=j({name:"QPageContainer",setup(e,{slots:c}){const{proxy:{$q:o}}=oe(),l=Re(Ee,V);if(l===V)return console.error("QPageContainer needs to be child of QLayout"),V;rt(Rt,!0);const t=v(()=>{const n={};return l.header.space===!0&&(n.paddingTop=`${l.header.size}px`),l.right.space===!0&&(n[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(n.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(n[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),n});return()=>L("div",{class:"q-page-container",style:t.value},ze(c.default))}});const{passive:bt}=at,ga=["both","horizontal","vertical"];var ya=j({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ga.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:c}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,n;B(()=>e.scrollTarget,()=>{h(),b()});function s(){l!==null&&l();const M=Math.max(0,ea(t)),_=ta(t),m={top:M-o.position.top,left:_-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const w=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:M,left:_},o.directionChanged=o.direction!==w,o.delta=m,o.directionChanged===!0&&(o.direction=w,o.inflectionPoint=o.position),c("scroll",{...o})}function b(){t=Zt(n,e.scrollTarget),t.addEventListener("scroll",u,bt),u(!0)}function h(){t!==void 0&&(t.removeEventListener("scroll",u,bt),t=void 0)}function u(M){if(M===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[_,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{m(_),l=null}}}const{proxy:r}=oe();return B(()=>r.$q.lang.rtl,s),he(()=>{n=r.$el.parentNode,b()}),se(()=>{l!==null&&l(),h()}),Object.assign(r,{trigger:u,getPosition:()=>o}),it}}),wa=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:c,emit:o}){const{proxy:{$q:l}}=oe(),t=P(null),n=P(l.screen.height),s=P(e.container===!0?0:l.screen.width),b=P({position:0,direction:"down",inflectionPoint:0}),h=P(0),u=P(wt.value===!0?0:Ye()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),M=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),_=v(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=v(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function w(y){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};b.value=k,e.onScroll!==void 0&&o("scroll",k)}}function E(y){const{height:k,width:$}=y;let A=!1;n.value!==k&&(A=!0,n.value=k,e.onScrollHeight!==void 0&&o("scrollHeight",k),C()),s.value!==$&&(A=!0,s.value=$),A===!0&&e.onResize!==void 0&&o("resize",y)}function z({height:y}){h.value!==y&&(h.value=y,C())}function C(){if(e.container===!0){const y=n.value>h.value?Ye():0;u.value!==y&&(u.value=y)}}let p=null;const g={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:h,scrollbarWidth:u,totalWidth:v(()=>s.value+u.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:Se({size:0,offset:0,space:!1}),right:Se({size:300,offset:0,space:!1}),footer:Se({size:0,offset:0,space:!1}),left:Se({size:300,offset:0,space:!1}),scroll:b,animate(){p!==null?clearTimeout(p):document.body.classList.add("q-body--layout-animate"),p=setTimeout(()=>{p=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,k,$){g[y][k]=$}};if(rt(Ee,g),Ye()>0){let $=function(){y=null,k.classList.remove("hide-scrollbar")},A=function(){if(y===null){if(k.scrollHeight>l.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout($,300)},D=function(I){y!==null&&I==="remove"&&(clearTimeout(y),$()),window[`${I}EventListener`]("resize",A)},y=null;const k=document.body;B(()=>e.container!==!0?"add":"remove",D),e.container!==!0&&D("add"),zt(()=>{D("remove")})}return()=>{const y=yt(c.default,[L(ya,{onScroll:w}),L(Me,{onResize:E})]),k=L("div",{class:r.value,style:M.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(Me,{onResize:z}),L("div",{class:"absolute-full",style:_.value},[L("div",{class:"scroll",style:m.value},[k])])]):k}}}),pa="/assets/tree.9aaa6aec.jpg";const Ta=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const c=e;return(o,l)=>(ue(),fe(Pe,{clickable:"",tag:"a",target:"_blank",href:c.link},{default:R(()=>[c.icon?(ue(),fe(ne,{key:0,avatar:""},{default:R(()=>[q(le,{name:c.icon},null,8,["name"])]),_:1})):Et("",!0),q(ne,null,{default:R(()=>[q(lt,null,{default:R(()=>[ve(ct(c.title),1)]),_:1}),q(lt,{caption:""},{default:R(()=>[ve(ct(c.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});const Ca=pe("img",{src:"https://gravatar.com/userimage/114025816/009bda9655cef881348a187f20dfbebb.jpeg?size=256"},null,-1),qa=pe("div",{class:"bg-transparent q-pa-md"},[pe("div",{class:"text-weight-bold text-white"},"Theodor Bischler"),pe("div",{class:"text-white"},"@theodorbischler")],-1),Ba=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const c=[{title:"Facebook",caption:"Theodor Bischler",icon:"facebook",link:"https://www.facebook.com/TheodorBischler/"},{title:"Instagram",caption:"@theodorbischler",icon:"instagram",link:"https://www.instagram.com/theodorbischler/"}],o=P(!Je().platform.is.mobile),l=P(!Je().platform.is.mobile);function t(){return Je().platform.is.mobile&&window.window<500?!1:l.value}function n(){o.value=!o.value}return(s,b)=>{const h=At("router-view");return ue(),fe(wa,{view:"lHh Lpr lFf"},{default:R(()=>[q(va,null,{default:R(()=>[q(fa,null,{default:R(()=>[q(Dt,{flat:"",onClick:n,round:"",dense:"",icon:"menu",size:"20px"}),q(vt),q(da,{"inline-label":"",shrink:""},{default:R(()=>[q(Le,{icon:"home",label:s.$q.platform.is.mobile?void 0:"Home",to:"/",exact:""},null,8,["label"]),q(Le,{icon:"add",label:s.$q.platform.is.mobile?void 0:"New Travel",to:"/new",exact:""},null,8,["label"]),q(Le,{icon:"insights",label:s.$q.platform.is.mobile?void 0:"Stats",to:"/stats",exact:""},null,8,["label"]),q(Le,{label:" "})]),_:1}),q(vt)]),_:1})]),_:1}),q(ma,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=u=>o.value=u),width:200,breakpoint:500,mini:l.value,onMouseover:b[1]||(b[1]=u=>l.value=!1),onMouseout:b[2]||(b[2]=u=>l.value=!0),"mini-to-overlay":"",onToggle:b[3]||(b[3]=u=>l.value=!l.value)},{default:R(()=>[pe("div",{class:Ue(t()?"headerMini":"headerNonMini")},[q(aa,{class:Ue(["absolute-top",t()&&"imageBackgroundMini"]),src:pa,style:{height:"inherit",overflow:"hidden","z-index":"-1"}},null,8,["class"]),q(It,{class:Ue(["q-ml-sm",t()?"avatarMini":"avatarNonMini"]),size:t()?"45px":"56px"},{default:R(()=>[Ca]),_:1},8,["size","class"]),qa],2),q(Ge,{padding:""},{default:R(()=>[we((ue(),fe(Pe,{clickable:"",to:"/profile"},{default:R(()=>[q(ne,{avatar:""},{default:R(()=>[q(le,{name:"manage_accounts"})]),_:1}),q(ne,null,{default:R(()=>[ve(" Profile ")]),_:1})]),_:1})),[[$e]]),we((ue(),fe(Pe,{clickable:"",to:"/history"},{default:R(()=>[q(ne,{avatar:""},{default:R(()=>[q(le,{name:"history"})]),_:1}),q(ne,null,{default:R(()=>[ve(" History ")]),_:1})]),_:1})),[[$e]]),we((ue(),fe(Pe,{clickable:"",to:"/help"},{default:R(()=>[q(ne,{avatar:""},{default:R(()=>[q(le,{name:"help"})]),_:1}),q(ne,null,{default:R(()=>[ve(" Help ")]),_:1})]),_:1})),[[$e]])]),_:1}),q(Ge,{class:"absolute-bottom",style:{overflow:"hidden"}},{default:R(()=>[q(Ge,null,{default:R(()=>[q(lt,{header:""},{default:R(()=>[ve(" Essential Links ")]),_:1}),(ue(),Qt(Ht,null,Ot(c,u=>q(Ta,Vt({key:u.title},u),null,16)),64))]),_:1})]),_:1})]),_:1},8,["modelValue","mini"]),q(ba,null,{default:R(()=>[q(h)]),_:1})]),_:1})}}});export{Ba as default};