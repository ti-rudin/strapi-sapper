import{S as e,i as t,s as a,l as s,a as n,e as o,t as r,m as c,q as h,d as l,c as i,b as u,f as d,g as p,j as f,k as m,n as b,o as v}from"./client.b5e70a0e.js";function k(e){let t,a,s=e[6].message+"";return{c(){t=o("p"),a=r(s),this.h()},l(e){t=u(e,"P",{style:!0});var n=d(t);a=p(n,s),n.forEach(l),this.h()},h(){v(t,"color","red")},m(e,s){f(e,t,s),m(t,a)},p:b,d(e){e&&l(t)}}}function w(e){let t,a,s,n=e[5]+"";return{c(){t=o("p"),a=r("The name is "),s=r(n)},l(e){t=u(e,"P",{});var o=d(t);a=p(o,"The name is "),s=p(o,n),o.forEach(l)},m(e,n){f(e,t,n),m(t,a),m(t,s)},p:b,d(e){e&&l(t)}}}function E(e){let t,a;return{c(){t=o("p"),a=r("...waiting")},l(e){t=u(e,"P",{});var s=d(t);a=p(s,"...waiting"),s.forEach(l)},m(e,s){f(e,t,s),m(t,a)},p:b,d(e){e&&l(t)}}}function T(e){let t,a,v,T,g,j,x,P,y,A={ctx:e,current:null,token:null,pending:E,then:w,catch:k,value:5,error:6};return s(y=e[0],A),{c(){t=n(),a=o("h1"),v=r("About this site"),T=n(),g=o("p"),j=r("This is the 'about' page. There's not much here."),x=n(),P=c(),A.block.c(),this.h()},l(e){h('[data-svelte="svelte-nvlz1j"]',document.head).forEach(l),t=i(e),a=u(e,"H1",{});var s=d(a);v=p(s,"About this site"),s.forEach(l),T=i(e),g=u(e,"P",{});var n=d(g);j=p(n,"This is the 'about' page. There's not much here."),n.forEach(l),x=i(e),P=c(),A.block.l(e),this.h()},h(){document.title="About"},m(e,s){f(e,t,s),f(e,a,s),m(a,v),f(e,T,s),f(e,g,s),m(g,j),f(e,x,s),f(e,P,s),A.block.m(e,A.anchor=s),A.mount=()=>P.parentNode,A.anchor=P},p(t,[a]){{const s=(e=t).slice();s[5]=A.resolved,A.block.p(s,a)}},i:b,o:b,d(e){e&&l(t),e&&l(a),e&&l(T),e&&l(g),e&&l(x),e&&l(P),A.block.d(e),A.token=null,A=null}}}function g(e){let t=new Headers;t.append("Content-Type","text/json");let a=new Request("http://localhost:1337/restaurants",{method:"GET",headers:t,mode:"cors",cache:"default"});return[async function(){const e=await fetch(a),t=await e.json();if(200===e.status)return t[0].description;throw new Error(t)}()]}export default class extends e{constructor(e){super(),t(this,e,g,T,a,{})}}
