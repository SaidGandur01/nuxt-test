import"./entry.ecff7ad1.js";import{j as q,I as L,x as $,L as k,M as e,u as n,U as A}from"./swiper-vue.d875c6a4.js";const R=""+new URL("logo.811739e5.png",import.meta.url).href,b=""+new URL("arrow.a361fd72.png",import.meta.url).href,C=""+new URL("bag.050fa9f8.png",import.meta.url).href,E=""+new URL("wine-bottle.32ca1298.png",import.meta.url).href,U=""+new URL("frame.488d7f58.png",import.meta.url).href,B=""+new URL("grapes.b20f541a.png",import.meta.url).href,N=""+new URL("section-4-bg.c77706f4.jpg",import.meta.url).href,x=""+new URL("footer-img.19bf7e99.png",import.meta.url).href,W={class:"container"},G={class:"navbar"},M={href:"#",class:"logo-link"},V=["src"],Y=A('<a href="#" class="menu"><div class="menu-line menu-line-1"></div><div class="menu-line menu-line-2"></div><div class="menu-line menu-line-3"></div></a><nav class="nav-list"><a href="#" class="nav-link">Home</a><a href="#" class="nav-link">Vineyards</a><a href="#" class="nav-link">Grapes</a><a href="#" class="nav-link">Wine</a><a href="#" class="nav-link">Contact</a></nav>',2),j={class:"page-btn left-btn"},F=["src"],T={class:"page-btn right-btn"},D=["src"],H=A('<div class="progress-wrapper"><div class="progress"><h2>1/5</h2></div><div class="circle-wrapper"><div class="circle circle-1"></div><div class="circle circle-2"></div><div class="circle circle-3"></div><div class="circle circle-4"></div><div class="circle circle-5"></div></div></div>',1),I={class:"wrapper"},J=e("section",{class:"section-1"},[e("div",{class:"section-wrapper section-1-wrapper"},[e("div",{class:"section-1-heading-wrapper"},[e("h1",{class:"section-1-heading"},"The best wines around the world")])])],-1),O={class:"section-2"},P={class:"section-wrapper section-2-wrapper"},z={class:"sale"},K=["src"],Q=e("button",{class:"sale-btn"},"order now!",-1),X=["src"],Z={class:"section-3"},ee={class:"section-wrapper section-3-wrapper"},te=e("h1",{class:"section-3-heading"},"the best quality",-1),se=["src"],oe=["src"],ce={class:"section-4"},re={class:"section-wrapper section-4-wrapper"},ne=e("div",{class:"section-4-bg"},null,-1),le=e("h1",{class:"section-4-heading"},"Newly Released Wines",-1),ie=["src"],ae={class:"section-5"},ue={class:"section-wrapper section-5-wrapper"},de=e("ul",{class:"footer-list"},[e("li",null,"Contact"),e("li",null,"NY"),e("li",null,"1039 Stanley Avenue"),e("li",null,"Open Daily"),e("li",null,"By appointment only")],-1),me=["src"],pe=e("ul",{class:"footer-list"},[e("li",null,"Connect"),e("li",null,"PN: 516-448-2763"),e("li",null,"MN: 631-742-8400"),e("li",null,"example@winehouse.com"),e("li",null,"Join our mailing list")],-1),_e=e("p",{class:"copyright"}," Copyright © CodeAndCreate. All Rights Reserved ",-1),ye=q({__name:"wine",setup(he){return L(async()=>{var h,f,g,y;let o=0,s=1,i=!0;const d=document.querySelectorAll("section"),_=document.querySelector(".progress h2"),S=document.querySelectorAll(".circle"),m=document.querySelector(".menu"),r=document.querySelector(".section-1-wrapper"),a=document.querySelector(".section-5-wrapper");await setTimeout(async()=>{await(r==null?void 0:r.setAttribute("style","transform: scale(1)"))},0);const u=()=>{var t;_&&(_.textContent=`${s}/${d.length}`),Array.from(S).forEach(c=>{c.setAttribute("style","background-color: transparent")}),(t=document.querySelector(`.circle-${s}`))==null||t.setAttribute("style","background-color: #ddd")},p=()=>(i=!0,o===5&&(Array.from(d).forEach(t=>{t.style.left="0"}),o=0,s=1,r==null||r.setAttribute("style","transform: scale(1)"),a==null||a.setAttribute("style","transform: scale(1.5)"),u(),i=!1),o===-1&&(Array.from(d).forEach(t=>{t.classList[0]!=="section-5"&&t.setAttribute("style","left: -100vw")}),o=4,s=5,console.log("entramos"),r==null||r.setAttribute("style","transform: scale(1.5)"),a==null||a.setAttribute("style","transform: scale(1)"),u(),i=!1),u(),i);window.addEventListener("wheel",t=>{var l,v,w;const c=t.deltaY>0;c?(o++,s++):(o--,s--),p(),u(),console.log(o,s),i&&((l=document.querySelector(`.section-${c?o:s}`))==null||l.setAttribute("style",`left: (${c?"-100vw":"0"})`),(v=document.querySelector(`.section-${c?o:s}-wrapper`))==null||v.setAttribute("style",`transform: scale(${c?"1.5":"1"})`),(w=document.querySelector(`.section-${c?o+1:s+1}-wrapper`))==null||w.setAttribute("style",`transform: scale(${c?"1":"1.5"})`))}),(h=document.querySelector(".left-btn"))==null||h.addEventListener("click",()=>{var t,c,l;o--,s--,p()&&((t=document.querySelector(`.section-${s}`))==null||t.setAttribute("style","left: 0")),i&&((c=document.querySelector(`.section-${s}-wrapper`))==null||c.setAttribute("style","transform: scale(1)"),(l=document.querySelector(`.section-${s+1}-wrapper`))==null||l.setAttribute("style","transform: scale(1.5)"))}),(f=document.querySelector(".right-btn"))==null||f.addEventListener("click",()=>{var t,c,l;o++,s++,p()&&((t=document.querySelector(`.section-${o}`))==null||t.setAttribute("style","left: -100vw")),i&&((c=document.querySelector(`.section-${s}-wrapper`))==null||c.setAttribute("style","transform: scale(1)"),(l=document.querySelector(`.section-${o}-wrapper`))==null||l.setAttribute("style","transform: scale(1.5)"))}),(g=document.querySelector(".grapes-img"))==null||g.addEventListener("mouseover",()=>{var t;(t=document.querySelector(".section-3-wrapper"))==null||t.setAttribute("style","opacity: 0.5")}),(y=document.querySelector(".grapes-img"))==null||y.addEventListener("mouseout",()=>{var t;(t=document.querySelector(".section-3-wrapper"))==null||t.setAttribute("style","opacity: 1")}),m==null||m.addEventListener("click",()=>{var t;(t=document.querySelector(".navbar"))==null||t.classList.toggle("change")})}),(o,s)=>($(),k("div",W,[e("div",G,[e("a",M,[e("img",{src:n(R),alt:"Logo",class:"logo"},null,8,V)]),Y]),e("button",j,[e("img",{src:n(b)},null,8,F)]),e("button",T,[e("img",{src:n(b)},null,8,D)]),H,e("div",I,[J,e("section",O,[e("div",P,[e("div",z,[e("img",{src:n(C),alt:"Sale Bag",class:"sale-bag"},null,8,K),Q]),e("img",{src:n(E),alt:"Wine Bottle",class:"wine-bottle"},null,8,X)])]),e("section",Z,[e("div",ee,[te,e("img",{src:n(U),alt:"Grapes Frame",class:"frame-img"},null,8,se),e("img",{src:n(B),alt:"Grapes",class:"grapes-img"},null,8,oe)])]),e("section",ce,[e("div",re,[ne,le,e("img",{src:n(N),alt:"New Wines",class:"new-wines-img"},null,8,ie)])]),e("section",ae,[e("div",ue,[de,e("img",{src:n(x),class:"footer-img"},null,8,me),pe,_e])])])]))}});export{ye as default};