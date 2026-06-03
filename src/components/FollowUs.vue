<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchSocialMedia } from '@/api/socialMedia.js'
import { getSocialMediaFallback, PLATFORM_CSS, PLATFORM_ICON } from '@/data/socialMediaFallback.js'

const data = ref(null)

const links = computed(() => {
  const rows = data.value?.links?.length ? data.value.links : getSocialMediaFallback().links
  return [...rows].sort((a, b) => a.sort_order - b.sort_order)
})

const title = computed(() => data.value?.config?.follow_title || 'Follow Us')

function platformClass(platform) {
  return PLATFORM_CSS[platform] || platform
}

function platformIcon(platform) {
  return PLATFORM_ICON[platform] || 'fa-link'
}

onMounted(async () => {
  data.value = await fetchSocialMedia()
})
</script>

<template>
  <div v-if="links.length" class="container social-effect">
    <div class="sosial-title">
      <h2>{{ title }}</h2>
      <hr style="width: 120px" />
    </div>
    <div class="effect aeneas">
      <div class="buttons">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.url"
          :class="platformClass(link.platform)"
          :title="link.link_title || link.platform"
          target="_blank"
          rel="noopener"
        >
          <i :class="['fa', platformIcon(link.platform)]" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 60px auto 0;
  text-align: center;
}
.effect {
  width: 100vw;
  padding: 10px 0 40px;
}
.effect .buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.effect a {
  text-decoration: none !important;
  color: #fff;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 12px;
  font-size: 25px;
  overflow: hidden;
  position: relative;
}
.effect a i {
  position: relative;
  z-index: 3;
  color: white;
  font-size: 40px;
}
.effect a.fb { background-color: #3c5998; }
.effect a.tw { background-color: #00aced; }
.effect a.wchat { background-color: #08d669; }
.effect a.telegram { background-color: #24a3e2; }
.effect a.tiktok { background-color: #000; }
.effect a.insta { background: linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7); }
.effect a.in { background-color: #0e61bf; }
.effect a.youtube { background-color: #ff0034; }
.effect a.snapchat { background-color: #f7f402; }
.effect a.tripadvisor { background-color: #35e0a1; }
.effect.aeneas a {
  transition: transform 0.4s linear, border-radius 0.1s linear;
}
.effect.aeneas a:hover {
  transform: rotate(360deg);
  border-radius: 50%;
}
.effect.aeneas a:hover i {
  transform: rotate(-360deg);
}
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
@media (max-width: 767px) {
  .effect a {
    width: 60px;
    height: 60px;
    margin-top: 12px;
  }
  .effect a i {
    font-size: 28px;
  }
}
</style>
