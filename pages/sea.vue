<template>
  <div class="wrapper">
    <div class="bg"></div>
    <!-- NAVBAR
=============================== -->
    <nav class="navbar">
      <div class="logo">Summer</div>
      <div class="menu-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Offers</li>
        </ul>
      </div>
      <div class="menu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <div class="search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
    </nav>
    <!-- SOCIAL MEDIA
=============================== -->
    <div class="media">
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div>
    <!-- IMAGE
=============================== -->
    <div class="img-wrapper">
      <div class="img"></div>
      <div class="block"></div>
    </div>
    <!-- TEXT
=============================== -->
    <div class="text">
      <h1>
        <span class="text-bar">Breathe in <label> the sea</label></span>
      </h1>
      <p>
        <span class="text-bar">get the summer body</span>
      </p>
    </div>
    <!-- BOTTOMNAV
=============================== -->
    <div class="bottomnav">
      <div class="next">up next</div>

      <div class="nav">
        <ul>
          <li>
            <font-awesome-icon :icon="['fas', 'arrow-up']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'arrow-down']" />
          </li>
        </ul>
        <div class="bottomnav-img"></div>
      </div>
    </div>
  </div>
</template>
<script lang="js" setup>
onMounted(() => {
  TweenMax.to(".bg", 2,{
           width:"100%",
           ease:Expo.easeInOut
       })
        // NAVBAR
       TweenMax.from(".navbar", 1.5,  {
           delay:2.5,
           opacity:0,
           y:20,
           ease:Expo.easeInOut
       })
        // SOCIAL MEDIA
        TweenMax.staggerFrom(".media ul li", 1.5, {
            delay:2.8,
            opacity:0,
            x:-30,
            ease:Expo.easeInOut
        }, 0.08)
        // TEXT
        TweenMax.from(".text h1 .text-bar", 1.5,  {
           delay:1.6,
           y:"100%",
           ease:Expo.easeInOut
       })
       TweenMax.from(".text p .text-bar", 1.5,  {
           delay:2,
           y:"100%",
           ease:Expo.easeInOut
       })
        // BOTTOMNAV
        TweenMax.from(".bottomnav", 1.5,  {
           delay:3.2,
           opacity:0,
           y:30,
           ease:Expo.easeInOut
       })
       TweenMax.from(".bottomnav .next", 1.5,  {
           delay:3.5,
           opacity:0,
           x:-20,
           ease:Expo.easeInOut
       })
})
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@200;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

body {
  font-family: 'Outfit', sans-serif;
  color: #000;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

ul {
  list-style: none;
}

.bg {
  position: absolute;
  left: 0%;
  width: 0%;
  height: 100%;
  background-color: #beb19e;
  z-index: -1;
}
/* NAVBAR
=========================== */
.navbar {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  padding: 0 50px;
}

.navbar .logo {
  margin-right: 100px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}

.navbar .menu-item {
  margin-right: auto;
}

.navbar .menu-item ul li {
  display: inline-block;
  padding: 0 30px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

.navbar .menu {
  margin-right: 30px;
}
/* SOCIAL MEDIA
=========================== */
.media {
  position: absolute;
  top: 350px;
  right: -100px;
  transform: rotate(-90deg);
}

.media ul li {
  display: inline-block;
  padding: 0 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 4px;
}
/* IMAGE
=========================== */
.img-wrapper {
  position: absolute;
  top: 0;
  left: 660px;
}

.img-wrapper .img {
  background: url('assets/img/sea/hero.jpg') no-repeat;
  background-position: 50%;
  background-size: cover;
  height: 100vh;
  width: 570px;
  z-index: 1;
  opacity: 0;
  animation: image-appear 0.0001s linear forwards;
  animation-delay: 2.4s;
}

@keyframes image-appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* BLOCKS
=========================== */
.block {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: #53433e;
  animation: block-appear 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 1.5s;
}

.img-wrapper .block {
  animation-delay: 1.8s;
}

@keyframes block-appear {
  0% {
    left: 0;
    width: 0%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
}
/* TEXT
=========================== */
.text {
  position: absolute;
  top: 40%;
  left: 51.1%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  width: 1000px;
}

.text h1 {
  font-size: 80px;
  font-weight: 900;
  letter-spacing: 4px;
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 100%;
}

.text h1 label {
  color: #fff;
}

.text h1 .text-bar {
  position: absolute;
}

.text p {
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: lighter;
  position: relative;
  overflow: hidden;
  height: 40px;
  width: 100%;
}

.text p .text-bar {
  position: absolute;
}
/* BOTTOMNAV
=========================== */
.bottomnav {
  position: absolute;
  bottom: 30px;
  left: 50px;
}

.bottomnav .next {
  font-size: 10px;
  letter-spacing: 8px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.bottomnav .next::after {
  content: '';
  display: inline-block;
  border: 1px solid #000;
  width: 148px;
  margin: 0 0 0 20px;
  transform: translate(-3px);
}

.bottomnav .nav {
  display: flex;
}

.bottomnav ul {
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottomnav ul li {
  padding: 30px 20px;
  font-size: 25px;
}

.bottomnav-img {
  background: url('assets/img/sea/bottom-img.jpg') no-repeat;
  background-position: 50%;
  background-size: cover;
  height: 200px;
  width: 300px;
}
</style>
