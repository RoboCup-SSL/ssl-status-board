<template>
  <div class="match-time">
    <TimerRoundedRect :percentage="percentage" :color="strokeColor" font-size="1.5em">
      {{ timeText }}
    </TimerRoundedRect>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatDuration } from '@/helpers/timestamp'
import TimerRoundedRect from './TimerRoundedRect.vue'

const props = defineProps<{
  stageTimeLeft: number
  totalStageTime?: number
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
  width: 5em;
  height: 2.5em;
}
</style>
