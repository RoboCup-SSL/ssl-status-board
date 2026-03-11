<template>
  <div class="card-time">
    <TimerRoundedRect :percentage="percentage" color="yellow" font-size="1em">
      {{ seconds }}
    </TimerRoundedRect>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import TimerRoundedRect from './TimerRoundedRect.vue'

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
  width: 3em;
  height: 1.5em;
}
</style>
