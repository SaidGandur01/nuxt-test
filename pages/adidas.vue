<template>
  <div class="container">
    <div class="overlay first"></div>
    <div class="overlay second"></div>
    <div class="overlay third"></div>

    <div class="nav">
      <div class="logo">adidas<span class="reg">&reg;</span></div>
      <div class="menu"><font-awesome-icon :icon="['fas', 'bars']" /></div>
      <div class="search"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></div>
      <div class="bag"><font-awesome-icon :icon="['fas', 'bag-shopping']" /></div>
    </div>

    <img :src="imgHero" alt="" class="product-img" />

    <div class="product-text">
      <h1 class="product-title">adidas.</h1>
    </div>

    <div class="product-desc">
      <p>The pure comfort is here !</p>
      <button>reserve now</button>
    </div>

    <div class="size">
      <ul>
        <span>Size :</span>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
    </div>

    <div class="bottom-img"></div>

    <div class="bottom-right left-button">
      <ul>
        <li><font-awesome-icon :icon="['fas', 'chevron-left']" /></li>
        <li><font-awesome-icon :icon="['fas', 'chevron-right']" /></li>
      </ul>
    </div>

    <div class="media">
      <ul>
        <li><font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" /></li>
        <li><font-awesome-icon class="icon" :icon="['fab', 'instagram']" /></li>
        <li><font-awesome-icon class="icon" :icon="['fab', 'twitter']" /></li>
      </ul>
    </div>
  </div>
</template>
<script lang="js" setup>
import imgHero from '~/assets/img/adidas/hero.png'
onMounted(() => {
  TweenMax.to('.first', 1.5, {
            delay: .2,
            left: '-100%',
            ease: Expo.easeInOut
        })

        TweenMax.to('.second', 1.5, {
            delay: .4,
            left: '-100%',
            ease: Expo.easeInOut
        })

        TweenMax.to('.third', 1.5, {
            delay: .6,
            left: '-100%',
            ease: Expo.easeInOut
        })

        TweenMax.from('.logo', 1, {
            delay: 1,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.from('.menu', 1, {
            delay: 1.2,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })

        TweenMax.from('.search', .8, {
            delay: 1.6,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })

        TweenMax.from('.bag', 1, {
            delay: 1.6,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })

        TweenMax.staggerFrom('.media ul li', 1, {
            delay: 2,
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut
        }, 0.08)

        TweenMax.from('.size', 1, {
            delay: 1.8,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.staggerFrom('.size ul li', .3, {
            delay: 2,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
        }, 0.08)
        TweenMax.from('.bottom-right ul li:first-child', .5, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.from('.bottom-right ul li:last-child', .6, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })
        TweenMax.from('.bottom-img', 1, {
            delay: 2.4,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        })

        TweenMax.from('.product-title', 3, {
            delay: 2.2,
            opacity: 0,
            y: 50,
            ease: Expo.easeInOut
        })
        TweenMax.from('.product-img', 1, {
            delay: 4.2,
            opacity: 0,
            y: -800,
            ease: Expo.easeInOut
        })
        TweenMax.from('.product-desc p', 3, {
            delay: 4.5,
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut
        })
        TweenMax.from('.product-desc button', 3, {
            delay: 6,
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut
        })
})
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,800;0,900;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100vh;
  font-family: 'poppins';
  font-size: 14px;
  background-color: #8c6c79;
  color: #fff;
  overflow: hidden;
}

.nav {
  position: fixed;
  width: 100%;
  height: 100px;
  top: 10px;
}

.logo,
.menu,
.search,
.bag {
  position: absolute;
  padding: 10px;
  margin-top: 10px;
}

.logo {
  left: 20px;
  font-size: 20px;
  font-weight: bolder;
}

.menu {
  left: 150px;
  top: 4px;
  line-height: 1.2;
  font-size: 20px;
}

.search,
.bag {
  background: #fff;
  color: black;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
  margin-top: 18px;
}

.search {
  right: 140px;
}

.bag {
  right: 40px;
}

.product-img {
  width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 2;
}

.product-text {
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.product-title {
  color: #f2d16b;
  font-weight: 900;
  letter-spacing: -10px;
  font-size: 280px;
}

.product-desc {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: -585px;
  z-index: 2;
}

.product-desc p {
  position: absolute;
  font-size: 20px;
  top: -500px;
  letter-spacing: 20px;
  text-transform: uppercase;
}

.product-desc button {
  margin-top: 10px;
  background: #f2d16b;
  color: black;
  font-weight: bold;
  padding: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 10px;
  border: none;
  border-radius: 30px;
}

.size {
  position: absolute;
  left: 50px;
  bottom: 40px;
}

.size ul {
  list-style: none;
}

.size ul li {
  display: inline-block;
  font-weight: 500;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 50%;
  margin-left: 10px;
  height: 20px;
  width: 20px;
  text-align: center;
  line-height: 1.5;
  transition: 0.3s ease-in-out;
}

.size span {
  font-weight: 500;
}

.size span::after {
  display: inline-block;
  content: '';
  border: 0.5px solid #fff;
  opacity: 0.5;
  width: 50px;
  margin: 0 0 0 10px;
  transform: translateY(-4px);
}

.bottom-img {
  position: absolute;
  bottom: 80px;
  right: 20px;
  background: url('assets/img/adidas/white-shoe.png') no-repeat;
  background-position: center;
  background-size: cover;
  width: 220px;
  height: 150px;
}

.bottom-right {
  position: absolute;
  bottom: 0;
  left: 86.5%;
}

.bottom-right ul {
  list-style: none;
}

.bottom-right ul li {
  display: inline-block;
  padding: 10px 15px;
  margin: 20px 20px 20px 0;
  background: #624652;
}

.media ul {
  list-style: none;
  position: fixed;
  left: 45px;
  top: 35%;
}

.media ul li {
  font-size: 18px;
  margin: 24px 0;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0%;
  z-index: 2;
  background: #fff;
}

.first {
  top: 0;
}

.second {
  top: 33.3%;
}

.third {
  top: 66.6%;
}
</style>
