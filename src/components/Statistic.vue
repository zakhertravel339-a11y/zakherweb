<script setup>
import { computed, nextTick, onMounted, ref } from 'vue'
import { fetchHomeStatistics } from '@/api/homeStatistics.js'

const page = ref(null)

const config = computed(() => page.value?.config || {})
const items = computed(() => {
  const rows = page.value?.items || []
  return [...rows].sort((a, b) => a.sort_order - b.sort_order)
})

function counter(id, start, end, duration, suffix) {
  const obj = document.getElementById(id)
  if (!obj) return
  let current = start
  const range = Math.abs(end - start)
  if (range === 0) {
    obj.textContent = `${end}${suffix || ''}`
    return
  }
  const increment = end > start ? 1 : -1
  const step = Math.max(Math.abs(Math.floor(duration / range)), 1)
  const timer = setInterval(() => {
    current += increment
    obj.textContent = `${current}${suffix || ''}`
    if (current === end) clearInterval(timer)
  }, step)
}

async function runCounters() {
  await nextTick()
  for (const item of items.value) {
    counter(
      `stat-${item.id}`,
      item.counter_start ?? 0,
      item.counter_end ?? 0,
      item.counter_duration_ms ?? 5000,
      item.display_suffix || '',
    )
  }
}

onMounted(async () => {
  page.value = await fetchHomeStatistics()
  await runCounters()
})
</script>

<template>
  <section v-if="items.length" id="counters" style="width: 100%" data-no-translate>
    <h2>{{ config.section_title || 'STATISTICS' }}</h2>
    <hr />
    <div class="counter">
      <div v-for="item in items" :key="item.id" class="count">
        <i :class="item.icon_class" />
        <p class="number" :id="`stat-${item.id}`">{{ item.counter_end }}{{ item.display_suffix || '' }}</p>
        <p class="count-text">{{ item.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#counters {
  width: 100%;
  background-position: center;
  background-attachment: fixed;
  background: radial-gradient(ellipse at center, #d89b23 1%, #ee803d 100%);
  text-align: center;
  color: white;
  padding: 50px 0px;
  font-family: 'Roboto', sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
}

#counters h2 {
  font-size: 25px;
  font-weight: 900;
  margin: 15px 0px 20px 0px;
}

#counters hr {
  width: 3%;
  height: 4px;
  background-color: #ffa500;
  margin: auto;
  border: none;
  margin-bottom: 50px;
}

#counters .counter {
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

#counters .count {
  width: 20%;
  margin-top: 30px;
  font-weight: 900;
  margin-bottom: 30px;
}

#counters .count i {
  font-size: 80px;
  margin-bottom: 20px;
}

#counters .count .number {
  font-size: 40px;
  color: white;
}

@media (max-width: 1280px) {
  #counters .counter {
    width: 85%;
  }
}

@media (max-width: 486px) {
  #counters .count {
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
  }
}
</style>
