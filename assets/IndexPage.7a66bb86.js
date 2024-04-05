import{_ as o,$ as a,a0 as d,a7 as s,ao as l,a1 as i,a6 as r,a2 as n,a3 as t}from"./index.8ec6514e.js";import{Q as c}from"./QImg.95766a37.js";import{Q as m}from"./QPage.45408a91.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-timeout.91f8746c.js";var p="/assets/transportation.e7dfe106.svg",_="/assets/stats.7785a09b.svg",u="/assets/history.9dbbac01.svg";const v={},b={class:"page-container"},y=s("h1",{class:"text-center"},"Emission Tracker",-1),f=s("br",null,null,-1),g=s("p",null,[t(" Welcome to "),s("b",null,"Emission Tracker"),t("! This app is designed to monitor your transportation emissions and provide valuable insights into your environmental impact. By tracking various modes of transportation, from daily commutes to long-distance travel, Emission Tracker helps you understand the carbon footprint associated with your journeys. ")],-1),w={class:"col",style:{"flex-basis":"50%"}},k=s("h5",{class:"small-title"},"New Travel",-1),T=s("p",null,[t("Create a new travel by simply providing details regarding the "),s("b",null,"travel method"),t(" and the "),s("b",null,"distance traveled")],-1),q=s("br",null,null,-1),x={class:"col",style:{"flex-basis":"50%"}},$=s("h5",{class:"small-title"},"Stats",-1),N=s("p",null,[t("Find every statistic relevant to your recorded travel emissions: "),s("b",null,"carbon footprint"),t(", "),s("b",null,"environmental impact"),t(" and "),s("b",null,"emissions")],-1),B=s("br",null,null,-1),Q={class:"col",style:{"flex-basis":"50%"}},S=s("h5",{class:"small-title"},"History",-1),V=s("p",null,"Access all previously submitted travels along with their relevant information.",-1);function C(e,E){return o(),a(m,{class:"q-pa-sm"},{default:d(()=>[s("div",b,[y,f,g,s("div",{class:"highlight-box row",style:l("width: "+(e.$q.platform.is.mobile?"100%":"75%"))},[s("div",w,[k,T,i(r,{push:"",color:"primary",label:"Register New Travel",to:"/new"})]),e.$q.platform.is.mobile?n("",!0):(o(),a(c,{key:0,class:"col",src:p}))],4),q,s("div",{class:"highlight-box row",style:l("width: "+(e.$q.platform.is.mobile?"100%":"75%"))},[s("div",x,[$,N,i(r,{push:"",color:"primary",label:"See Statistics",to:"/stats"})]),e.$q.platform.is.mobile?n("",!0):(o(),a(c,{key:0,class:"col",src:_}))],4),B,s("div",{class:"highlight-box row",style:l("width: "+(e.$q.platform.is.mobile?"100%":"75%"))},[s("div",Q,[S,V,i(r,{push:"",color:"primary",label:"See Travel History",to:"/history"})]),e.$q.platform.is.mobile?n("",!0):(o(),a(c,{key:0,class:"col",src:u}))],4)])]),_:1})}var A=h(v,[["render",C]]);export{A as default};