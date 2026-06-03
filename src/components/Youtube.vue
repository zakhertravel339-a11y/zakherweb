<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchSocialMedia } from '@/api/socialMedia.js'
import { getSocialMediaFallback } from '@/data/socialMediaFallback.js'

const data = ref(null)

const embedUrl = computed(() => {
  const url = data.value?.config?.youtube_embed_url
  if (url) return url
  return getSocialMediaFallback().config.youtube_embed_url
})

const title = computed(() => data.value?.config?.youtube_title || 'Watch Us on Youtube')

onMounted(async () => {
  data.value = await fetchSocialMedia()
})
</script>

<template>
  <div v-if="embedUrl">
    <hr style="margin-top: 60px !important" />
    <div class="sosial-title">
      <h2>{{ title }}</h2>
      <hr />
    </div>
    <div class="container">
      <iframe
        width="1060"
        height="515"
        style="margin-bottom: 60px"
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
.sosial-title h2 {
  font-size: 27px;
  font-weight: 900;
  margin-bottom: 30px;
  color: #ffa500;
  text-align: center !important;
}
hr {
  width: 10%;
  height: 4px;
  background-color: #ffa500;
  margin: auto auto 20px;
  border: none;
}
.container {
  margin: 60px auto 0;
  text-align: center;
}
@media (max-width: 1024px) {
  iframe {
    width: 100%;
    max-width: 1060px;
  }
}
</style>
