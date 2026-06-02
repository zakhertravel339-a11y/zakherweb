<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchBranchDetail } from '@/api/branchDetail.js'
import { useI18nStore } from '@/store/i18nStore.js'

const route = useRoute()
const i18n = useI18nStore()

const loading = ref(true)
const detail = ref(null)

const content = computed(() => detail.value?.content || {})
const title = computed(() => content.value.title || detail.value?.name || '')
const heroImage = computed(
  () => detail.value?.detail_image_url || detail.value?.flag_image_url || '',
)

async function load() {
  loading.value = true
  try {
    detail.value = await fetchBranchDetail(route.path, i18n.language)
  } catch {
    detail.value = null
  }
  loading.value = false
}

onMounted(load)
watch(() => [route.path, i18n.language], load)
</script>

<template>
  <section v-if="loading" class="about-branch" style="margin-top: 70px">
    <div class="container admin-like-loading">{{ $t('Loading...', 'Loading...') }}</div>
  </section>

  <section v-else-if="!detail" class="about-branch" style="margin-top: 70px">
    <div class="container">
      <p class="text">{{ $t('Branch not found.', 'Branch not found.') }}</p>
      <router-link to="/ourbranches" class="theme-btn btn-style-one">
        {{ $t('OUR BRANCHES', 'Our Branches') }}
      </router-link>
    </div>
  </section>

  <section v-else class="about-branch" style="margin-top: 70px">
    <div class="container">
      <div class="row">
        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
          <div class="inner-column">
            <div class="sec-title title-branch">
              <h2>{{ title }}</h2>
            </div>
            <p v-if="content.intro" class="text text--pre">{{ content.intro }}</p>
            <p v-if="content.location_heading || content.address" class="text">
              <strong v-if="content.location_heading">{{ content.location_heading }}</strong>
              <br v-if="content.location_heading && content.address" />
              <template v-if="content.address">
                <i class="fa-solid fa-location-dot" style="color: #ffa500" />
                {{ content.address }}
                <br />
              </template>
              <template v-if="content.phone">
                <i class="fa-solid fa-phone" style="color: #ffa500" />
                {{ content.phone }}
                <br />
              </template>
              <template v-if="content.email">
                <i class="fa-solid fa-envelope" style="color: #ffa500" />
                {{ content.email }}
                <br />
              </template>
              <template v-if="content.website">
                <i class="fa-solid fa-globe" style="color: #ffa500" />
                {{ content.website }}
              </template>
            </p>
            <div class="btn-box">
              <router-link to="/contact-us" class="theme-btn btn-style-one">
                {{ $t('Contact Us', 'Contact Us') }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="image-column col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column wow fadeInLeft">
            <figure v-if="heroImage" class="image-1">
              <img :src="heroImage" :alt="title" />
            </figure>
          </div>
        </div>
      </div>

      <p v-if="content.body" class="text text--pre">{{ content.body }}</p>
    </div>
  </section>
</template>

<style scoped>
.admin-like-loading {
  padding: 48px;
  text-align: center;
  color: #888;
}

h1,
h2,
h3,
h4,
h5,
h6 {
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #6f6f6f;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
}

img {
  max-width: 100%;
  height: auto;
}

section {
  padding: 60px 0;
}

.sec-title {
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
}

.sec-title h2 {
  position: relative;
  display: block;
  font-size: 40px;
  line-height: 1.28em;
  color: #222222;
  font-weight: 600;
  padding-bottom: 18px;
}

.sec-title h2:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  width: 50px;
  height: 3px;
  background-color: #d1d2d6;
}

.about-branch {
  position: relative;
  padding: 120px 0 70px;
}

.about-branch .sec-title {
  margin-bottom: 45px;
}

.about-branch .content-column {
  position: relative;
  margin-bottom: 50px;
}

.about-branch .content-column .inner-column {
  position: relative;
  padding-left: 30px;
}

.about-branch .text {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
}

.about-branch .text--pre {
  white-space: pre-line;
}

.about-branch .btn-box a {
  padding: 15px 50px;
}

.about-branch .image-column {
  position: relative;
}

.about-branch .image-column .inner-column {
  position: relative;
  padding-left: 80px;
  padding-bottom: 0;
  margin-top: 100px;
  height: 400px;
}

.about-branch .image-column .inner-column:before {
  content: '';
  position: absolute;
  width: calc(50% + 80px);
  height: calc(100% + 160px);
  top: -80px;
  left: -3px;
  background: transparent;
  z-index: 0;
  border: 44px solid #ffa500;
}

.about-branch .image-column .image-1 {
  position: relative;
}

.about-branch .image-column .image-1 img {
  box-shadow: 0 30px 50px rgba(8, 13, 62, 0.15);
  border-radius: 16px;
}

.btn-style-one {
  position: relative;
  display: inline-block;
  font-size: 17px;
  line-height: 30px;
  color: #ffffff;
  padding: 10px 30px;
  font-weight: 600;
  background-color: #ffa500;
}

@media (max-width: 768px) {
  .title-branch {
    margin-top: 150px;
  }

  .about-branch .image-column .inner-column {
    margin-top: 30px;
    height: 200px !important;
  }
}
</style>
