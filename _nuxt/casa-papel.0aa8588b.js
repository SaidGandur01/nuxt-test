import"./entry.2f73542c.js";import{I as t,J as n,L as c,M as e,A as s,O as l,u as i,R as o,x as d}from"./swiper-vue.613be678.js";const r=""+new URL("hero.41aa1880.png",import.meta.url).href,x={class:"container"},p=e("div",{class:"stripes"},[e("div",{class:"s-one"}),e("div",{class:"s-two"}),e("div",{class:"s-three"})],-1),_={class:"navbar"},m={class:"menu"},u=o('<div class="logo">netflix</div><div class="media"><ul><li><a href="">facebook</a></li><li><a href="">snapchat</a></li><li><a href="">instagram</a></li></ul></div>',2),v={class:"img"},h=["src"],f=o('<div class="bg-text"><h1>netflix</h1></div><div class="blocks"><div class="block-1 block">La</div><div class="block-2 block">Casa</div><div class="block-3 block">de</div><div class="block-4 block">papel</div></div>',2),w={class:"watchnow btn"},y=e("a",{href:""},"watch now ",-1),b={class:"bottomnav left-right btn"},T={__name:"casa-papel",setup(k){return t(()=>{TweenMax.to(".block-1",2,{x:"-70",y:"-220",scale:"1.8",ease:Expo.easeInOut}),TweenMax.to(".block-2",2,{x:"-180",y:"165",scale:"1.4",ease:Expo.easeInOut}),TweenMax.to(".block-3",2,{x:"300",y:"-240",scale:"1.6",ease:Expo.easeInOut}),TweenMax.to(".block-4",2,{x:"150",y:"170",scale:"1.2",ease:Expo.easeInOut}),TweenMax.from(".bg-text h1",1,{delay:.5,opacity:0,y:50,ease:Expo.easeInOut}),TweenMax.from(".logo",2,{delay:1,opacity:0,x:-20,ease:Expo.easeInOut}),TweenMax.from(".menu",2,{delay:1.2,opacity:0,x:-10,ease:Expo.easeInOut}),TweenMax.from(".media",2,{delay:1.4,opacity:0,x:-150,ease:Expo.easeInOut}),TweenMax.from(".bottomnav",1,{delay:2.4,opacity:0,x:-20,ease:Expo.easeInOut}),TweenMax.from(".bottomnav ul li:first-child",.5,{delay:2.4,opacity:0,x:-20,ease:Expo.easeInOut}),TweenMax.from(".bottomnav ul li:last-child",1,{delay:2.4,opacity:0,x:-20,ease:Expo.easeInOut}),TweenMax.from(".watchnow",2,{delay:2.8,opacity:0,x:20,ease:Expo.easeInOut}),TweenMax.to(".img img",2,{delay:1.5,opacity:1,width:"60%",ease:Power2.easeInOut})}),(M,g)=>{const a=n("font-awesome-icon");return d(),c("div",x,[p,e("nav",_,[e("div",m,[s(a,{icon:["fas","bars"]}),l("menu")]),u]),e("div",v,[e("img",{src:i(r),alt:""},null,8,h)]),f,e("div",w,[s(a,{icon:["fas","play"]}),y]),e("div",b,[e("ul",null,[e("li",null,[s(a,{icon:["fas","arrow-left"]})]),e("li",null,[s(a,{icon:["fas","arrow-right"]})])])])])}}};export{T as default};