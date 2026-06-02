<script setup>
import { onMounted, ref } from 'vue'
import { fetchBranches, FALLBACK_BRANCHES } from '@/api/branches.js'

const branches = ref([])

onMounted(async () => {
  const rows = await fetchBranches()
  branches.value = rows.length ? rows : FALLBACK_BRANCHES
})

function branchLabel(branch) {
  return branch.name || ''
}
</script>

<template>
  <div class="destination mt-5">
    <div class="container mt-2">
      <div class="row text-center">
        <div
          v-for="branch in branches"
          :key="branch.id"
          class="col-md-3 col-sm-6 item mb-3"
        >
          <div class="card item-card card-block">
            <div class="dest-count" />
            <router-link :to="branch.link_url || '/'">
              <img :src="branch.flag_image_url" :alt="branchLabel(branch)" />
            </router-link>
            <h4 class="item-card-title text-center p-2">
              <i>{{ $t(branch.name_key, branch.name) }}</i>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destination {
  margin-top: 50px;
}

.destination h2 em {
  font-style: normal;
  color: #dba337;
}

.destination img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.destination .item {
  padding-left: 5px;
  padding-right: 5px;
}

.destination .item-card {
  transition: 0.5s;
  cursor: pointer;
  position: relative;
}

.destination .item-card-title {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
}

.destination .item-card-title i {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
}

.destination .card-title i:hover {
  transform: scale(1.25) rotate(100deg);
  color: #18d4ca;
}

.destination .card:hover {
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

.destination .card::before,
.destination .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}

.destination .card::before {
  transform-origin: left top;
}

.destination .card::after {
  transform-origin: right bottom;
}

.destination .card:hover::before,
.destination .card:hover::after,
.destination .card:focus::before,
.destination .card:focus::after {
  transform: scale3d(1, 1, 1);
}

.dest-count {
  position: absolute;
  z-index: 11;
  color: white;
  font-weight: 700;
  margin-left: 70%;
  margin-top: 50%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .item-card {
    height: 200px;
  }

  .item-card img {
    height: 150px;
  }

  .item-card-title {
    text-align: center;
    margin: auto;
  }
}
</style>
