<template>
  <section id="branch-slider" data-no-translate>
    <h2 style="margin-top: 50px">{{ $t('home.branches.title', 'OUR BRANCHES') }}</h2>
    <hr />
    <div v-if="branches.length" ref="wrapperEl" class="wrapper">
      <i id="left" class="fa-solid fa-arrow-left"></i>
      <ul ref="carouselEl" class="carousel">
        <li v-for="branch in branches" :key="branch.id" class="card">
          <div class="img">
            <router-link :to="branch.link_url || '/'">
              <img
                :src="branch.flag_image_url"
                :alt="branch.name"
                draggable="false"
              />
            </router-link>
          </div>
          <span>{{ $t(branch.name_key, branch.name) }}</span>
        </li>
      </ul>
      <i id="right" class="fa-solid fa-arrow-right"></i>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { fetchBranches, FALLBACK_BRANCHES } from '@/api/branches.js'

const branches = ref([])
const wrapperEl = ref(null)
const carouselEl = ref(null)

let cleanup = null

function setupCarousel() {
  cleanup?.()
  cleanup = null

  const carousel = carouselEl.value
  const wrapper = wrapperEl.value
  if (!carousel || !wrapper) return

  const firstCard = carousel.querySelector('.card')
  if (!firstCard) return

  const gap = 16
  const scrollAmount = () => firstCard.offsetWidth + gap

  const onLeft = () => {
    carousel.scrollLeft -= scrollAmount()
  }
  const onRight = () => {
    carousel.scrollLeft += scrollAmount()
  }

  const leftBtn = wrapper.querySelector('#left')
  const rightBtn = wrapper.querySelector('#right')
  leftBtn?.addEventListener('click', onLeft)
  rightBtn?.addEventListener('click', onRight)

  let isDragging = false
  let startX = 0
  let startScrollLeft = 0

  const dragStart = (e) => {
    isDragging = true
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
  }

  const dragging = (e) => {
    if (!isDragging) return
    carousel.classList.add('dragging')
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
  }

  const dragStop = () => {
    isDragging = false
    carousel.classList.remove('dragging')
  }

  carousel.addEventListener('mousedown', dragStart)
  carousel.addEventListener('mousemove', dragging)
  document.addEventListener('mouseup', dragStop)

  cleanup = () => {
    leftBtn?.removeEventListener('click', onLeft)
    rightBtn?.removeEventListener('click', onRight)
    carousel.removeEventListener('mousedown', dragStart)
    carousel.removeEventListener('mousemove', dragging)
    document.removeEventListener('mouseup', dragStop)
  }
}

onMounted(async () => {
  const rows = await fetchBranches()
  branches.value = rows.length ? rows : FALLBACK_BRANCHES
  await nextTick()
  setupCarousel()
})

onUnmounted(() => {
  cleanup?.()
})
</script>

<style scoped>
.wrapper {
  position: relative;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  margin-top: -30px;
}

.wrapper i {
  height: 50px;
  width: 50px;
  font-size: 1.25rem;
  background: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
}

.wrapper i:first-child {
  left: -22px;
}

.wrapper i:last-child {
  right: -22px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 4) - 65px);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  margin-right: 20px;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel :where(.card, .img) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.carousel.dragging {
  scroll-behavior: auto;
  scroll-snap-type: none;
}

.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}

.carousel .card {
  scroll-snap-align: center;
  height: 342px;
  list-style: none;
  background: #fff;
  border-radius: 8px;
  padding-bottom: 15px;
  cursor: pointer;
  border: none;
}

.card .img {
  background: #ffa500;
  width: 148px;
  height: 148px;
  border-radius: 50%;
}

.card .img img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
}

.card span {
  color: #6a6d78;
  font-size: 1.31rem;
  margin-top: 15px;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2));
    gap: -6px;
  }

  .wrapper i:first-child {
    left: -22px;
    z-index: 111;
  }

  .wrapper i:last-child {
    right: -22px;
  }
}

@media (max-width: 767px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
    margin-left: 27px;
  }

  .wrapper i:first-child {
    left: 22px;
    z-index: 111;
  }

  .wrapper i:last-child {
    right: 22px;
  }
}

#branch-slider h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;
  color: #ffa500;
  margin-top: 20px;
}

#branch-slider hr {
  width: 7%;
  height: 4px;
  background-color: #ffa500;
  margin: auto;
  border: none;
  margin-bottom: 50px;
}

#branch-slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #fff;
}

html[dir='rtl'] #branch-slider,
html[lang='ar'] #branch-slider,
html[dir='rtl'] #branch-slider .wrapper,
html[lang='ar'] #branch-slider .wrapper,
html[dir='rtl'] #branch-slider .carousel,
html[lang='ar'] #branch-slider .carousel,
html[dir='rtl'] #branch-slider .card,
html[lang='ar'] #branch-slider .card {
  direction: ltr !important;
  text-align: center !important;
}

html[dir='rtl'] #branch-slider .wrapper,
html[lang='ar'] #branch-slider .wrapper {
  display: block !important;
  position: relative !important;
}

html[dir='rtl'] #branch-slider .wrapper i,
html[lang='ar'] #branch-slider .wrapper i {
  position: absolute !important;
  top: 50% !important;
  bottom: auto !important;
  transform: translateY(-50%) !important;
  height: 50px !important;
  width: 50px !important;
  line-height: 50px !important;
  text-align: center !important;
  margin: 0 !important;
  padding: 0 !important;
  z-index: 5 !important;
  float: none !important;
  vertical-align: middle !important;
}

html[dir='rtl'] #branch-slider .wrapper i#left,
html[lang='ar'] #branch-slider .wrapper i#left {
  left: -22px !important;
  right: auto !important;
}

html[dir='rtl'] #branch-slider .wrapper i#right,
html[lang='ar'] #branch-slider .wrapper i#right {
  right: -22px !important;
  left: auto !important;
}

html[dir='rtl'] #branch-slider .card span,
html[lang='ar'] #branch-slider .card span {
  direction: rtl !important;
  text-align: center !important;
  display: block !important;
  width: 100% !important;
}
</style>
