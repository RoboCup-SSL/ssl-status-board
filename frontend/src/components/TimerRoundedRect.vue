<template>
  <div class="timer-rounded-rect">
    <svg class="rect" viewBox="0 0 80 36">
      <path class="rect-bg" :d="rectPath" />
      <path
        v-if="percentage > 0"
        class="rect-fill"
        :d="rectPath"
        :stroke="color"
        :stroke-dasharray="`${fillLength} ${totalLength}`"
      />
    </svg>
    <span class="timer-text" :style="{ color, fontSize }">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  percentage: number
  color: string
  fontSize?: string
}>()

// Rounded rect params: x=2, y=2, w=76, h=32, r=10
// Path starts at top-middle (40, 2) and goes clockwise
const rectPath =
  'M 40 2 ' +
  'L 68 2 ' + // top edge right half
  'A 10 10 0 0 1 78 12 ' + // top-right corner
  'L 78 24 ' + // right edge
  'A 10 10 0 0 1 68 34 ' + // bottom-right corner
  'L 12 34 ' + // bottom edge
  'A 10 10 0 0 1 2 24 ' + // bottom-left corner
  'L 2 12 ' + // left edge
  'A 10 10 0 0 1 12 2 ' + // top-left corner
  'Z' // back to top-middle

// Perimeter: 2*(76-20) + 2*(32-20) + 2*pi*10 = 112 + 24 + 62.83 ≈ 198.83
const totalLength = 198.83

const fillLength = computed(() => (props.percentage / 100) * totalLength)
</script>

<style scoped>
.timer-rounded-rect {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.rect {
  width: 100%;
  height: 100%;
}

.rect-bg {
  fill: none;
  stroke: #6a6965;
  stroke-width: 3;
}

.rect-fill {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
}

.timer-text {
  position: absolute;
  font-weight: bold;
  line-height: 1;
}
</style>
