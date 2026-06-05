<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { fetchAboutContent } from '@/api/about.js'
import { useI18nStore } from '@/store/i18nStore.js'

const i18n = useI18nStore()
const data = ref(null)

const section = computed(() => data.value?.sections?.events_teaser?.content || {})

async function load() {
  data.value = await fetchAboutContent(i18n.language)
}

onMounted(load)
watch(() => i18n.language, load)
</script>

<template>
  <section class="events-section">
    <div class="events-content">
      <h2>{{ section.title || 'Our Events' }}</h2>
      <p>{{ section.body }}</p>
      <router-link to="/about-events" class="read-more">
        {{ section.cta_label || 'Read More' }}
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.events-section {
  width: 100%;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background: radial-gradient(ellipse at center, #d89b23 1%, #ee803d 100%);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}
.events-content {
  position: relative;
  max-width: 600px;
  z-index: 2;
}
.events-content h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  letter-spacing: 1px;
}
.events-content p {
  font-size: 1.1rem;
  margin-bottom: 25px;
  line-height: 1.6;
  opacity: 0.9;
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
}
.read-more:hover {
  transform: scale(1.05);
  background: #fef3e6;
  color: grey;
}
</style>
