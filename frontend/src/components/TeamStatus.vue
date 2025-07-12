<template>
  <div class="team-status" :class="{ 'bot-substitution-intent': team?.botSubstitutionIntent }">
    <div
      :class="{ 'team-yellow': color === 'yellow', 'team-blue': color === 'blue' }"
      class="team-name"
    >
      <div class="team-name-text">{{ team?.name || 'Team' }}</div>
    </div>

    <img :src="logoUrl" alt="team logo" class="team-logo" />

    <div class="cards">
      <StatusCard class="card" color="red" :num-cards="team?.redCards || 0" />
      <StatusCard class="card" color="yellow" :num-cards="team?.yellowCards || 0" />
      <StatusCard class="card" color="foul" :num-cards="team?.foulCounter || 0" />
      <BotCount class="card" :num-bots="team?.maxAllowedBots || 0" />
    </div>

    <div class="cardTimers">
      <CardTimer
        v-for="(cardTime, index) in (team?.yellowCardTimes || []).slice(0, 3)"
        :key="index"
        :card-timer="cardTime"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Referee_TeamInfo } from '@/proto/ssl_gc_referee_message_pb'
import { getTeamLogoUrl } from '@/helpers/teamLogo'
import StatusCard from './StatusCard.vue'
import BotCount from './BotCount.vue'
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
.cards {
  display: flex;
  justify-content: center;
}

.card {
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

.team-logo {
  max-width: 60%;
}

.cardTimers {
  margin-top: 6px;
  display: block;
}
</style>
