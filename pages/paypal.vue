<template>
  <div class="container">
    <!-- Front Page -->
    <div class="front-page">
      <!-- Section 1 -->
      <section class="section-1">
        <div class="navbar-wrapper">
          <nav class="navbar">
            <div class="menu">
              <div class="menu-icon">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
              </div>
              <span>Menu</span>
            </div>
            <div class="navbar-logo logo">
              <span class="p-1">P</span>
              <span class="p-2">P</span>
              PayPal
            </div>
            <ul class="nav-list">
              <li class="nav-list-item dropdown-hover">
                <a href="#" class="nav-list-link show-dropdown"
                  >Personal <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
                </a>
                <ul class="nav-dropdown nav-dropdown-personal">
                  <li class="nav-dropdown-item dropdown-heading">
                    <a href="#" class="dropdown-heading-link">
                      <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /> Personal
                    </a>
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1">How PayPal works</a>
                    <a href="#" class="nav-dropdown-link-2"
                      >What can you do with a personal account</a
                    >
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1">Pay online</a>
                    <a href="#" class="nav-dropdown-link-2"
                      >Online payment without borders</a
                    >
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1">Send payments</a>
                    <a href="#" class="nav-dropdown-link-2"
                      >Send payments abroad</a
                    >
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1">Search for deals</a>
                    <a href="#" class="nav-dropdown-link-2"
                      >Pay with PayPal and send money</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-list-item dropdown-hover">
                <a href="#" class="nav-list-link show-dropdown"
                  >Business <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" />
                </a>
                <ul class="nav-dropdown nav-dropdown-business">
                  <li class="nav-dropdown-item dropdown-heading">
                    <a href="#" class="dropdown-heading-link">
                      <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /> Business
                    </a>
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1"
                      >All business solutions</a
                    >
                    <a href="#" class="nav-dropdown-link-2"
                      >See our range of products</a
                    >
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1"
                      >Accept online payments</a
                    >
                    <a href="#" class="nav-dropdown-link-2"
                      >Get paid on your website</a
                    >
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1">Send invoices</a>
                    <a href="#" class="nav-dropdown-link-2"
                      >Create and email online invoices</a
                    >
                  </li>
                  <li class="nav-dropdown-item">
                    <a href="#" class="nav-dropdown-link-1"
                      >Sell internationally</a
                    >
                    <a href="#" class="nav-dropdown-link-2"
                      >PayPal supports your global growth</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-list-item">
                <a href="#" class="nav-list-link">Partners and Developers</a>
              </li>
            </ul>
            <div class="navbar-buttons">
              <button class="navbar-btn login-btn login">Login</button>
              <button class="navbar-btn signup-btn signup">Signup</button>
            </div>
          </nav>
        </div>
        <div class="banner">
          <h1 class="banner-heading">We've Got You Covered</h1>
          <p class="banner-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            consequuntur, ex in est voluptatum odio sequi libero eius numquam
            repellendus quae quia, sed suscipit et!
          </p>
          <button class="blue-btn">Learn More</button>
        </div>
      </section>
      <!-- End of Section 1 -->

      <!-- Section 2 -->
      <section class="section-2">
        <h1 class="section-2-heading">
          PayPal is for everyone who pays or gets paid
        </h1>
        <div class="services">
          <div class="service">
            <font-awesome-icon class="icon" :icon="['fas', 'user-tie']" />
            <h3 class="service-heading">Individuals</h3>
            <p class="service-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              veritatis!
            </p>
            <button class="service-btn">Learn More</button>
          </div>
          <div class="service">
            <font-awesome-icon class="icon" :icon="['fas', 'briefcase']" />
            <h3 class="service-heading">Businesses</h3>
            <p class="service-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              veritatis!
            </p>
            <button class="service-btn">Learn More</button>
          </div>
          <div class="service">
            <font-awesome-icon class="icon" :icon="['fas', 'handshake']" />
            <h3 class="service-heading">Partners</h3>
            <p class="service-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              veritatis!
            </p>
            <button class="service-btn">Learn More</button>
          </div>
        </div>
      </section>
      <!-- End of Section 2 -->

      <!-- Section 3 -->
      <section class="section-3">
        <h1 class="section-3-heading">The world prefers PayPal</h1>
        <div class="features">
          <div class="feature">
            <h3 class="feature-heading">Advanced Protection</h3>
            <p class="feature-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
              qui hic repellendus dolorem. Autem dolorem quos vel nisi esse
              expedita nesciunt laborum omnis eum!
            </p>
          </div>
          <div class="feature">
            <h3 class="feature-heading">Fast Payments</h3>
            <p class="feature-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
              qui hic repellendus dolorem. Autem dolorem quos vel nisi esse
              expedita nesciunt laborum omnis eum!
            </p>
          </div>
          <div class="feature">
            <h3 class="feature-heading">Global Reach</h3>
            <p class="feature-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
              qui hic repellendus dolorem. Autem dolorem quos vel nisi esse
              expedita nesciunt laborum omnis eum!
            </p>
          </div>
          <div class="feature">
            <h3 class="feature-heading">Easy Integration</h3>
            <p class="feature-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
              qui hic repellendus dolorem. Autem dolorem quos vel nisi esse
              expedita nesciunt laborum omnis eum!
            </p>
          </div>
          <div class="feature">
            <h3 class="feature-heading">Simple and Convenient</h3>
            <p class="feature-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
              qui hic repellendus dolorem. Autem dolorem quos vel nisi esse
              expedita nesciunt laborum omnis eum!
            </p>
          </div>
          <div class="feature">
            <h3 class="feature-heading">24/7 Service</h3>
            <p class="feature-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque
              qui hic repellendus dolorem. Autem dolorem quos vel nisi esse
              expedita nesciunt laborum omnis eum!
            </p>
          </div>
        </div>
      </section>
      <!-- End of Section 3 -->
      <!-- Section 4 -->
      <section class="section-4">
        <h1 class="section-4-heading">Get started with PayPal.</h1>
        <div class="section-4-content">
          <div class="section-4-img-wrapper">
            <img :src="imgMacbook" />
          </div>
          <ul class="section-4-list">
            <li class="section-4-list-item">
              <span class="number">1</span>
              <span>Set up <a href="#">a business account</a></span>
            </li>
            <li class="section-4-list-item">
              <span class="number">2</span>
              <span
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, esse?</span
              >
            </li>
            <li class="section-4-list-item">
              <span class="number">3</span>
              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
              >
            </li>
          </ul>
        </div>
      </section>
      <!-- End of Section 4 -->

      <!-- Section 5 -->
      <section class="section-5">
        <div class="section-5-top">
          <h2 class="section-5-top-heading">Sign Up and Get Started</h2>
          <button class="blue-btn signup">Get Started</button>
        </div>
        <footer class="footer">
          <div class="footer-top">
            <ul class="footer-list">
              <li>
                <a href="#">Help and Contact</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
            <ul class="footer-list">
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Spanish</a>
              </li>
              <li>
                <a href="#">French</a>
              </li>
              <li>
                <a href="#">Italian</a>
              </li>
              <li>
                <a href="#">
                  <img :src="imgFlag" />
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-bottom">
            <p class="copyright">Copyright &copy; All Rights Reserved</p>
          </div>
        </footer>
      </section>
      <!-- End of Section 5 -->
    </div>
    <!-- End of Front Page -->

    <!-- Login Page -->
    <div class="login-page">
      <div class="login-page-content">
        <div class="login-page-logo logo">
          <span class="p-1">P</span>
          <span class="p-2">P</span>
          <span>Pay</span><span>Pal</span>
        </div>
        <form class="login-page-form">
          <input
            type="text"
            class="form-login-input"
            placeholder="Email or mobile number"
          />
          <input type="password" class="form-login-input" />
          <input type="button" class="form-login-btn" value="Log In" />
          <a href="#" class="form-login-link">Having trouble logging in?</a>
          <span>or</span>
          <input type="button" class="form-signup-btn signup" value="Sign Up" />
        </form>
      </div>
    </div>
    <!-- End of Login Page -->

    <!-- Sign Up Page -->
    <div class="signup-page">
      <div class="signup-page-top">
        <div class="signup-page-logo logo">
          <span class="p-1">P</span>
          <span class="p-2">P</span>
          PayPal
        </div>
        <button class="login">Log In</button>
      </div>
      <div class="signup-page-content">
        <div class="signup-page-content-left">
          <div class="content-left-images">
            <img :src="imgPersonOne" />
            <img :src="imgPersonTwo" />
            <img :src="imgPersonThree" />
          </div>
          <h1>See for yourself why millions of people love PayPal.</h1>
        </div>
        <div class="signup-page-content-right">
          <h3>Sign up for PayPal, it's free</h3>
          <h4>Choose from two types of accounts:</h4>
          <form class="signup-page-form">
            <div class="input-group">
              <input type="radio" name="checkbox" checked />
              <div class="option">
                <h3>Personal Account</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  ducimus minima, incidunt beatae veritatis ad delectus
                  temporibus eaque enim ea!
                </p>
              </div>
            </div>
            <div class="input-group">
              <input type="radio" name="checkbox" />
              <div class="option">
                <h3>Business Account</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  ducimus minima, incidunt beatae veritatis ad delectus
                  temporibus eaque enim ea!
                </p>
              </div>
            </div>
            <button class="blue-btn">Continue</button>
          </form>
        </div>
      </div>
    </div>
    <!-- End of Sign Up Page -->
  </div>
</template>
<script lang="ts" setup>
import imgMacbook from '~/assets/img/paypal/macbook.png'
import imgFlag from '~/assets/img/paypal/flag.png'
import imgPersonOne from '~/assets/img/paypal/person-1.jpg'
import imgPersonTwo from '~/assets/img/paypal/person-2.jpg'
import imgPersonThree from '~/assets/img/paypal/person-3.jpg'

onMounted(() => {
  // Pages
  document.querySelectorAll('.logo').forEach(logo => {
      logo.addEventListener('click', () => {
          document.querySelector('.front-page')?.setAttribute('style', 'display: block');
          document.querySelector('.login-page')?.setAttribute('style', 'display: none');
          document.querySelector('.signup-page')?.setAttribute('style', 'display: none');
      })
  })
  
  document.querySelectorAll('.login').forEach(loginBtn => {
      loginBtn.addEventListener('click', () => {
          document.querySelector('.front-page')?.setAttribute('style', 'display: none');
          document.querySelector('.login-page')?.setAttribute('style', 'display: block');
          document.querySelector('.signup-page')?.setAttribute('style', 'display: none');
      })
  })
  
  document.querySelectorAll('.signup').forEach(signupBtn => {
      signupBtn.addEventListener('click', () => {
          document.querySelector('.front-page')?.setAttribute('style', 'display: none');
          document.querySelector('.login-page')?.setAttribute('style', 'display: none');
          document.querySelector('.signup-page')?.setAttribute('style', 'display: flex');
      })
  })
  // End of Pages

  // Navigation
  const dropdownItems = document.querySelectorAll('.dropdown-hover')

  if(window.innerWidth < 1000) {
      const menuIcon = document.querySelector('.menu')
      const navbar = document.querySelector('.navbar')
      
      menuIcon?.addEventListener('click', () => {
          navbar?.classList.toggle('change')

          if(!navbar?.classList.contains('change')) {
              document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.setAttribute('style', 'left: -20rem')
              })
          }
      })

      document.querySelectorAll('.show-dropdown').forEach(link => {
          link.addEventListener('click', () => {
            link.nextElementSibling?.setAttribute('style', 'left: 0')
          })
      })

      document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
          headingLink.addEventListener('click', () => {
              headingLink.parentElement?.parentElement?.setAttribute('style', '-20rem')
          })
      })
  } else {
      dropdownItems.forEach(dropdownItem => {
          dropdownItem.addEventListener('mouseover', () => {
              dropdownItem.lastElementChild?.setAttribute('style', 'opacity: 1; visibility: visible')
              document.querySelector('.navbar-wrapper')?.setAttribute('style', 'background: linear-gradient(to right, #066399, #2f8fdf, #066399)')
              dropdownItem.firstElementChild?.firstElementChild?.setAttribute('style', 'transform: rotate(180deg)')
          })
          dropdownItem.addEventListener('mouseout', () => {
              dropdownItem.lastElementChild?.setAttribute('style', 'opacity: 0; visibility: hidden')
              document.querySelector('.navbar-wrapper')?.setAttribute('style', 'background: none')
              dropdownItem.firstElementChild?.firstElementChild?.setAttribute('style', 'transform: rotate(0)')
          })
      })
  }

  window.addEventListener('resize', () => {
      window.location.reload()
  })

  // End of Navigation
})







</script>
<style lang="scss">
/* Common Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  outline: none;
  font-family: "Jost", sans-serif;
}

html {
  font-size: 62.5%;
}

.logo {
  font-size: 3.5rem;
  font-style: italic;
  font-weight: 800;
  color: #fff;
  position: relative;
  cursor: pointer;
}

.p-1 {
  font-size: 4.5rem;
  margin-right: 1rem;
  position: relative;
  z-index: 10;
}

.p-2 {
  font-size: 4.5rem;
  color: #bbb;
  position: absolute;
  top: 0.4rem;
  left: 0.5rem;
}

.blue-btn {
  width: 35rem;
  height: 5rem;
  background-color: #036bb1;
  color: #fff;
  border-radius: 3rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
}
/* End of Common Styles */

/* Front Page */
.front-page {
  /* display: none; */
}

/* Section 1 */
.section-1 {
  width: 100%;
  height: 65vh;
  background: linear-gradient(
      to top,
      rgba(38, 38, 38, 0.7),
      rgba(38, 38, 38, 0.6)
    ),
    url("assets/img/paypal/bg.jpg") center no-repeat;
  background-size: cover;
  position: relative;
}

.navbar-wrapper {
  width: 100%;
  height: 8rem;
  border-bottom: 0.1rem solid #aaa;
  display: flex;
  justify-content: center;
}
.navbar {
  width: 120rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: none;
}

.nav-list {
  display: flex;
}

.nav-list-item {
  height: 8rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  transition: border-bottom 0.1s;
}

.nav-list-item:hover {
  border-bottom: 0.2rem solid #fff;
}

.nav-dropdown {
  width: 100%;
  height: 20rem;
  background: linear-gradient(to right, #066399, #2f8fdf, #066399);
  position: absolute;
  top: 8rem;
  left: 0;
  z-index: 100;
  padding: 0 40rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  visibility: hidden;
}

.nav-dropdown-item {
  width: 25rem;
  margin: 2rem 10rem;
  display: flex;
  flex-direction: column;
}

.dropdown-heading {
  display: none;
}

.nav-dropdown-link-1 {
  font-size: 1.6rem;
  color: #fff;
}

.nav-dropdown-link-2 {
  font-size: 1.3rem;
  color: #fff;
}

.nav-list-link {
  width: 100%;
  height: 100%;
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  align-items: center;
}

.nav-list-link .icon {
  font-size: 1.5rem;
  margin-left: 0.5rem;
  transition: transform 0.3s;
}

.navbar-btn {
  width: 8rem;
  padding: 0.7rem;
  margin: 0.3rem;
  border-radius: 3rem;
  border: 0.1rem solid #fff;
  font-size: 1.4rem;
  cursor: pointer;
}

.navbar-btn:nth-child(1) {
  background-color: transparent;
  color: #fff;
}

.navbar-btn:nth-child(2) {
  background-color: #fff;
  color: #262626;
}

.banner {
  width: 100%;
  position: absolute;
  top: 25%;
  text-align: center;
}

.banner-heading {
  font-size: 6rem;
  font-weight: 300;
  color: #fff;
  margin-bottom: 3rem;
}

.banner-paragraph {
  font-size: 1.8rem;
  color: #fff;
  width: 50%;
  margin: 0 auto 4rem auto;
}

/* End of Section 1 */

/* Section 2 */
.section-2 {
  width: 100%;
  padding: 10rem 0 15rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-2-heading {
  font-size: 5rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 3rem;
}

.services {
  display: flex;
}

.service {
  width: 35rem;
  text-align: center;
  margin: 0 5rem;
}

.service .icon {
  font-size: 6rem;
  color: #229fe7;
  margin: 2rem 0;
}

.service-heading {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

.service-paragraph {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.service-btn {
  width: 20rem;
  padding: 1.5rem;
  background-color: transparent;
  border-radius: 3rem;
  border: 0.1rem solid #036bb1;
  color: #036bb1;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
}
/* End of Section 2 */

/* Section 3 */
.section-3 {
  width: 100%;
  padding: 5rem 0;
  background: linear-gradient(
    to right,
    rgba(3, 33, 129, 0.9),
    rgba(9, 67, 153, 0.8),
    rgba(4, 32, 124, 0.9)
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-3-heading {
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 5rem;
}

.features {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
}

.feature {
  width: calc(100% / 3);
  text-align: center;
  padding: 0 5rem;
  margin-bottom: 5rem;
}

.feature-heading {
  width: max-content;
  font-size: 3rem;
  font-weight: 300;
  margin: 0 auto 1rem auto;
}

.feature-paragraph {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
}
/* End of Section 3 */

/* Section 4 */
.section-4 {
  width: 100%;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-4-heading {
  font-size: 5rem;
  font-weight: 400;
  color: #444;
  margin-bottom: 5rem;
}

.section-4-content {
  display: flex;
}

.section-4-img-wrapper {
  width: 50rem;
}

.section-4-img-wrapper img {
  width: 100%;
  opacity: 0.8;
}

.section-4-list {
  width: 55%;
  margin-top: 2rem;
}

.section-4-list-item {
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.number {
  width: 3.5rem;
  height: 3.5rem;
  border: 0.1rem solid #555;
  border-radius: 50%;
  margin-right: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-4-list-item a {
  color: #036bb1;
  font-weight: bold;
}
/* End of Section 4 */

/* Section 5 */
.section-5 {
  width: 100%;
}

.section-5-top {
  width: 100%;
  background-color: #f3f7fa;
  text-align: center;
  padding: 7rem 0;
}

.section-5-top-heading {
  font-size: 3.5rem;
  font-weight: 400;
  margin-bottom: 4rem;
}

.footer {
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0 3rem 0;
}

.footer-top {
  width: 70%;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1rem dotted #262626;
  padding-bottom: 1rem;
}

.footer-list {
  display: flex;
  align-items: center;
}

.footer-list li {
  margin-right: 2.5rem;
}

.footer-list a {
  font-size: 1.5rem;
  font-weight: 600;
  color: #262626;
}

.footer-list img {
  width: 3.8rem;
  opacity: 0.6;
}

.copyright {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
}
/* End of Section 5 */
/* End of Front Page */

/* Login Page */
.login-page {
  width: 100%;
  height: 100vh;
  position: relative;
  display: none;
}

.login-page-content {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid #cfcfcf;
  padding: 3rem;
}

.login-page-logo {
  margin-bottom: 1.2rem;
}

.login-page-logo .p-1 {
  color: #064699;
}

.login-page-logo .p-2 {
  color: #32a4f0;
}

.login-page-logo span:nth-child(3) {
  color: #064699;
}

.login-page-logo span:nth-child(4) {
  color: #32a4f0;
}

.login-page-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-page-form input {
  width: 37rem;
  height: 4.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
}

.form-login-input {
  padding: 0 1.5rem;
  border: 0.1rem solid #777;
  font-size: 1.6rem;
}

.form-login-btn {
  background-color: #036bb1;
  color: #fff;
  border: 0.1rem solid #036bb1;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
}

.form-login-link {
  font-size: 1.6rem;
  color: #229fe7;
  margin: 1.2rem 0 1rem 0;
}

.login-page-form span {
  width: 2rem;
  font-size: 1.8rem;
  color: #888;
  margin: 1rem 0;
  position: relative;
}

.login-page-form span::before {
  content: "";
  width: 16rem;
  height: 0.1rem;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  right: 3.5rem;
  transform: translateY(-50%);
}

.login-page-form span::after {
  content: "";
  width: 16rem;
  height: 0.1rem;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 3.5rem;
  transform: translateY(-50%);
}

.form-signup-btn {
  background-color: #dbe8ec;
  border: 0.1rem solid #dbe8ec;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
}
/* End of Login Page */

/* Sign Up Page */
.signup-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(112, 112, 112, 0.9),
    rgba(255, 255, 255, 0.8) 10%
  );
  display: none;
  flex-direction: column;
  align-items: center;
}

.signup-page-top {
  width: 120rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
}

.signup-page-logo .p-2 {
  color: #e9e9e9;
}

.signup-page-top button {
  width: 8rem;
  padding: 0.7rem;
  background-color: transparent;
  border: 0.1rem solid #fff;
  border-radius: 3rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.signup-page-content {
  width: 120rem;
  display: flex;
  justify-content: space-between;
}

.signup-page-content-left {
  width: 60%;
  border-right: 0.1rem solid #b1b1b1;
  padding: 3rem 3rem 3rem 0;
}

.content-left-images {
  display: flex;
  margin-bottom: 5rem;
}

.content-left-images img {
  width: 18rem;
  border-radius: 50%;
  border: 1.5rem solid #ccc;
  margin-right: 5rem;
}

.signup-page-content-left h1 {
  font-size: 4rem;
  font-weight: 300;
  color: #333;
  line-height: 1.1;
}

.signup-page-content-right {
  width: 40%;
  padding: 3rem 0 3rem 3rem;
  color: #555;
}

.signup-page-content-right h3 {
  font-size: 2.4rem;
  font-weight: 300;
}

.signup-page-content-right h4 {
  font-size: 1.6rem;
  font-weight: 500;
}

.input-group {
  display: flex;
  margin: 1.5rem;
}

.option h3 {
  font-size: 1.7rem;
  font-weight: 600;
}

.option p {
  font-size: 1.5rem;
}

.input-group input[type="radio"] {
  width: 30%;
  height: 2rem;
  margin: 0.5rem 1rem 0 -1.5rem;
}
/* End of Sign Up Page */

/* Responsive */
@media (max-width: 1500px) {
  .nav-dropdown {
    padding: 0 25rem;
  }

  .nav-dropdown-item {
    margin: 2rem 6rem;
  }

  .features {
    width: 80%;
  }

  .feature {
    padding: 0 3rem;
  }
}

@media (max-width: 1400px) {
  html {
    font-size: 55%;
  }

  .navbar {
    width: 100rem;
  }

  .section-1 {
    height: 70vh;
  }

  .banner-paragraph {
    width: 70%;
  }

  .services {
    width: 90%;
  }

  .features {
    width: 90%;
  }

  .section-4-content {
    width: 80%;
  }

  .section-4-img-wrapper {
    width: 40%;
    margin-right: 6rem;
  }

  .signup-page {
    background: linear-gradient(
      to bottom,
      rgba(112, 112, 112, 0.9),
      rgba(255, 255, 255, 0.8) 12%
    );
  }
}

@media (max-width: 1200px) {
  .signup-page-top {
    width: 90rem;
  }

  .signup-page-content {
    width: 90rem;
    flex-direction: column;
    align-items: center;
  }

  .signup-page-content-left {
    width: 100%;
    border-right: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-bottom: 0.1rem solid #b1b1b1;
  }

  .signup-page-content-right {
    width: 100%;
    padding: 3rem;
  }

  .input-group input[type="radio"] {
    width: 10%;
    margin: 0.5rem 0 0 -3rem;
  }

  .signup-page-content-right .blue-btn {
    width: 100%;
    margin: 3rem 0;
  }
}

@media (max-width: 1100px) {
  .nav-dropdown-item {
    margin: 2rem 3.4rem;
  }
}

@media (max-width: 1000px) {
  html {
    font-size: 50%;
  }

  .navbar {
    width: 100%;
    padding: 0 5rem;
  }

  .navbar-logo {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .menu {
    width: 11rem;
    height: 4rem;
    border-radius: 3rem;
    border: 0.1rem solid #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: transform 0.6s cubic-bezier(1, 0, 0, 1);
  }

  .change .menu {
    transform: translateX(16rem);
    position: fixed;
    top: 2rem;
    left: 6rem;
    background-color: #eee;
  }

  .menu-icon {
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line {
    width: 2rem;
    height: 0.1rem;
    background-color: #fff;
    transform-origin: left;
  }

  .change .line-1 {
    transform: rotate(45deg);
    background-color: #444;
  }

  .change .line-2 {
    opacity: 0;
    visibility: hidden;
  }

  .change .line-3 {
    transform: rotate(-45deg);
    background-color: #444;
  }

  .menu span {
    font-size: 1.8rem;
    color: #fff;
  }

  .change .menu span {
    color: #555;
  }

  .nav-list,
  .nav-dropdown-personal,
  .nav-dropdown-business {
    /* display: none; */
    position: fixed;
    top: 0;
    left: -20rem;
    width: 20rem;
    height: 100vh;
    background: linear-gradient(to bottom, #032181, #094399, #04207c);
    flex-direction: column;
    padding-top: 2rem;
    z-index: 200;
    transition: left 0.6s cubic-bezier(1, 0, 0, 1);
  }

  .change .nav-list {
    left: 0;
  }

  .nav-dropdown-personal,
  .nav-dropdown-business {
    opacity: 1;
    visibility: visible;
    padding: 1rem;
    justify-content: flex-start;
  }

  .nav-dropdown-item {
    width: 100%;
    margin: 1rem 1rem 0 1rem;
  }

  .dropdown-heading {
    display: block;
  }

  .dropdown-heading a {
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #fff;
  }

  .dropdown-heading a .icon {
    font-size: 1.5rem;
    transform: rotate(90deg);
    margin-right: 1rem;
  }

  .nav-dropdown-link-1 {
    font-size: 1.4rem;
  }

  .nav-dropdown-link-2 {
    display: none;
  }

  .nav-list-item {
    width: 100%;
    height: auto;
    padding: 0 1rem;
    margin: 0.4rem 0;
  }

  .nav-list-item:hover {
    border-bottom: none;
  }

  .nav-list-link {
    font-size: 1.4rem;
  }

  .nav-list-item .icon {
    font-size: 1.2rem;
    transform: rotate(-90deg);
  }

  .navbar-buttons {
    margin-left: auto;
  }

  .section-2-heading {
    font-size: 4rem;
  }

  .features {
    width: 95%;
  }

  .feature {
    padding: 0 1.5rem;
  }

  .section-4-content {
    flex-direction: column;
    align-items: center;
  }

  .section-4-img-wrapper {
    margin: auto;
  }

  .section-4-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-top {
    flex-direction: column;
    align-items: center;
  }

  .footer-list {
    margin-bottom: 1rem;
  }

  .copyright {
    margin: 1.5rem 0;
  }
}

@media (max-width: 800px) {
  html {
    font-size: 45%;
  }

  .section-2 {
    padding: 10rem 0;
  }

  .section-2-heading {
    width: 80%;
    text-align: center;
    line-height: 1.2;
  }

  .services {
    width: 95%;
  }

  .service {
    width: 30rem;
    margin: 0 2rem;
  }

  .service .icon {
    font-size: 4rem;
  }

  .service-btn {
    width: 15rem;
    padding: 1rem;
  }

  .features {
    width: 100%;
  }

  .feature {
    width: 50%;
    padding: 0 4rem;
  }

  .signup-page-top {
    width: 50rem;
  }

  .signup-page-content {
    width: 85%;
    padding: 0 3rem;
  }

  .signup-page-content-left {
    width: 100%;
    padding: 3rem;
  }

  .content-left-images img {
    width: 14rem;
    margin: 0 1.5rem;
    border: 1rem solid #ccc;
  }

  .signup-page-content-left h1 {
    font-size: 3rem;
  }

  .signup-page-content-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
  }

  .input-group input[type="radio"] {
    width: 20%;
    margin: 0.5rem 1.5rem 0 0;
  }
}

@media (max-width: 550px) {
  .navbar-logo {
    display: none;
  }

  .banner-heading {
    font-size: 4.5rem;
  }

  .banner-paragraph {
    line-height: 1.2;
  }

  .services {
    flex-direction: column;
    align-items: center;
  }

  .service {
    width: 60%;
    margin-bottom: 4rem;
  }

  .section-3-heading {
    font-size: 4rem;
  }

  .features {
    flex-direction: column;
    align-items: center;
  }

  .feature {
    width: 80%;
  }

  .section-4-heading {
    font-size: 4rem;
  }

  .section-4-content {
    width: 100%;
    padding: 0 3rem;
  }

  .section-4-img-wrapper {
    display: none;
  }

  .section-4-list {
    align-items: flex-start;
  }

  .footer-top {
    width: 90%;
  }

  .signup-page-top {
    width: 40rem;
  }

  .signup-page-content {
    width: 100%;
  }

  .signup-page-content-left {
    display: none;
  }

  .signup-page-content-right {
    width: 100%;
  }
}

@media (max-width: 400px) {
  html {
    font-size: 40%;
  }

  .menu {
    width: 5rem;
  }

  .menu span {
    display: none;
  }

  .number {
    min-width: 3.5rem;
  }
}
/* End of Responsive */
</style>
