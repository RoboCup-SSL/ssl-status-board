import { Referee_Stage, Referee_Command } from '@/proto/ssl_gc_referee_message_pb'

const stageToText = new Map<Referee_Stage, string>([
  [Referee_Stage.NORMAL_FIRST_HALF_PRE, 'Match to be started'],
  [Referee_Stage.NORMAL_FIRST_HALF, '1st Half'],
  [Referee_Stage.NORMAL_HALF_TIME, 'Half Time'],
  [Referee_Stage.NORMAL_SECOND_HALF_PRE, '2nd Half'],
  [Referee_Stage.NORMAL_SECOND_HALF, '2nd Half'],
  [Referee_Stage.EXTRA_TIME_BREAK, 'Game goes into Overtime'],
  [Referee_Stage.EXTRA_FIRST_HALF_PRE, '1st Half (Overtime)'],
  [Referee_Stage.EXTRA_FIRST_HALF, '1st Half (Overtime)'],
  [Referee_Stage.EXTRA_HALF_TIME, 'Half Time (Overtime)'],
  [Referee_Stage.EXTRA_SECOND_HALF_PRE, '2nd Half (Overtime)'],
  [Referee_Stage.EXTRA_SECOND_HALF, '2nd Half (Overtime)'],
  [Referee_Stage.PENALTY_SHOOTOUT_BREAK, 'Prepare for Penalty Shootout'],
  [Referee_Stage.PENALTY_SHOOTOUT, 'Penalty Shootout'],
  [Referee_Stage.POST_GAME, 'Match finished'],
])

export const mapStageToText = (stage: Referee_Stage): string => {
  const text = stageToText.get(stage)
  if (text !== undefined) {
    return text
  }
  return `unknown stage: ${stage}`
}

const commandToText = new Map<Referee_Command, string>([
  [Referee_Command.HALT, 'Game is Halted'],
  [Referee_Command.STOP, 'Game is Stopped'],
  [Referee_Command.NORMAL_START, 'Game is Running'],
  [Referee_Command.FORCE_START, 'Game is Running'],
  [Referee_Command.PREPARE_KICKOFF_YELLOW, 'Kickoff'],
  [Referee_Command.PREPARE_KICKOFF_BLUE, 'Kickoff'],
  [Referee_Command.PREPARE_PENALTY_YELLOW, 'Penalty Kick'],
  [Referee_Command.PREPARE_PENALTY_BLUE, 'Penalty Kick'],
  [Referee_Command.DIRECT_FREE_YELLOW, 'Game is Running'],
  [Referee_Command.DIRECT_FREE_BLUE, 'Game is Running'],
  [Referee_Command.INDIRECT_FREE_YELLOW, 'Game is Running'],
  [Referee_Command.INDIRECT_FREE_BLUE, 'Game is Running'],
  [Referee_Command.TIMEOUT_YELLOW, 'Timeout'],
  [Referee_Command.TIMEOUT_BLUE, 'Timeout'],
  [Referee_Command.GOAL_YELLOW, 'Goal'],
  [Referee_Command.GOAL_BLUE, 'Goal'],
  [Referee_Command.BALL_PLACEMENT_YELLOW, 'Ball Placement'],
  [Referee_Command.BALL_PLACEMENT_BLUE, 'Ball Placement'],
])

export const mapCommandToText = (command: Referee_Command): string => {
  const text = commandToText.get(command)
  if (text !== undefined) {
    return text
  }
  return `unknown command: ${command}`
}

// Add the mapGameEventToText function from the old frontend
import type { GameEvent } from '@/proto/ssl_gc_game_event_pb'
import { Team } from '@/proto/ssl_gc_common_pb'

const oppositeTeam = (team: Team): Team => {
  if (team === Team.BLUE) {
    return Team.YELLOW
  } else if (team === Team.YELLOW) {
    return Team.BLUE
  }
  return Team.UNKNOWN
}

const formatTeam = (team: Team): string => {
  if (team === Team.BLUE) {
    return '<span class="team-blue">Blue</span>'
  } else if (team === Team.YELLOW) {
    return '<span class="team-yellow">Yellow</span>'
  }
  return 'Unknown'
}

const teamAndBot = (event: any): string => {
  if (event.byTeam === undefined) {
    return ''
  }
  if (event.byBot === undefined || !event.hasOwnProperty('byBot')) {
    return formatTeam(event.byTeam)
  }
  return formatTeam(event.byTeam) + ' ' + event.byBot
}

const radToDeg = (rad: number): string => {
  return Math.ceil(rad * 180 / Math.PI) + '°'
}

const velocity = (v: number): string => {
  return Number(Math.ceil(v * 10) / 10).toFixed(1) + 'm/s'
}

const distance = (v: number): string => {
  return Number(Math.ceil(v * 100) / 100).toFixed(2) + 'm'
}

const seconds = (v: number): string => {
  return Number(Math.ceil(v * 10) / 10).toFixed(1) + 's'
}

export const mapGameEventToText = (event: any): string => {
  // This is a simplified version - the full implementation would need
  // proper TypeScript typing for all the game event types
  if (event.prepared != null) {
    return `Prepared after ${seconds(event.prepared.timeTaken)}`
  }
  if (event.noProgressInGame != null) {
    return `No progress for ${seconds(event.noProgressInGame.time)}`
  }
  if (event.botSubstitution != null) {
    return `Team ${teamAndBot(event.botSubstitution)} substitutes robots`
  }
  if (event.ballLeftFieldTouchLine != null) {
    return `${teamAndBot(event.ballLeftFieldTouchLine)} kicked ball out via touch line`
  }
  if (event.ballLeftFieldGoalLine != null) {
    return `${teamAndBot(event.ballLeftFieldGoalLine)} kicked ball out via goal line`
  }
  if (event.goal != null) {
    return `${teamAndBot(event.goal)} has scored a goal`
  }
  if (event.botKickedBallTooFast != null) {
    return `${teamAndBot(event.botKickedBallTooFast)} kicked ball too fast` +
      `(${velocity(event.botKickedBallTooFast.initialBallSpeed)})`
  }
  if (event.attackerTooCloseToDefenseArea != null) {
    return `${teamAndBot(event.attackerTooCloseToDefenseArea)} too close to opponent defense area ` +
      `(${distance(event.attackerTooCloseToDefenseArea.distance)})`
  }
  // Add more cases as needed - this is a simplified version
  return 'Game event'
}