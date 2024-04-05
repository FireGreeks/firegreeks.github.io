import{d as ne,f as ie,b as ge,e as fe,g as he,u as be,Q as pe,p as J,o as H}from"./format.f8bc4694.js";import{m as F,c as _,l,K as se,g as le,a as re,ae as xe,aF as ye,C as ue,r as x,w as K,v as Se,cd as _e,Q as G,x as we,k as ke,a5 as Ie,_ as U,$ as j,a0 as B,a7 as u,ao as Te,a1 as T,a3 as E,a4 as W,u as q,a6 as X,a8 as qe,a2 as Z,bw as Ee,bv as Ce}from"./index.3c3289c5.js";import{Q as ee,u as Me,a as Oe,b as De}from"./use-checkbox.b6d5ef1c.js";import{v as Le,p as te,q as Qe}from"./index.7402cf17.js";import{Q as $e}from"./QPage.a5861a35.js";import{u as ae}from"./index.c0ba34e6.js";import{d as P}from"./date.b9fc3567.js";import{d as oe}from"./typesFormatter.fa832516.js";import{_ as Ae}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-timeout.4676a119.js";var Be=F({name:"QCard",props:{...ne,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:w}){const{proxy:{$q:d}}=le(),s=ie(e,d),v=_(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>l(e.tag,{class:v.value},se(w.default))}}),Ye=F({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:w,emit:d}){let s=!1,v,r,h=null,c=null,p,C;function k(){v&&v(),v=null,s=!1,h!==null&&(clearTimeout(h),h=null),c!==null&&(clearTimeout(c),c=null),r!==void 0&&r.removeEventListener("transitionend",p),p=null}function b(t,m,g){m!==void 0&&(t.style.height=`${m}px`),t.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,v=g}function y(t,m){t.style.overflowY=null,t.style.height=null,t.style.transition=null,k(),m!==C&&d(m)}function L(t,m){let g=0;r=t,s===!0?(k(),g=t.offsetHeight===t.scrollHeight?0:void 0):(C="hide",t.style.overflowY="hidden"),b(t,g,m),h=setTimeout(()=>{h=null,t.style.height=`${t.scrollHeight}px`,p=S=>{c=null,(Object(S)!==S||S.target===t)&&y(t,"show")},t.addEventListener("transitionend",p),c=setTimeout(p,e.duration*1.1)},100)}function O(t,m){let g;r=t,s===!0?k():(C="show",t.style.overflowY="hidden",g=t.scrollHeight),b(t,g,m),h=setTimeout(()=>{h=null,t.style.height=0,p=S=>{c=null,(Object(S)!==S||S.target===t)&&y(t,"hide")},t.addEventListener("transitionend",p),c=setTimeout(p,e.duration*1.1)},100)}return re(()=>{s===!0&&k()}),()=>l(xe,{css:!1,appear:e.appear,onEnter:L,onLeave:O},w.default)}});const D=ye({}),He=Object.keys(ue);var Ne=F({name:"QExpansionItem",props:{...ue,...ge,...ne,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...fe,"click","afterShow","afterHide"],setup(e,{slots:w,emit:d}){const{proxy:{$q:s}}=le(),v=ie(e,s),r=x(e.modelValue!==null?e.modelValue:e.defaultOpened),h=x(null),c=Le(),{show:p,hide:C,toggle:k}=he({showing:r});let b,y;const L=_(()=>`q-expansion-item q-item-type q-expansion-item--${r.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),O=_(()=>{if(e.contentInsetLevel===void 0)return null;const a=s.lang.rtl===!0?"Right":"Left";return{["padding"+a]:e.contentInsetLevel*56+"px"}}),t=_(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),m=_(()=>{const a={};return He.forEach(M=>{a[M]=e[M]}),a}),g=_(()=>t.value===!0||e.expandIconToggle!==!0),S=_(()=>e.expandedIcon!==void 0&&r.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),V=_(()=>e.disable!==!0&&(t.value===!0||e.expandIconToggle===!0)),N=_(()=>({expanded:r.value===!0,detailsId:c.value,toggle:k,show:p,hide:C})),o=_(()=>{const a=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[r.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":r.value===!0?"true":"false","aria-controls":c.value,"aria-label":a}});K(()=>e.group,a=>{y!==void 0&&y(),a!==void 0&&$()});function n(a){t.value!==!0&&k(a),d("click",a)}function i(a){a.keyCode===13&&f(a,!0)}function f(a,M){M!==!0&&h.value!==null&&h.value.focus(),k(a),we(a)}function Q(){d("afterShow")}function I(){d("afterHide")}function $(){b===void 0&&(b=be()),r.value===!0&&(D[e.group]=b);const a=K(r,R=>{R===!0?D[e.group]=b:D[e.group]===b&&delete D[e.group]}),M=K(()=>D[e.group],(R,me)=>{me===b&&R!==void 0&&R!==b&&C()});y=()=>{a(),M(),D[e.group]===b&&delete D[e.group],y=void 0}}function A(){const a={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},M=[l(G,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&r.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:S.value})];return V.value===!0&&(Object.assign(a,{tabindex:0,...o.value,onClick:f,onKeyup:i}),M.unshift(l("div",{ref:h,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),l(H,a,()=>M)}function z(){let a;return w.header!==void 0?a=[].concat(w.header(N.value)):(a=[l(H,()=>[l(J,{lines:e.labelLines},()=>e.label||""),e.caption?l(J,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&a[e.switchToggleSide===!0?"push":"unshift"](l(H,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>l(G,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&a[e.switchToggleSide===!0?"unshift":"push"](A()),a}function de(){const a={ref:"item",style:e.headerStyle,class:e.headerClass,dark:v.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return g.value===!0&&(a.clickable=!0,a.onClick=n,Object.assign(a,t.value===!0?m.value:o.value)),l(pe,a,z)}function ce(){return Se(l("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:O.value,id:c.value},se(w.default)),[[_e,r.value]])}function ve(){const a=[de(),l(Ye,{duration:e.duration,onShow:Q,onHide:I},ce)];return e.expandSeparator===!0&&a.push(l(ee,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:v.value}),l(ee,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:v.value})),a}return e.group!==void 0&&$(),re(()=>{y!==void 0&&y()}),()=>l("div",{class:L.value},[l("div",{class:"q-expansion-item__container relative-position"},ve())])}}),Re=F({name:"QToggle",props:{...Me,icon:String,iconColor:String},emits:Oe,setup(e){function w(d,s){const v=_(()=>(d.value===!0?e.checkedIcon:s.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),r=_(()=>d.value===!0?e.iconColor:null);return()=>[l("div",{class:"q-toggle__track"}),l("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},v.value!==void 0?[l(G,{name:v.value,color:r.value})]:void 0)]}return De("toggle",w)}});const Y=e=>(Ee("data-v-2864b70f"),e=e(),Ce(),e),Pe=Y(()=>u("h2",{class:"text-center"},"Emission Statistics",-1)),Fe=Y(()=>u("h5",{class:"subtitle text-center"},"All the stats you will ever need",-1)),Ve=Y(()=>u("br",null,null,-1)),ze={class:"page-container"},Ke=Y(()=>u("p",null,[E("On this page, you will find every statistic relevant to your recorded travel emissions. Whether it's the "),u("b",null,"carbon footprint"),E(" of your "),u("i",null,"flights"),E(", the impact of your "),u("i",null,"daily commute,"),E(" or the emissions generated by your "),u("i",null,"road trips"),E(", this comprehensive collection of data aims to provide you with a detailed overview of your "),u("b",null,"environmental impact"),E(" from travel. By presenting these statistics in one centralized location, you can gain valuable insights into your carbon footprint, allowing you to make informed decisions and take steps towards reducing your environmental footprint.")],-1)),Ue=Y(()=>u("div",{style:{width:"25%"}},null,-1)),je={style:{width:"75%"}},We=Y(()=>u("br",null,null,-1)),Ge={class:"row",style:{width:"100%"}},Je={__name:"StatsPage",setup(e){const{refetch:w}=ae(te(`
      query getStats ($unit: TimeUnit, $delta: Int!, $separateMethods: Boolean!) {
        stats(unit: $unit, delta: $delta) {
          labels
          emissions(separateMethods: $separateMethods) {
            name
            data
          }
          distances(separateMethods: false) {
            name
            data
          }
        }
      }
    `),{unit:"WEEK",delta:0,separateMethods:!0}),{loading:d,result:s,onResult:v,refetch:r}=ae(te(`
    query overallStats {
      overallStats {
        totalEmission
        totalDistance
        totalTravels

        methodsUsed
        methodDistribution
        emissionDistribution
      }
    }`)),h=x({}),c=x([]),p=x({}),C=x([]),k=x({}),b=x({}),y=x([]),L=x([]),O=x(0),t=x("WEEK"),m=x(!0);v(o=>{if(o.loading)return;const n=i=>({pie:{donut:{labels:{show:!0,total:{show:!0,fontFamily:"Helvetica, Arial, sans-serif",fontSize:"15px",label:"Total",formatter:function(f){return i(f.globals.seriesTotals.reduce((Q,I)=>Q+I,0))}},value:{show:!0,fontSize:"25px",fontFamily:"Anton, Arial, sans-serif",offsetY:0}}}}});b.value={labels:o.data.overallStats.methodsUsed.map(oe),title:{text:"Overall Emission Distribution (kg)",align:"left",style:{fontSize:"18px"}},plotOptions:n(i=>i.toFixed(2))},k.value={labels:o.data.overallStats.methodsUsed.map(oe),title:{text:"Overall Method Distribution (km)",align:"left",style:{fontSize:"18px"}},plotOptions:n(i=>Math.floor(i))},L.value=o.data.overallStats.emissionDistribution,y.value=o.data.overallStats.methodDistribution});function g(){w({unit:t.value,delta:O.value,separateMethods:m.value}).then(o=>{let n=[100];o.data.stats.emissions.length!==0&&(n=o.data.stats.emissions[0].data.map((I,$)=>o.data.stats.emissions.reduce((A,z)=>A+z.data[$],0)));const i=V(o.data.stats.labels[0],t.value),f=0,Q=Math.max(...n);h.value={chart:{id:"stats",stacked:!0},xaxis:{categories:o.data.stats.labels.map(I=>S(I,t.value))},yaxis:[{title:{text:"Distance (km)"},decimalsInFloat:0},{opposite:!0,min:f,max:Q,decimalsInFloat:2,title:{text:"Emission (kg)"}},...new Array(10).fill({show:!1,min:f,max:Q})],stroke:{curve:"straight",width:[4,...new Array(50).fill(0)]},dataLabels:{enabled:!1},title:{text:"CO2 Emission and Distance Travelled ("+i+")",align:"left",style:{fontSize:"18px"}}},p.value={chart:{id:"stats_ratio"},xaxis:{categories:o.data.stats.labels.map(I=>S(I,t.value))},yaxis:[{title:{text:"Ratio (g/km)"},decimalsInFloat:2}],stroke:{curve:"straight",width:4},dataLabels:{enabled:!1},title:{text:"CO2 Emission per km ("+i+")",align:"left",style:{fontSize:"18px"}}},c.value=[],o.data.stats.distances.length!==0&&c.value.push(...N(o.data.stats.distances,"line")),o.data.stats.emissions.length!==0&&(c.value.push(...N(o.data.stats.emissions,"column")),C.value=[{name:"Ratio",data:n.map((I,$)=>{const A=o.data.stats.distances[0].data[$];return A===0?0:I/A})}])})}function S(o,n){let i;switch(n){case"WEEK":i="ddd DD/MM";break;case"MONTH":i="DD";break;case"YEAR":i="MMMM";break}return P.formatDate(o,i)}function V(o,n){switch(n){case"WEEK":return"Week "+P.formatDate(o,"ww");case"MONTH":return P.formatDate(o,"MMMM YYYY");case"YEAR":return P.formatDate(o,"YYYY")}}function N(o,n){return o.map(i=>({...i,type:n}))}return ke(()=>{g(),r()}),(o,n)=>{const i=Ie("apexchart");return U(),j($e,{class:"q-pa-sm"},{default:B(()=>[Pe,Fe,Ve,u("div",ze,[Ke,u("div",{class:"highlight-box",style:Te("width: "+(o.$q.platform.is.mobile?"100%":"75%"))},[T(Ne,null,{header:B(()=>[T(H,{id:"number",avatar:""},{default:B(()=>[E(W(q(d)?"0.00":q(s).overallStats.totalEmission.toFixed(2))+"kg ",1)]),_:1}),T(H,null,{default:B(()=>[E(" of CO2 have been emitted by your transports. ")]),_:1})]),default:B(()=>[T(Be,{class:"bg-secondary row"},{default:B(()=>[Ue,u("div",je,[E(" This information is the total of CO2 emission that has been recorded over your total of "),u("b",null,W(q(d)?"0":q(s).overallStats.totalTravels)+" travels",1),E("; and over a distance of "),u("b",null,W(q(d)?"0":q(s).overallStats.totalDistance.toFixed(2))+"km.",1)])]),_:1})]),_:1})],4),We,u("div",Ge,[T(Qe,{class:"col",filled:"",modelValue:t.value,"onUpdate:modelValue":[n[0]||(n[0]=f=>t.value=f),n[1]||(n[1]=f=>g())],options:["WEEK","MONTH","YEAR"],label:"Time Unit","stack-label":""},null,8,["modelValue"]),T(X,{icon:"arrow_left",onClick:n[2]||(n[2]=f=>{O.value++,g()})}),T(X,{icon:"arrow_right",onClick:n[3]||(n[3]=f=>{O.value--,g()})}),T(Re,{modelValue:m.value,"onUpdate:modelValue":[n[4]||(n[4]=f=>m.value=f),n[5]||(n[5]=f=>g())],color:"green",label:"Travel Methods"},null,8,["modelValue"])]),T(i,{type:"bar",options:h.value,series:c.value},null,8,["options","series"]),T(i,{type:"line",options:p.value,series:C.value},null,8,["options","series"]),u("div",{class:qe(!o.$q.platform.is.mobile&&"row")},[q(d)||q(s).overallStats.totalEmission!==0?(U(),j(i,{key:0,class:"col",type:"donut",options:b.value,series:L.value},null,8,["options","series"])):Z("",!0),q(d)||q(s).overallStats.totalDistance!==0?(U(),j(i,{key:1,class:"col",type:"donut",options:k.value,series:y.value},null,8,["options","series"])):Z("",!0)],2)])]),_:1})}}};var rt=Ae(Je,[["__scopeId","data-v-2864b70f"]]);export{rt as default};