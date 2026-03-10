<template>
  <div class="status-board">
    <div class="upper-container">
      <TeamStatus class="team-status" color="yellow" :team="refereeStore.refereeMsg.yellow" />

      <div class="match-status-container">
        <MatchStatus />
        <div class="next-command" v-html="nextCommandHtml || '&nbsp;'">
        </div>
      </div>

      <TeamStatus class="team-status" color="blue" :team="refereeStore.refereeMsg.blue" />
    </div>

    <hr v-if="statusMessage" class="upper-lower-separator" />

    <div v-if="statusMessage" class="status-message" v-html="statusMessageHtml">
    </div>

    <hr class="upper-lower-separator" />

    <GameEvents class="lower-container" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
import TeamStatus from './TeamStatus.vue'
import MatchStatus from './MatchStatus.vue'
import GameEvents from './GameEvents.vue'
import { mapCommandWithTeamToText } from '@/helpers/texts'

const refereeStore = useRefereeStore()

const statusMessage = computed(() => {
  return refereeStore.refereeMsg.statusMessage || null
})

const nextCommandHtml = computed(() => {
  const cmd = refereeStore.refereeMsg.nextCommand
  if (!cmd) return ''
  return `Next: ${mapCommandWithTeamToText(cmd)}`
})

const statusMessageHtml = computed(() => {
  if (!statusMessage.value) return ''
  return statusMessage.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')
})
</script>

<style scoped>
.status-board {
  text-align: center;
  font-size: 3vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.upper-container {
  display: flex;
  align-items: stretch;
  height: 60%;
  flex-shrink: 0;
}

.lower-container {
  flex: 1;
  overflow: auto;
  min-height: 0;
}

.upper-lower-separator {
  margin: 0.2em;
}

.match-status-container {
  flex-grow: 0.4;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
}

.match-status-container > :first-child {
  flex: 1;
  min-height: 0;
}

.team-status {
  flex-grow: 0.3;
  flex-basis: 40%;
}

.next-command {
  color: white;
  text-align: center;
  padding: 0.2em 0.5em;
  flex-shrink: 0;
}

.status-message {
  color: white;
  text-align: center;
  padding: 0.2em 0;
}
</style>
