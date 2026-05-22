<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { onMounted } from "vue";
import SwiperCore from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Navigation, Pagination, Autoplay]);




onMounted(() => {
  new SwiperCore(".membersSwiper", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".membership .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".membership .swiper-button-next",
      prevEl: ".membership .swiper-button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 25 },
      1024: { slidesPerView: 5, spaceBetween: 30 },
    },
  });
});
</script>

<template>



  



  <div class="membership" data-no-translate>
    <h2 style="font-size: 40px; font-weight: 800; text-align: center; margin-top: 40px;">
      <div class="gradient-circle"></div> {{ $t('home.members.title', 'We Are Members Of') }}
      <div class="gradient-circle"></div>
    </h2>

    <div class="container">
      
      <div class="swiper membersSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/images/GTA%20%20logo%202_page-0001%20(1).jpg" alt="GTA" /></div>
          <div class="swiper-slide"><img src="../assets/images/tursab.png" alt="Association" /></div>
          <div class="swiper-slide"><img src="../assets/images/kato.png" alt="KATO" /></div>
          <div class="swiper-slide"><img src="../assets/images/iata-Photoroom.png" alt="IATA" /></div>
          <div class="swiper-slide"><img src="../assets/images/asosiyasiya.jpg" alt="Association" /></div>
          <div class="swiper-slide"><img src="../assets/images/iso.jpg" alt="KATO" /></div>
        </div>

        
        <div class="swiper-pagination" style="display: none"></div>
        <div class="swiper-button-prev" style="display:none"></div>
        <div class="swiper-button-next" style="display:none"></div>
      </div>
    </div>
  </div>

  




</template>

<style scoped>

.membersSwiper {
  padding: 30px 0;
  height: 200px!important;
}

.membersSwiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.membersSwiper img {
  width: 100px;
  height: auto;
  object-fit: contain;
  filter: grayscale(0.2);
  transition: transform 0.3s ease;
}

.membersSwiper img:hover {
  transform: scale(1.1);
  filter: grayscale(0);
}

.gradient-circle{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #DE5C2C, #F6C047);
  display:inline-block;
  vertical-align:center;
  margin: 0 5px;

}
@media (max-width: 767px) {
  .membership h2{
    font-size: 28px!important;
  }
  .gradient-circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #DE5C2C, #F6C047);
    display:inline-block;
    vertical-align:center;
    margin: 0 5px;

  }
}
</style>