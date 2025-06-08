<template>
  <div class="match-status">
    <div class="stage">{{ stageName }}</div>
    <div class="command">{{ commandName }}</div>
    <div class="time">{{ formattedTime }}</div>
    <div class="score">
      <span class="yellow-score">{{ refereeStore.refereeMsg.yellow?.score || 0 }}</span>
      :
      <span class="blue-score">{{ refereeStore.refereeMsg.blue?.score || 0 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
import { formatDuration } from '@/helpers/timestamp'
import { Referee_Stage, Referee_Command } from '@/proto/ssl_gc_referee_message_pb'

const refereeStore = useRefereeStore()

const stageName = computed(() => {
  const stage = refereeStore.refereeMsg.stage
  switch (stage) {
    case Referee_Stage.NORMAL_FIRST_HALF_PRE:
      return 'First Half Pre'
    case Referee_Stage.NORMAL_FIRST_HALF:
      return 'First Half'
    case Referee_Stage.NORMAL_HALF_TIME:
      return 'Half Time'
    case Referee_Stage.NORMAL_SECOND_HALF_PRE:
      return 'Second Half Pre'
    case Referee_Stage.NORMAL_SECOND_HALF:
      return 'Second Half'
    case Referee_Stage.EXTRA_TIME_BREAK:
      return 'Extra Time Break'
    case Referee_Stage.EXTRA_FIRST_HALF_PRE:
      return 'Extra First Half Pre'
    case Referee_Stage.EXTRA_FIRST_HALF:
      return 'Extra First Half'
    case Referee_Stage.EXTRA_HALF_TIME:
      return 'Extra Half Time'
    case Referee_Stage.EXTRA_SECOND_HALF_PRE:
      return 'Extra Second Half Pre'
    case Referee_Stage.EXTRA_SECOND_HALF:
      return 'Extra Second Half'
    case Referee_Stage.PENALTY_SHOOTOUT_BREAK:
      return 'Penalty Shootout Break'
    case Referee_Stage.PENALTY_SHOOTOUT:
      return 'Penalty Shootout'
    case Referee_Stage.POST_GAME:
      return 'Post Game'
    default:
      return 'Unknown'
  }
})

const commandName = computed(() => {
  const command = refereeStore.refereeMsg.command
  switch (command) {
    case Referee_Command.HALT:
      return 'HALT'
    case Referee_Command.STOP:
      return 'STOP'
    case Referee_Command.NORMAL_START:
      return 'START'
    case Referee_Command.FORCE_START:
      return 'FORCE START'
    case Referee_Command.PREPARE_KICKOFF_YELLOW:
      return 'KICKOFF YELLOW'
    case Referee_Command.PREPARE_KICKOFF_BLUE:
      return 'KICKOFF BLUE'
    case Referee_Command.PREPARE_PENALTY_YELLOW:
      return 'PENALTY YELLOW'
    case Referee_Command.PREPARE_PENALTY_BLUE:
      return 'PENALTY BLUE'
    case Referee_Command.DIRECT_FREE_YELLOW:
      return 'FREE KICK YELLOW'
    case Referee_Command.DIRECT_FREE_BLUE:
      return 'FREE KICK BLUE'
    case Referee_Command.TIMEOUT_YELLOW:
      return 'TIMEOUT YELLOW'
    case Referee_Command.TIMEOUT_BLUE:
      return 'TIMEOUT BLUE'
    case Referee_Command.BALL_PLACEMENT_YELLOW:
      return 'BALL PLACEMENT YELLOW'
    case Referee_Command.BALL_PLACEMENT_BLUE:
      return 'BALL PLACEMENT BLUE'
    default:
      return 'UNKNOWN'
  }
})

const formattedTime = computed(() => {
  const timeLeft = refereeStore.refereeMsg.stageTimeLeft || 0n
  return formatDuration(Number(timeLeft))
})
</script>

<style scoped>
.match-status {
  text-align: center;
  padding: 1em;
}

.stage {
  font-size: 0.8em;
  margin-bottom: 0.5em;
}

.command {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.time {
  font-size: 1.5em;
  margin-bottom: 0.5em;
  font-family: monospace;
}

.score {
  font-size: 2em;
  font-weight: bold;
}

.yellow-score {
  color: #ffcc00;
}

.blue-score {
  color: #0066cc;
}
</style>