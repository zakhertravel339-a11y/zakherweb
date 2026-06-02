<script setup>
import { onMounted, ref } from 'vue'
import { fetchBrochures } from '@/api/brochures.js'
import { getBrochuresFallback } from '@/data/brochuresFallback.js'

const brochures = ref([])

onMounted(async () => {
  const rows = await fetchBrochures()
  brochures.value = rows.length ? rows : getBrochuresFallback()
})
</script>

<template>
  <div v-if="brochures.length" class="row justify-content-center mb-5 mt-5 figure-box brochure">
    <div>
      <h2 class="title-brochure">Our Brochures</h2>
      <hr />
    </div>

    <figure v-for="item in brochures" :key="item.id" class="snip1206">
      <img :src="item.cover_image_url" :alt="item.title" loading="lazy" />
      <figcaption>
        <a :href="item.file_url" target="_blank" rel="noopener">{{ item.title }}</a>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.title-brochure {
  font-weight: 600;
  color: #ffa500;
  font-size: 35px;
  text-align: center !important;
  margin-top: 20px;
}

.brochure hr {
  width: 5%;
  height: 4px;
  background-color: orange;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}

figure.snip1206 {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  padding: 0;
  min-width: 220px;
  max-width: 303px;
  height: 200px;
  width: 100%;
  text-align: center;
  background: #f9932f;
  background: linear-gradient(321deg, rgba(249, 147, 47, 1) 0%, rgba(251, 178, 64, 1) 64%, rgba(255, 218, 87, 1) 100%);
}

figure.snip1206 * {
  box-sizing: border-box;
  transition: all 0.6s ease;
}

figure.snip1206 img {
  opacity: 1;
  width: 100%;
  height: 100%;
  transition: opacity 0.35s;
  object-fit: cover;
}

figure.snip1206:after {
  background: #ffffff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  content: '';
  opacity: 0.75;
  transform: skew(-45deg) scaleX(0);
  transition: all 0.3s ease-in-out;
}

figure.snip1206 figcaption {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: 1;
}

figure.snip1206 a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  color: #ffa500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  text-align: center;
}

figure.snip1206:hover:after,
figure.snip1206.hover:after {
  transform: skew(-45deg) scaleX(1);
  transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
