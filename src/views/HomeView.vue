<template>

<MainSlider/>
<Branch/>
<PopularTour/>
<WhyChoose/>
<Statistic/>
<Membership/>
<Review/>
<Whatsapp/>

</template>

<script setup>
import { onMounted } from 'vue'
import { prefetchPopularTours } from '@/api/popularTours.js'
import { useI18nStore } from '@/store/i18nStore.js'
import MainSlider from "@/components/MainSlider.vue";
import Branch from "@/components/Branch.vue";
import PopularTour from "@/components/PopularTour.vue";
import WhyChoose from "@/components/WhyChoose.vue";
import Statistic from "@/components/Statistic.vue";
import Membership from "@/components/Membership.vue";
import Review from "@/components/Review.vue";
import Whatsapp from "@/components/Whatsapp.vue";

onMounted(() => {
  prefetchPopularTours(useI18nStore().language)
})

</script>


<style scoped>



</style>