<template>
  <div class="match-status">
    <div>
      <div 
        :class="{
          'highlight-command': true, 
          'stop-command': isStop, 
          'halt-command': isHalt, 
          'robot-substitution-blue': isRobotSubstitutionBlue, 
          'robot-substitution-yellow': isRobotSubstitutionYellow, 
          'robot-substitution-both': isRobotSubstitutionBoth
        }"
      >
        <div class="stage">{{ stage }}</div>

        <span class="score">
          {{ refereeStore.refereeMsg.yellow?.score || 0 }} : {{ refereeStore.refereeMsg.blue?.score || 0 }}
        </span>

        <div 
          class="command" 
          :class="{ 'team-yellow': commandForYellow, 'team-blue': commandForBlue }"
        >
          {{ gameState }}
          <span v-if="isBallPlacement && remainingTime >= 0">
            ({{ formatDuration(Number(remainingTime)) }})
          </span>
          <span v-if="isTimeout">
            ({{ formatDuration(timeoutTime) }})
          </span>
        </div>
      </div>

      <hr class="separator"/>

      <PowerPlay />
      <StatusMessage />

    </div>
    <div 
      class="time-container"
      :class="{ 'time-positive': stageTimeLeft >= 0, 'time-negative': stageTimeLeft < 0 }"
    >
      {{ formatDuration(Math.abs(Number(stageTimeLeft))) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
import { formatDuration } from '@/helpers/timestamp'
import { Referee_Command } from '@/proto/ssl_gc_referee_message_pb'
import { Team } from '@/proto/ssl_gc_common_pb'
import { mapStageToText, mapCommandToText } from '@/helpers/texts'
import PowerPlay from './PowerPlay.vue'
import StatusMessage from './StatusMessage.vue'

const refereeStore = useRefereeStore()

const isRobotSubstitution = (team: Team): boolean => {
  if (team === Team.BLUE) {
    return refereeStore.refereeMsg.blue?.botSubstitutionAllowed || false
  } else if (team === Team.YELLOW) {
    return refereeStore.refereeMsg.yellow?.botSubstitutionAllowed || false
  }
  return false
}

const isRobotSubstitutionAny = computed(() => {
  return isRobotSubstitution(Team.BLUE) || isRobotSubstitution(Team.YELLOW)
})

const isRobotSubstitutionBlue = computed(() => {
  return isRobotSubstitution(Team.BLUE) && !isRobotSubstitution(Team.YELLOW)
})

const isRobotSubstitutionYellow = computed(() => {
  return isRobotSubstitution(Team.YELLOW) && !isRobotSubstitution(Team.BLUE)
})

const isRobotSubstitutionBoth = computed(() => {
  return isRobotSubstitution(Team.BLUE) && isRobotSubstitution(Team.YELLOW)
})

const isHalt = computed(() => {
  return !isRobotSubstitutionAny.value && refereeStore.refereeMsg.command === Referee_Command.HALT
})

const isStop = computed(() => {
  return !isRobotSubstitutionAny.value && refereeStore.refereeMsg.command === Referee_Command.STOP
})

const stage = computed(() => {
  return mapStageToText(refereeStore.refereeMsg.stage)
})

const gameState = computed(() => {
  if (isRobotSubstitutionAny.value) {
    return "Robot Substitution"
  }
  return mapCommandToText(refereeStore.refereeMsg.command)
})

const isBallPlacement = computed(() => {
  return refereeStore.refereeMsg.command === Referee_Command.BALL_PLACEMENT_BLUE ||
         refereeStore.refereeMsg.command === Referee_Command.BALL_PLACEMENT_YELLOW
})

const remainingTime = computed(() => {
  return refereeStore.refereeMsg.currentActionTimeRemaining || 0n
})

const isTimeout = computed(() => {
  return refereeStore.refereeMsg.command === Referee_Command.TIMEOUT_BLUE ||
         refereeStore.refereeMsg.command === Referee_Command.TIMEOUT_YELLOW
})

const timeoutTime = computed(() => {
  if (refereeStore.refereeMsg.command === Referee_Command.TIMEOUT_BLUE) {
    return (refereeStore.refereeMsg.blue?.timeoutTime || 0) * 1000 // Convert to microseconds
  } else if (refereeStore.refereeMsg.command === Referee_Command.TIMEOUT_YELLOW) {
    return (refereeStore.refereeMsg.yellow?.timeoutTime || 0) * 1000 // Convert to microseconds
  }
  return 0
})

const commandForBlue = computed(() => {
  switch (refereeStore.refereeMsg.command) {
    case Referee_Command.PREPARE_KICKOFF_BLUE:
    case Referee_Command.PREPARE_PENALTY_BLUE:
    case Referee_Command.DIRECT_FREE_BLUE:
    case Referee_Command.INDIRECT_FREE_BLUE:
    case Referee_Command.TIMEOUT_BLUE:
    case Referee_Command.GOAL_BLUE:
    case Referee_Command.BALL_PLACEMENT_BLUE:
      return true
  }
  return false
})

const commandForYellow = computed(() => {
  switch (refereeStore.refereeMsg.command) {
    case Referee_Command.PREPARE_KICKOFF_YELLOW:
    case Referee_Command.PREPARE_PENALTY_YELLOW:
    case Referee_Command.DIRECT_FREE_YELLOW:
    case Referee_Command.INDIRECT_FREE_YELLOW:
    case Referee_Command.TIMEOUT_YELLOW:
    case Referee_Command.GOAL_YELLOW:
    case Referee_Command.BALL_PLACEMENT_YELLOW:
      return true
  }
  return false
})

const stageTimeLeft = computed(() => {
  return refereeStore.refereeMsg.stageTimeLeft || 0n
})
</script>

<style scoped>
.match-status {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
}

.time-container {
  border-style: dashed;
  display: inline-block;
  padding: 0.1em;
  margin: 0.1em;
}

.time-positive {
  border-color: green;
  background-color: rgba(0, 255, 0, 0.1);
}

.time-negative {
  border-color: red;
  background-color: rgba(255, 0, 0, 0.1);
}

.separator {
  margin: 0.2em;
}

.score {
  white-space: nowrap;
  width: 100%;
  font-size: 3em;
}

.stage {
  margin-top: 1vh;
}

.command {
  margin-top: 3vmin;
}

.highlight-command {
  transition: background-color 500ms ease;
  border-radius: .5em;
  padding: 0.2em 0.1em 0.1em;
  margin-top: 0.1em;
}

.highlight-command.stop-command {
  background-color: #FF7000
}

.highlight-command.halt-command {
  background-color: #EE0022;
}

.highlight-command.robot-substitution-blue {
  background-color: #779fff;
  color: #353535;
}

.highlight-command.robot-substitution-yellow {
  background-color: #fff145;
  color: #353535;
}

.highlight-command.robot-substitution-both {
  background-image: linear-gradient(to right, #fff145 0%, #779fff 100%);
  color: #353535;
}
</style>