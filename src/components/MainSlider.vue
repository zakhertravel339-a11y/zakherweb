<template>
  

  <div class="slider" data-no-translate>
    <div class="slides">
      <div class="slide" v-for="n in 4" :key="n">
        <div class="tg-container">

          <h3 class="caption-title">
            <span>{{ $t('home.slider.tagline', 'Your online and offline supplier in the world') }} <h5 style="display: inline; color: #ffa500;font-size: 25px;font-weight: bold">{{ $t('home.slider.since', 'since 2016') }} </h5></span>
          </h3>
          <router-link to="/tour-packages" class="read-more">{{ $t('common.readMore', 'Read More') }}</router-link>
        </div>

      </div>
    </div>

    <div class="arrow left">&#10094;</div>
    <div class="arrow right">&#10095;</div>

    <div class="dots">
      <div class="dot active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
  
</template>

<script setup>


import {onMounted, ref} from "vue";

const slides = ref(null)
const dots = ref([])
const prev = ref(null)
const next = ref(null)
let index = 0
let total = 0

function showSlide(i) {
  index = (i + total) % total
  slides.value.style.transform = `translateX(-${index * 100}%)`
  dots.value.forEach(dot => dot.classList.remove('active'))
  dots.value[index].classList.add('active')
}

onMounted(() => {
  slides.value = document.querySelector('.slides')
  dots.value = document.querySelectorAll('.dot')
  prev.value = document.querySelector('.arrow.left')
  next.value = document.querySelector('.arrow.right')

  total = dots.value.length

  prev.value.onclick = () => showSlide(index - 1)
  next.value.onclick = () => showSlide(index + 1)
  dots.value.forEach((dot, i) => dot.onclick = () => showSlide(i))

  
  setInterval(() => showSlide(index + 1), 10000)
})
</script>



<style scoped>


.slider {
  position: relative;
  width: 100%;
  height: 97vh;
  margin-top:30px;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 100%;
  transition: transform 1s ease-in-out;
}

.slide {
  flex: 1 0 100%;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.slide:nth-child(1) {
  background-image: url('../assets/images/bulvar.jpeg');
}

.slide:nth-child(2) {
  background-image: url('../assets/images/nature az.jpg');
}

.slide:nth-child(3) {
  background-image: url('../assets/images/nature.jpg');
}

.slide:nth-child(4) {
  background-image: url('../assets/images/heyderaliyevcenter.jpg');
}


.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 45px;
  font-weight: 600;
  line-height: 1.3;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  max-width: 80%;
  animation: fadeIn 1.5s ease-in-out;
  color:#FFA500;background: #ffffff;
  background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(255, 247, 232, 0.44) 0%);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -45%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}


.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 10;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.6);
}

.arrow.left {
  left: 20px;
}

.arrow.right {
  right: 20px;
}


.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background: white;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .slider {
    height: 80vh;
  }

  .slide {
    height: 80vh;
  }

  .overlay-text {
    font-size: 32px;
    max-width: 90%;
    padding: 10px 20px;
    line-height: 1.3;
  }

  .arrow {
    font-size: 32px;
    padding: 8px 12px;
  }

  .dots {
    bottom: 15px;
  }
}


@media (max-width: 767px) {
  .slider {
    height: 70vh;
    margin-top: 10px;
  }

  .slide {
    height: 70vh;
  }

  .overlay-text {
    font-size: 22px;
    line-height: 1.4;
    max-width: 90%;
    padding: 8px 15px;
    background: rgba(255, 255, 255, 0.7);
    color: #333;
    border-radius: 8px;
  }

  .arrow {
    font-size: 28px;
    padding: 6px 10px;
    margin-top: 15%;
  }

  .arrow.left {
    left: 10px;
  }

  .arrow.right {
    right: 10px;
  }

  .dots {
    bottom: 10px;
    gap: 8px;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  span{
    font-size: 20px;
  }

  .tg-container{
    margin-top: 15%;
  }
}


.tg-container {
  left: 0;
  position: absolute;
  top: 53%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}

.caption-title {
  border: 4px solid rgba(255, 255, 255, 0.7);
  color: #ffffff;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 3px;
  line-height: 50px;
  text-shadow: 0 2px 5px #333333;
  border-right: none;
  border-left: none;
  width: 78%;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin: 0 auto;
}

.caption-title a {
  color: #ffffff;
}

.caption-title a:hover {
  color: #32c4d1;
}

.caption-title span {
  display: block;
  padding: 26px 40px;
  position: relative;
}

.caption-title span:after,
.caption-title span:before {
  background: rgba(255, 255, 255, 0.7) none repeat scroll 0 0;
  content: "";
  height: 4px;
  left: -102px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 102px;
}

.caption-title span:before {
  left: auto;
  right: -102px;
}

.caption-title:before,
.caption-title:after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background: url("https://www.zakher.travel/wp-content/themes/himalayas/images/slider-title-new-arrow.png") no-repeat scroll 0 center;
  width: 4px;
  height: 100%;
}

.caption-title:after {
  right: 0;
  left: auto;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.caption-sub {
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 38px;
  text-align: center;
  width: 1068px;
  margin: 50px auto;
}

.read-more {
  display: inline-block;
  background: #fff;
  color: #f88628;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}

.read-more:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  background: #fef3e6;
  color: gray;
}

html[dir="rtl"] .slider,
html[lang="ar"] .slider,
html[dir="rtl"] .slides,
html[lang="ar"] .slides,
html[dir="rtl"] .slide,
html[lang="ar"] .slide,
html[dir="rtl"] .tg-container,
html[lang="ar"] .tg-container {
  direction: ltr;
}

html[dir="rtl"] .slide .tg-container .caption-title,
html[lang="ar"] .slide .tg-container .caption-title,
html[dir="rtl"] .slide .tg-container .caption-title span,
html[lang="ar"] .slide .tg-container .caption-title span {
  direction: rtl;
  text-align: center;
}

html[dir="rtl"] .arrow,
html[lang="ar"] .arrow {
  direction: ltr;
  unicode-bidi: bidi-override;
}

html[dir="rtl"] .arrow.left,
html[lang="ar"] .arrow.left {
  left: 20px;
  right: auto;
}

html[dir="rtl"] .arrow.right,
html[lang="ar"] .arrow.right {
  right: 20px;
  left: auto;
}

@media (max-width: 767px) {
  html[dir="rtl"] .arrow.left,
  html[lang="ar"] .arrow.left {
    left: 10px;
    right: auto;
  }
  html[dir="rtl"] .arrow.right,
  html[lang="ar"] .arrow.right {
    right: 10px;
    left: auto;
  }
}
</style>