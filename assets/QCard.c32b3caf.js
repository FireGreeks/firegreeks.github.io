import{u as s,a as d}from"./use-dark.ef1d0fb8.js";import{S as u,T as n,y as c,U as l,t as q}from"./index.a487fe88.js";var i=u({name:"QCard",props:{...s,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=q(),t=d(a,e),o=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:o.value},l(r.default))}});export{i as Q};