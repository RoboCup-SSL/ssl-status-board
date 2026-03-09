<template>
  <div class="card-timer">
    <svg class="circle" viewBox="0 0 36 36">
      <circle class="circle-bg" cx="18" cy="18" r="15.9" />
      <circle
        class="circle-fill"
        cx="18"
        cy="18"
        r="15.9"
        :stroke-dasharray="`${percentage} 100`"
      />
    </svg>
    <span class="timer-text">{{ seconds }}</span>
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.2em;
  height: 1.2em;
}

.circle {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: #6a6965;
  stroke-width: 3;
}

.circle-fill {
  fill: none;
  stroke: yellow;
  stroke-width: 3;
  stroke-linecap: round;
}

.timer-text {
  position: absolute;
  color: yellow;
  font-size: 0.4em;
  font-weight: bold;
  line-height: 1;
}
</style>
