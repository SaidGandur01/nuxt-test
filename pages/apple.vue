<template>
  <div class="container apple-clon">
    <!-- Section 1 -->
    <div class="section-1">
      <a href="#" class="logo">
        <font-awesome-icon class="icon" :icon="['fab', 'apple']" />
      </a>

      <nav class="navbar">
        <a href="#" class="navbar-link">iPhone 12</a>
        <a href="#" class="navbar-link">Macbook Air</a>
        <a href="#" class="navbar-link">Watch</a>
        <a href="#" class="navbar-link">AirPods</a>
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
          <a href="#" class="top-x-control" @click="topXHandle()">
            <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
          </a>
          <a href="#" class="top-x-bottom" @click="bottomXHandle()">
            <font-awesome-icon class="icon" :icon="['fas', 'arrow-down']" />
          </a>
          <a href="#" class="left-y-control" @click="leftYHandle()">
            <font-awesome-icon class="icon " :icon="['fas', 'arrow-left']" />
          </a>
          <a href="#" class="right-y-control" @click="rightYHandle()">
            <font-awesome-icon class="icon " :icon="['fas', 'arrow-right']" />
          </a>
          <a href="#" class="top-z-control" @click="topZHandle()">
            <font-awesome-icon class="icon " :icon="['fas', 'arrow-down']" />
          </a>
          <a href="#" class="bottom-z-control" @click="bottomZHandle()">
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
    </div>
    <!-- End of Section 1 -->
  </div>
</template>
<script lang="ts" setup>
import bg1 from "assets/img/apple/slideshow/section-1-bg-1.jpg";
import bg2 from "assets/img/apple/slideshow/section-1-bg-2.jpg";
import bg3 from "assets/img/apple/slideshow/section-1-bg-3.jpg";
import bg4 from "assets/img/apple/slideshow/section-1-bg-4.jpg";
import bg5 from "assets/img/apple/slideshow/section-1-bg-5.jpg";
let y = 20
let x = 0
let z = 0
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
onMounted(() => {
  setBackgroundImagesStyles()
  playPause()
})

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');

.apple-clon {
  * {
    font-family: 'Work Sans', sans-serif;
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
}
</style>
