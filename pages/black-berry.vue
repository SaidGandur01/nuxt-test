<template>
      <div class="container">

<nav class="navbar">
    <div class="logo-icon">
      <font-awesome-icon :icon="['fas', 'scissors']" />
    </div>
    <div class="logo">Black&berry</div>
    <div class="search">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </div>
</nav>

<div class="img">
    <img :src="imgHero" alt="">
</div>

<div class="title">
    <h1>
        <span class="text-one">Black&<label> berry</label></span>
    </h1>
    <h2><span>H</span>eart!</h2>
    <h3>
        <span class="text-two">cut From <label>the</label></span>
    </h3>
    <p>
        <span class="text-three">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, modi quam. At facilis totam quidem
            enim nihil voluptatum omnis ea.
        </span>
    </p>
</div>

<div class="line"></div>
<div class="tag">
    <span>Because love is in the Hair</span>
</div>

<button>Visit Shop Now</button>

<div class="bottom left-right icn">
    <ul>
        <li>
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </li>
    </ul>
</div>

<div class="media">
    <ul>
        <li>facebook</li>
        <li>instagram</li>
        <li>snapchat</li>
    </ul>
</div>
</div>
</template>
<script lang="js" setup>
import imgHero from '~/assets/img/black-berry/hero.jpg'

onMounted(() => {
  TweenMax.from(".logo", 1.6, {
            delay: .2,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })

        TweenMax.from(".search", 1.6, {
            delay: .4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })

        TweenMax.from(".logo-icon", 1.6, {
            delay: 0,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
        })

        TweenMax.staggerFrom(".text-one", 2, {
            delay: 2.6,
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut
        }, 0.2)

        TweenMax.staggerFrom(".text-two", 1.5, {
            delay: 3.4,
            opacity: 0,
            y: -40,
            ease: Expo.easeInOut
        }, 0.2)
        TweenMax.staggerFrom(".text-two label", 1, {
            delay: 4,
            opacity: 0,

            ease: Expo.easeInOut
        }, 0.2)

        TweenMax.staggerFrom("h2", 2, {
            delay: 4,
            opacity: 0,
            x: -60,
            ease: Expo.easeInOut
        }, 0.2)

        TweenMax.staggerFrom(".text-three", 2, {
            delay: 4.7,
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut
        }, 0.2)

        TweenMax.from("button", 2, {
            delay: 5.5,
            opacity: 0,
            y: -30,
            ease: Expo.easeInOut
        })

        TweenMax.from(".line", 2, {
            delay: 5,
            opacity: 0,
            x: -100,
            ease: Expo.easeInOut
        })

        TweenMax.from(".tag", 2, {
            delay: 5.3,
            opacity: 0,
            y: -30,
            ease: Expo.easeInOut
        })

        TweenMax.staggerFrom(".media ul li", 2, {
            delay: 6,
            opacity: 0,
            y: -40,
            ease: Expo.easeInOut
        }, 0.2)

        TweenMax.staggerFrom(".left-right ul li", 2, {
            delay: 6.4,
            opacity: 0,
            y: -40,
            ease: Expo.easeInOut
        }, 0.2)
})
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,800;0,900;1,900&display=swap');
html,
body {
    margin: 0;
    padding: 0;
    background-color: #ebecf0;
    height: 100vh;
    font-family: 'poppins', sans-serif;
    overflow: hidden;
}

.navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
}

.navbar>div {
    padding: 50px 30px;
    margin: 50px;
    font-size: 20px;
}

.navbar .logo-icon {
    position: relative;
    left: -20px;
}

.navbar .logo {
    position: relative;
    right: 500px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
}

.img img {
    width: 47%;
}

.img {
    position: fixed;
    z-index: 0;
    top: 10.6%;
    left: 47%;
}

.title {
    position: absolute;
    top: 240px;
    left: 290px;
    z-index: 2;
    height: 100%;
}

.title h1 {
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -5px;
    margin-bottom: 20px;
    position: relative;
    height: 150px;
    width: 600px;
}

.title h1 .text-one {
    position: absolute;
}

.title h1 .text-one label {
    color: #cccccc;
}

.title h2 {
    position: absolute;
    top: 100px;
    left: -13px;
    color: #eda7a7;
    z-index: -1;
    font-size: 180px;
    font-weight: 900;
    letter-spacing: 2px;
}

.title h2 span {
    font-size: 220px;
}

.title h3 {
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 900;
    line-height: .8;
    position: relative;
    height: 150px;
    top: -100px;
}

.title h3 .text-two {
    position: absolute;
}

.title h3 .text-two label {
    position: relative;
    font-size: 65px;
    top: 55px;
    left: -155px;
}

.title p {
  width: 500px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  top: 50px;
  height: 110px;
}

.tag {
    position: fixed;
    top: 166px;
    left: 70%;
    padding: 10px 30px;
    font-weight: 500;
    color: grey;
}

.line {
    position: fixed;
    left: 71.5%;
    top: 200px;
    background-color: #000;
    width: 230px;
    height: 1px;
}

button {
    font-weight: 900;
    position: relative;
    left: 1100px;
    bottom: -290px;
    background: #eda7a7;
    color: #fff;
    padding: 20px 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 10px;
    border: none;
}

.media {
    position: absolute;
    left: -120px;
    top: 50%;
    transform: rotate(-90deg);
}

.media ul {
    list-style: none;
}

.media ul li {
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
}

.media ul li:not(:last-child) {
    padding-right: 60px;
}

.left-right {
    position: absolute;
    right: 40px;
    bottom: -3%;
}

.left-right ul {
    list-style: none;
}

.left-right ul li {
    display: inline-block;
    padding: 10px 15px;
    margin: 20px 20px 20px 0;
    font-size: 27px;
}

img {
    opacity: 0;
    animation: img-appear 1s linear forwards;
    animation-delay: 2.4s;
}

@keyframes img-appear {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.img::after {
    content: "";
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #8c6c79;
    position: absolute;
    animation: rev-img 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    animation-delay: 2s;
}

@keyframes rev-img {
    0% {
        left: 0%;
        width: 0%;
    }
    50% {
        left: 0%;
        width: 47%;
    }
    100% {
        left: 47%;
        width: 0%;
    }
}
</style>