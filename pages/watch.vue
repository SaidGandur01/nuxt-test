<template>
  <div class="container">
    <div class="stripes">
      <div class="line-one"></div>
      <div class="line-two"></div>
    </div>
    <!-- navbar============== -->
    <nav>
      <div class="logo">
        <span>Omega</span>
      </div>
      <ul>
        <li><a href="">collection</a></li>
        <li><a href="">products</a></li>
        <li><a href="">offers</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div class="search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </div>
      <div class="menu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
    </nav>

    <div class="img">
      <img :src="imgWatch" alt="" />
    </div>

    <div class="title">
      <p class="p">speedmaster</p>
      <span class="s">Moonwatch.</span>
    </div>

    <div class="btn">
      <a href="">Order Now</a>
    </div>

    <div class="year">2022*</div>

    <div class="media">
      <ul>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
        </li>
        <li><font-awesome-icon class="icon" :icon="['fab', 'instagram']" /></li>
        <li><font-awesome-icon class="icon" :icon="['fab', 'twitter']" /></li>
      </ul>
    </div>
  </div>
</template>
<script lang="js" setup>
import imgWatch from '~/assets/img/watch/watch.png'

onMounted(() => {
  TweenMax.from(".logo", 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
  })

  TweenMax.staggerFrom("nav ul li", 1, {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
  }, 0.08)

  TweenMax.from(".search", 1, {
      opacity: 0,
      delay: .5,
      x: -20,
      ease: Expo.easeInOut
  })

  TweenMax.from(".menu", 1, {
      opacity: 0,
      delay: .6,
      x: -20,
      ease: Expo.easeInOut
  })

  TweenMax.from(".title", 1, {
      opacity: 0,
      delay: 1,
      y: 20,
      ease: Expo.easeInOut
  })

  TweenMax.from(".btn", 1, {
      opacity: 0,
      delay: 1.6,
      y: 20,
      ease: Expo.easeInOut
  })

  TweenMax.from(".line-one", 1, {
      opacity: 0,
      delay: 2,
      y: -800,
      ease: Expo.easeInOut
  })
  TweenMax.from(".line-two", 1, {
      opacity: 0,
      delay: 2.5,
      y: -800,
      ease: Expo.easeInOut
  })

  TweenMax.from(".img", 2, {
      opacity: 0,
      delay: 2.9,
      y: -800,
      ease: Expo.easeInOut
  })

  TweenMax.from(".year", 1, {
      opacity: 0,
      delay: 1.4,
      y: -20,
      ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".media ul li", 2, {
      opacity: 0,
      delay: 3.2,
      y: 40,
      ease: Expo.easeInOut
  }, 0.2)
})
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;700&display=swap');
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: poppins;
}

.line-one {
  position: fixed;
  width: 15px;
  height: 100vh;
  background: #ff3131;
  left: 23%;
}

.line-two {
  position: fixed;
  width: 25px;
  height: 100vh;
  background: #183d79;
  left: 25%;
}

nav {
  z-index: 2;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 0;
}

nav ul {
  flex: 1;
  text-align: right;
  padding-right: 270px;
}

nav ul li {
  display: inline-block;
  list-style: none;
  margin: 10px 30px;
}

nav ul li a {
  color: #000;
  text-decoration: none;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
}

nav ul li a::after {
  content: '';
  width: 0;
  height: 3px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff3131;
  transition: width 0.4s;
}

nav ul li a:hover::after {
  width: 100%;
}

.logo {
  position: fixed;
  left: 120px;
  font-weight: bold;
  text-transform: uppercase;
}

.search {
  position: fixed;
  right: 160px;
}

.menu {
  position: fixed;
  right: 100px;
}

.img img {
  position: relative;
  width: 450px;
  left: 8.5%;
  top: -70px;
}

.title {
  position: fixed;
  position: absolute;
  top: 276px;
  left: 43%;
  line-height: 1;
  font-size: 100px;
  font-weight: 700;
  letter-spacing: -6px;
}

.title .p {
  font-size: 25px;
  font-weight: 300;
  color: grey;
  text-transform: uppercase;
  left: 150px;
  letter-spacing: 10px;
}

.btn a {
  position: relative;
  text-decoration: none;
  bottom: 260px;
  right: -57%;
  text-transform: uppercase;
  background: #ff3131;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.4s;
}

.btn a:hover {
  background: #000;
  color: #fff;
}

.year {
  font-weight: 700;
  position: fixed;
  top: 556px;
  left: 110px;
  padding: 10px 30px;
}

.media ul {
  list-style: none;
  position: fixed;
  right: 20px;
  top: 63%;
  padding: 10px 10px;
}

.media ul li {
  cursor: pointer;
  font-size: 18px;
  margin: 24px 0;
  transition: 0.3s;
}

.media ul li:hover {
  transform: scale(1.8);
}
</style>
