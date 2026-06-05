<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { fetchAboutContent } from '@/api/about.js'
import { useI18nStore } from '@/store/i18nStore.js'

const i18n = useI18nStore()
const data = ref(null)

const section = computed(() => data.value?.sections?.who_we_are_page?.content || {})
const imageUrl = computed(() => data.value?.sections?.who_we_are_page?.image_url || '')
const qualityImageUrl = computed(() => data.value?.sections?.who_we_are_page?.secondary_image_url || '')

async function load() {
  data.value = await fetchAboutContent(i18n.language)
}

onMounted(load)
watch(() => i18n.language, load)
</script>

<template>
  <section class="about-branch">
    <div class="container">
      <div class="row">
        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
          <div class="inner-column title-branch">
            <div class="sec-title">
              <span class="title">{{ section.subtitle || 'About Us' }}</span>
              <h2>{{ section.title || 'Who we are?' }}</h2>
            </div>
            <div class="text" style="white-space: pre-line">{{ section.body }}</div>
            <div v-if="section.exhibition_title || section.exhibition_body">
              <h2 class="fw-bold">{{ section.exhibition_title }}</h2>
              <div class="text" style="white-space: pre-line">{{ section.exhibition_body }}</div>
            </div>
          </div>
        </div>
        <div v-if="imageUrl" class="image-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column wow fadeInLeft">
            <figure class="image-1">
              <img :src="imageUrl" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <h2 v-if="section.quality_title" class="fw-bold text-center quality-title">{{ section.quality_title }}</h2>
      <div v-if="qualityImageUrl">
        <img :src="qualityImageUrl" alt="" class="quality-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-branch {
  position: relative;
  padding: 120px 0 80px;
}
.sec-title .title {
  color: #ffa500;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.sec-title h2 {
  font-size: 36px;
  font-weight: 700;
  margin-top: 10px;
}
.text {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}
.image-1 img {
  max-width: 100%;
  border-radius: 8px;
}
.quality-title {
  font-size: 30px;
  color: #ffa500;
  margin-top: 40px;
}
.quality-image {
  max-width: 100%;
  display: block;
  margin: 20px auto 0;
}
</style>
