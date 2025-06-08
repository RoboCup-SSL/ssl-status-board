<template>
  <div class="bot-count">
    <div class="bot-icon">🤖</div>
    <div class="bot-number">{{ numBots }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  numBots: number
}

defineProps<Props>()
</script>

<style scoped>
.bot-count {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.25em;
  margin: 0.1em;
  border-radius: 3px;
  min-width: 2em;
  background-color: #e8f5e8;
  border: 1px solid #4caf50;
}

.bot-icon {
  font-size: 1em;
}

.bot-number {
  font-size: 0.8em;
  font-weight: bold;
  margin-top: 0.2em;
}
</style>