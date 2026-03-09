<template>
  <div class="card" :style="{ background: bgColor, color: textColor, borderColor: borderColor }">
    <span class="card-value">{{ value }}</span>
    <img v-if="icon" class="card-icon" :src="icon" :alt="iconAlt || ''" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: number | string
  bgColor?: string
  textColor?: string
  borderColor?: string
  icon?: string
  iconAlt?: string
}>()
</script>

<style scoped>
.card {
  margin: 0.1em;
  border-radius: 0.2em;
  width: 1.5em;
  height: 2em;
  font-size: 0.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid transparent;
}

.card-value {
  line-height: 1;
}

.card-icon {
  object-fit: contain;
  width: 1em;
  height: 0.9em;
}
</style>
