<template>
  <div class="card" :class="cardClass">
    <div class="card-icon">
      <div v-if="color === 'red'" class="icon red-card">R</div>
      <div v-else-if="color === 'yellow'" class="icon yellow-card">Y</div>
      <div v-else-if="color === 'foul'" class="icon foul-card">F</div>
    </div>
    <div class="card-count">{{ numCards }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color: 'red' | 'yellow' | 'foul'
  numCards: number
}

const props = defineProps<Props>()

const cardClass = computed(() => {
  return `card-${props.color}`
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25em;
  margin: 0.1em;
  border-radius: 3px;
  min-width: 2em;
}

.card-red {
  background-color: #ffebee;
  border: 1px solid #f44336;
}

.card-yellow {
  background-color: #fffbf0;
  border: 1px solid #ff9800;
}

.card-foul {
  background-color: #f5f5f5;
  border: 1px solid #9e9e9e;
}

.card-icon {
  font-size: 0.7em;
  font-weight: bold;
}

.icon {
  width: 1.2em;
  height: 1.2em;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8em;
}

.red-card {
  background-color: #f44336;
}

.yellow-card {
  background-color: #ff9800;
}

.foul-card {
  background-color: #9e9e9e;
}

.card-count {
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 0.2em;
}
</style>