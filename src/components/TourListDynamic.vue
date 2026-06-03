<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchPackageByPath } from '@/api/tourPackages.js'
import { useI18nStore } from '@/store/i18nStore.js'

const route = useRoute()
const i18n = useI18nStore()
const loading = ref(true)
const data = ref(null)

const tours = computed(() => data.value?.tours || [])
const regionLabel = computed(() => data.value?.title || data.value?.name || '')

async function load() {
  loading.value = true
  try {
    data.value = await fetchPackageByPath(route.path, i18n.language)
  } catch {
    data.value = null
  }
  loading.value = false
}

onMounted(load)
watch(() => [route.path, i18n.language], load)
</script>

<template>
  <div v-if="loading" class="container admin-like-loading" style="margin-top: 150px">Loading...</div>
  <div v-else-if="!data" class="container" style="margin-top: 150px">
    <p>Tour package not found.</p>
    <router-link to="/tour-packages">Tour Packages</router-link>
  </div>
  <div v-else class="container">
    <div class="card-list" style="margin-top: 150px">
      <div v-for="tour in tours" :key="tour.id" class="card">
        <div class="d-flex">
          <img :src="tour.cover_image_url" :alt="tour.list_title" loading="lazy" />
          <div class="card-content text-start">
            <h2>{{ tour.list_region || regionLabel }}</h2>
            <h3>
              {{ tour.list_title }}...
              <router-link :to="tour.detail_path">Read more.</router-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: linear-gradient(321deg, rgba(249, 147, 47, 1) 0%, rgba(251, 178, 64, 1) 64%, rgba(255, 218, 87, 1) 100%);
  color: white;
  border-radius: 16px;
  width: 1000px !important;
  max-width: 1200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  height: 150px;
  margin: auto;
  margin-bottom: 10px;
}
.card img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-left: 20px;
  object-fit: cover;
  border-radius: 8px;
}
.card-content {
  padding: 10px 25px;
  text-align: start;
}
.card h2 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
}
.card h3 {
  margin: 8px 0 16px;
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
}
.card h3 a {
  text-decoration: none;
  color: white;
}
.card h3 a:hover {
  color: #002d70 !important;
}
.card-list {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
}
@media (max-width: 992px) {
  .card {
    width: 90% !important;
    height: auto;
    padding: 10px;
  }
  .card .d-flex {
    flex-direction: column;
    align-items: center;
  }
  .card img {
    width: 90%;
    max-width: 300px;
    margin: 10px auto;
  }
}
</style>
