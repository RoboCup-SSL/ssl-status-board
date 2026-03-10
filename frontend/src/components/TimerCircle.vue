<template>
  <div class="timer-circle">
    <svg class="circle" viewBox="0 0 36 36">
      <circle class="circle-bg" cx="18" cy="18" r="15.9" />
      <circle
        v-if="percentage > 0"
        class="circle-fill"
        cx="18"
        cy="18"
        r="15.9"
        :stroke="color"
        :stroke-dasharray="`${percentage} 100`"
      />
    </svg>
    <span class="timer-text" :style="{ color, fontSize }">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  percentage: number
  color: string
  fontSize?: string
}>()
</script>

<style scoped>
.timer-circle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
  font-weight: bold;
  line-height: 1;
}
</style>
