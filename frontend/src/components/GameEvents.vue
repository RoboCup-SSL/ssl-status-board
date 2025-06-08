<template>
  <div class="game-events">
    <h3>Game Events</h3>
    <div v-if="events.length === 0" class="no-events">
      No game events
    </div>
    <div v-else class="events-list">
      <div v-for="(event, index) in events" :key="index" class="event">
        <div class="event-type">{{ getEventTypeName(event) }}</div>
        <div class="event-details">{{ getEventDetails(event) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRefereeStore } from '@/stores/referee'
import type { GameEvent } from '@/proto/ssl_gc_game_event_pb'
import { GameEvent_Type } from '@/proto/ssl_gc_game_event_pb'
import { Team } from '@/proto/ssl_gc_common_pb'

const refereeStore = useRefereeStore()

const events = computed(() => {
  return refereeStore.refereeMsg.gameEvents || []
})

const getEventTypeName = (event: GameEvent): string => {
  switch (event.type) {
    case GameEvent_Type.BALL_LEFT_FIELD_TOUCH_LINE:
      return 'Ball Left Field (Touch Line)'
    case GameEvent_Type.BALL_LEFT_FIELD_GOAL_LINE:
      return 'Ball Left Field (Goal Line)'
    case GameEvent_Type.AIMLESS_KICK:
      return 'Aimless Kick'
    case GameEvent_Type.ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA:
      return 'Attacker Too Close to Defense Area'
    case GameEvent_Type.DEFENDER_IN_DEFENSE_AREA:
      return 'Defender in Defense Area'
    case GameEvent_Type.BOUNDARY_CROSSING:
      return 'Boundary Crossing'
    case GameEvent_Type.KEEPER_HELD_BALL:
      return 'Keeper Held Ball'
    case GameEvent_Type.BOT_DRIBBLED_BALL_TOO_FAR:
      return 'Bot Dribbled Ball Too Far'
    case GameEvent_Type.BOT_PUSHED_BOT:
      return 'Bot Pushed Bot'
    case GameEvent_Type.BOT_HELD_BALL_DELIBERATELY:
      return 'Bot Held Ball Deliberately'
    case GameEvent_Type.BOT_TIPPED_OVER:
      return 'Bot Tipped Over'
    case GameEvent_Type.BOT_DROPPED_PARTS:
      return 'Bot Dropped Parts'
    case GameEvent_Type.ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA:
      return 'Attacker Touched Ball in Defense Area'
    case GameEvent_Type.BOT_KICKED_BALL_TOO_FAST:
      return 'Bot Kicked Ball Too Fast'
    case GameEvent_Type.BOT_CRASH_UNIQUE:
      return 'Bot Crash (Unique)'
    case GameEvent_Type.BOT_CRASH_DRAWN:
      return 'Bot Crash (Drawn)'
    case GameEvent_Type.DEFENDER_TOO_CLOSE_TO_KICK_POINT:
      return 'Defender Too Close to Kick Point'
    case GameEvent_Type.BOT_TOO_FAST_IN_STOP:
      return 'Bot Too Fast in Stop'
    case GameEvent_Type.BOT_INTERFERED_PLACEMENT:
      return 'Bot Interfered Placement'
    case GameEvent_Type.POSSIBLE_GOAL:
      return 'Possible Goal'
    case GameEvent_Type.GOAL:
      return 'Goal'
    case GameEvent_Type.INVALID_GOAL:
      return 'Invalid Goal'
    case GameEvent_Type.ATTACKER_DOUBLE_TOUCHED_BALL:
      return 'Attacker Double Touched Ball'
    case GameEvent_Type.PLACEMENT_SUCCEEDED:
      return 'Placement Succeeded'
    case GameEvent_Type.PENALTY_KICK_FAILED:
      return 'Penalty Kick Failed'
    case GameEvent_Type.NO_PROGRESS_IN_GAME:
      return 'No Progress in Game'
    case GameEvent_Type.PLACEMENT_FAILED:
      return 'Placement Failed'
    case GameEvent_Type.MULTIPLE_CARDS:
      return 'Multiple Cards'
    case GameEvent_Type.MULTIPLE_FOULS:
      return 'Multiple Fouls'
    case GameEvent_Type.BOT_SUBSTITUTION:
      return 'Bot Substitution'
    case GameEvent_Type.EXCESSIVE_BOT_SUBSTITUTION:
      return 'Excessive Bot Substitution'
    case GameEvent_Type.TOO_MANY_ROBOTS:
      return 'Too Many Robots'
    case GameEvent_Type.CHALLENGE_FLAG:
      return 'Challenge Flag'
    case GameEvent_Type.CHALLENGE_FLAG_HANDLED:
      return 'Challenge Flag Handled'
    case GameEvent_Type.EMERGENCY_STOP:
      return 'Emergency Stop'
    case GameEvent_Type.UNSPORTING_BEHAVIOR_MINOR:
      return 'Unsporting Behavior (Minor)'
    case GameEvent_Type.UNSPORTING_BEHAVIOR_MAJOR:
      return 'Unsporting Behavior (Major)'
    default:
      return 'Unknown Event'
  }
}

const getEventDetails = (event: GameEvent): string => {
  // Get team name helper
  const getTeamName = (team: Team): string => {
    switch (team) {
      case Team.YELLOW: return 'Yellow'
      case Team.BLUE: return 'Blue'
      default: return 'Unknown'
    }
  }

  // Extract common details based on event type
  switch (event.type) {
    case GameEvent_Type.GOAL:
      if (event.event.case === 'goal') {
        const goalEvent = event.event.value
        return `Team: ${getTeamName(goalEvent.byTeam)}, Bot: ${goalEvent.kickingBot || 'Unknown'}`
      }
      break
    case GameEvent_Type.BOT_KICKED_BALL_TOO_FAST:
      if (event.event.case === 'botKickedBallTooFast') {
        const kickEvent = event.event.value
        return `Team: ${getTeamName(kickEvent.byTeam)}, Bot: ${kickEvent.byBot || 'Unknown'}, Speed: ${kickEvent.initialBallSpeed?.toFixed(2) || 'Unknown'} m/s${kickEvent.chipped ? ' (chipped)' : ''}`
      }
      break
    case GameEvent_Type.BOT_SUBSTITUTION:
      if (event.event.case === 'botSubstitution') {
        const subEvent = event.event.value
        return `Team: ${getTeamName(subEvent.byTeam)}`
      }
      break
    case GameEvent_Type.ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA:
      if (event.event.case === 'attackerTooCloseToDefenseArea') {
        const attackEvent = event.event.value
        return `Team: ${getTeamName(attackEvent.byTeam)}, Bot: ${attackEvent.byBot || 'Unknown'}, Distance: ${attackEvent.distance?.toFixed(3) || 'Unknown'} m`
      }
      break
    case GameEvent_Type.BALL_LEFT_FIELD_TOUCH_LINE:
    case GameEvent_Type.BALL_LEFT_FIELD_GOAL_LINE:
      if (event.event.case === 'ballLeftFieldTouchLine' || event.event.case === 'ballLeftFieldGoalLine') {
        const ballEvent = event.event.value
        return `Team: ${getTeamName(ballEvent.byTeam)}, Bot: ${ballEvent.byBot || 'Unknown'}`
      }
      break
  }

  // Default: show origins if available
  if (event.origin && event.origin.length > 0) {
    return `Origin: ${event.origin.join(', ')}`
  }

  return 'No additional details'
}
</script>

<style scoped>
.game-events {
  padding: 1em;
  max-height: 300px;
  overflow-y: auto;
}

.no-events {
  color: #666;
  font-style: italic;
  text-align: center;
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.event {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5em;
  background-color: #f9f9f9;
}

.event-type {
  font-weight: bold;
  margin-bottom: 0.25em;
}

.event-details {
  font-size: 0.9em;
  color: #666;
}
</style>