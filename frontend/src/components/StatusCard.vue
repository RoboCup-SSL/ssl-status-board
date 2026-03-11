<template>
  <div class="card" :class="{ 'card-horizontal': !!icon }" :style="{ background: bgColor, color: textColor, borderColor: borderColor }">
    <img v-if="icon" class="card-icon" :src="icon" :alt="iconAlt || ''" />
    <span class="card-value">{{ value }}</span>
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
  min-width: 1.2em;
  height: 1.4em;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid transparent;
}

.card-horizontal {
  flex-direction: row;
  gap: 0.1em;
  padding: 0 0.2em;
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
