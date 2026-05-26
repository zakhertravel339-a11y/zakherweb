<script setup>

</script>

<template>
  
  <section id="blogs">

    <div >

      <div class="blogs">

        <h2 class="reviews-title">
          {{ $t('home.reviews.title', 'What Our Customers Say') }}
        </h2>

        <div class="elfsight-app-72461295-c587-4418-9fe8-4f208805193f" data-elfsight-app-lazy></div>
      </div>
    </div>
  </section>
  



</template>

<style scoped>
.reviews-title {
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin: 40px 0 24px;
  color: #222;
}

html[dir="rtl"] .reviews-title,
html[lang="ar"] .reviews-title {
  text-align: center;
}

@media (min-width: 768px) and (max-width: 1024px) {
  #blogs {
    height: 400px!important;
  }
}
</style>