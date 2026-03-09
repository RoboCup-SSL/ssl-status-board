<template>
  <div class="status-board">
    <div class="upper-container">
      <TeamStatus class="team-status" color="yellow" :team="refereeStore.refereeMsg.yellow" />

      <div class="match-status-container">
        <MatchStatus />
      </div>

      <TeamStatus class="team-status" color="blue" :team="refereeStore.refereeMsg.blue" />
    </div>

    <hr class="upper-lower-separator" />

    <GameEvents class="lower-container" />
  </div>
</template>

<script setup lang="ts">
import { useRefereeStore } from '@/stores/referee'
import TeamStatus from './TeamStatus.vue'
import MatchStatus from './MatchStatus.vue'
import GameEvents from './GameEvents.vue'

const refereeStore = useRefereeStore()
</script>

<style scoped>
.status-board {
  text-align: center;
  font-size: 2.5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.upper-container {
  display: flex;
  align-items: stretch;
  height: 50%;
  flex-shrink: 0;
}

.lower-container {
  flex: 1;
  overflow: auto;
}

.upper-lower-separator {
  margin: 0.2em;
}

.match-status-container {
  flex-grow: 0.4;
  flex-basis: 40%;
}

.team-status {
  flex-grow: 0.3;
  flex-basis: 40%;
}
</style>
