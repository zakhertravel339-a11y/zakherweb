<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import Swiper from 'swiper'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

let swiperInstance = null

function updateImage(index) {
  const items = document.querySelectorAll('.product-slider__item')
  const target = items[index]?.getAttribute('data-target')

  console.log('slide index:', index, 'target:', target)

  document.querySelectorAll('.product-img__item').forEach((el) => {
    el.classList.remove('active')
  })

  if (!target) return

  const activeEl = document.getElementById(target)
  if (activeEl) {
    activeEl.classList.add('active')
  } else {
    console.warn(`Image element not found: #${target}`)
  }
}

function updateNavState(swiper) {
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')

  if (!prev || !next) return

  prev.classList.toggle('disabled', swiper.isBeginning)
  next.classList.toggle('disabled', swiper.isEnd)
}

onMounted(() => {
  swiperInstance = new Swiper('.product-slider', {
    modules: [Navigation, EffectFade],
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: false,
    speed: 600,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
    },
    on: {
      init(swiper) {
        updateImage(swiper.realIndex)
        updateNavState(swiper)
      },
      slideChange(swiper) {
        updateImage(swiper.realIndex)
        updateNavState(swiper)
      }
    }
  })

  updateImage(0)
  updateNavState(swiperInstance)
})

onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = null
  }
})
</script>
<template>
  
  <section id="tour-slider" class="py-4" style="width: 100%;">
    <div class="container">
      <h1 class="text-center">MOST POPULAR TOURS</h1>
      <hr class="mx-auto" style="width: 100px;">

      <section id="trips" class="py-2 mb-5" >
        <div class="container">

          <div class="trips-wrapper" style="display:flex; align-items:flex-start; gap:30px; position:relative; min-height:350px;">
            <div class="common-box" style="
      position:absolute;
      top:-80px;
      left:50%;
      transform:translateX(-50%);
      width:70%;
      background:rgba(169,164,164,0.9);
      padding:20px;
      border-radius:12px;
      text-align:center;
      color:white;
      box-shadow:0 4px 12px rgba(0,0,0,0.4);
      z-index:2;
      margin-top: 10px;
  ">
              <ul style="list-style:none; padding:0; margin:0; font-size:18px; font-weight:600; display:flex; justify-content:space-around; flex-wrap:wrap; gap:15px;">
                <li>✔ Leisure tourism</li>
                <li>✔ Golf tourism</li>
                <li>✔ Medical tourism</li>
                <li>✔ Hunting tourism</li>
              </ul>
            </div>

            <div class="wrapper">
              <div class="content">
                <div class="bg-shape">
                  <img
                      src=""
                      alt=""
                  />
                </div>

                <div class="product-img">
                  <div class="product-img__item" id="img1">
                    <img
                        src="../assets/images/az-ru-tr-paket.png"
                        alt=""
                        class="product-img__img"
                    />
                  </div>

                  <div class="product-img__item" id="img2">
                    <img
                        src="../assets/images/popular-tour-8.png"
                        alt=""
                        class="product-img__img"
                    />
                  </div>

                  <div class="product-img__item" id="img3">
                    <img
                        src="../assets/images/turkiye.jpg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>

                  <div class="product-img__item" id="img4">
                    <img
                        src="../assets/images/uzbekistantour.jpeg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img5">
                    <img
                        src="../assets/images/kazakhstan-tour.jpg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img6">
                    <img
                        src="../assets/images/kyrgyzstan-tour-popular.jpg"
                        alt="star wars"
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img7">
                    <img
                        src="../assets/images/georgia-tour.jpeg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img8">
                    <img
                        src="../assets/images/poland-tour.jpg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img9">
                    <img
                        src="../assets/images/czech%20republic.jpg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img10">
                    <img
                        src="../assets/images/russia%20tour.jpg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img11">
                    <img
                        src="../assets/images/uae%20tour.jpg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img12">
                    <img
                        src="../assets/images/popular-tour-4.jpg"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                  <div class="product-img__item" id="img13">
                    <img
                        src="../assets/images/kyrgyzstan%20tor.png"
                        alt=""
                        class="product-img__img"
                    />
                  </div>
                </div>

                <div class="product-slider swiper">
                  <button class="prev disabled" type="button">
          <span class="icon">
            <svg class="icon icon-arrow-right">
              <use xlink:href="#icon-arrow-left"></use>
            </svg>
          </span>
                  </button>

                  <button class="next" type="button">
          <span class="icon">
            <svg class="icon icon-arrow-right">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </span>
                  </button>

                  <div class="product-slider__wrp swiper-wrapper">
                    <div class="product-slider__item swiper-slide" data-target="img1">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            <br />
                            1 Trip - 3 Countries
                          </h1>
                          <span class="product-slider__price">Azerbaijan <br>
              Turkiye<br>
              Georgia</span>


                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img2">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            Turkiye tours
                          </h1>
                          <span class="product-slider__price"></span>


                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img3">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                           Turkiye tours
                          </h1>
                          <span class="product-slider__price"></span>

                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img4">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                           Georgia tours
                          </h1>
                          <span class="product-slider__price"></span>

                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-slider__item swiper-slide" data-target="img5">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            <br />
                           Kazakhstan tours
                          </h1>
                          <span class="product-slider__price"></span>


                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img6">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            Czech Republic tours
                          </h1>
                          <span class="product-slider__price">$9.999,<sup>99</sup></span>


                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img7">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                          Georgia tours
                          </h1>
                          <span class="product-slider__price"></span>

                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img8">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            Czech Republic tours
                          </h1>
                          <span class="product-slider__price">$9.999,<sup>99</sup></span>

                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-slider__item swiper-slide" data-target="img9">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            Czech Republic tours
                          </h1>
                          <span class="product-slider__price"></span>

                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-slider__item swiper-slide" data-target="img10">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            <br />
                            HELMET
                          </h1>
                          <span class="product-slider__price">$1.299,<sup>99</sup></span>


                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img11">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                           United Arab Emirates tours
                          </h1>
                          <span class="product-slider__price"></span>


                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img12">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            KYLO REN'S <br />
                            LIGHTSABER
                          </h1>
                          <span class="product-slider__price">$1.699,<sup>99</sup></span>

                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="product-slider__item swiper-slide" data-target="img13">
                      <div class="product-slider__card">

                        <div class="product-slider__content">
                          <h1 class="product-slider__title">
                            1 Trip - 2 Countries
                          </h1>
                          <span class="product-slider__price">Kazakhstan<br>
              Kyrgyzstan</span>

                          <div class="product-slider__bottom">
                            <button class="product-slider__cart">Read more</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="social">

              </div>
            </div>

            <svg class="hidden" hidden>
              <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                <path
                    d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"
                ></path>
              </symbol>

              <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                <path
                    d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"
                ></path>
              </symbol>
            </svg>


          </div>
        </div>
      </section>


    </div>
  </section>


  
</template>

<style scoped>


#tour-slider {
  width: 100%;
  height: 630px;
  background-image: url('../assets/images/slider1.jpg');
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 30px 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
}

#tour-slider h1 {
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 50px;
  color: white;
}

@media (min-width: 768px) and (max-width: 1024px) {
  #tour-slider {
    height: 1800px!important;
  }
  .trips-wrapper {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-top: 200px;
  }

  .common-box {
    width: 100%!important;
    margin-top: -200px!important;
  }





  .trip-card h2 {
    font-size: 18px !important;
  }
}


@media (max-width: 768px) {
  #tour-slider {
    height: 1800px!important;
  }
  .trips-wrapper {
    flex-direction: column;
    margin: auto;
    align-items: center;
    gap: 20px;
    padding-top: 120px !important;
  }

  .common-box {
    width: 95% !important;
    padding: 10px !important;
    border-radius: 8px !important;
  }

  .common-box ul {
    flex-direction: column;
    font-size: 14px !important;
    gap: 6px !important;
  }



}


@import url('https://fonts.googleapis.com/css?family=Dosis:400,600,700,800');

@font-face {
  font-family: 'Uni Sans';
  src: url('https://res.cloudinary.com/muhammederdem/raw/upload/v1536168547/unisans-font/UniSansHeavyCAPS.woff2') format('woff2'),
  url('https://res.cloudinary.com/muhammederdem/raw/upload/v1536168547/unisans-font/UniSansHeavyCAPS.woff') format('woff'),
  url('https://res.cloudinary.com/muhammederdem/raw/upload/v1536168548/unisans-font/UniSansHeavyCAPS.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Uni Sans';
  src: url('https://res.cloudinary.com/muhammederdem/raw/upload/v1536168545/unisans-font/UniSansThinCAPS.woff2') format('woff2'),
  url('https://res.cloudinary.com/muhammederdem/raw/upload/v1536168545/unisans-font/UniSansThinCAPS.woff') format('woff'),
  url('https://res.cloudinary.com/muhammederdem/raw/upload/v1536168548/unisans-font/UniSansThinCAPS.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

:global(body) {
  font-family: 'Uni Sans', sans-serif;
  font-weight: 500;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.wrapper {
  width: 100%;
  height: 80%;
  background-size: cover;
  position: relative;
  overflow: visible;
  display: flex;
  margin-top: 15px;
}

.content {
  height: 460px;
  margin: auto;
  width: 100%;
  max-width: 1050px;
  display: flex;
  align-items: center;
  position: relative;
}

.bg-shape {
  height: 100%;
  background: linear-gradient(
      153deg,
      rgba(248, 134, 40, 1) 0%,
      rgba(250, 162, 56, 1) 50%,
      rgba(252, 185, 68, 1) 100%
  );
  box-shadow: 0 30px 139px 0 rgba(10, 22, 31, 0.26);
  border-radius: 30px;
  padding: 45px 40px;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
}

.bg-shape img {
  object-fit: contain;
  width: 510px;
  display: block;
  object-position: left center;
  opacity: 0.2;
  transform: rotate(-90deg) translateY(-50%);
  max-width: inherit;
  left: 10px;
  position: absolute;
}

.next,
.prev {
  z-index: 22;
  display: inline-flex;
  border: none;
  width: 61px;
  height: 61px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  position: absolute;
  top: 50%;
  outline: none;
  cursor: pointer;
}

.next.disabled,
.prev.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.next:focus,
.prev:focus {
  outline: none;
}

.prev {
  left: -30%;
  transform: translate(-100%, -50%);
}

.next {
  right: 0;
  transform: translate(50%, -50%);
}

.product-slider {
  width: 75%;
  height: 85%;
  border-radius: 30px;
  box-shadow: 0 28px 79px 0 rgba(10, 22, 31, 0.35);
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  overflow: visible;
}

.product-slider__wrp {
  height: 100%;
}

.product-slider__item {
  position: relative;
  height: 100%;
  width: 100%;
}

.product-slider__item.swiper-slide-active .product-slider__content > * {
  opacity: 1;
  transform: none;
}

.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(1) { transition-delay: 0s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(2) { transition-delay: 0.2s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(3) { transition-delay: 0.4s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(4) { transition-delay: 0.6s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(5) { transition-delay: 0.8s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(6) { transition-delay: 1s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(7) { transition-delay: 1.2s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(8) { transition-delay: 1.4s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(9) { transition-delay: 1.6s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(10) { transition-delay: 1.8s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(11) { transition-delay: 2s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(12) { transition-delay: 2.2s; }
.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(13) { transition-delay: 2.4s; }

.product-slider__item.swiper-slide-active circle {
  animation: progress 1s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0.75;
}

.product-slider__card {
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  transition: all 0.5s;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.5);
}


.product-img__item.active {
  opacity: 1;
}
.product-slider__content {
  color: black;
  padding-top: 1px;
  position: relative;
  z-index: 2;
  width: 100%;
  padding-left: 360px;
  padding-right: 80px;
}

.product-slider__title {
  margin: 0 0 10px;
  font-weight: 900;
  font-size: 41px;
  line-height: 1.2em;
  letter-spacing: 2px;
  opacity: 0;
  transform: translateY(55px);
  transition: all 0.5s;
  color: black !important;
}

.product-slider__price {
  display: block;
  font-size:30px;
  opacity: 0;
  transform: translateY(55px);
  transition: all 0.5s;
}

.product-slider__price sup {
  top: -20px;
  font-size: 65%;
}

.product-slider__cart {
  box-shadow: 0 7px 99px 0 rgba(255, 51, 66, 0.6);
  background: linear-gradient(
      153deg,
      rgba(248, 134, 40, 1) 0%,
      rgba(250, 162, 56, 1) 50%,
      rgba(252, 185, 68, 1) 100%
  );
  border: none;
  color: black;
  padding: 10px 30px;
  border-radius: 50px;
  min-height: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  margin-right: 40px;
  cursor: pointer;
  margin: auto;
}



.product-slider__fav .heart.is-active {
  transition-duration: 1s;
  background-position: -2800px 0;
}

.product-slider__bottom {
  margin-top: 20px;
  opacity: 0;
  transform: translateY(55px);
  transition: all 0.5s;
}



.product-ctr .hr-vertical {
  width: 1px;
  background: #9fa3a7;
  align-self: stretch;
  margin: 0 35px;
  flex-shrink: 0;
  opacity: 0.5;
}


@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}





.product-inf__percent circle {
  transform: rotate(180deg) scaleY(-1);
  transform-origin: 50%;
}


.product-img {
  position: absolute;
  z-index: 2;
  width: 500px;
  left: 25%;
  transform: translateX(-45%);
  max-height: 500px;
  height: 100%;
  pointer-events: none;
}

.product-img__item {
  display: flex;
  align-items: center;
  position: absolute;
  pointer-events: none;
  user-select: none;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateX(-130px);
  opacity: 0;
  transition: all 0.3s;
}

.product-img__item.active {
  transform: translateY(-50%) translateX(0);
  transition-delay: 0.3s;
}

.product-img__item img {
  object-fit: contain;
  object-position: center right;
  border-radius: 30px;
}

.social {
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 100%;
  display: flex;
  padding: 20px 55px;
  justify-content: space-between;
}



.social__img {
  width: 24px;
  margin-right: 15px;
}

@media screen and (max-width: 1200px) {
  .content {
    max-width: 920px;
  }

  .bg-shape {
    width: 45%;
  }

  .bg-shape img {
    width: 430px;
    left: 10px;
  }

  .prev {
    left: -21%;
  }

  .product-slider {
    width: 80%;
  }

  .product-slider__content {
    padding-left: 220px;
  }

  .product-slider__title {
    font-size: 34px;
  }

  .product-slider__price {
    font-size: 36px;
  }

  .product-img {
    width: 430px;
    left: 20%;
  }
}

@media screen and (max-width: 992px) {
  .wrapper {
    height: auto;
    min-height: 100vh;
  }

  .content {
    max-width: 920px;
    margin-top: 100px;
    height: auto;
    min-height: 100vh;
  }

  .bg-shape {
    width: 90%;
    height: 290px;
    align-items: flex-start;
    padding: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .bg-shape img {
    transform: none;
    width: 100%;
    position: relative;
    left: auto;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    height: 100%;
    object-position: top center;
  }

  .next,
  .prev {
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    color: #fff;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }


  .prev {
    left: 15px;
  }

  .next {
    right: 15px;
  }

  .next.disabled,
  .prev.disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .product-slider {
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    height: auto;
    position: relative;
    top: 0;
    margin-top: 170px;
    margin-bottom: 100px;
  }

  .product-slider br {
    display: none;
  }

  .product-slider__item {
    height: auto;
  }

  .product-slider__card {
    align-items: flex-start;
  }

  .product-slider__content {
    padding: 20px 60px 100px;
    padding-top: 280px;
    text-align: center;
  }

  .product-ctr {
    justify-content: center;
  }

  .product-labels__group {
    justify-content: center;
  }

  .product-img {
    width: 430px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    height: 350px;
  }
}

@media screen and (max-width: 767px) {
  .content {
    margin-top: 20px;
  }

  .bg-shape {
    padding: 30px;
    width: 95%;
    border-radius: 20px;
  }

  .product-slider {
    border-radius: 20px;
  }

  .product-slider__card {
    border-radius: 20px;
  }



  .product-slider__content {
    padding: 20px 30px 50px;
    padding-top: 300px;
  }


  .product-ctr .hr-vertical {
    width: 100%;
    margin: 35px 0;
    height: 1px;
  }





  .product-img {
    width: 100%;
    max-width: 400px;
    top: 30px;
    height: 390px;
  }
}

@media screen and (max-width: 576px) {
  .content {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .bg-shape {
    height: 200px;
    padding: 30px;
  }

  .prev {
    transform: translate(20%, -50%);
  }

  .next {
    transform: translate(-20%, -50%);
  }

  .product-slider {
    width: 85%;
    margin-top: 130px;
  }

  .product-slider__content {
    padding-top: 220px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .product-slider__title {
    font-size: 24px;
  }

  .product-slider__price {
    font-size: 30px;
  }

  .product-slider__cart {
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }

  .product-img {
    max-width: 300px;
    height: 300px;
  }

  .social {
    flex-direction: column;
    bottom: 0;
  }


}
</style>
