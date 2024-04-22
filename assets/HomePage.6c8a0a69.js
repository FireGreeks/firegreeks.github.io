import{r as m,B as p,u as _,C as i,L as n,M as v,a9 as s,F as f,H as l,G as y,aa as o,O as e}from"./index.3a0f0796.js";import{Q as b}from"./QPage.cb3dd9a8.js";var g="/assets/stats.75fa3774.png",w="/assets/new-travel.afa30640.png";const x={class:"page-container"},k=s("h1",{class:"text-center"},"Emission Tracker",-1),T=s("br",null,null,-1),q={class:"flex flex-center"},B=s("br",null,null,-1),N=s("p",null,[e(" Welcome to "),s("b",null,"Emission Tracker"),e("! This app is designed to monitor your transportation emissions and provide valuable insights into your environmental impact. By tracking various modes of transportation, from daily commutes to long-distance travel, Emission Tracker helps you understand the carbon footprint associated with your journeys. ")],-1),C=s("div",{class:"col",style:{"flex-basis":"50%"}},[s("h5",{class:"small-title"},"Stats"),s("p",null,[e("Find every statistic relevant to your recorded travel emissions: "),s("b",null,"carbon footprint"),e(", "),s("b",null,"environmental impact"),e(" and "),s("b",null,"emissions")])],-1),E=s("img",{src:g,alt:"New travel",style:{width:"100%"}},null,-1),P=[C,E],Q=s("br",null,null,-1),A=s("div",{class:"col",style:{"flex-basis":"50%"}},[s("h5",{class:"small-title"},"New Travel"),s("p",null,[e("Create a new travel by simply providing details regarding the "),s("b",null,"travel method"),e(" and the "),s("b",null,"distance traveled")])],-1),F=s("img",{src:w,alt:"New travel",style:{width:"100%"}},null,-1),H=[A,F],V=s("br",null,null,-1),$=s("div",{class:"col",style:{"flex-basis":"50%"}},[s("h5",{class:"small-title"},"History"),s("p",null,"Access all previously submitted travels along with their relevant information.")],-1),z=[$],j={__name:"HomePage",setup(L){const a=m(!1),r=p(`
    query profile {
      profile {
        name
      }
    }
  `),{onResult:c,result:d,loading:u,error:h}=_(r,{},{errorPolicy:"none"});return c(t=>{!t.loading&&!t.error&&(a.value=!0)}),(t,O)=>(i(),n(b,{class:"q-pa-sm"},{default:v(()=>[s("div",x,[k,T,s("div",q,[a.value?(i(),n(f,{key:0,label:"To Your App"+(l(u)||l(h)?"":" -- "+l(d).profile.name),size:"xl",color:"primary",push:"",to:"/app"},null,8,["label"])):y("",!0)]),B,N,s("div",{class:"highlight-box",style:o("width: "+(t.$q.platform.is.mobile?"100%":"85%"))},P,4),Q,s("div",{class:"highlight-box",style:o("width: "+(t.$q.platform.is.mobile?"100%":"85%"))},H,4),V,s("div",{class:"highlight-box",style:o("width: "+(t.$q.platform.is.mobile?"100%":"85%"))},z,4)])]),_:1}))}};export{j as default};