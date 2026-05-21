<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { onMounted, ref } from "vue";
import SwiperCore from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);


const activeImage = ref(null);


onMounted(() => {
  new SwiperCore(".certificateSwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  
  document.querySelectorAll(".certificateSwiper img").forEach((img) => {
    img.addEventListener("click", () => {
      activeImage.value = img.src;
    });
  });

  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") activeImage.value = null;
  });
});
</script>

<template>
  <div class="certificates">
    <h2>CERTIFICATES</h2>
    <hr />

    <div class="container">
      <div class="swiper certificateSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/images/1.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/2.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/3.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/4.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/5.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/6.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/7.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/8.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/9.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/10.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/11.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/12.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/13.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/14.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/15.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/16.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/17.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/18.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/19.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/20.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/certif7.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/certif8.jpg" /></div>
          <div class="swiper-slide"><img src="../assets/images/certif10.jpg" /></div>


        </div>
      </div>
    </div>

    
    <div v-if="activeImage" class="lightbox" @click="activeImage = null">
      <img :src="activeImage" />
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

.certificateSwiper .swiper-slide {
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
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certificateSwiper img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}


.swiper-pagination {
  display: none !important;
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