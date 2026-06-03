<script setup>
import { onMounted, ref, watch } from 'vue'
import { fetchTourPackages } from '@/api/tourPackages.js'
import { useI18nStore } from '@/store/i18nStore.js'

const i18n = useI18nStore()
const packages = ref([])

async function load() {
  try {
    const rows = await fetchTourPackages(i18n.language)
    packages.value = rows.filter((p) => p.list_path)
  } catch {
    packages.value = []
  }
}

onMounted(load)
watch(() => i18n.language, load)
</script>

<template>
  <div v-if="packages.length" class="destination mt-5">
    <div class="container mt-2">
      <h2 class="tour-package">{{ $t('Our Tour Packages', 'Our Tour Packages') }}</h2>
      <hr class="tour-hr" />
      <div class="row text-center">
        <div
          v-for="pkg in packages"
          :key="pkg.id"
          class="col-md-3 col-sm-6 item mb-3"
        >
          <div class="card item-card card-block">
            <div class="dest-count" />
            <router-link :to="pkg.list_path">
              <img :src="pkg.cover_image_url" :alt="pkg.name" loading="lazy" />
            </router-link>
            <h4 class="item-card-title text-center p-2">
              <i>{{ pkg.name }}</i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destination {
  padding: 50px 0;
}
.tour-package {
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 20px;
  color: #333;
}
.tour-hr {
  width: 100px;
  margin: 0 auto 30px;
  border-top: 2px solid #ffa500;
}
.item-card {
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.item-card:hover {
  transform: translateY(-5px);
}
.item-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.item-card-title {
  font-size: 18px;
  color: #333;
  margin: 0;
}
</style>
