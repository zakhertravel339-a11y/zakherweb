<script setup>
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { fetchCertificates } from '@/api/certificates.js'
import { getCertificatesFallback } from '@/data/certificatesFallback.js'
import 'swiper/css'

const modules = [Autoplay]
const certificates = ref([])
const activeImage = ref(null)

onMounted(async () => {
  const rows = await fetchCertificates()
  certificates.value = rows.length ? rows : getCertificatesFallback()
})

function openLightbox(url) {
  activeImage.value = url
}

function closeLightbox() {
  activeImage.value = null
}
</script>

<template>
  <div v-if="certificates.length" class="certificates">
    <h2>CERTIFICATES</h2>
    <hr />

    <div class="container">
      <Swiper
        class="certificateSwiper"
        :modules="modules"
        :loop="certificates.length > 3"
        :slides-per-view="3"
        :space-between="10"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :breakpoints="{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
      >
        <SwiperSlide v-for="item in certificates" :key="item.id">
          <img
            :src="item.image_url"
            :alt="item.alt_text || 'Certificate'"
            loading="lazy"
            @click="openLightbox(item.image_url)"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <div v-if="activeImage" class="lightbox" @click="closeLightbox">
      <img :src="activeImage" alt="Certificate preview" />
    </div>
  </div>
</template>

<style scoped>
.certificates {
  text-align: center;
  margin: 40px auto;
  width: 100%;
}

.certificates h2 {
  font-size: 35px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 30px;
  color: #FFA500;
}

.certificates hr {
  width: 10%;
  height: 4px;
  background-color: orange;
  margin: 0 auto 20px;
  border: none;
}

.certificateSwiper {
  height: 350px;
  padding: 40px 0;
}

.certificateSwiper :deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.certificateSwiper img {
  width: 80%;
  height: 220px;
  object-fit: contain;
  background: #f5f5f5;
  border-radius: 12px;
  cursor: zoom-in;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificateSwiper img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .certificateSwiper img {
    width: 90%;
    height: 200px;
  }
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 12px;
  animation: zoomIn 0.25s ease;
}

@keyframes zoomIn {
  from {
    transform: scale(0.85);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
