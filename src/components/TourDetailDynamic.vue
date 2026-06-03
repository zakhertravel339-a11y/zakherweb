<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchTourByPath } from '@/api/tourPackages.js'
import { useI18nStore } from '@/store/i18nStore.js'

const route = useRoute()
const i18n = useI18nStore()
const loading = ref(true)
const detail = ref(null)

const content = computed(() => detail.value?.content || {})
const title = computed(() => content.value.detail_title || content.value.list_title || '')
const sidebarLines = computed(() => {
  const raw = content.value.detail_sidebar || ''
  return raw.split('\n').map((l) => l.trim()).filter(Boolean)
})

function formatBody(text) {
  if (!text) return ''
  return text.replace(/\n/g, '<br>')
}

async function load() {
  loading.value = true
  try {
    detail.value = await fetchTourByPath(route.path, i18n.language)
  } catch {
    detail.value = null
  }
  loading.value = false
}

onMounted(load)
watch(() => [route.path, i18n.language], load)
</script>

<template>
  <section v-if="loading" class="about-tour" style="margin-top: 100px">
    <div class="container">Loading...</div>
  </section>
  <section v-else-if="!detail" class="about-tour" style="margin-top: 100px">
    <div class="container">
      <p>Tour not found.</p>
      <router-link v-if="detail?.package_list_path" :to="detail.package_list_path">Back</router-link>
      <router-link v-else to="/tour-packages">Tour Packages</router-link>
    </div>
  </section>
  <section v-else class="about-tour" id="tour-info" style="margin-top: 100px">
    <div class="container">
      <div class="row">
        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
          <div class="inner-column">
            <div class="sec-title title-tour">
              <span class="title" style="color: #ffa500; font-weight: 600">{{ title }}</span>
            </div>
            <div v-if="sidebarLines.length">
              <ol class="dot-list">
                <li v-for="(line, idx) in sidebarLines" :key="idx" v-html="line" />
              </ol>
            </div>
          </div>
        </div>
        <div class="image-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <figure class="image-1">
              <img :src="detail.detail_image_url" :alt="title" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div v-if="content.detail_body" class="container">
      <p class="tour-body" style="margin-top: 100px" v-html="formatBody(content.detail_body)" />
      <div class="btn-box text-end booking">
        <router-link to="/reservation" class="theme-btn btn-style-one">Booking Now</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-tour .content-column .inner-column {
  padding-left: 30px;
}
.dot-list {
  padding-left: 1.2rem;
}
.dot-list li {
  margin-bottom: 8px;
}
.image-1 img {
  width: 100%;
  border-radius: 8px;
}
.tour-body {
  line-height: 1.6;
  color: #333;
}
.btn-style-one {
  display: inline-block;
  font-size: 17px;
  color: #fff;
  padding: 10px 30px;
  font-weight: 600;
  background-color: #ffa500;
  text-decoration: none;
}
.booking {
  margin-top: 24px;
  margin-bottom: 40px;
}
</style>
