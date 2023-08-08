<template>
  <div class="container apple-clon">
    <!-- Section 1 -->
    <section class="section-1" id="section-1">
      <a href="#" class="logo">
        <font-awesome-icon class="icon" :icon="['fab', 'apple']" />
      </a>

      <nav class="navbar">
        <a href="#section-2" class="navbar-link">iPhone 12</a>
        <a href="#section-3" class="navbar-link">Macbook Air</a>
        <a href="#section-4" class="navbar-link">Watch</a>
        <a href="#section-5" class="navbar-link">AirPods</a>
      </nav>

      <div class="cube-wrapper">
        <div class="cube">
          <div class="front-side">
            <img src="~/assets/img/apple/iphone.png" alt="iphone-12">
          </div>
          <div class="back-side center">
            <font-awesome-icon class="icon" :icon="['fab', 'apple']" />
          </div>
        </div>
        <div class="controls" @mouseover="handleOverControls()" @mouseout="handleOutControls()">
          <a href="#" class="top-x-control" @click.prevent="topXHandle()">
            <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
          </a>
          <a href="#" class="top-x-bottom" @click.prevent="bottomXHandle()">
            <font-awesome-icon class="icon" :icon="['fas', 'arrow-down']" />
          </a>
          <a href="#" class="left-y-control" @click.prevent="leftYHandle()">
            <font-awesome-icon class="icon " :icon="['fas', 'arrow-left']" />
          </a>
          <a href="#" class="right-y-control" @click.prevent="rightYHandle()">
            <font-awesome-icon class="icon " :icon="['fas', 'arrow-right']" />
          </a>
          <a href="#" class="top-z-control" @click.prevent="topZHandle()">
            <font-awesome-icon class="icon " :icon="['fas', 'arrow-down']" />
          </a>
          <a href="#" class="bottom-z-control" @click.prevent="bottomZHandle()">
            <font-awesome-icon class="icon " :icon="['fas', 'arrow-up']" />
          </a>
        </div>
      </div>

      <div class="section-1-banner center">
        <h1>&#8592; Best Gift</h1>
        <p>"Creativity is just connecting things."</p>
        <span>- Steve Jobs</span>
        <button type="button">Buy Now</button>
      </div>

      <div class="slideshow"></div>
    </section>
    <!-- End of Section 1 -->

    <!-- Section 2 -->
    <section class="section-2" id="section-2">
      <h1 class="section-2-heading">iPhone 12</h1>
      <div class="iphones">
        <img :src='iphoneImageOne' class="iphone-img-1" alt="iphone-1">
        <img :src='iphoneImageTwo' class="iphone-img-2" alt="iphone-2">
      </div>
      <div class="iphone-btns">
        <a href="#" @click.prevent class="iphone-btn center">
          <span>Learn More</span>
        </a>
        <a href="#" @click.prevent class="iphone-btn center">
          <span>Shop</span>
        </a>
      </div>
    </section>
    <!-- End of section 2 -->

    <!-- Section 3 -->
    <section class="section-3 center" id="section-3">
      <h1 class="section-3-heading">MacBook Air</h1>
      <div class="section-3-content center">
        <img src="~assets/img/apple/MacBook/macbook-screen.png" class="macbook-img-1" alt="macbook-air-img-1">
        <img src="~assets/img/apple/MacBook/macbook-keyboard.png" class="macbook-img-2" alt="macbook-keyboard">

        <div class="loading-wrapper">
          <div class="loading center">
            <font-awesome-icon class="apple icon" :icon="['fab', 'apple']" />
            <div class="progress-bar"></div>
          </div>
        </div>

        <div class="macbook-info">
          <h2 class="macbook-info-heading">Light. Speed.</h2>
          <p class="macbook-price">Starting at 1999</p>
          <button class="macbook-btn">Buy Now</button>
        </div>
      </div>
    </section>
    <!-- End of section 3 -->

    <!-- Section 4 -->
    <section class="section-4 center" id="section-4">
      <div class="watches center">
        <div class="watch-bands center">
          <img :src="watchBandOne" class="watch-band-img" alt="watch-band-one">
          <img :src="watchBandTwo" class="watch-band-img" alt="watch-band-two">
          <img :src="watchBandThree" class="watch-band-img" alt="watch-band-three">
          <img :src="watchBandFour" class="watch-band-img" alt="watch-band-four">
          <img :src="watchBandFive" class="watch-band-img" alt="watch-band-five">
          <img :src="watchBandSix" class="watch-band-img" alt="watch-band-six">
          <img :src="watchBandSeven" class="watch-band-img" alt="watch-band-seven">
          <img :src="watchBandEight" class="watch-band-img" alt="watch-band-eight">
          <img :src="watchBandNine" class="watch-band-img" alt="watch-band-nine">
        </div>
        <div class="watch-cases center">
          <img :src="watchCaseOne" class="watch-case-img" alt="watch-case-one">
          <img :src="watchCaseTwo" class="watch-case-img" alt="watch-case-two">
          <img :src="watchCaseThree" class="watch-case-img" alt="watch-case-three">
          <img :src="watchCaseFour" class="watch-case-img" alt="watch-case-four">
          <img :src="watchCaseFive" class="watch-case-img" alt="watch-case-five">
          <img :src="watchCaseSix" class="watch-case-img" alt="watch-case-six">
          <img :src="watchCaseSeven" class="watch-case-img" alt="watch-case-seven">
          <img :src="watchCaseEight" class="watch-case-img" alt="watch-case-eight">
          <img :src="watchCaseNine" class="watch-case-img" alt="watch-case-nine">
        </div>
      </div>

      <a href="#" class="watch-control watch-top-control center" @click.prevent="watchTopControl()">
        <font-awesome-icon class="icon" :icon="['fas', 'angle-up']" />
      </a>
      <a href="#" class="watch-control watch-right-control center" @click.prevent="watchRightControl()">
        <font-awesome-icon class="icon" :icon="['fas', 'angle-right']" />
      </a>
      <a href="#" class="watch-control watch-bottom-control center" @click.prevent="watchBottomControl()">
        <font-awesome-icon class="icon" :icon="['fas', 'angle-down']" />
      </a>
      <a href="#" class="watch-control watch-left-control center" @click.prevent="watchLeftControl()">
        <font-awesome-icon class="icon" :icon="['fas', 'angle-left']" />
      </a>

      <button class="watch-btn">
        Buy Now
      </button>
    </section>
    <!-- End of Section 4 -->

    <!-- Section 5 -->
    <section class="section-5 center" id="section-5">
      <div class="airpods">
        <h1 class="section-5-heading">AirPods</h1>
        
        <img :src="airPodsOne" class="airpods-img-1" alt="airpods-one">
        <img :src="airPodsTwo" class="airpods-img-2" alt="airpods-two">

        <div class="airpods-buttons">
          <button class="airpods-btn">Learn More</button>
          <button class="airpods-btn">Buy</button>
        </div>
      </div>
    </section>
    <!-- End of Section 5 -->

    <section class="section-6 center">
      <div class="section-6-icons">
        <a href="#section-1" class="icon-link">
          <img :src="footerIconOne" alt="home-icon">
        </a>
        <a href="#section-2" class="icon-link">
          <img :src="footerIconTwo" alt="iphone-icon">
        </a>
        <a href="#section-3" class="icon-link">
          <img :src="footerIconThree" alt="macbook-icon">
        </a>
        <a href="#section-4" class="icon-link">
          <img :src="footerIconFour" alt="watch-icon">
        </a>
        <a href="#section-5" class="icon-link">
          <img :src="footerIconFive" alt="airpods-icon">
        </a>
      </div>
      <p class="copyright">Copyright &copy; CodeAndCreate All Rights Reserved</p>
    </section>
  </div>
</template>
<script lang="ts" setup>
import bg1 from 'assets/img/apple/slideshow/section-1-bg-1.jpg';
import bg2 from 'assets/img/apple/slideshow/section-1-bg-2.jpg';
import bg3 from 'assets/img/apple/slideshow/section-1-bg-3.jpg';
import bg4 from 'assets/img/apple/slideshow/section-1-bg-4.jpg';
import bg5 from 'assets/img/apple/slideshow/section-1-bg-5.jpg';
import iphoneImageOne from 'assets/img/apple/iPhones/iphones-1-img.png'
import iphoneImageTwo from 'assets/img/apple/iPhones/iphones-2-img.png'
import watchBandOne from 'assets/img/apple/watches/watch-band-1.jpg'
import watchBandTwo from 'assets/img/apple/watches/watch-band-2.jpg'
import watchBandThree from 'assets/img/apple/watches/watch-band-3.jpg'
import watchBandFour from 'assets/img/apple/watches/watch-band-4.jpg'
import watchBandFive from 'assets/img/apple/watches/watch-band-5.jpg'
import watchBandSix from 'assets/img/apple/watches/watch-band-6.jpg'
import watchBandSeven from 'assets/img/apple/watches/watch-band-7.jpg'
import watchBandEight from 'assets/img/apple/watches/watch-band-8.jpg'
import watchBandNine from 'assets/img/apple/watches/watch-band-9.jpg'
import watchCaseOne from 'assets/img/apple/watches/watch-case-1.png'
import watchCaseTwo from 'assets/img/apple/watches/watch-case-2.png'
import watchCaseThree from 'assets/img/apple/watches/watch-case-3.png'
import watchCaseFour from 'assets/img/apple/watches/watch-case-4.png'
import watchCaseFive from 'assets/img/apple/watches/watch-case-5.png'
import watchCaseSix from 'assets/img/apple/watches/watch-case-6.png'
import watchCaseSeven from 'assets/img/apple/watches/watch-case-7.png'
import watchCaseEight from 'assets/img/apple/watches/watch-case-8.png'
import watchCaseNine from 'assets/img/apple/watches/watch-case-9.png'
import airPodsOne from 'assets/img/apple/AirPods/airpods-1.png'
import airPodsTwo from 'assets/img/apple/AirPods/airpods-2.png'
import footerIconOne from 'assets/img/apple/Icons/home-icon.png'
import footerIconTwo from 'assets/img/apple/Icons/iphone-icon.png'
import footerIconThree from 'assets/img/apple/Icons/macbook-icon.png'
import footerIconFour from 'assets/img/apple/Icons/watch-icon.png'
import footerIconFive from 'assets/img/apple/Icons/airpods-icon.png'

// useHead({
//   htmlAttrs: { dir: 'rtl', lang: 'fa' },
//   link: [{ rel: 'icon', type: 'image/png', href: "assets/img/apple/Icons/home-icon.png" }]
// })
let y = 20
let x = 0
let z = 0
let watchAxisY = 0
let watchAxisX = 0
let playPhoneAnimation = ref<boolean>(true)
let phoneAnimationInterval: string | number | NodeJS.Timer | undefined
const topXHandle = (): void => {
  const cube = <HTMLElement>document.querySelector('.cube')
  cube?.setAttribute('style', `transform: rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
}
const bottomXHandle = (): void => {
  const cube = <HTMLElement>document.querySelector('.cube')
  cube?.setAttribute('style', `transform: rotateX(${x -= 20}deg rotateY(${y}deg) rotateZ(${z}deg)`)
}
const leftYHandle = (): void => {
  const cube = <HTMLElement>document.querySelector('.cube')
  cube?.setAttribute('style', `transform: rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg)`)
}
const rightYHandle = (): void => {
  const cube = <HTMLElement>document.querySelector('.cube')
  cube?.setAttribute('style', `transform: rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg)`)
}
const topZHandle = (): void => {
  const cube = <HTMLElement>document.querySelector('.cube')
  cube?.setAttribute('style', `transform: rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`)
}
const bottomZHandle = (): void => {
  const cube = <HTMLElement>document.querySelector('.cube')
  cube?.setAttribute('style', `transform: rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`)
}

// This is to hide the controls of the watch sections.
const hideWatchControls = (): void => {
  const watchTopControl = document.querySelector('.watch-top-control')
  const watchBottomControl = document.querySelector('.watch-bottom-control')
  const watchRightControl = document.querySelector('.watch-right-control')
  const watchLeftControl = document.querySelector('.watch-left-control')
  if (watchAxisY === -280) {
    watchTopControl?.classList.add('hide-control')
  } else {
    watchTopControl?.classList.remove('hide-control')
  }

  if (watchAxisY === 280) {
    watchBottomControl?.classList.add('hide-control')
  } else {
    watchBottomControl?.classList.remove('hide-control')
  }

  if (watchAxisX === 280) {
    watchRightControl?.classList.add('hide-control')
  } else {
    watchRightControl?.classList.remove('hide-control')
  }

  if (watchAxisX === -280) {
    watchLeftControl?.classList.add('hide-control')
  } else {
    watchLeftControl?.classList.remove('hide-control')
  }
}

// This is to create the slide effects for the watches section (section 4)
const watchTopControl = (): void => {
  const watchCases = document.querySelector('.watch-cases')
  watchCases?.setAttribute('style', `margin-top: ${watchAxisY -= 70}rem`)
  hideWatchControls()
}
const watchRightControl = (): void => {
  const watchBands = document.querySelector('.watch-bands')
  watchBands?.setAttribute('style', `margin-right: ${watchAxisX += 70}rem`)
  hideWatchControls()
}
const watchBottomControl = (): void => {
  const watchCases = document.querySelector('.watch-cases')
  watchCases?.setAttribute('style', `margin-top: ${watchAxisY += 70}rem`)
  hideWatchControls()
}
const watchLeftControl = (): void => {
  const watchBands = document.querySelector('.watch-bands')
  watchBands?.setAttribute('style', `margin-right: ${watchAxisX -= 70}rem`)
  hideWatchControls()
}

// This is to play and pause the rotation of the box at the section one.
const playPause = () => {
  const cube = <HTMLElement>document.querySelector('.cube')
  if (playPhoneAnimation.value) {
    phoneAnimationInterval = setInterval(() => {
      cube?.setAttribute('style', `transform: rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`)
    },100)
  } else {
    clearInterval(phoneAnimationInterval)
  }
}
const handleOverControls = (): void => {
  playPhoneAnimation.value = false
  playPause()
}
const handleOutControls = (): void => {
  playPhoneAnimation.value = true
  playPause()
}

// This is to initialize the effect for the background images for the section one
const setBackgroundImagesStyles = (): void => {
  const slideShowDivs = () => {
    const imageMaper: { [key: number]: string } = {
      1: bg1,
      2: bg2,
      3: bg3,
      4: bg4,
      5: bg5
    }
    for(let i = 1; i <= 5; i++) {
      const div = document.createElement('div')
      div.style.backgroundImage = `url(${imageMaper[i]})`

      if (i === 1) {
        div.classList.add('change')
      }

      document.querySelector('.slideshow')?.appendChild(div)
    }
  }

  slideShowDivs()

  const divs = document.querySelectorAll('.slideshow div')
  let a = 1
  const slideShow = () => {
    setInterval(() => {
      a++
      const div = document.querySelector('.slideshow .change')
      div?.classList.remove('change')

      if (a < divs.length) {
        div?.nextElementSibling?.classList.add('change')
      } else {
        divs[0].classList.add('change') 
        a = 1
      }
    }, 4000)
  }

  slideShow()
}

// This is to create the effect for the section 3.
const macbookSectionEffects = (): void => {
  const content = <HTMLElement>document.querySelector('.section-3-content')
  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= content?.offsetTop + content.offsetHeight / 2) {
      content.classList.add('change')
    }
  })
}

onMounted(() => {
  setBackgroundImagesStyles()
  playPause()
  macbookSectionEffects()
})

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');

.apple-clon {
  * {
    font-family: 'Work Sans', sans-serif;
  }

  Html {
    scroll-behavior: smooth;
  }
  
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  // Section 1
  .section-1 {
    width: 100%;
    height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    clip-path: polygon(100% 0, 100% 94%, 36% 100%, 0 100%, 0 0);
    position: relative;
  
    .logo {
      position: absolute;
      top: 3rem;
      left: 3rem;
  
      .icon {
        font-size: 10rem;
        color: rgba(0,0,0, 0.8);
      }
    }
  
    .navbar {
      position: absolute;
      top: 3rem;
      right: 10%;
  
      &-link {
        font-size: 2rem;
        display: inline-block;
        margin: 0 3rem;
        color: var(--black-color);
        transition: transform 0.5s;
  
        &:hover {
          transform: scale(1.5);
        }
      }
    }

    .cube-wrapper {
      perspective: 100rem;

      .cube {
        width: 30rem;
        height: 55rem;
        transform-style: preserve-3d; // Preserve 3d environment for childs
        transform: rotateX(0) rotateY(20deg) rotateZ(0);
        position: relative;
        top: -2rem;
        transition: transform 0.5s;
      }

      .front-side,
      .back-side {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #fff;
        transform-style: preserve-3d;
        box-shadow: 
          inset 0.1rem 0.1rem 0.1rem #ddd,
          inset -0.1rem 0.1rem 0.1rem #ddd;
      }

      .front-side {
        padding: 2.5rem;
        transform: translateZ(5rem);

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        &::before {
          top: 0;
          left: 0;
          transform: rotateX(-90deg);
          transform-origin: top;
        }

        &::after {
          bottom: 0;
          left: 0;
          transform: rotateX(90deg);
          transform-origin: bottom;
        }

        &::before,
        &::after {
          content: '';
          width: 100%;
          height: 10rem;
          background-color: #fee;
          position: absolute;
          box-shadow: 
            inset 0.1rem 0.1rem 0.1rem #ddd,
            inset -0.1rem 0.1rem 0.1rem #ddd;
        }
      }

      .back-side {
        transform: translateZ(-5rem);

        .icon {
          font-size: 12rem;
          color: var(--primary-color);
          text-shadow:
            0.1rem 0.1rem 0.2rem #aaa,
            -0.1rem -0.1rem 0.2rem #aaa;
          transform: rotateY(180deg);
        }

        &::before,
        &::after {
          content: 'iPhone';
          width: 10rem;
          height: 100%;
          background-color: #fee;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          font-weight: 300;
          color: #ec1919;
          box-shadow: 
            inset 0.1rem 0.1rem 0.1rem #ddd,
            inset -0.1rem 0.1rem 0.1rem #ddd;
        }

        &::before {
          top: 0;
          left: 0;
          transform: rotateY(-90deg);
          transform-origin: left;
        }

        &::after {
          top: 0;
          right: 0;
          transform: rotateY(90deg);
          transform-origin: right;
        }
      }

      .controls {
        position: absolute;
        bottom: -15rem;
        left: 50%;
        transform: translateX(-50%);
        width: 10rem;
        height: 10rem;
        background-color: rgba(0,0,0,0.9);
        border-radius: 50%;
        border: 1rem solid rgba(0,0,0,0.8);

        .icon {
          font-size: 1.5rem;
          color: var(--primary-color);
          opacity: 0.5;
          transition: opacity 0.3s;
        }

        a {
          position: absolute;

          &:hover .icon {
            opacity: 1;
          }

          &:nth-child(1) {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
          }
          &:nth-child(2) {
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
          &:nth-child(3) {
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
          &:nth-child(4) {
            top: 50%;
            right: 0;
            transform: translateY(-50%);
          }
          &:nth-child(5) {
            top: 10%;
            right: 10%;
            transform: rotate(45deg);
          }
          &:nth-child(6) {
            bottom: 10%;
            left: 10%;
            transform: rotate(45deg);
          }
        }
      }
    }
  
    &-banner {
      flex-direction: column;
  
      h1 {
        font-size: 13rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
      }
  
      p {
        font-size: 4rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        margin: 6rem 0 4rem 0;
      }
  
      span {
        font-size: 3rem;
        margin-bottom: 5rem;
      }
  
      button {
        padding: 2rem 4rem;
        font-size: 2rem;
        background-color: var(--black-color);
        color: var(--primary-color);
        font-weight: 400;
        letter-spacing: 0.1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        clip-path: polygon(
          50% 0%,
          81% 5%,
          100% 0,
          100% 100%,
          80% 95%,
          50% 100%,
          20% 95%,
          0 100%,
          0 0,
          23% 5%
        );
        transition: clip-path 0.5s;
  
        &:hover {
          clip-path: polygon(
            40% 15%,
            77% 15%,
            100% 10%,
            100% 90%,
            75% 85%,
            40% 85%,
            30% 100%,
            0 50%,
            0 50%,
            30% 0
          );
        }
      }
    }
  
    .slideshow {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1001;
  
      & > div {
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity 1s;
      }

      .change {
        opacity: 1;
      }
    }
  }
  // End of Section 1

  // Section 2
  .section-2 {
    width: 100%;
    height: 120vh;
    padding: 10vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .section-2-heading {
      font-size: 10rem;
      font-weight: 200;
      color: var(--black-color);
      position: relative;
      margin-bottom: 5rem;

      &::before {
        content: '';
        width: 130%;
        height: 30vw;
        background-image: linear-gradient(var(--primary-color), var(--white-color));
        position: absolute;
        top: 0;
        left: 0;
        transform: skewX(-50deg);
        transform-origin: left top;
        z-index: -1001;
        border-radius: 1rem;
      }
    }

    .iphones {
      width: 50vw;
      height: 60vh;
      background-image: linear-gradient(var(--primary-color), var(--white-color));
      border-radius: 0.5rem;

      img {
        width: inherit;
        height: inherit;
        object-fit: contain;
        position: absolute;
        transition: opacity 3s;
      }

      .iphone-img-2 {
        opacity: 0;
      }

      &:hover .iphone-img-1 {
        opacity: 0;
      }

      &:hover .iphone-img-2 {
        opacity: 1;
      }
    }

    .iphone-btns {
      display: flex;

      .iphone-btn {
        width: 6rem;
        height: 6rem;
        background-image: linear-gradient(
          to right,
          rgb(51, 51, 51) 60%,
          rgb(82, 82, 82)
        );
        margin: 0 3rem;
        border-radius: 50%;
        position: relative;

        span {
          position: absolute;
          top: -3rem;
          font-size: 1.6rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: var(--primary-color);
          width: max-content;
          transform: scale(0);
          transition: transform 0.4s;
        }

        &:hover span {
          transform: scale(1);
        }

        &::after {
          content: '';
          width: 50%;
          height: 50%;
          display: block;
          border: 0.1rem solid #6edae6;
          border-radius: 1rem;
        }
      }
    }
  }
  // End of Section 2

  // Section 3
  .section-3 {
    width: 100%;
    height: 100%;
    background-color: var(--black-color);
    flex-direction: column;
    padding: 15rem 0;
    clip-path: polygon(
      68% 0,
      100% 0,
      100% 97%,
      38% 100%,
      0 100%,
      0 3%
    );

    &-heading {
      font-size: 10rem;
      font-weight: 200;
      color: var(--primary-color);
      margin-bottom: 15rem;
    }

    &-content {
      width: 80%;
      flex-direction: column;
      perspective: 1000rem;
      position: relative;

      img {
        width: inherit;
      }

      .macbook-img-1 {
        transform: rotateX(-80deg);
        transform-origin: bottom;
      }

      &.change .macbook-img-1 {
        transform: rotateX(0);
        transition: transform 3s;
      }

      &.change .loading-wrapper {
        opacity: 1;
        transition: opacity 1s 2s;
      }

      &.change .progress-bar::after {
        width: 100% !important;
        transition: width 1s 3s;
      }

      &.change .loading {
        opacity: 0;
        transition: 1s 5s;
      }

      &.change .macbook-info {
        opacity: 1;
        transition: opacity 1s 6s;
      }

      .loading-wrapper {
        position: absolute;
        top: 6%;
        width: 60%;
        height: 85%;
        background: linear-gradient(
          rgba(255, 255, 255, 0.6),
          rgba(255, 255, 255, 0.6)),
          url('assets/img/apple/MacBook/macbook-1-desktop.png') center no-repeat;
        z-index: -1001;
        opacity: 0;

        .loading {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--black-color);
          flex-direction: column;

          .icon {
            font-size: 10rem;
            color: var(--white-color);
            margin-bottom: 2rem;
          }

          .progress-bar {
            width: 22rem;
            height: 0.3rem;
            background-color: #888;
            border-radius: 5rem;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 0%;
              height: 100%;
              background-color: var(--white-color);
            }
          }
        }
      }

      .macbook-info {
        position: absolute;
        width: 70rem;
        text-align: center;
        opacity: 0;

        &-heading {
          font-size: 6rem;
          font-weight: 400;
          color: var(--primary-color);
        }

        .macbook-price {
          font-size: 2.5rem;
          font-weight: 200;
          margin: 3rem 0;
        }

        .macbook-btn {
          width: 25rem;
          height: 5rem;
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: 0.2rem;
          color: var(--primary-color);
          background-image: linear-gradient(#ddd,#fff);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          box-shadow: 
            0.1rem 0.1rem 0.1rem #fff,
            -0.1rem -0.1rem 0.1rem #fff;
        }
      }
    }
  }
  // End of Section 3

  // Section 4
  .section-4 {
    height: 140vh;
    padding: 20vh 0;
    flex-direction: column;
    position: relative;

    .watches {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .watch-cases {
        flex-direction: column;
        transition: margin-top 1s;
      }

      .watch-bands {
        transition: margin-right 1s;
      }

      & > div {
        position: absolute;
      }

      img {
        width: 35rem;
        height: 35rem;
        object-fit: contain;
      }
    }

    .watch-control {
      position: absolute;
      width: 4rem;
      height: 4rem;
      background-color: rgba(221, 221, 221, 0.4);
      border-radius: 5rem;

      .icon {
        font-size: 3rem;
        color: var(--primary-color);
      }
    }

    .hide-control {
      opacity: 0;
      visibility: hidden;
    }

    .watch-top-control {
      top: 22vh;
      left: 50%;
      transform: translateX(-50%);
    }
    .watch-right-control {
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
    }
    .watch-bottom-control {
      bottom: 20vh;
      left: 50%;
      transform: translateX(-50%);
    }
    .watch-left-control {
      top: 50%;
      left: 2rem;
      transform: translateY(-50%);
    }

    .watch-btn {
      position: absolute;
      bottom: 30vh;
      right: 35%;
      width: 13rem;
      height: 5rem;
      background-color: var(--black-color);
      color: var(--primary-color);
      border: 0.1rem dashed var(--white-color);
      border-radius: 4rem;
      font-size: 1.6rem;
      font-weight: 200;
      cursor: pointer;
    }
  }
  // End of Section 4

  // Section 5
  .section-5 {
    width: 100%;
    height: 100vh;

    .airpods {
      width: 90%;
      height: 80%;
      display: flex;
      position: relative;

      .section-5-heading {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 15rem;
        font-weight: 300;
        color: var(--white-color);
        text-shadow: 0.1rem 0.1rem 0 #999;
      }

      img {
        width: 50%;
        height: 100%;
        object-fit: contain;
      }

      &-img-2 {
        background-color: var(--primary-color);
      }

      &-buttons {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        margin-top: 5rem;

        .airpods-btn {
          width: 15rem;
          height: 4rem;
          background-color: var(--primary-color);
          margin: 0 2rem;
          border: none;
          border-radius: 0.5rem;
          color: var(--white-color);
          cursor: pointer;
        }

        .airpods-btn:last-child {
          background-color: var(--white-color);
          color: var(--primary-color);
        }
      }
    }
  }
  // End of Section 5

  // Section 6
  .section-6 {
    width: 100%;
    height: 40vh;
    position: relative;

    .icon-link {
      margin: 0 5rem;
    }

    img {
      width: 10rem;
    }

    .copyright {
      position: absolute;
      bottom: 5rem;
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
    }
  }
  // End of Section 6
}

// Responsive
@media(max-width: 1500px) {
  html {
    font-size: 45% !important;
  }
}

@media(max-width: 1100px) {
  html {
    font-size: 40% !important;
  }

  .navbar-link {
    font-weight: 700 !important;
  }

  .section-1-banner h1 {
    font-size: 8rem !important;
  }

  .section-1-banner p {
    font-size: 3rem !important;
  }

  .watch-btn {
    right: 25% !important;
    bottom: 33vw !important;
  }
}

@media(max-width: 900px) {
  .section-3-content {
    width: 90% !important;
  }

  .loading-wrapper {
    width: 70% !important;
  }

  .loading .icon {
    font-size: 6rem !important;
  }

  .section-5-heading {
    font-size: 12rem !important;
  }
}

@media(max-width: 700px) {
  .logo {
    top: 0 !important;
    left: 2rem !important;
  }

  .logo .icon {
    font-size: 8rem !important;
  }

  .controls {
    display: none;
  }

  .cube-wrapper {
    opacity: 0.7 !important;
  }

  .cube {
    top: 3rem !important;
  }

  .section-1-banner {
    position: absolute;
  }

  .section-1-banner h1 {
    position: relative;
    left: -5rem !important;
  }

  .section-1-banner h1::first-letter {
    visibility: hidden;
    opacity: 0;
  }

  .section-1-banner button:hover {
    clip-path: polygon(
      50% 0%,
      81% 5%,
      100% 0,
      100% 100%,
      80% 95%,
      50% 100%,
      20% 95%,
      0 100%,
      0 0,
      23% 5%
    ) !important;
  }

  .iphones {
    width: 70vw !important;
    height: 70vh !important;
  }

  .watch-btn {
    right: 15% !important;
    bottom: 55vw !important;
  }

  .airpods-img-1 {
    display: none;
  }

  .airpods .airpods-img-2 {
    width: 100% !important;
  }

  .airpods-btn {
    background-color: var(--white-color) !important;
    color: var(--primary-color) !important;
    box-shadow: 0.1rem 0.1rem 0.1rem #ddd !important;
  }

  .icon-link {
    margin: 0 2rem !important;
  }
}

@media(max-width: 550px) {
  .navbar-link {
    margin: 0 1.5rem !important;
  }

  .section-2-heading {
    font-size: 8rem !important;
  }

  .iphones {
    width: 75vw !important;
  }

  .section-3-heading {
    font-size: 8rem !important;
  }

  .macbook-info-heading {
    font-size: 5rem !important;
  }

  .macbook-btn {
    width: 15rem !important;
    height: 3rem !important;
    font-size: 1.3rem !important;
  }

  .airpods-buttons {
    width: 50rem !important;
    text-align: center !important;
  }

  .icon-link img {
    width: 8rem !important;
  }
}

@media(max-width: 450px) {
  html {
    font-size: 35% !important;
  }

  .logo {
    top: 10rem !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }

  .navbar {
    left: 50%;
    transform: translateX(-50%) !important;
    width: max-content !important;
  }

  .section-1-banner p {
    text-align: center !important;
  }

  .iphones {
    width: 75vw !important;
  }

  .section-3-heading {
    font-size: 6rem !important;
  }

  .macbook-info {
    width: 40rem !important;
  }

  .macbook-info-heading {
    font-size: 3rem !important;
  }

  .macbook-price {
    font-size: 2rem !important;
    font-weight: 300 !important;
  }

  .watch-btn {
    right: 5% !important;
  }

  .section-6 {
    height: 30vh !important;
  }

  .icon-link img {
    width: 5rem !important;
  }
}
// End of Responsive
</style>
