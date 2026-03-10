<template>
  <div class="card-time">
    <TimerCircle :percentage="percentage" color="yellow" font-size="0.5em">
      {{ seconds }}
    </TimerCircle>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import TimerCircle from './TimerCircle.vue'

const props = defineProps<{
  cardTimer: number
}>()

const percentage = computed(() => {
  return props.cardTimer / 1200000
})

const seconds = computed(() => {
  return Math.ceil(props.cardTimer / 1000000)
})
</script>

<style scoped>
.card-time {
  width: 1.5em;
  height: 1.5em;
}
</style>
