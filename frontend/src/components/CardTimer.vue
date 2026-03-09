<template>
  <div class="card-timer">
    <span class="timer-text">{{ seconds }}s</span>
    <div class="bar">
      <div class="bar-fill" :style="{ width: `${percentage}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  cardTimer: number // time in microseconds
}>()

const percentage = computed(() => {
  return props.cardTimer / 1200000
})

const seconds = computed(() => {
  return Math.ceil(props.cardTimer / 1000000)
})
</script>

<style scoped>
.card-timer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.05em;
}

.timer-text {
  color: yellow;
  font-size: 0.5em;
  font-weight: bold;
  line-height: 1;
}

.bar {
  width: 100%;
  height: 0.2em;
  background: #6a6965;
  position: relative;
}

.bar-fill {
  background: yellow;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
