<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchSocialMedia } from '@/api/socialMedia.js'

const page = ref(null)
const loading = ref(true)

const cards = computed(() => {
  const rows = page.value?.instagram_cards || []
  return [...rows].sort((a, b) => a.sort_order - b.sort_order)
})

const title = computed(
  () => page.value?.config?.instagram_title || 'Zakher Travel on Instagram',
)

onMounted(async () => {
  loading.value = true
  page.value = await fetchSocialMedia()
  loading.value = false
})
</script>

<template>
  <div class="insta-section">
    <div class="sosial-title">
      <h2>{{ title }}</h2>
      <hr />
    </div>
    <div v-if="loading" class="insta-loading">Loading...</div>
    <div v-else class="container insta-cards">
      <div v-for="card in cards" :key="card.id" class="insta-card">
        <div class="card-header">
          <div class="profile">
            <img :src="card.profile_image_url" :alt="card.username" loading="lazy" />
            <span class="username">{{ card.username }}</span>
          </div>
          <i class="fa-solid fa-ellipsis-vertical" />
        </div>
        <div class="card-image">
          <a :href="card.instagram_url" target="_blank" rel="noopener">
            <img :src="card.post_image_url" :alt="card.username" loading="lazy" />
          </a>
        </div>
        <div class="card-actions">
          <div class="left">
            <i class="fa-regular fa-heart" />
            <i class="fa-regular fa-comment" />
            <i class="fa-regular fa-paper-plane" />
          </div>
          <div class="right">
            <i class="fa-regular fa-bookmark" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.insta-section {
  margin-top: 0;
}

.sosial-title h2 {
  font-size: 27px;
  font-weight: 900;
  position: relative;
  margin-bottom: 30px;
  color: #ffa500;
  text-align: center !important;
}

hr {
  width: 10%;
  height: 4px;
  background-color: #ffa500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}

.insta-loading {
  text-align: center;
  padding: 40px;
  color: #666;
}

.container.insta-cards {
  margin: 60px auto 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
  justify-content: center;
}

.insta-card {
  width: 400px;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #f09433;
  object-fit: cover;
}

.username {
  font-weight: bold;
}

.card-image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 22px;
}

.card-actions i {
  margin-right: 10px;
  cursor: pointer;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .insta-card {
    margin: auto;
  }
}
</style>
