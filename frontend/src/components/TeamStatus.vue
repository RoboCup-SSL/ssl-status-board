<template>
  <div class="team-status">
    <div
      :class="{ 'team-yellow': color === 'yellow', 'team-blue': color === 'blue' }"
      class="team-name"
    >
      <div class="team-name-text">{{ team?.name || 'Team' }}</div>
    </div>

    <img :src="logoUrl" alt="team logo" class="team-logo"/>

    <div class="cards-section">
      <div class="status-cards">
        <StatusCard :value="team?.redCards || 0" bg-color="#ea1a18"/>
        <StatusCard :value="team?.yellowCards || 0" bg-color="#e9ea2a" text-color="#2c3e50"/>
        <StatusCard :value="team?.foulCounter || 0" bg-color="#c7c7c7" text-color="#2c3e50"/>
      </div>
      <div class="card-timers">
        <template v-for="i in 2" :key="i">
          <CardTime
            v-if="i <= activeTimers.length"
            :card-timer="activeTimers[i - 1]!"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Referee_TeamInfo} from '@/proto/ssl_gc_referee_message_pb'
import {getTeamLogoUrl} from '@/helpers/teamLogo'
import StatusCard from './StatusCard.vue'
import CardTime from './CardTime.vue'

const props = defineProps<{
  color: 'yellow' | 'blue'
  team?: Referee_TeamInfo
}>()

const logoUrl = computed(() => {
  return getTeamLogoUrl(props.team?.name || '')
})

const activeTimers = computed(() => {
  return (props.team?.yellowCardTimes || []).filter(t => Math.ceil(t / 1000000) > 0)
})
</script>

<style scoped>
.team-status {
  transition: background-color 500ms ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
  overflow: hidden;
}

.team-name {
  margin-top: 4px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.team-logo {
  object-fit: contain;
  flex: 1;
  min-height: 0;
}

.cards-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  margin: 0.3em;
  gap: 0.3em;
}

.status-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.15em;
}

.card-timers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.15em;
  height: 1.5em;
}
</style>
