import{r,k as _,P as w,S as P,T as u,_ as o,U as c,W as g,Z as k,u as M}from"./index.f50984da.js";import{Q as T}from"./QTable.06a7a269.js";import{Q as Y}from"./QPage.f8c8cd3d.js";import{u as q}from"./index.0afad86d.js";import{d as p}from"./date.258def40.js";import{u as D}from"./use-quasar.7478be4c.js";import{d as H}from"./typesFormatter.b2f74f68.js";import{k as x}from"./index.fc4b5c32.js";import"./QList.154f72b0.js";import"./format.e4e80033.js";import"./use-timeout.635dab6f.js";const $={class:"page-container"},Q=o("h2",{class:"text-center"},"Travel History",-1),B=o("h5",{class:"subtitle text-center"},"All previous travels",-1),N=o("br",null,null,-1),R=o("p",null,"On this page, you have access to all previously submitted travels along with their relevant information. Whether you're looking to review past trips, analyze travel patterns, or assess the environmental impact of your journeys, this comprehensive archive provides you with the data you need. ",-1),C=o("p",null,[o("b",null,"Tips"),g(": You can sort ascending or descending by date.")],-1),J={__name:"HistoryPage",setup(S){const i=D(),{result:V,loading:f,error:z,refetch:v}=q(x(`
    query getHistory ($page: Int, $count: Int, $descending: Boolean) {
      travelHistory(page: $page, count: $count, descending: $descending) {
        datetime
        method
        distance
        emission
      },
      overallStats {
        totalTravels
      }
    }
  `),{page:0,count:3,descending:!1}),h=[{name:"date",required:!0,label:"Date & Time",align:"left",field:e=>e.datetime,format:e=>p.formatDate(p.extractDate(e,"YYYY-MM-DDTHH:mm:ss.000Z"),i.platform.is.mobile?"DD/MM/YY":"Do MMMM YYYY - HH:mm"),sortable:!0},{name:"method",label:i.platform.is.mobile?"Method":"Travel Method",field:"method",format:e=>H(e)},{name:"distance",label:"Distance (km)",field:"distance",format:e=>e+"km"},{name:"emission",label:"CO2 Emission (kg)",field:"emission",format:e=>e.toFixed(2)+"kg"}],b=r(),l=r([]),y=r(""),t=r({page:1,rowsPerPage:3,rowsNumber:10,descending:!0,sortBy:"date"});function n(e){const{page:a,rowsPerPage:s,descending:d}=e.pagination;v({page:a,count:s,descending:d}).then(m=>{l.value=m.data.travelHistory,t.value.page=a,t.value.rowsPerPage=s,t.value.descending=d,t.value.rowsNumber=m.data.overallStats.totalTravels})}return _(()=>{n({pagination:{page:1,rowsPerPage:3,descending:!0}})}),(e,a)=>(w(),P(Y,{class:"q-pa-md"},{default:u(()=>[o("div",$,[Q,B,N,R,C,c(k,{onClick:a[0]||(a[0]=s=>n({pagination:{page:1,rowsPerPage:t.value.rowsPerPage}})),class:"bg-primary q-mt-sm q-mb-sm"},{default:u(()=>[g(" Refresh data ")]),_:1}),c(T,{flat:"",bordered:"",ref_key:"tableRef",ref:b,title:"Last Travels",rows:l.value,columns:h,"row-key":"id",pagination:t.value,"onUpdate:pagination":a[1]||(a[1]=s=>t.value=s),loading:M(f).value,filter:y.value,"binary-state-sort":"",onRequest:n},null,8,["rows","pagination","loading","filter"])])]),_:1}))}};export{J as default};