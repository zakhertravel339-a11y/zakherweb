<template>
  <header-view />
  <main id="page-content">
    <router-view />
  </main>
  <footer-view />
</template>

<script setup>
import HeaderView from "@/views/HeaderView.vue";
import FooterView from "@/views/FooterView.vue";

</script>

<style scoped>

</style>