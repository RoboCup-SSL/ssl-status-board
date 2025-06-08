<template>
  <div class="game-events">
    <h3>Game Events</h3>
    <div v-if="events.length === 0" class="no-events">
      No game events
    </div>
    <div v-else class="events-list">
      <div v-for="(event, index) in events" :key="index" class="event">
        <div class="event-type">{{ getEventTypeName(event) }}</div>
        <div class="event-details">{{ getEventDetails(event) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
import type { GameEvent } from '@/proto/ssl_gc_game_event_pb'

const refereeStore = useRefereeStore()

const events = computed(() => {
  return refereeStore.refereeMsg.gameEvents || []
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getEventTypeName = (event: GameEvent): string => {
  // This would need to be implemented based on the GameEvent structure
  // For now, return a placeholder
  return 'Game Event'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getEventDetails = (event: GameEvent): string => {
  // This would need to be implemented based on the GameEvent structure
  // For now, return a placeholder
  return 'Event details'
}
</script>

<style scoped>
.game-events {
  padding: 1em;
  max-height: 300px;
  overflow-y: auto;
}

.no-events {
  color: #666;
  font-style: italic;
  text-align: center;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.event {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5em;
  background-color: #f9f9f9;
}

.event-type {
  font-weight: bold;
  margin-bottom: 0.25em;
}

.event-details {
  font-size: 0.9em;
  color: #666;
}
</style>