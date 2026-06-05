<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { fetchAboutContent } from '@/api/about.js'
import { useI18nStore } from '@/store/i18nStore.js'

const i18n = useI18nStore()
const data = ref(null)

const section = computed(() => data.value?.sections?.who_we_are_teaser?.content || {})
const imageUrl = computed(() => data.value?.sections?.who_we_are_teaser?.image_url || '')

async function load() {
  data.value = await fetchAboutContent(i18n.language)
}

onMounted(load)
watch(() => i18n.language, load)
</script>

<template>
  <div class="container mt-5 mb-5">
    <div class="row align-items-center who-we-are">
      <div v-if="imageUrl" class="col-12 col-md-6 mb-4 mb-md-0 text-center">
        <img :src="imageUrl" alt="" class="img-fluid w-75" />
      </div>
      <div class="col-12 col-md-6">
        <h4 class="item-card-title text-center p-2"><i>{{ section.title || 'Who We Are?' }}</i></h4>
        <p style="white-space: pre-line">{{ section.body }}</p>
        <div class="btn-box text-md-end text-center mt-3">
          <router-link to="/who-we-are" class="theme-btn btn-style-one">
            {{ section.cta_label || 'Read More' }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.who-we-are .item-card-title i {
  font-size: 20px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
  font-weight: 600;
  text-align: center;
  margin: auto;
}
.theme-btn {
  padding: 10px 25px;
  font-weight: 500;
  transition: 0.3s ease;
}
.theme-btn:hover {
  background-color: #333;
  color: #fff;
}
.btn-style-one {
  position: relative;
  display: inline-block;
  font-size: 17px;
  line-height: 30px;
  color: #ffffff;
  padding: 10px 30px;
  font-weight: 600;
  overflow: hidden;
  letter-spacing: 0.02em;
  background-color: #ffa500;
  text-decoration: none;
}
</style>
