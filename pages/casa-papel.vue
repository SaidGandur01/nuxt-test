<template>
  <div class="container">
    <div class="stripes">
      <div class="s-one"></div>
      <div class="s-two"></div>
      <div class="s-three"></div>
    </div>

    <nav class="navbar">
      <div class="menu"><font-awesome-icon :icon="['fas', 'bars']" />menu</div>
      <div class="logo">netflix</div>
      <div class="media">
        <ul>
          <li><a href="">facebook</a></li>
          <li><a href="">snapchat</a></li>
          <li><a href="">instagram</a></li>
        </ul>
      </div>
    </nav>

    <div class="img">
      <img :src="imgHero" alt="" />
    </div>

    <div class="bg-text">
      <h1>netflix</h1>
    </div>

    <div class="blocks">
      <div class="block-1 block">La</div>
      <div class="block-2 block">Casa</div>
      <div class="block-3 block">de</div>
      <div class="block-4 block">papel</div>
    </div>

    <div class="watchnow btn">
      <font-awesome-icon :icon="['fas', 'play']" />
      <a href="">watch now </a>
    </div>

    <div class="bottomnav left-right btn">
      <ul>
        <li><font-awesome-icon :icon="['fas', 'arrow-left']" /></li>
        <li><font-awesome-icon :icon="['fas', 'arrow-right']" /></li>
      </ul>
    </div>
  </div>
</template>

<script lang="js" setup>
import imgHero from '~/assets/img/casa-papel/hero.png'
onMounted(() => {
  TweenMax.to(".block-1", 2, {
            x: "-70",
            y: "-220",
            scale: "1.8",
            ease: Expo.easeInOut
        })
        TweenMax.to(".block-2", 2, {
            x: "-180",
            y: "165",
            scale: "1.4",
            ease: Expo.easeInOut
        })
        TweenMax.to(".block-3", 2, {
            x: "300",
            y: "-240",
            scale: "1.6",
            ease: Expo.easeInOut
        })
        TweenMax.to(".block-4", 2, {
            x: "150",
            y: "170",
            scale: "1.2",
            ease: Expo.easeInOut
        })
        TweenMax.from(".bg-text h1", 1, {
            delay: 0.5,
            opacity: 0,
            y: 50,
            ease: Expo.easeInOut
        })
        TweenMax.from(".logo", 2, {
            delay: 1,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.from(".menu", 2, {
            delay: 1.2,
            opacity: 0,
            x: -10,
            ease: Expo.easeInOut
        })
        TweenMax.from(".media", 2, {
            delay: 1.4,
            opacity: 0,
            x: -150,
            ease: Expo.easeInOut
        })

        TweenMax.from(".bottomnav", 1, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.from(".bottomnav ul li:first-child", .5, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.from(".bottomnav ul li:last-child", 1, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.from(".watchnow", 2, {
            delay: 2.8,
            opacity: 0,
            x: 20,
            ease: Expo.easeInOut
        })
        TweenMax.to('.img img', 2, {
            delay: 1.5,
            opacity: 1,
            width: '60%',
            ease: Power2.easeInOut
        })
})
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;400;700&family=Marcellus+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,600;0,900;1,900&display=swap');
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #161616;
  font-family: 'agency fb';
  overflow: hidden;
}

.stripes {
  position: fixed;
  width: 100%;
}

.s-one {
  position: absolute;
  width: 0.5px;
  height: 100vh;
  background: #555555;
  left: 4%;
}

.s-two {
  position: absolute;
  width: 0.5px;
  height: 100vh;
  background: #555555;
  left: 50%;
}

.s-three {
  position: absolute;
  width: 0.5px;
  height: 100vh;
  background: #555555;
  left: 96%;
}

.bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
}

.bg-text h1 {
  font-size: 300px;
  font-family: 'poppins', sans-serif;
  text-align: center;
  color: transparent;
  -webkit-text-stroke: 3px #444;
  text-transform: uppercase;
}

.img img {
  width: 67%;
  opacity: 0;
}

.img {
  position: fixed;
  z-index: 1;
  top: -23%;
  right: -444px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  text-transform: uppercase;
  color: #fff;
}

.navbar .media li {
  display: inline-block;
  padding-left: 30px;
}

.navbar .media li a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
}

.navbar .menu i {
  padding-right: 20px;
}

.watchnow {
  position: absolute;
  top: 55%;
  right: 12%;
  transform: translateY(-40%);
  z-index: 2;
  background: #bb0000;
  padding: 10px 30px 10px 30px;
  border-radius: 30px;
  align-items: center;
}

.watchnow a {
  text-decoration: none;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
  padding-bottom: 1px;
}

.fa-play {
  color: #fff;
  font-size: 30px;
  margin-right: 15px;
}

.bottomnav {
  position: absolute;
  bottom: 22%;
  right: 55%;
  z-index: 1;
}

.bottomnav ul {
  list-style: none;
}

.bottomnav ul li {
  display: inline-block;
  padding: 10px 15px;
  margin: 20px 20px 20px 0;
  color: #fff;
  background: #2a2a2a;
}

.blocks {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 140px;
  color: #fff;
  font-weight: 600;
  color: #fff;
  z-index: 1;
}

.block-1,
.block-4 {
  color: #bb0000;
  z-index: 1 d DZ;
}
</style>
