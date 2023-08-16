<template>
    <div class="container">

<div class="background"></div>

<div class="nav">
    <div class="logo">
      <font-awesome-icon :icon="['fas', 'play']" />
    </div>
    <div class="menu">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
        </ul>
    </div>
    <div class="cart">
      <font-awesome-icon :icon="['fas', 'cart-shopping']" />
    </div>
</div>

<div class="hero">
    <img :src="summerImage" alt="">
</div>

<div class="blocks">
    <div class="block-1">0</div>
    <div class="block-1">1</div>
</div>

<div class="tag-line">
    <span>Grab Your Summer,<br>Collection......*/</span>
</div>

<div class="year">2 0 2 2 *</div>

<div class="title">
    <div class="title-container">
        <div class="title-item">S</div>
        <div class="title-item">U</div>
        <div class="title-item">M</div>
        <div class="title-item">M</div>
        <div class="title-item">E</div>
        <div class="title-item">R</div>
    </div>
</div>

<div class="content">
    <p>A fashion insight into leading summer styles, travel destinations<br> to may never of thought of , a beginners guide to S&M and more
    </p>
    <button>Shop Now</button>
</div>

<div class="media">
    <ul>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
        </li>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
        </li>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
        </li>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'youtube']" />
        </li>
    </ul>
</div>
</div>
</template>
<script lang="js" setup>
import summerImage from '~/assets/img/summer-landing/feature-img.png'
onMounted(() => {
  TweenMax.to(".background", 2, {
            width: "100%",
            ease: Expo.easeInOut
        })

        TweenMax.from(".nav", 1.5, {
            delay: 1.2,
            opacity: 0,
            y: -20,
            ease: Expo.easeInOut
        })

        TweenMax.from(".blocks", 1.5, {
            delay: 1.6,
            opacity: 0,
            x: -60,
            ease: Expo.easeInOut
        })

        TweenMax.from(".tag-line", 1.5, {
            delay: 2,
            opacity: 0,
            x: -80,
            ease: Expo.easeInOut
        })

        TweenMax.from(".hero", 2, {
            delay: 3,
            opacity: 0,
            x: 170,
            ease: Expo.easeInOut
        })

        TweenMax.staggerFrom(".title-container > div", 3, {
            delay: 4.4,
            y: "500",
            ease: Elastic.easeOut.config(2, 0.4)
        }, 0.2)

        TweenMax.from(".year", 1.5, {
            delay: 6.2,
            opacity: 0,
            x: -40,
            ease: Expo.easeInOut
        })

        TweenMax.from(".content p", 2, {
            delay: 7,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })

        TweenMax.from(".content button", 2, {
            delay: 7.2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })

        TweenMax.staggerFrom(".media ul li", 1.5, {
            delay: 9,
            opacity: 0,
            x: -30,
            ease: Expo.easeInOut
        }, 0.08)
})
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,800;0,900;1,900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-family: 'poppins', sans-serif;
    color: #fff;
}

.background {
    position: absolute;
    left: 0%;
    width: 0%;
    height: 100%;
    background-color: #7f886a;
    z-index: -1;
}

.nav {
    width: 100%;
    height: 80px;
    position: absolute;
}

.logo {
    font-size: 22px;
    margin: 0.2em 2em;
    line-height: 80px;
    position: absolute;
}

.menu {
    position: absolute;
    height: 80px;
    right: 120px;
}

.menu ul {
    list-style: none;
}

.menu ul li {
    display: inline-block;
    margin: 2em 0;
    padding: 0 30px;
    font-size: 15px;
}

.cart {
    position: fixed;
    font-size: 20px;
    margin: 0.2em 2em;
    line-height: 80px;
    right: 20px;
}

.hero img {
    position: absolute;
    width: 160%;
    left: -24%;
    top: -50px;
    z-index: 2;
}

.blocks {
    display: flex;
    font-size: 240px;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.671);
    opacity: .1;
}

.tag-line {
    position: fixed;
    top: 166px;
    left: 152px;
    padding: 10px 30px;
}

.year {
    position: fixed;
    top: 556px;
    left: 152px;
    padding: 10px 30px;
    font-weight: bolder;
}

.title {
    position: absolute;
    right: 8%;
    bottom: 180px;
    z-index: 2;
}

.title-container {
    display: flex;
}

.title-item {
    letter-spacing: 50px;
    font-weight: 900;
    font-size: 170px;
}

.content {
    position: absolute;
    top: 75%;
    left: 69%;
    width: 36%;
    font-weight: lighter;
    letter-spacing: 1px;
    font-size: 10px;
    z-index: 2;
}

button {
    position: relative;
    left: 120px;
    top: 20px;
    margin-top: 6px;
    color: #fff;
    background: #f3ac1d;
    padding: 20px 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 10px;
    border: none;
    cursor: pointer;
    transition: .4s;
}

button:hover {
    background: #ffff;
    color: black;
}

.media {
    position: absolute;
    bottom: 220px;
    left: 20px;
}

.media ul {
    position: absolute;
    list-style: none;
}

.media ul li {
    color: #fff;
    cursor: pointer;
    padding: 10px 20px;
}
</style>