<template>
      <div class="wrap">

<!-- navbar================== -->
<nav class="navbar">
    <div class="logo">cococola</div>
    <div class="categories">
        <ul>
            <li>originals</li>
            <li>zero</li>
        </ul>
    </div>
    <div class="menu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
</nav>


<!-- red-bar=================== -->
<div class="stripe"></div>

<div class="coke">
    <img :src="imgCokeOne" class="coke-can">
</div>

<div class="small-coke">
    <li><img :src="imgCokeOne" @click="imgSlider('coke-one.png')"></li>
    <li><img :src="imgCokeTwo" @click="imgSlider('coke-two.png')"></li>
</div>

<!-- text================= -->
<div class="text">
    <h1>
        <span class="header">start from</span>
    </h1>
    <h2>Coke</h2>
    <p>
        <span class="para">
        All right reserved coco cola company based in georgia.
        </span>
    </p>
</div>

<div class="media">
    <ul>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
        </li>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'snapchat']" />
        </li>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
        </li>
        <li>
          <font-awesome-icon class="icon" :icon="['fab', 'youtube']" />
        </li>
    </ul>
</div>
</div>
</template>
<script lang="js" setup>
import imgCokeOne from '~/assets/img/coke/coke-one.png'
import imgCokeTwo from '~/assets/img/coke/coke-two.png'

const imgSlider = (anything) => {
  document.querySelector('.coke-can').src = anything;
};

onMounted(() => {
  TweenMax.from('.navbar', 1, {
      delay: 1,
      x: -40,
      opacity: 0,
      ease: Expo.easeInOut
  })

  TweenMax.to(".stripe", 2.4, {
      delay: 0,
      width: "100%",
      ease: Expo.easeInOut
  })

  TweenMax.from(".coke", 1, {
      delay: 1.4,
      opacity: 0,
      y: -1000,
      ease: Circ.easeInOut
  })

  TweenMax.from(".header", 2, {
      delay: 1.8,
      x: -600,
      ease: Circ.easeInOut
  })

  TweenMax.from(".text h2", 1, {
      delay: 3.3,
      opacity: 0,
      y: 40,
      ease: Circ.easeInOut
  })

  TweenMax.from(".text .para", 1.2, {
      delay: 3.9,
      opacity: 0,
      y: 40,
      ease: Circ.easeInOut
  })

  TweenMax.from(".small-coke", 1, {
      delay: 4.5,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
  })

  TweenMax.from(".media ul li", 2, {
      delay: 5,
      opacity: 0,
      x: -40,
      ease: Circ.easeInOut
  })
})
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Poppins:ital,wght@0,200;0,600;0,900;1,900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #f4f2ec;
    font-family: 'poppins', sans-serif;
}

.navbar {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    color: #555555;
    padding: 0 50px;
}

.navbar .logo {
    margin-right: 100px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 900;
}

.navbar .categories {
    margin-right: auto;
    position: relative;
    right: -400px;
}

.navbar .categories ul li {
    display: inline-block;
    padding: 0 30px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
}

.navbar .menu {
    margin-right: -10px;
    font-size: 20px;
}

.stripe {
    position: absolute;
    height: 70px;
    /* width: 100%; */
    bottom: 43%;
    background: linear-gradient(to right, #ee4540, #c0342f);
}

.coke {
    position: absolute;
    top: 50%;
    left: 30%;
    z-index: 1;
}

.coke img {
    transform: translate(-50%, -50%);
    max-height: 700px;
}

.small-coke {
    position: absolute;
    left: 85%;
    bottom: 80px;
    transform: translateX(-50%);
    display: flex;
    z-index: 1;
}

.small-coke li {
    list-style: none;
    display: inline-block;
    margin: 0 -77px;
    cursor: pointer;
    transition: 0.4s;
}

.small-coke li:hover {
    transform: translateY(-10px);
}

.small-coke li img {
    max-width: 250px;
}

.text {
    position: absolute;
    top: 200px;
    left: 500px;
}

.text h1 {
    font-size: 70px;
    text-transform: uppercase;
    font-weight: 900;
    color: #555555;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    height: 150px;
    width: 900px;
}

.text h1 .header {
    position: absolute;
    bottom: 25px;
}

.text h2 {
    position: absolute;
    font-family: 'Josefin Sans', sans-serif;
    top: 100px;
    left: 80px;
    color: #f4f2ec;
    font-size: 100px;
    font-weight: 700;
}

.text p {
    width: 400px;
    font-size: 12px;
    margin-top: 45px;
    margin-left: 50px;
    position: relative;
    height: 110px;
    color: #555555;
    font-weight: 600;
}

.media {
    position: absolute;
    bottom: 210px;
    left: 40px;
}

.media ul {
    position: absolute;
    list-style: none;
}

.media ul li {
    color: #555555;
    padding: 10px 0;
}
</style>