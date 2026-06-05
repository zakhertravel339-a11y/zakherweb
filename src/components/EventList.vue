<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { fetchAboutEvents } from '@/api/about.js'
import { useI18nStore } from '@/store/i18nStore.js'

const i18n = useI18nStore()
const page = ref(null)
const lightboxOpen = ref(false)
const lightboxSrc = ref('')
lightboxSrc.value = ''
const lightboxAlt = ref('')
const galleryImages = ref([])
const currentIndex = ref(0)

const events = computed(() => page.value?.events || [])
const pageTitle = computed(() => page.value?.page_title || 'Our Events')

async function load() {
  page.value = await fetchAboutEvents(i18n.language)
}

function openLightbox(media, clickedIndex) {
  const images = media.filter((m) => m.media_type === 'image')
  const clicked = media[clickedIndex]
  const imageIndex = images.findIndex((m) => m.url === clicked?.url)
  galleryImages.value = images
  currentIndex.value = imageIndex >= 0 ? imageIndex : 0
  const item = galleryImages.value[currentIndex.value]
  if (!item) return
  lightboxSrc.value = item.url
  lightboxAlt.value = ''
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function nextImage() {
  if (!galleryImages.value.length) return
  currentIndex.value = (currentIndex.value + 1) % galleryImages.value.length
  lightboxSrc.value = galleryImages.value[currentIndex.value].url
}

function prevImage() {
  if (!galleryImages.value.length) return
  currentIndex.value = (currentIndex.value - 1 + galleryImages.value.length) % galleryImages.value.length
  lightboxSrc.value = galleryImages.value[currentIndex.value].url
}

function onKeydown(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  load()
  window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
watch(() => i18n.language, load)
</script>

<template>
  <main class="container">
    <div>
      <h2 class="title-events">{{ pageTitle }}</h2>
      <hr />
    </div>

    <section
      v-for="(event, idx) in events"
      :key="event.id"
      class="event"
      :aria-label="`Event ${idx + 1}`"
    >
      <h2 class="event__title">{{ event.title }}</h2>
      <p v-if="event.description" class="event__desc" style="white-space: pre-line">{{ event.description }}</p>
      <div v-if="event.media?.length" class="gallery">
        <template v-for="(media, mIdx) in event.media" :key="`${event.id}-${mIdx}`">
          <button
            v-if="media.media_type === 'image'"
            class="gallery__item"
            type="button"
            @click="openLightbox(event.media, mIdx)"
          >
            <img :src="media.url" :alt="event.title" loading="lazy" />
          </button>
          <video v-else-if="media.media_type === 'video'" class="gallery__video" controls :src="media.url" />
        </template>
      </div>
    </section>

    <div v-if="lightboxOpen" class="lightbox is-open">
      <div class="lightbox__backdrop" @click="closeLightbox" />
      <div class="lightbox__content">
        <button type="button" class="lightbox__close" @click="closeLightbox">×</button>
        <button type="button" class="lightbox__nav lightbox__nav--prev" @click="prevImage">‹</button>
        <img class="lightbox__img" :src="lightboxSrc" :alt="lightboxAlt" />
        <button type="button" class="lightbox__nav lightbox__nav--next" @click="nextImage">›</button>
        <div class="lightbox__caption">{{ lightboxAlt }}</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title-events {
  font-weight: 600;
  color: #ffa500;
  font-size: 35px;
  text-align: center !important;
  margin-top: 20px;
}
hr {
  width: 5%;
  height: 4px;
  background-color: orange;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}
.event {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 18px;
  margin: 18px 0;
}
.event__title {
  margin: 0 0 14px;
  font-size: clamp(18px, 2.2vw, 22px);
  color: #ffa500;
  font-weight: 600;
}
.event__desc {
  margin-bottom: 12px;
  color: #444;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.gallery__item {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
}
.gallery__item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.gallery__video {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 14px;
}
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
}
.lightbox.is-open {
  display: flex;
}
.lightbox__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
}
.lightbox__content {
  position: relative;
  width: min(980px, 92%);
  padding: 14px 52px;
  z-index: 1;
}
.lightbox__img {
  width: 100%;
  max-height: 76vh;
  object-fit: contain;
  display: block;
  border-radius: 12px;
}
.lightbox__close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  cursor: pointer;
}
.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 56px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 28px;
  cursor: pointer;
}
.lightbox__nav--prev {
  left: 8px;
}
.lightbox__nav--next {
  right: 8px;
}
@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 620px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
