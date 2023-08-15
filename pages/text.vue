<template>
  <section>
    <h1>Scroll down for awesomeness.</h1>
  </section>
  <section class="one">
    <p class="reveal-type">
      Systematically ushering in a new generation of amazing designers from
      across the world.
    </p>
  </section>
  <section class="two">
    <p class="reveal-type">
      Modern UI designers will expand their skillsets to include frontend.
    </p>
  </section>
  <section class="three">
    <p class="reveal-type">
      The web isn't static anymore, interactivity and motion now dominate.
    </p>
  </section>
  <section></section>
</template>
<script lang="js" setup>
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const splitTypes = document.querySelectorAll('.reveal-type');

  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' })

    gsap.fromTo(text.chars,
      {
        scaleY: 0,
        y: -20,
        transformOrigin: 'top'
      },
      {
        scaleY: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          markers: false,
          toggleActions: 'play play reverse reverse'
        }
      }
    )
  })


  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    // console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
section {
  height: 100vh;
  padding: 0 clamp(4rem, 12vw, 20rem);
  display: grid;
  place-content: center;
}

section p {
  font-size: clamp(2rem, 5vw, 8rem);
}

.one {
  border-bottom: 1px solid black;
}

.two {
  background: #ffff00;
}

.three {
  background: rgb(29, 29, 29);
  color: white;
}
</style>
