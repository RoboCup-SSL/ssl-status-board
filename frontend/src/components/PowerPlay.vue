<template>
  <div>
    <span
      v-if="showPowerplay"
      :class="{ 'team-yellow': powerPlayTeam === 'Yellow', 'team-blue': powerPlayTeam === 'Blue' }"
    >
      Power play ({{ botsYellow }} vs {{ botsBlue }})
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
import { Referee_Command } from '@/proto/ssl_gc_referee_message_pb'

const refereeStore = useRefereeStore()

const botsYellow = computed(() => {
  return refereeStore.refereeMsg.yellow?.maxAllowedBots || 0
})

const botsBlue = computed(() => {
  return refereeStore.refereeMsg.blue?.maxAllowedBots || 0
})

const powerPlayTeam = computed(() => {
  if (botsBlue.value > botsYellow.value) {
    return 'Blue'
  } else if (botsYellow.value > botsBlue.value) {
    return 'Yellow'
  }
  return null
})

const showPowerplay = computed(() => {
  if (powerPlayTeam.value === null) {
    return false
  }

  switch (refereeStore.refereeMsg.command) {
    case Referee_Command.NORMAL_START:
    case Referee_Command.FORCE_START:
    case Referee_Command.DIRECT_FREE_YELLOW:
    case Referee_Command.DIRECT_FREE_BLUE:
    case Referee_Command.INDIRECT_FREE_YELLOW:
    case Referee_Command.INDIRECT_FREE_BLUE:
      return true
  }
  return false
})
</script>

<style scoped>
/* Styles will be inherited from global CSS */
</style>
