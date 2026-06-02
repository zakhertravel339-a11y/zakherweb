<script setup>
import imgAz from '@/assets/images/flame_towers_enhanced.jpg'
import imgTr from '@/assets/images/capadocya-turkiya.jpg'
import imgUz from '@/assets/images/uzbekistan-tour.jpg'
import imgKz from '@/assets/images/kazakhstan-tour.jpg'
import imgKg from '@/assets/images/kyrgyzstan-tour.jpg'
import imgGe from '@/assets/images/Georgia-tour.jpg'
import imgPl from '@/assets/images/poland-tour.jpg'
import imgCz from '@/assets/images/Czech-Republic-tour.jpg'
import imgRu from '@/assets/images/russia-tour.jpg'
import imgUae from '@/assets/images/uae tour.jpg'
import imgUa from '@/assets/images/ukraine-tour.jpg'

const packages = [
  { labelKey: 'Azerbaijan', to: '/azerbaijan-tours', image: imgAz },
  { labelKey: 'Turkiye', to: '/turkiye-tours', image: imgTr },
  { labelKey: 'Uzbekistan', to: '/uzbekistan-tours', image: imgUz },
  { labelKey: 'Kazakhstan', to: '/kazakhstan-tours', image: imgKz },
  { labelKey: 'Kyrgyzstan', to: '/kyrgyzstan-tours', image: imgKg },
  { labelKey: 'Georgia', to: '/georgia-tours', image: imgGe },
  { labelKey: 'Poland', to: '/poland-tours', image: imgPl },
  { labelKey: 'Czech Republic', to: null, image: imgCz },
  { labelKey: 'Russia', to: '/russia-tours', image: imgRu },
  { labelKey: 'UAE', to: null, image: imgUae },
  { labelKey: 'Ukraine', to: '/ukraine-tours', image: imgUa },
]
</script>

<template>
  <div class="destination mt-5">
    <div class="container mt-2">
      <h2 class="tour-package">{{ $t('Our Tour Packages', 'Our Tour Packages') }}</h2>
      <hr class="tour-hr" />

      <div class="row text-center">
        <div
          v-for="(pkg, index) in packages"
          :key="index"
          class="col-md-3 col-sm-6 item mb-3"
        >
          <div class="card item-card card-block">
            <div class="dest-count" />
            <router-link v-if="pkg.to" :to="pkg.to">
              <img :src="pkg.image" alt="" loading="lazy" />
            </router-link>
            <img v-else :src="pkg.image" alt="" loading="lazy" />
            <h4 class="item-card-title text-center p-2">
              <i>{{ $t(pkg.labelKey, pkg.labelKey) }}</i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destination {
  padding: 50px 0;
}

.tour-package {
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 20px;
  color: #333;
}

.tour-hr {
  width: 100px;
  margin: 0 auto 30px;
  border-top: 2px solid #ffa500;
}

.item-card {
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.item-card:hover {
  transform: translateY(-5px);
}

.item-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.item-card-title {
  font-size: 18px;
  color: #333;
  margin: 0;
}
</style>
