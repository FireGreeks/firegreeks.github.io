import{a as f,Q as p}from"./QForm.7a2a4a29.js";import{r as t,C as g,D as y,E as l,M as d,H as r,I as b,aa as n,ac as E,F as c}from"./index.9b77b900.js";import{i as V}from"./regexUtil.6f258d42.js";import{a as w,s as P,c as k}from"./auth.64404cdf.js";import"./use-key-composition.5e0f5a36.js";import"./use-dark.1619d748.js";import"./uid.42677368.js";import"./GQL.f95996d4.js";import"./notificationUtil.e3632f09.js";const x=n("div",null,[n("h1",{class:"title-simple"},"Welcome Back!"),n("h3",{class:"subtitle-simple"},"Log into you Emission Tracker account to continue:) ")],-1),N={__name:"LoginPage",setup(B){const s=t(""),i=t(""),o=t(!0),u=t(!1),m=t(!1);return(Q,a)=>(g(),y(b,null,[x,l(f,{onSubmit:a[3]||(a[3]=e=>r(w)(s.value,i.value,r(P),v=>r(k)(v,u.value,m.value))),class:"q-gutter-md q-mt-lg"},{default:d(()=>[l(p,{filled:"",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),"lazy-rules":"",label:"E-mail",error:u.value,rules:[e=>e&&e.length>0||"Please type in something",e=>r(V)(e)||"Please type in a valid e-mail address"]},null,8,["modelValue","error","rules"]),l(p,{filled:"",type:o.value?"password":"text",label:"Password",modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=e=>i.value=e),error:m.value,"lazy-rules":"",rules:[e=>e&&e.length>0||"Please type your password"]},{append:d(()=>[l(E,{name:o.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[1]||(a[1]=e=>o.value=!o.value)},null,8,["name"])]),_:1},8,["type","modelValue","error","rules"]),l(c,{label:"Sign-In",type:"submit",color:"primary",class:"submit"}),l(c,{flat:"",class:"text-primary float-right p-pa-none q-mb-lg",label:"Don't have an account? Create one!",to:"/auth/register"+(s.value?"?e="+s.value:"")},null,8,["to"])]),_:1})],64))}};export{N as default};