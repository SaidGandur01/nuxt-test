<template>
  <div class="container">
    <div class="navbar">
      <a href="#" class="logo-link">
        <img :src="logo" alt="Logo" class="logo" />
      </a>

      <a href="#" class="menu">
        <div class="menu-line menu-line-1"></div>
        <div class="menu-line menu-line-2"></div>
        <div class="menu-line menu-line-3"></div>
      </a>

      <nav class="nav-list">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">Vineyards</a>
        <a href="#" class="nav-link">Grapes</a>
        <a href="#" class="nav-link">Wine</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>
    </div>

    <button class="page-btn left-btn">
      <img :src="arrow" />
    </button>
    <button class="page-btn right-btn">
      <img :src="arrow" />
    </button>

    <div class="progress-wrapper">
      <div class="progress">
        <h2>1/5</h2>
      </div>
      <div class="circle-wrapper">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-4"></div>
        <div class="circle circle-5"></div>
      </div>
    </div>

    <div class="wrapper">
      <section class="section-1">
        <div class="section-wrapper section-1-wrapper">
          <div class="section-1-heading-wrapper">
            <h1 class="section-1-heading">The best wines around the world</h1>
          </div>
        </div>
      </section>
      <section class="section-2">
        <div class="section-wrapper section-2-wrapper">
          <div class="sale">
            <img :src="bag" alt="Sale Bag" class="sale-bag" />
            <button class="sale-btn">order now!</button>
          </div>
          <img
            :src="wineBottles"
            alt="Wine Bottle"
            class="wine-bottle"
          />
        </div>
      </section>
      <section class="section-3">
        <div class="section-wrapper section-3-wrapper">
          <h1 class="section-3-heading">the best quality</h1>
          <img :src="frame" alt="Grapes Frame" class="frame-img" />
          <img :src="grapes" alt="Grapes" class="grapes-img" />
        </div>
      </section>
      <section class="section-4">
        <div class="section-wrapper section-4-wrapper">
          <div class="section-4-bg"></div>
          <h1 class="section-4-heading">Newly Released Wines</h1>
          <img
            :src="sectionFour"
            alt="New Wines"
            class="new-wines-img"
          />
        </div>
      </section>
      <section class="section-5">
        <div class="section-wrapper section-5-wrapper">
          <ul class="footer-list">
            <li>Contact</li>
            <li>NY</li>
            <li>1039 Stanley Avenue</li>
            <li>Open Daily</li>
            <li>By appointment only</li>
          </ul>
          <img :src="footer" class="footer-img" />
          <ul class="footer-list">
            <li>Connect</li>
            <li>PN: 516-448-2763</li>
            <li>MN: 631-742-8400</li>
            <li>example@winehouse.com</li>
            <li>Join our mailing list</li>
          </ul>
          <p class="copyright">
            Copyright &copy; CodeAndCreate. All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import logo from "~/assets/img/wine/logo.png";
import arrow from "~/assets/img/wine/arrow.png";
import bag from "~/assets/img/wine/bag.png";
import wineBottles from "~/assets/img/wine/wine-bottle.png";
import frame from "~/assets/img/wine/frame.png";
import grapes from "~/assets/img/wine/grapes.png";
import sectionFour from "~/assets/img/wine/section-4-bg.jpg";
import footer from "~/assets/img/wine/footer-img.png";

onMounted(async () => {
  let counter1 = 0;
  let counter2 = 1;
  let bool = true;

  const sections = document.querySelectorAll("section");
  const progress = document.querySelector(".progress h2");
  const circles = document.querySelectorAll(".circle");
  const menu = document.querySelector(".menu");
  const section1wrapper = document.querySelector(".section-1-wrapper");
  const section5wrapper = document.querySelector(".section-5-wrapper");

  await setTimeout(async () => {
    await section1wrapper?.setAttribute("style", "transform: scale(1)");
  }, 0);

  const progressCounter = () => {
    if (progress) {
      progress.textContent = `${counter2}/${sections.length}`;
    }

    Array.from(circles).forEach((circle) => {
      circle.setAttribute("style", "background-color: transparent");
    });
    document
      .querySelector(`.circle-${counter2}`)
      ?.setAttribute("style", "background-color: #ddd");
  };

  const pageController = () => {
    bool = true;
    if (counter1 === 5) {
      Array.from(sections).forEach((section) => {
        section.style.left = "0";
      });
      counter1 = 0;
      counter2 = 1;
      section1wrapper?.setAttribute("style", "transform: scale(1)");
      section5wrapper?.setAttribute("style", "transform: scale(1.5)");
      progressCounter();
      bool = false;
    }

    if (counter1 === -1) {
      Array.from(sections).forEach((section) => {
        if (section.classList[0] === "section-5") {
          return;
        }
        section.setAttribute("style", "left: -100vw");
      });
      counter1 = 4;
      counter2 = 5;
      console.log('entramos')
      section1wrapper?.setAttribute("style", "transform: scale(1.5)");
      section5wrapper?.setAttribute("style", "transform: scale(1)");
      progressCounter();
      bool = false;
    }
    progressCounter();
    return bool;
  };

  window.addEventListener("wheel", (e) => {
    const deltaY = e.deltaY > 0;

    if (deltaY) {
      counter1++;
      counter2++;
    } else {
      counter1--;
      counter2--;
    }

    pageController();
    progressCounter();
    console.log(counter1, counter2);

    if (bool) {
      document
        .querySelector(`.section-${deltaY ? counter1 : counter2}`)
        ?.setAttribute("style", `left: (${deltaY ? "-100vw" : "0"})`);

      document
        .querySelector(`.section-${deltaY ? counter1 : counter2}-wrapper`)
        ?.setAttribute("style", `transform: scale(${deltaY ? "1.5" : "1"})`);

      document
        .querySelector(
          `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
        )
        ?.setAttribute("style", `transform: scale(${deltaY ? "1" : "1.5"})`);
    }
  });

  document.querySelector(".left-btn")?.addEventListener("click", () => {
    counter1--;
    counter2--;
    pageController() &&
      document
        .querySelector(`.section-${counter2}`)
        ?.setAttribute("style", "left: 0");

    if (bool) {
      document
        .querySelector(`.section-${counter2}-wrapper`)
        ?.setAttribute("style", "transform: scale(1)");
      document
        .querySelector(`.section-${counter2 + 1}-wrapper`)
        ?.setAttribute("style", "transform: scale(1.5)");
    }
  });

  document.querySelector(".right-btn")?.addEventListener("click", () => {
    counter1++;
    counter2++;
    pageController() &&
      document
        .querySelector(`.section-${counter1}`)
        ?.setAttribute("style", "left: -100vw");

    if (bool) {
      document
        .querySelector(`.section-${counter2}-wrapper`)
        ?.setAttribute("style", "transform: scale(1)");
      document
        .querySelector(`.section-${counter1}-wrapper`)
        ?.setAttribute("style", "transform: scale(1.5)");
    }
  });

  document.querySelector(".grapes-img")?.addEventListener("mouseover", () => {
    document
      .querySelector(".section-3-wrapper")
      ?.setAttribute("style", "opacity: 0.5");
  });

  document.querySelector(".grapes-img")?.addEventListener("mouseout", () => {
    document
      .querySelector(".section-3-wrapper")
      ?.setAttribute("style", "opacity: 1");
  });

  menu?.addEventListener("click", () => {
    document.querySelector(".navbar")?.classList.toggle("change");
  });
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  list-style-type: none;
  font-family: "Cormorant Garamond", serif;
}

html {
  font-size: 62.5%;
}

.navbar {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.menu {
  display: none;
}

.logo {
  height: 6rem;
}

.nav-list {
  display: flex;
  justify-content: center;
}

.nav-link {
  font-size: 1.5rem;
  color: #fff;
  width: 15rem;
  margin: 0 3rem;
  text-transform: uppercase;
  border: 0.1rem solid #fff;
  text-align: center;
  padding: 0.2rem 0;
  letter-spacing: 0.1rem;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: "";
  position: absolute;
  width: 150%;
  height: 5rem;
  background-color: #d50000;
  left: -20%;
  transform: rotate(-40deg) translateX(-4rem);
  transform-origin: left bottom;
  opacity: 0.8;
  transition: left 0.3s;
}

.nav-link:hover::before {
  left: 110%;
}

.page-btn {
  position: fixed;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
}

.left-btn {
  left: 4rem;
}

.left-btn img {
  transform: rotate(-90deg);
}

.right-btn {
  right: 4rem;
}

.right-btn img {
  transform: rotate(90deg);
}

.page-btn img {
  width: 4rem;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 0.2s;
}

.page-btn img:hover {
  opacity: 1;
}

.progress-wrapper {
  position: fixed;
  z-index: 100;
  bottom: 2rem;
  left: 3rem;
}

.progress {
  margin: 1rem 0;
  text-align: center;
}

.progress h2 {
  font-size: 2.5rem;
  font-weight: 300;
  color: #fff;
}

.circle-wrapper {
  display: flex;
}

.circle {
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid #fff;
  border-radius: 50%;
  margin: 0 0.3rem;
  transition: background-color 0.3s;
}

.circle-1 {
  background-color: #ddd;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

section {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  overflow: hidden;
  transition: left 1.5s;
}

.section-1 {
  z-index: 50;
  // transform: scale(1);
  transition: all 1s;
}

.section-wrapper {
  width: inherit;
  height: inherit;
  transform: scale(1.5);
  transition: all 2s;
}

.section-1-wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
    url('assets/img/wine/section-1-bg.jpg') center no-repeat;
  background-size: cover;
}

.section-1-heading-wrapper {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.section-1-heading {
  font-size: 10rem;
  font-weight: 300;
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  border-bottom: 0.2rem solid #d50000;
  text-align: right;
  user-select: none;
}

.section-2 {
  z-index: 40;
}

.section-2-wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),
    url('assets/img/wine/section-2-bg.jpg') center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.sale {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sale-bag {
  opacity: 0.9;
  width: 45rem;
}

.sale-btn {
  width: 20rem;
  height: 5rem;
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background-color: transparent;
  color: #fff;
  margin-top: 4rem;
  border: 0.1rem solid #fff;
  transition: background-color 0.2s;
}

.sale-btn:hover {
  background-color: #d50000;
}

.wine-bottle {
  opacity: 0.6;
  width: 80rem;
}

.section-3 {
  z-index: 30;
  background-color: #000;
}

.section-3-wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)),
    url('assets/img/wine/section-3-bg.jpg') center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-3-heading {
  font-size: 20rem;
  color: #ccc;
  text-transform: uppercase;
  transform: rotate(-20deg);
  text-align: center;
  text-shadow: 0 0.5rem 1.5rem #000;
  user-select: none;
}

.frame-img {
  width: 100rem;
  position: absolute;
  opacity: 0.5;
}

.grapes-img {
  width: 40rem;
  position: absolute;
  opacity: 0.7;
  transition: all 1.5s;
}

.grapes-img:hover {
  opacity: 1;
  transform: scale(2);
}

.section-4 {
  z-index: 20;
}

.section-4-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-4-bg {
  width: 110%;
  height: 110%;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url('assets/img/wine/section-4-bg.jpg') center no-repeat;
  background-size: cover;
  z-index: -1;
  filter: blur(0.5rem);
}

.section-4-heading {
  font-size: 10rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 7rem;
  color: #d50000;
  user-select: none;
}

.new-wines-img {
  width: 70rem;
  border: 0.1rem solid #fff;
  padding: 1rem;
  opacity: 0.7;
}

.section-5 {
  z-index: 10;
}

.section-5-wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url('assets/img/wine/section-5-bg.jpg') center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-list li {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: #ddd;
  margin: 1rem 0;
}

.footer-list li:first-child {
  text-transform: uppercase;
  color: #fff;
}

.footer-img {
  width: 60rem;
  margin: 0 20rem;
  opacity: 0.9;
}

.copyright {
  position: absolute;
  bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #eee;
  letter-spacing: 0.2rem;
}

@media (max-width: 1600px) {
  .sale-bag {
    width: 35rem;
  }

  .wine-bottle {
    width: 65rem;
  }

  .footer-img {
    width: 45rem;
    margin: 0 12rem;
  }
}

@media (max-width: 1300px) {
  .sale-bag {
    width: 30rem;
  }

  .wine-bottle {
    width: 60rem;
  }

  .footer-img {
    width: 35rem;
    margin: 0 10rem;
  }
}

@media (max-width: 1200px) {
  .nav-link {
    margin: 0 1.5rem;
  }

  .section-1-heading-wrapper {
    width: 80%;
  }

  .section-1-heading {
    font-size: 8rem;
  }

  .sale-bag {
    width: 25rem;
  }

  .sale-btn {
    width: 15rem;
    height: 4rem;
    font-size: 1.7rem;
  }

  .wine-bottle {
    width: 50rem;
  }

  .footer-img {
    width: 25rem;
    margin: 0 7rem;
  }
}

@media (max-width: 1000px) {
  .navbar {
    justify-content: start;
    padding-left: 2rem;
  }

  .menu {
    display: block;
    width: 4rem;
    height: 2.5rem;
    position: absolute;
    top: 1rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu-line {
    width: 100%;
    height: 0.3rem;
    background-color: #d50000;
    transition: transform 0.5s;
  }

  .change .menu-line-1 {
    transform: rotate(40deg) translate(0.5rem, 1rem);
  }

  .change .menu-line-2 {
    transform: translate(-0.2rem, 2rem);
  }

  .change .menu-line-3 {
    transform: rotate(-40deg) translate(0.5rem, -1rem);
  }

  .nav-list {
    position: absolute;
    top: 5rem;
    right: -21rem;
    flex-direction: column;
    height: calc(100vh - 5rem);
    background-color: #333;
    justify-content: start;
    padding: 2rem;
    border-radius: 0.5rem 0 0 0;
    transition: right 0.5s;
  }

  .change .nav-list {
    right: 0;
  }

  .nav-link {
    margin: 1rem;
  }

  .section-2-wrapper {
    flex-direction: column;
  }

  .sale {
    order: 1;
  }

  .section-3-heading {
    font-size: 12rem;
  }

  .frame-img {
    width: 70rem;
  }

  .grapes-img {
    width: 25rem;
  }

  .section-4-heading {
    font-size: 8rem;
  }

  .new-wines-img {
    width: 60rem;
  }

  .section-5-wrapper {
    flex-direction: column;
  }

  .footer-img {
    width: 20rem;
    order: 1;
  }

  .footer-list {
    width: 20rem;
    margin: 2rem auto;
  }
}

@media (max-width: 800px) {
  .left-btn {
    left: 2rem;
  }

  .right-btn {
    right: 2rem;
  }

  .section-1-heading {
    font-size: 6rem;
  }

  .sale-bag {
    width: 20rem;
  }

  .wine-bottle {
    width: 40rem;
  }

  .section-3-heading {
    font-size: 11rem;
    opacity: 0.7;
  }

  .frame-img {
    width: 60rem;
  }

  .new-wines-img {
    width: 45rem;
  }

  .progress-wrapper {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 600px) {
  .section-1-heading {
    font-size: 4rem;
  }

  .sale-bag {
    width: 15rem;
  }

  .wine-bottle {
    width: 30rem;
  }

  .sale-btn {
    width: 12rem;
    height: 3rem;
    font-size: 1.4rem;
  }

  .section-3-heading {
    font-size: 10rem;
  }

  .frame-img {
    width: 35rem;
  }

  .section-4-heading {
    font-size: 6rem;
  }

  .new-wines-img {
    width: 35rem;
  }
}

@media (max-width: 500px) {
  html {
    font-size: 45%;
  }

  .left-btn {
    left: 0.5rem;
  }

  .right-btn {
    right: 0.5rem;
  }

  .nav-list {
    top: 6.5rem;
  }

  .section-3-heading {
    font-size: 8rem;
  }

  .grapes-img {
    width: 15rem;
  }

  .grapes-img:hover {
    width: 25rem;
  }
}
</style>
