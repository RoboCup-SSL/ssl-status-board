<template>
  <div class="team-status" :class="{ 'bot-substitution-intent': team?.botSubstitutionIntent }">
    <div
      :class="{ 'team-yellow': color === 'yellow', 'team-blue': color === 'blue' }"
      class="team-name"
    >
      <div class="team-name-text">{{ team?.name || 'Team' }}</div>
    </div>

    <img :src="logoUrl" alt="team logo" class="team-logo"/>

    <div class="cards-and-timers">
      <StatusCard :value="team?.redCards || 0" bg-color="#ea1a18"/>
      <StatusCard :value="team?.yellowCards || 0" bg-color="#e9ea2a" text-color="#2c3e50"/>
      <StatusCard :value="team?.foulCounter || 0" bg-color="#c7c7c7" text-color="#2c3e50"/>
      <template v-for="i in 2" :key="i">
        <CardTimer
          v-if="i <= (team?.yellowCardTimes || []).length"
          :card-timer="(team?.yellowCardTimes || [])[i - 1]!"
        />
        <div v-else class="card-timer-placeholder"/>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {Referee_TeamInfo} from '@/proto/ssl_gc_referee_message_pb'
import {getTeamLogoUrl} from '@/helpers/teamLogo'
import StatusCard from './StatusCard.vue'
import CardTimer from './CardTimer.vue'

const props = defineProps<{
  color: 'yellow' | 'blue'
  team?: Referee_TeamInfo
}>()

const logoUrl = computed(() => {
  return getTeamLogoUrl(props.team?.name || '')
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

.bot-substitution-intent {
  background-color: #c2c3d0;
}

.team-name {
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 0.85em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.team-logo {
  max-width: 60%;
  max-height: 100%;
  object-fit: contain;
  flex-shrink: 1;
  min-height: 0;
}

.cards-and-timers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.15em;
  flex-shrink: 0;
  margin: 0.3em;
}

.card-timer-placeholder {
  width: 1.2em;
  height: 1.2em;
}
</style>
