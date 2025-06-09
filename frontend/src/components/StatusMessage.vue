<template>
  <div>
    <span v-if="statusMessage">
      {{ statusMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'

const refereeStore = useRefereeStore()

const statusMessage = computed(() => {
  return refereeStore.refereeMsg.statusMessage || null
})
</script>

<style scoped>
/* Styles will be inherited from global CSS */
</style>