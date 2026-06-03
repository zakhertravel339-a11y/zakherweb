<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchContact } from '@/api/contact.js'

const page = ref(null)

const whatsappUrl = computed(() => {
  const url = page.value?.config?.whatsapp_float_url
  if (url) return url
  return 'https://api.whatsapp.com/send?phone=+994502532200'
})

onMounted(async () => {
  page.value = await fetchContact()
})
</script>

<template>
  <a :href="whatsappUrl" class="float" target="_blank" rel="noopener">
    <i class="fa fa-whatsapp my-float" />
  </a>
</template>

<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>
