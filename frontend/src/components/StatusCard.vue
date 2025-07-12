<template>
  <div class="card">
    <div
      class="card-pic"
      :class="{
        'red-card': color === 'red',
        'yellow-card': color === 'yellow',
        foul: color === 'foul',
      }"
    >
      {{ numCards }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  color: 'red' | 'yellow' | 'foul'
  numCards: number
}>()
</script>

<style scoped>
.card {
  margin: 0.1em;
}

.card-pic {
  border-radius: 0.2em;
  width: 1.5em;
  height: 2em;
  font-size: 0.6em;
  display: table-cell;
  vertical-align: middle;
}

.yellow-card {
  background: #e9ea2a;
  color: #2c3e50;
}

.red-card {
  background: #ea1a18;
}

.foul {
  background: #c7c7c7;
  color: #2c3e50;
}
</style>
