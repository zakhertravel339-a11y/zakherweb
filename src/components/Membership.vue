<script setup>
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { fetchMembershipLogos, FALLBACK_MEMBERSHIP_LOGOS } from '@/api/membershipLogos.js'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]
const logos = ref([])

onMounted(async () => {
  const rows = await fetchMembershipLogos()
  logos.value = rows.length ? rows : FALLBACK_MEMBERSHIP_LOGOS
})
</script>

<template>
  <div v-if="logos.length" class="membership" data-no-translate>
    <h2 style="font-size: 40px; font-weight: 800; text-align: center; margin-top: 40px;">
      <div class="gradient-circle"></div>
      {{ $t('home.members.title', 'We Are Members Of') }}
      <div class="gradient-circle"></div>
    </h2>

    <div class="container">
      <Swiper
        class="membersSwiper"
        :modules="modules"
        :loop="logos.length > 1"
        :space-between="30"
        :slides-per-view="4"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :pagination="{ clickable: true, el: '.membership .swiper-pagination' }"
        :navigation="{
          nextEl: '.membership .swiper-button-next',
          prevEl: '.membership .swiper-button-prev',
        }"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }"
      >
        <SwiperSlide v-for="logo in logos" :key="logo.id">
          <img :src="logo.image_url" :alt="logo.alt_text || 'Member logo'" loading="lazy" />
        </SwiperSlide>
      </Swiper>

      <div class="swiper-pagination" style="display: none"></div>
      <div class="swiper-button-prev" style="display:none"></div>
      <div class="swiper-button-next" style="display:none"></div>
    </div>
  </div>
</template>

<style scoped>
.membersSwiper {
  padding: 30px 0;
  height: 200px !important;
}

.membersSwiper :deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
}

.membersSwiper img {
  max-width: 100px;
  max-height: 120px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: grayscale(0.2);
  transition: transform 0.3s ease;
}

.membersSwiper img:hover {
  transform: scale(1.05);
  filter: grayscale(0);
}

.gradient-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #DE5C2C, #F6C047);
  display: inline-block;
  vertical-align: center;
  margin: 0 5px;
}

@media (max-width: 767px) {
  .membership h2 {
    font-size: 28px !important;
  }

  .gradient-circle {
    width: 20px;
    height: 20px;
  }
}
</style>
