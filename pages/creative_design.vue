<template>
  <div class="container">
    <!-- Section 1 -->
    <section class="section-1" id="home">
      <nav class="navbar">
        <a href="#home" class="navbar-link">Design</a>
        <a href="#customers" class="navbar-link">Customers</a>
        <a href="#team" class="navbar-link">Team</a>
        <a href="#contact" class="navbar-link">Contact</a>
      </nav>
      <div class="floating-bg"></div>
      <h1 class="section-1-heading">Creative Design</h1>
      <div class="logo">
        <font-awesome-icon class="icon" :icon="['fas', 'bezier-curve']" />
      </div>
    </section>
    <!-- End of Section 1 -->

    <!-- Section 2 -->
    <section class="section-2" id="customers">
      <h1 class="section-heading">Customers</h1>
      <div class="customers-wrapper">
        <div class="customer">
          <font-awesome-icon class="icon" :icon="['fas', 'quote-left']" />
          <p class="customer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa
            quisquam repellat atque, tempore assumenda vitae. Earum fuga a
            accusamus, nisi ullam delectus!
          </p>
          <div class="customer-rating">
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon
              class="icon"
              :icon="['fas', 'star-half-stroke']"
            />
          </div>
          <img
            src="~/assets/img/creative_design/customer-img-1.jpg"
            class="customer-img"
          />
          <h4 class="customer-name">Jane Lee</h4>
        </div>
        <div class="customer">
          <font-awesome-icon class="icon" :icon="['fas', 'quote-left']" />
          <p class="customer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa
            quisquam repellat atque, tempore assumenda vitae. Earum fuga a
            accusamus, nisi ullam delectus!
          </p>
          <div class="customer-rating">
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
          </div>
          <img
            src="~/assets/img/creative_design/customer-img-2.jpg"
            class="customer-img"
          />
          <h4 class="customer-name">Bob Smith</h4>
        </div>
        <div class="customer">
          <font-awesome-icon class="icon" :icon="['fas', 'quote-left']" />
          <p class="customer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa
            quisquam repellat atque, tempore assumenda vitae. Earum fuga a
            accusamus, nisi ullam delectus!
          </p>
          <div class="customer-rating">
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
            <font-awesome-icon class="icon" :icon="['fas', 'star']" />
          </div>
          <img
            src="~/assets/img/creative_design/customer-img-3.jpg"
            class="customer-img"
          />
          <h4 class="customer-name">Ann Brown</h4>
        </div>
      </div>
    </section>
    <!-- End of Section 2 -->

    <!-- Section 3 -->
    <section class="section-3" id="team">
      <h1 class="section-heading">Team</h1>
      <div class="team-wrapper">
        <div class="team-member">
          <img
            src="~/assets/img/creative_design/team-member-1.jpg"
            class="team-member-img"
          />
          <h2 class="team-member-name">Nick Smith <span>(Designer)</span></h2>
          <ul class="team-member-skills">
            <li>Ps</li>
            <li>Figma</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Ai</li>
          </ul>
          <a href="#" class="projects-btn">Projects</a>
          <div class="story-btn" title="My Story">
            <div class="story-btn-line"></div>
          </div>
          <div class="story">
            <h4 class="story-heading">About Me</h4>
            <p class="story-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio
              nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum
              sunt atque exercitationem perspiciatis, beatae aliquam voluptates
              perferendis. Doloribus exercitationem adipisci, quidem veritatis
              temporibus magni. Sunt, exercitationem?
            </p>
          </div>
        </div>
        <div class="team-member">
          <img
            src="~/assets/img/creative_design/team-member-2.jpg"
            class="team-member-img"
          />
          <h2 class="team-member-name">Bob Brown <span>(Designer)</span></h2>
          <ul class="team-member-skills">
            <li>Ae</li>
            <li>Pr</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Inkscape</li>
          </ul>
          <a href="#" class="projects-btn">Projects</a>
          <div class="story-btn" title="My Story">
            <div class="story-btn-line"></div>
          </div>
          <div class="story">
            <h4 class="story-heading">About Me</h4>
            <p class="story-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio
              nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum
              sunt atque exercitationem perspiciatis, beatae aliquam voluptates
              perferendis. Doloribus exercitationem adipisci, quidem veritatis
              temporibus magni. Sunt, exercitationem?
            </p>
          </div>
        </div>
        <div class="team-member">
          <img
            src="~/assets/img/creative_design/team-member-3.jpg"
            class="team-member-img"
          />
          <h2 class="team-member-name">John Doe <span>(Developer)</span></h2>
          <ul class="team-member-skills">
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Python</li>
          </ul>
          <a href="#" class="projects-btn">Projects</a>
          <div class="story-btn" title="My Story">
            <div class="story-btn-line"></div>
          </div>
          <div class="story">
            <h4 class="story-heading">About Me</h4>
            <p class="story-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio
              nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum
              sunt atque exercitationem perspiciatis, beatae aliquam voluptates
              perferendis. Doloribus exercitationem adipisci, quidem veritatis
              temporibus magni. Sunt, exercitationem?
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Section 3 -->

    <!-- Section 4 -->
    <section class="section-4" id="contact">
      <h1 class="section-heading">Contact</h1>
      <div class="form-container">
        <img src="~/assets/img/creative_design/form-img.png" class="form-img" />
        <form class="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
      <p class="copyright">
        Copyright &copy; CodeAndCreate All Rights Reserved
      </p>
    </section>
    <!-- End of Section 4 -->

    <a href="#home" class="scroll-up-btn">
      <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
    </a>
  </div>
</template>
<script lang="ts" setup>
onMounted(() => {
  document.querySelectorAll('.story-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('change');
      if (btn.nextElementSibling) {
        btn.nextElementSibling.classList.toggle('change');
      }
    });
  });
});
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bellota+Text:wght@300;400;700&family=Monoton&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  outline: none;
  font-family: 'Bellota Text', cursive;
  font-weight: 400;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

.container {
  width: 100%;
  overflow-x: hidden;
}

.section-heading {
  font-size: 10rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
  text-align: center;
  opacity: 0.1;
  text-shadow: 2rem 2rem 4rem #aaa;
}
/* Section 1 */
.section-1 {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;
}

.floating-bg {
  width: 150vw;
  height: 150vw;
  background-color: rgba(50, 231, 255, 0.8);
  position: absolute;
  top: -125vw;
  left: calc(50% - 75vw);
  border-radius: 45%;
  animation: rotate 30s infinite;
}

.floating-bg::before {
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(50, 231, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 40%;
  animation: rotate 30s infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.navbar {
  position: relative;
  z-index: 20;
  top: 4rem;
  display: flex;
  justify-content: space-evenly;
}

.navbar-link {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fff;
  width: 1.5rem;
  word-wrap: break-word;
  text-align: center;
  transition: all 0.5s;
}

.navbar-link:hover {
  width: 15rem;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 2.5s;
}

.section-1-heading {
  font-size: 8rem;
  font-family: 'Monoton', cursive;
  position: absolute;
  top: 18vw;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0.3rem 0.3rem 0.3rem #888;
  color: #fff;
  background-color: #fff;
  width: 85rem;
  text-align: center;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  opacity: 0.9;
}

.logo {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
}

.logo .icon {
  font-size: 15rem;
  color: rgba(50, 231, 255, 0.8);
  text-shadow: 0.1rem 0.1rem 0.2rem #ddd, -0.1rem -0.1rem 0.2rem #ddd;
}
/* End of Section 1 */

/* Section 2 */
.section-2 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.customers-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70%;
}

.customer {
  width: 35rem;
  height: 50rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 1rem 1rem 2rem #ddd, -1rem -1rem 2rem #eee;
  transition: box-shadow 0.5s;
}

.customer:hover {
  box-shadow: 2rem 2rem 3rem #ddd, -2rem -2rem 3rem #eee;
}

.customer:first-child {
  align-self: flex-end;
}

.customer:last-child {
  align-self: flex-start;
}

.fa-quote-left {
  font-size: 4rem;
  color: #f08e0f;
}

.customer-text {
  font-size: 1.8rem;
  margin: 2.5rem 0;
  text-align: justify;
}

.customer-text::first-letter {
  margin-left: 1rem;
}

.customer-rating .icon {
  font-size: 2rem;
  color: #f08e0f;
}

.customer-img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin: 2rem 0;
  border-radius: 50%;
}

.customer-name {
  font-size: 2rem;
  font-weight: 700;
}
/* End of Section 2 */

/* Section 3 */
.section-3 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 0;
}

.team-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70%;
}

.team-member {
  width: 35rem;
  background-color: #fffeee;
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: 1rem 1rem 2rem #ddd, -1rem -1rem 2rem #eee;
  position: relative;
  opacity: 0.7;
  transition: opacity 0.5s;
}

.team-member:hover {
  opacity: 1;
}

.team-member:first-child {
  align-self: flex-start;
}

.team-member:last-child {
  align-self: flex-end;
}

.team-member-img {
  width: 100%;
  border-radius: 0.5rem;
}

.team-member-name {
  font-size: 2.3rem;
  font-weight: 700;
  color: #796717;
  margin-top: 2rem;
}

.team-member-name span {
  font-size: 1.7rem;
}

.team-member-skills {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem 0;
}

.team-member-skills li {
  font-size: 1.5rem;
  color: #505050;
}

.projects-btn {
  background-color: #fab34a;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 5rem;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
}

.story-btn {
  width: 4rem;
  height: 4rem;
  background-color: #222;
  position: absolute;
  top: -1rem;
  right: -1rem;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 50;
  transition: transform 0.5s;
}

.change.story-btn {
  transform: rotate(405deg);
}

.story-btn-line {
  width: 100%;
  height: 0.1rem;
  background-color: #fff;
}

.story {
  width: 100%;
  height: 100%;
  background-color: rgba(253, 69, 69, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transform: scale(0);
  transform-origin: top right;
  border-radius: 50rem 0 50rem 50rem;
  transition: all 0.5s;
}

.change.story {
  transform: scale(1);
  border-radius: 0;
}

.story-heading {
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
}

.story-paragraph {
  font-size: 1.8rem;
  color: #eee;
  text-align: justify;
  letter-spacing: 0.1rem;
  text-indent: 2rem;
}
/* End of Section 3 */

/* Section 4 */
.section-4 {
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.form-container {
  width: 80%;
  height: 40%;
  background-color: #e5e9ff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0.3rem 0.3rem 0.4rem #ccc, -0.1rem -0.1rem 0.4rem #ccc;
  border-radius: 0.5rem;
  perspective: 100rem;
}

.form-img {
  width: 55rem;
  background-color: rgba(50, 231, 255, 0.8);
  padding: 5rem;
  opacity: 0.8;
  box-shadow: -3rem 3rem 4rem #aaa;
  border-radius: 0.5rem;
  transform: rotateY(20deg);
  transition: all 0.5s;
}

.form-img:hover {
  transform: translateY(-2rem) rotateY(20deg);
  box-shadow: -5rem 5rem 7rem #aaa;
}

.contact-form {
  width: 45rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: 3rem 3rem 4rem #aaa;
  transform: rotateY(-20deg);
  transition: all 0.5s;
}

.contact-form:hover {
  transform: translateY(-2rem) rotateY(-20deg);
  box-shadow: 5rem 5rem 7rem #aaa;
}

.contact-form input,
.contact-form textarea {
  margin: 1rem;
  padding: 1rem;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  border: none;
  border-radius: 2rem;
  box-shadow: inset 0.1rem 0.1rem 0.2rem #ddd, inset -0.1rem -0.1rem 0.2rem #ddd;
}

.contact-form textarea {
  max-height: 15rem;
  min-height: 10rem;
  max-width: 100%;
  min-width: 70%;
}

.contact-form input[type='submit'] {
  background-color: rgba(50, 231, 255, 0.8);
  color: #fff;
  font-weight: bolder;
  letter-spacing: 0.5rem;
  cursor: pointer;
  transition: background-color 0.5s;
}

.contact-form input[type='submit']:hover {
  background-color: #32e7ff;
}

.copyright {
  font-size: 2rem;
  letter-spacing: 0.2rem;
  color: #444;
  margin-top: 5rem;
}
/* End of Section 4 */

.scroll-up-btn {
  width: 5rem;
  height: 5rem;
  background-color: rgba(50, 231, 255, 0.8);
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  border-radius: 50%;
  font-size: 1.6rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
}

.scroll-up-btn:hover {
  background-color: #32e7ff;
}

@media (max-width: 1400px) {
  .floating-bg {
    top: -120vw;
  }

  .section-1-heading {
    font-size: 6rem;
    top: 25vw;
    width: 70rem;
  }

  .navbar-link {
    font-size: 2rem;
  }

  .logo {
    top: 75%;
  }

  .logo .icon {
    font-size: 10rem;
  }

  .section-heading {
    font-size: 8rem;
    margin-bottom: 10rem;
  }

  .section-2 {
    height: auto;
  }

  .customers-wrapper {
    flex-wrap: wrap;
  }

  .customer {
    margin: 5rem 10rem;
  }

  .section-3 {
    height: auto;
  }

  .team-wrapper {
    flex-wrap: wrap;
  }

  .team-member {
    margin: 5rem 10rem;
  }

  .form-container {
    height: 60%;
  }

  .form-img {
    display: none;
  }

  .contact-form {
    transform: translateY(0);
  }

  .contact-form:hover {
    transform: translateY(-1rem);
  }

  .copyright {
    margin: 5rem 0 4rem 0;
  }
}

@media (max-width: 1150px) {
  .floating-bg {
    top: -110vw;
  }

  .section-1-heading {
    font-size: 5rem;
    top: 30vw;
    width: 60rem;
  }

  .logo .icon {
    font-size: 9rem;
  }
}

@media (max-width: 950px) {
  .floating-bg {
    top: -100vw;
  }

  .section-1-heading {
    top: 40vw;
  }

  .navbar {
    justify-content: space-around;
  }
}

@media (max-width: 750px) {
  html {
    font-size: 50%;
  }

  .floating-bg {
    top: -90vw;
  }

  .section-1-heading {
    top: 48vw;
  }

  .section-heading {
    margin-bottom: 5rem;
  }
}

@media (max-width: 550px) {
  html {
    font-size: 45%;
  }

  .floating-bg {
    top: -70vw;
  }

  .section-1-heading {
    top: 65vw;
    width: 42rem;
    font-size: 3.5rem;
  }

  .section-heading {
    font-size: 6rem;
  }

  .customer {
    margin: 5rem 0;
  }

  .team-member {
    margin: 5rem 0;
  }

  .section-4 {
    height: auto;
  }

  .form-container {
    background-color: transparent;
    box-shadow: none;
  }

  .contact-form {
    box-shadow: 1rem 1rem 2rem #aaa;
  }

  .contact-form:hover {
    box-shadow: 2rem 2rem 3rem #aaa;
  }

  .copyright {
    font-size: 1.8rem;
    margin: 5rem;
    text-align: center;
  }

  .scroll-up-btn {
    bottom: 2rem;
    right: 2rem;
  }
}
</style>
