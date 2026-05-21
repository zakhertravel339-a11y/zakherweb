<script setup>

</script>

<template>
  <hr style="margin-top: 60px!important;">
  <div class="sosial-title">

    <h2>Watch Us on Youtube</h2>
    <hr>
  </div>
  <div class="container">


    <iframe width="1060" height="515" style="margin-bottom: 60px;" src="https://www.youtube.com/embed/-9BRrj8_3u0?si=qBlpCTdO2L4FOcCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

</template>

<style scoped>
.sosial-title h2{
  font-size: 27px;
  font-weight: 900;
  position: relative;
  margin-bottom: 30px;
  color: #FFA500;
  text-align: center!important;

}

hr{
  width: 10%;
  height: 4px;
  background-color: #FFA500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}
.container {
  margin: 60px auto 0px auto;
  text-align: center;
}
@media (min-width: 768px) and (max-width: 1024px) {
iframe {
  width: 100%;
}}
@media (max-width: 767px) {
  iframe {
    width: 100%;
  }
}
</style>