import{j as h,a as p,I as m,J as g,x as f,L as v,M as s,A as c,u as r,O as b,z as a,R as d,U as k,V as C,W as P}from"./swiper-vue.95c84867.js";import"./entry.4b481b00.js";const w=""+new URL("about-us-video.163c734a.mp4",import.meta.url).href,I={class:"container"},y=d('<nav class="navbar"><div class="navbar-logo"><a href="#"><span>C</span>ode<span>A</span>nd<span>C</span>reate </a></div><div class="nav-list"><a href="#" class="nav-link">Home</a><a href="#" class="nav-link">About</a><a href="#" class="nav-link">Pricing</a><a href="#" class="nav-link">Blog</a><a href="#" class="nav-link">Contact</a></div></nav><div class="menu"><div class="line line-1"></div><div class="line line-2"></div><div class="line line-3"></div></div><section class="section-1" id="home"><div class="banner"><h1 class="banner-heading"><span class="heading-1">Business Ideas</span><span class="heading-2">Consulting</span><span class="heading-3">Digital Marketing</span><span class="heading-4">Strategy</span></h1><p class="banner-paragraph">Lorem ipsum dolor sit.</p><button class="banner-btn">Discover Now</button></div></section>',3),S={class:"section-2",id:"about-us"},q=s("h1",{class:"section-heading"},"About Us",-1),x=s("div",{class:"section-heading-line"},null,-1),E={class:"video-wrapper"},L=s("video",{src:w,class:"video"},null,-1),N={class:"controls"},A=s("div",{class:"video-bar-wrapper"},[s("div",{class:"video-bar"})],-1),M={class:"buttons"},B={id:"play-pause"},V={class:"section-2-paragraph"},O={class:"section-3",id:"pricing"},R=s("h1",{class:"section-heading"},"Pricing",-1),$=s("div",{class:"section-heading-line"},null,-1),D={class:"pricing-card-front"},T=s("h1",{class:"pricing-card-heading heading-free"},"FREE",-1),U=s("h3",{class:"pricing-card-price"},"$0",-1),W={class:"pricing-card-list list-free"},Y=s("span",null,"Pricing Card Item",-1),j=s("span",null,"Pricing Card Item",-1),z=s("span",null,"Pricing Card Item",-1),F=s("span",null,"Pricing Card Item",-1),G=s("span",null,"Pricing Card Item",-1),H=s("button",{class:"pricing-card-btn btn-free"},"Choose Plan",-1),J=s("div",{class:"pricing-card-back back-free"},[s("a",{href:"#"},"Order Now")],-1),Q={class:"pricing-card-front"},K=s("h1",{class:"pricing-card-heading heading-basic"},"BASIC",-1),X=s("h3",{class:"pricing-card-price"},"$299",-1),Z={class:"pricing-card-list list-basic"},ss=s("span",null,"Pricing Card Item",-1),is=s("span",null,"Pricing Card Item",-1),cs=s("span",null,"Pricing Card Item",-1),ns=s("span",null,"Pricing Card Item",-1),es=s("span",null,"Pricing Card Item",-1),as=s("button",{class:"pricing-card-btn btn-basic"},"Choose Plan",-1),ts=s("div",{class:"pricing-card-back back-basic"},[s("a",{href:"#"},"Order Now")],-1),os={class:"pricing-card-front"},ls=s("h1",{class:"pricing-card-heading heading-standard"},"STANDARD",-1),rs=s("h3",{class:"pricing-card-price"},"$699",-1),ds={class:"pricing-card-list list-standard"},_s=s("span",null,"Pricing Card Item",-1),us=s("span",null,"Pricing Card Item",-1),hs=s("span",null,"Pricing Card Item",-1),ps=s("span",null,"Pricing Card Item",-1),ms=s("span",null,"Pricing Card Item",-1),gs=s("button",{class:"pricing-card-btn btn-standard"},"Choose Plan",-1),fs=s("div",{class:"pricing-card-back back-standard"},[s("a",{href:"#"},"Order Now")],-1),vs={class:"pricing-card-front"},bs=s("h1",{class:"pricing-card-heading heading-premium"},"PREMIUM",-1),ks=s("h3",{class:"pricing-card-price"},"$999",-1),Cs={class:"pricing-card-list list-premium"},Ps=s("span",null,"Pricing Card Item",-1),ws=s("span",null,"Pricing Card Item",-1),Is=s("span",null,"Pricing Card Item",-1),ys=s("span",null,"Pricing Card Item",-1),Ss=s("span",null,"Pricing Card Item",-1),qs=s("span",null,"Pricing Card Item",-1),xs=s("button",{class:"pricing-card-btn btn-premium"},"Choose Plan",-1),Es=s("div",{class:"pricing-card-back back-premium"},[s("a",{href:"#"},"Order Now")],-1),Ls={class:"section-4",id:"contact"},Ns=s("h1",{class:"section-heading"},"Contact",-1),As=s("div",{class:"section-heading-line"},null,-1),Ms={class:"contact-wrapper"},Bs={class:"contact-details"},Vs={class:"phone"},Os=s("h3",null,"Phone",-1),Rs=s("p",null,"+123 456 789",-1),$s=s("p",null,"+987 654 321",-1),Ds={class:"address"},Ts=s("h3",null,"Address",-1),Us=s("p",null,"Main street #123",-1),Ws=s("p",null,"Wall street #123",-1),Ys={class:"email"},js=s("h3",null,"Email",-1),zs=s("p",null,"support@gmail.com",-1),Fs=s("p",null,"sales@gmail.com",-1),Gs=d('<h1>Get In Touch</h1><form class="contact-form"><input type="text" placeholder="Your Name"><input type="email" placeholder="Your Email"><textarea placeholder="Your Message"></textarea><input type="submit" value="Send Message"></form>',2),Ks=h({__name:"business",setup(Hs){const t=p("circle-play");return m(()=>{const e=document.querySelector(".menu"),l=document.querySelector(".navbar"),i=document.querySelector(".video"),n=document.querySelector(".buttons button .icon"),o=document.querySelector(".video-bar");e&&l&&e.addEventListener("click",()=>{l.classList.toggle("change"),e.classList.toggle("change")});const _=()=>{n&&(i.paused?(i.play(),t.value="circle-pause",i.style.opacity=".7"):(i.pause(),t.value="circle-play",i.style.opacity=".3"))};n&&n.addEventListener("click",()=>{_()}),n&&o&&i.addEventListener("timeupdate",()=>{const u=i.currentTime/i.duration;o.style.width=`${u*100}%`,i.ended&&(t.value="circle-play",i.style.opacity=".3")})}),(e,l)=>{const i=g("font-awesome-icon"),n=P,o=k;return f(),v("div",I,[y,s("section",S,[q,x,s("div",E,[L,s("div",N,[A,s("div",M,[s("button",B,[c(i,{class:"icon",icon:["far",r(t)]},null,8,["icon"])])])])]),s("p",V,[c(i,{class:"icon fa-quote-left",icon:["fas","quote-left"]}),b(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus ipsum expedita perspiciatis unde repellat eligendi quisquam optio neque sint consequuntur, dolore delectus nisi eveniet nostrum explicabo. Quiarepellat, ut. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "),c(i,{class:"icon fa-quote-right",icon:["fas","quote-right"]})])]),s("section",O,[R,$,c(o,{modules:["SwiperEffectCoverflow"in e?e.SwiperEffectCoverflow:r(C)],effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:70,stretch:0,depth:100,modifier:1,slideShadows:!0},class:"swiper-container"},{default:a(()=>[c(n,{class:"pricing-card swiper-slide"},{default:a(()=>[s("div",D,[T,U,s("ul",W,[s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),Y]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),j]),s("li",null,[c(i,{icon:["far","circle-xmark"],class:"icon"}),z]),s("li",null,[c(i,{icon:["far","circle-xmark"],class:"icon"}),F]),s("li",null,[c(i,{icon:["far","circle-xmark"],class:"icon"}),G])]),H]),J]),_:1}),c(n,{class:"pricing-card swiper-slide"},{default:a(()=>[s("div",Q,[K,X,s("ul",Z,[s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),ss]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),is]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),cs]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),ns]),s("li",null,[c(i,{icon:["far","circle-xmark"],class:"icon"}),es])]),as]),ts]),_:1}),c(n,{class:"pricing-card swiper-slide"},{default:a(()=>[s("div",os,[ls,rs,s("ul",ds,[s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),_s]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),us]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),hs]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),ps]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),ms])]),gs]),fs]),_:1}),c(n,{class:"pricing-card swiper-slide"},{default:a(()=>[s("div",vs,[bs,ks,s("ul",Cs,[s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),Ps]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),ws]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),Is]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),ys]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),Ss]),s("li",null,[c(i,{icon:["fas","check"],class:"icon"}),qs])]),xs]),Es]),_:1})]),_:1},8,["modules"])]),s("section",Ls,[Ns,As,s("div",Ms,[s("div",Bs,[s("div",Vs,[c(i,{icon:["fas","mobile-screen-button"],class:"icon"}),Os,Rs,$s]),s("div",Ds,[c(i,{icon:["fas","location-dot"],class:"icon"}),Ts,Us,Ws]),s("div",Ys,[c(i,{icon:["far","envelope"],class:"icon"}),js,zs,Fs])]),Gs])])])}}});export{Ks as default};
