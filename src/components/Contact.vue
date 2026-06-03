<script setup>
import { computed, onMounted, ref } from 'vue'
import { fetchContact } from '@/api/contact.js'

const page = ref(null)

const config = computed(() => page.value?.config || {})
const offices = computed(() => {
  const rows = page.value?.offices || []
  return [...rows].sort((a, b) => a.sort_order - b.sort_order)
})
const officePhones = computed(() => sortedPhones('office_phone'))
const mobilePhones = computed(() => sortedPhones('mobile'))
const whatsappPhones = computed(() => sortedPhones('whatsapp'))
const emails = computed(() => {
  const rows = page.value?.emails || []
  return [...rows].sort((a, b) => a.sort_order - b.sort_order)
})

function sortedPhones(type) {
  const rows = (page.value?.phones || []).filter((p) => p.phone_type === type)
  return [...rows].sort((a, b) => a.sort_order - b.sort_order)
}

onMounted(async () => {
  page.value = await fetchContact()
})
</script>

<template>
  <div class="container-xxl py-5 contact-content">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6
          class="section-title bg-white text-center text-primary px-3"
          style="color: #ffa500 !important; font-weight: 600; font-size: 25px"
        >
          {{ config.page_title || 'Contact Us' }}
        </h6>
        <hr />
      </div>
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div v-if="offices.length" class="d-flex align-items-start mb-4 contact-info-row">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary contact-info-icon"
              style="width: 50px; height: 50px; background-color: #ffa500 !important"
            >
              <i class="fa fa-map-marker-alt text-white" />
            </div>
            <div class="contact-info-text">
              <h5 class="text-primary" style="color: #ffa500 !important">
                {{ config.offices_section_label || 'Office' }}
              </h5>
              <template v-for="office in offices" :key="office.id">
                <h2 style="font-weight: 600" :class="{ 'mt-2': office.sort_order > 0 }">
                  {{ office.title }}
                </h2>
                <p class="mb-0">{{ office.address }}</p>
              </template>
            </div>
          </div>

          <div v-if="officePhones.length" class="d-flex align-items-start mb-4 contact-info-row">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary contact-info-icon"
              style="width: 50px; height: 50px; background-color: #ffa500 !important"
            >
              <i class="fa fa-phone-alt text-white" />
            </div>
            <div class="contact-info-text">
              <h5 class="text-primary" style="color: #ffa500 !important">
                {{ config.office_phone_section_label || 'Office Phone' }}
              </h5>
              <p v-for="phone in officePhones" :key="phone.id" class="mb-1">
                <i class="fa-solid fa-phone" />
                <a :href="phone.href">{{ phone.display_text }}</a>
              </p>
            </div>
          </div>

          <div v-if="mobilePhones.length" class="d-flex align-items-start mb-4 contact-info-row">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary contact-info-icon"
              style="width: 50px; height: 50px; background-color: #ffa500 !important"
            >
              <i class="fa fa-phone-alt text-white" />
            </div>
            <div class="contact-info-text">
              <h5 class="text-primary" style="color: #ffa500 !important">
                {{ config.mobile_section_label || 'Mobile' }}
              </h5>
              <p class="mb-0">
                <template v-for="(phone, idx) in mobilePhones" :key="phone.id">
                  <br v-if="idx > 0" />
                  <a :href="phone.href">{{ phone.display_text }}</a>
                </template>
              </p>
            </div>
          </div>

          <div v-if="whatsappPhones.length" class="d-flex align-items-start mb-4 contact-info-row">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary contact-info-icon"
              style="width: 50px; height: 50px; background-color: #ffa500 !important"
            >
              <i class="fa fa-phone-alt text-white" />
            </div>
            <div class="contact-info-text">
              <h5 class="text-primary" style="color: #ffa500 !important">
                {{ config.whatsapp_section_label || 'Whatsapp' }}
              </h5>
              <a
                v-for="phone in whatsappPhones"
                :key="phone.id"
                :href="phone.href"
                target="_blank"
                rel="noopener"
              >
                {{ phone.display_text }}
              </a>
            </div>
          </div>

          <div v-if="emails.length" class="d-flex align-items-start contact-info-row">
            <div
              class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary contact-info-icon"
              style="width: 50px; height: 50px; background-color: #ffa500 !important"
            >
              <i class="fa fa-envelope-open text-white" />
            </div>
            <div class="contact-info-text">
              <h5 class="text-primary" style="color: #ffa500 !important">
                {{ config.email_section_label || 'Email' }}
              </h5>
              <p v-for="item in emails" :key="item.id" class="mb-0">
                <a :href="`mailto:${item.email}`">{{ item.email }}</a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div v-if="config.map_embed_url" class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="config.map_embed_url"
              />
            </div>
          </div>
        </div>

        <div v-if="config.form_enabled !== false" class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form @submit.prevent>
            <div class="row g-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="text" class="form-control" id="name" :placeholder="config.form_name_label" />
                  <label for="name">{{ config.form_name_label || 'Your Name' }}</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="tel" class="form-control" id="phone" :placeholder="config.form_phone_label" />
                  <label for="phone">{{ config.form_phone_label || 'Your Phone' }}</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input type="email" class="form-control" id="email" :placeholder="config.form_email_label" />
                  <label for="email">{{ config.form_email_label || 'Your Email' }}</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <input type="text" class="form-control" id="subject" :placeholder="config.form_subject_label" />
                  <label for="subject">{{ config.form_subject_label || 'Subject' }}</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    :placeholder="config.form_message_label"
                    id="message"
                    style="height: 100px"
                  />
                  <label for="message">{{ config.form_message_label || 'Message' }}</label>
                </div>
              </div>
              <div class="col-12">
                <button
                  class="btn btn-primary w-100 py-3"
                  style="background-color: #ffa500 !important"
                  type="submit"
                >
                  {{ config.form_submit_label || 'Send Message' }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 400px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 400px;
}
.gmap_iframe {
  height: 400px !important;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #ffa500;
}
hr {
  width: 15%;
  height: 4px;
  background-color: #ffa500;
  margin: auto;
  border: none;
  margin-bottom: 20px;
}
</style>
