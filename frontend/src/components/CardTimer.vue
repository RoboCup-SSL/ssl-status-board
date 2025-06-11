<template>
  <div class="card-timer">
    <div class="progressBar" :style="{ 'width': `${percentage}%` }"></div>
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
</script>

<style scoped>
.card-timer {
  width: 90%;
  height: 16px;
  display: block;
  border: 1px yellow solid;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 8px;
}

.card-timer .progressBar {
  background: yellow;
  display: inline-block;
  height: 100%;
  vertical-align: top;
}
</style>