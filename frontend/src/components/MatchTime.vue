<template>
  <div class="match-time">
    <svg class="circle" viewBox="0 0 36 36">
      <circle class="circle-bg" cx="18" cy="18" r="15.9" />
      <circle
        v-if="!isNegative"
        class="circle-fill"
        cx="18"
        cy="18"
        r="15.9"
        :stroke="strokeColor"
        :stroke-dasharray="`${percentage} 100`"
      />
    </svg>
    <span class="timer-text" :style="{ color: strokeColor }">{{ timeText }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatDuration } from '@/helpers/timestamp'

const props = defineProps<{
  stageTimeLeft: number // microseconds, can be negative
  totalStageTime?: number // microseconds, total stage duration
}>()

const totalStageTime = computed(() => props.totalStageTime ?? 300000000)

const isNegative = computed(() => props.stageTimeLeft < 0)

const strokeColor = computed(() => (isNegative.value ? '#f44336' : '#4caf50'))

const percentage = computed(() => {
  if (isNegative.value) return 0
  const ratio = props.stageTimeLeft / totalStageTime.value
  return Math.min(100, Math.max(0, ratio * 100))
})

const timeText = computed(() => formatDuration(props.stageTimeLeft))
</script>

<style scoped>
.match-time {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 4em;
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
  stroke-width: 3;
  stroke-linecap: round;
}

.timer-text {
  position: absolute;
  font-size: 0.8em;
  font-weight: bold;
  line-height: 1;
}
</style>
