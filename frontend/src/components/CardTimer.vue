<template>
  <div class="card-timer" :class="{ 'timer-warning': isWarning, 'timer-critical': isCritical }">
    {{ formattedTime }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatDuration } from '@/helpers/timestamp'

interface Props {
  cardTimer: number // time in microseconds
}

const props = defineProps<Props>()

const formattedTime = computed(() => {
  return formatDuration(props.cardTimer)
})

const timeInSeconds = computed(() => {
  return props.cardTimer / 1000000
})

const isWarning = computed(() => {
  return timeInSeconds.value <= 30 && timeInSeconds.value > 10
})

const isCritical = computed(() => {
  return timeInSeconds.value <= 10
})
</script>

<style scoped>
.card-timer {
  display: inline-block;
  padding: 0.2em 0.4em;
  margin: 0.1em;
  border-radius: 3px;
  font-size: 0.7em;
  font-weight: bold;
  background-color: #e3f2fd;
  border: 1px solid #2196f3;
  color: #1976d2;
  font-family: monospace;
}

.timer-warning {
  background-color: #fff3e0;
  border-color: #ff9800;
  color: #f57c00;
}

.timer-critical {
  background-color: #ffebee;
  border-color: #f44336;
  color: #c62828;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}
</style>