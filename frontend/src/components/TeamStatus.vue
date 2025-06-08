<template>
  <div class="team-status" :class="{ 'bot-substitution-intent': team?.botSubstitutionIntent }">
    <div :class="{ 'team-yellow': color === 'yellow', 'team-blue': color === 'blue' }" class="team-name">
      <div class="team-name-text">{{ team?.name || 'Team' }}</div>
    </div>

    <img :src="logoUrl" alt="team logo" class="team-logo" />

    <div class="cards">
      <div class="card">Red: {{ team?.redCards || 0 }}</div>
      <div class="card">Yellow: {{ team?.yellowCards || 0 }}</div>
      <div class="card">Fouls: {{ team?.foulCounter || 0 }}</div>
      <div class="card">Bots: {{ team?.maxAllowedBots || 0 }}</div>
    </div>

    <div class="cardTimers">
      <span v-for="(cardTime, index) in (team?.yellowCardTimes || []).slice(0, 3)" :key="index">
        {{ formatTimestamp(cardTime) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Referee_TeamInfo } from '@/proto/ssl_gc_referee_message_pb'
import { getTeamLogoUrl } from '@/helpers/teamLogo'
import { formatTimestamp } from '@/helpers/timestamp'

interface Props {
  color: 'yellow' | 'blue'
  team?: Referee_TeamInfo
}

const props = defineProps<Props>()

const logoUrl = computed(() => {
  return getTeamLogoUrl(props.team?.name || '')
})
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  gap: 0.5em;
}

.card {
  font-size: 0.8em;
}

.team-status {
  transition: background-color 500ms ease;
}

.bot-substitution-intent {
  background-color: #c2c3d0;
}

.team-name {
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.team-yellow {
  color: #ffcc00;
}

.team-blue {
  color: #0066cc;
}

.team-logo {
  max-width: 60%;
}

.cardTimers {
  margin-top: 6px;
  display: block;
}
</style>