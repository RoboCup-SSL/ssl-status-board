<template>
  <div class="substitution-time">
    <div
      class="substitution-label"
      :class="{ active: isActive }"
      :style="isActive ? { backgroundColor: teamColor } : {}"
    >{{ label }}</div>
    <div v-if="timeLeft > 0" class="substitution-timer">
      <TimerRoundedRect :percentage="percentage" :color="teamColor" font-size="1em">
        {{ timeText }}
      </TimerRoundedRect>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import TimerRoundedRect from './TimerRoundedRect.vue'
import type {Referee_TeamInfo} from '@/proto/ssl_gc_referee_message_pb'
import {Team} from '@/proto/ssl_gc_common_pb'

const TOTAL_SUBSTITUTION_TIME = 20000000

const props = defineProps<{
  team: Referee_TeamInfo
  teamSide: Team
}>()

const label = computed(() => {
  if (props.team.botSubstitutionAllowed) return 'Substitution Active'
  if (props.team.botSubstitutionIntent) return 'Substitution Requested'
  return ''
})

const isActive = computed(() => !!props.team.botSubstitutionAllowed)

const timeLeft = computed(() => props.team.botSubstitutionTimeLeft || 0)

const teamColor = computed(() => {
  return props.teamSide === Team.YELLOW ? '#fff145' : '#779fff'
})

const percentage = computed(() => {
  if (timeLeft.value <= 0) return 0
  const ratio = timeLeft.value / TOTAL_SUBSTITUTION_TIME
  return Math.min(100, Math.max(0, ratio * 100))
})

const timeText = computed(() => Math.ceil(timeLeft.value / 1000000))
</script>

<style scoped>
.substitution-time {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.6em;
}

.substitution-label {
  margin-bottom: 0.2em;
  padding: 0.1em 0.4em;
  border-radius: 0.3em;
  transition: background-color 500ms ease;
}

.substitution-label.active {
  color: #2c3e50;
}

.substitution-timer {
  width: 3.2em;
  height: 2em;
}

</style>
