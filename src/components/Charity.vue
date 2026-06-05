<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { fetchAboutContent } from '@/api/about.js'
import { useI18nStore } from '@/store/i18nStore.js'

const i18n = useI18nStore()
const data = ref(null)

const section = computed(() => data.value?.sections?.charity?.content || {})
const imageUrl = computed(() => data.value?.sections?.charity?.image_url || '')

async function load() {
  data.value = await fetchAboutContent(i18n.language)
}

onMounted(load)
watch(() => i18n.language, load)
</script>

<template>
  <section class="about-section">
    <div v-if="imageUrl" class="image-block">
      <div class="main-circle">
        <img :src="imageUrl" alt="" />
      </div>
    </div>
    <div class="text-block">
      <h2>{{ section.title || 'Charity' }}</h2>
      <p v-if="section.body" style="white-space: pre-line">{{ section.body }}</p>
      <p v-if="section.body_2" style="white-space: pre-line">{{ section.body_2 }}</p>
      <p v-if="section.body_3" style="white-space: pre-line">{{ section.body_3 }}</p>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
  max-width: 1200px;
  margin: auto;
  margin-top: -100px !important;
}
.image-block {
  position: relative;
  width: 350px;
  height: 350px;
  margin-right: 60px;
}
.main-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
}
.main-circle img {
  width: 300px !important;
  height: 300px !important;
  object-fit: cover;
}
.text-block {
  max-width: 600px;
}
.text-block h2 {
  font-size: 36px;
  color: #ffa500;
  margin-bottom: 20px;
  font-weight: 600;
}
.text-block p {
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 15px;
}
@media (max-width: 768px) {
  .image-block {
    display: none;
  }
  .text-block {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
