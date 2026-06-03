<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchSocialMedia } from '@/api/socialMedia.js'

const page = ref(null)

const embedUrl = computed(() => page.value?.config?.youtube_embed_url || '')

const title = computed(() => page.value?.config?.youtube_title || 'Watch Us on Youtube')

onMounted(async () => {
  page.value = await fetchSocialMedia()
})
</script>

<template>
  <div class="youtube-section">
    <hr class="youtube-section__hr" />
    <div class="sosial-title">
      <h2>{{ title }}</h2>
      <hr />
    </div>
    <div class="container">
      <iframe
        v-if="embedUrl"
        width="1060"
        height="515"
        class="youtube-iframe"
        :src="embedUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
  </div>
</template>

<style scoped>
.youtube-section__hr {
  margin-top: 60px !important;
  border: none;
}

.sosial-title h2 {
  font-size: 27px;
  font-weight: 900;
  position: relative;
  margin-bottom: 30px;
  color: #ffa500;
  text-align: center !important;
}

.sosial-title hr {
  width: 10%;
  height: 4px;
  background-color: #ffa500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}

.container {
  margin: 60px auto 0;
  text-align: center;
}

.youtube-iframe {
  margin-bottom: 60px;
  max-width: 100%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .youtube-iframe {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .youtube-iframe {
    width: 100%;
    height: auto;
    min-height: 250px;
  }
}
</style>
