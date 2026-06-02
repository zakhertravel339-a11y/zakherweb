<template>
  <div class="slider" data-no-translate>
    <div ref="slidesEl" class="slides" :style="trackStyle">
      <div v-for="(slide, i) in displaySlides" :key="slide.id || i" class="slide">
        <img class="slide__img" :src="slide.image_url" alt="" loading="eager" />
        <div class="slide__overlay">
          <div class="tg-container">
            <h3 class="caption-title">
              <span>
                {{ $t('home.slider.tagline', 'Your online and offline supplier in the world') }}
                <h5 class="caption-since">{{ $t('home.slider.since', 'since 2016') }}</h5>
              </span>
            </h3>
            <router-link :to="slide.link_url || '/tour-packages'" class="read-more">
              {{ $t('common.readMore', 'Read More') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-if="displaySlides.length > 1" class="arrow left" @click="go(index - 1)">&#10094;</div>
    <div v-if="displaySlides.length > 1" class="arrow right" @click="go(index + 1)">&#10095;</div>

    <div v-if="displaySlides.length > 1" class="dots">
      <div
        v-for="(_, i) in displaySlides"
        :key="i"
        class="dot"
        :class="{ active: i === index }"
        @click="go(i)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { fetchHeroSlides } from '@/api/heroSlides.js'

import fallback1 from '../assets/images/bulvar.jpeg'
import fallback2 from '../assets/images/nature az.jpg'
import fallback3 from '../assets/images/nature.jpg'
import fallback4 from '../assets/images/heyderaliyevcenter.jpg'

const FALLBACK = [
  { id: 'f1', image_url: fallback1, link_url: '/tour-packages' },
  { id: 'f2', image_url: fallback2, link_url: '/tour-packages' },
  { id: 'f3', image_url: fallback3, link_url: '/tour-packages' },
  { id: 'f4', image_url: fallback4, link_url: '/tour-packages' },
]

const slidesEl = ref(null)
const apiSlides = ref([])
const index = ref(0)
let timer = null

const displaySlides = computed(() =>
  apiSlides.value.length ? apiSlides.value : FALLBACK,
)

const total = computed(() => displaySlides.value.length)

const trackStyle = computed(() => ({
  transform: `translateX(-${index.value * 100}%)`,
}))

function go(i) {
  if (!total.value) return
  index.value = ((i % total.value) + total.value) % total.value
}

function startAutoplay() {
  stopAutoplay()
  if (total.value <= 1) return
  timer = setInterval(() => go(index.value + 1), 10000)
}

function stopAutoplay() {
  if (timer) clearInterval(timer)
  timer = null
}

onMounted(async () => {
  try {
    const rows = await fetchHeroSlides()
    if (rows.length) {
      apiSlides.value = rows
      index.value = 0
    }
  } catch (_) {
    apiSlides.value = []
  }
  startAutoplay()
})

onUnmounted(stopAutoplay)
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 97vh;
  margin-top: 30px;
  overflow: hidden;
}

.slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.slide__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.slide__overlay {
  position: relative;
  z-index: 2;
  height: 100%;
  pointer-events: none;
}

.slide__overlay .read-more {
  pointer-events: auto;
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
  z-index: 10;
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

.caption-since {
  display: inline;
  color: #ffa500;
  font-size: 25px;
  font-weight: bold;
}

.tg-container {
  left: 0;
  position: absolute;
  top: 53%;
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

.caption-title span {
  display: block;
  padding: 26px 40px;
  position: relative;
}

.caption-title span:after,
.caption-title span:before {
  background: rgba(255, 255, 255, 0.7);
  content: '';
  height: 4px;
  left: -102px;
  position: absolute;
  top: 50%;
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
  content: '';
  background: url('https://www.zakher.travel/wp-content/themes/himalayas/images/slider-title-new-arrow.png')
    no-repeat scroll 0 center;
  width: 4px;
  height: 100%;
}

.caption-title:after {
  right: 0;
  left: auto;
  transform: rotate(180deg);
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

html[dir='rtl'] .slider,
html[lang='ar'] .slider,
html[dir='rtl'] .slides,
html[lang='ar'] .slides,
html[dir='rtl'] .slide,
html[lang='ar'] .slide,
html[dir='rtl'] .tg-container,
html[lang='ar'] .tg-container {
  direction: ltr;
}

html[dir='rtl'] .slide .tg-container .caption-title,
html[lang='ar'] .slide .tg-container .caption-title,
html[dir='rtl'] .slide .tg-container .caption-title span,
html[lang='ar'] .slide .tg-container .caption-title span {
  direction: rtl;
  text-align: center;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .slider {
    height: 80vh;
  }

  .caption-title {
    font-size: 32px;
    line-height: 1.2;
  }

  .arrow {
    font-size: 32px;
    padding: 8px 12px;
  }
}

@media (max-width: 767px) {
  .slider {
    height: 70vh;
    margin-top: 10px;
  }

  .caption-title {
    font-size: 22px;
    line-height: 1.3;
    width: 90%;
  }

  .caption-since {
    font-size: 20px;
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

  .tg-container {
    margin-top: 15%;
  }
}
</style>
