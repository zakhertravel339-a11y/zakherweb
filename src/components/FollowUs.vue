<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchSocialMedia } from '@/api/socialMedia.js'
import { PLATFORM_CSS, PLATFORM_ICON } from '@/data/socialMediaFallback.js'

const page = ref(null)

const links = computed(() => {
  const rows = page.value?.links || []
  return [...rows].sort((a, b) => a.sort_order - b.sort_order)
})

const title = computed(() => page.value?.config?.follow_title || 'Follow Us')

function platformClass(platform) {
  return PLATFORM_CSS[platform] || platform
}

function platformIcon(platform) {
  return PLATFORM_ICON[platform] || 'fa-link'
}

onMounted(async () => {
  page.value = await fetchSocialMedia()
})
</script>

<template>
  <div class="container social-effect">
    <div class="sosial-title">
      <h2>{{ title }}</h2>
      <hr />
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
.container.social-effect {
  width: 100%;
  max-width: 100%;
  margin: 60px auto 0;
  padding: 0 15px;
  text-align: center;
  box-sizing: border-box;
}

.effect {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 0 40px;
  box-sizing: border-box;
}

.effect .buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
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
  margin: 0;
  flex-shrink: 0;
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
.effect a.snapchat i { color: #333; }
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

@media (min-width: 768px) and (max-width: 1024px) {
  .effect a {
    width: 70px;
    height: 70px;
    font-size: 25px;
  }

  .effect .buttons {
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .effect a {
    width: 60px;
    height: 60px;
  }

  .effect .buttons {
    gap: 12px;
  }

  .effect a i {
    font-size: 28px;
  }

  .effect .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
