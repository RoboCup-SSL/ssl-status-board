import { Referee_Stage, Referee_Command } from '@/proto/ssl_gc_referee_message_pb'
import { Team } from '@/proto/ssl_gc_common_pb'
import { type GameEvent } from '@/proto/ssl_gc_game_event_pb'

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
  return ''
}

export const formatTeamFromGameEvent = (gameEvent: GameEvent): string => {
  if (!gameEvent.event) return ''

  const event = gameEvent.event.value
  if (!event || typeof event !== 'object') return ''

  // Check if the event has a byTeam property
  const byTeam = 'byTeam' in event ? (event.byTeam as Team) : undefined

  if (byTeam === undefined) {
    return ''
  }
  return formatTeam(byTeam)
}

const teamAndBot = (event: { byTeam?: Team; byBot?: number }): string => {
  if (event.byTeam === undefined) {
    return ''
  }
  if (event.byBot === undefined || !event.hasOwnProperty('byBot')) {
    return formatTeam(event.byTeam)
  }
  return formatTeam(event.byTeam) + ' ' + event.byBot
}

const velocity = (v: number): string => {
  return Number(Math.ceil(v * 10) / 10).toFixed(1) + 'm/s'
}

const distance = (v: number): string => {
  return Number(Math.ceil(v * 100) / 100).toFixed(2) + 'm'
}


export const mapGameEventToText = (gameEvent: GameEvent): string => {
  if (!gameEvent.event) {
    return 'unknown game event'
  }

  switch (gameEvent.event.case) {
    case 'noProgressInGame':
      return `No Progress In Game`
    case 'placementFailed': {
      const event = gameEvent.event.value
      return `Ball Placement Failed by ${teamAndBot(event)}`
    }
    case 'placementSucceeded': {
      const event = gameEvent.event.value
      return `Ball Placement Succeeded by ${teamAndBot(event)}`
    }
    case 'botSubstitution':
      return `Robot Substitution by ${teamAndBot(gameEvent.event.value)}`
    case 'excessiveBotSubstitution':
      return `Excessive Robot Substitution by ${teamAndBot(gameEvent.event.value)}`
    case 'tooManyRobots': {
      const event = gameEvent.event.value
      return `Too Many Robots by ${teamAndBot(event)} (${event.numRobotsOnField} of ${event.numRobotsAllowed})`
    }
    case 'ballLeftFieldTouchLine':
      return `Ball out over touch line by ${teamAndBot(gameEvent.event.value)}`
    case 'ballLeftFieldGoalLine':
      return `Ball out over goal line by ${teamAndBot(gameEvent.event.value)}`
    case 'possibleGoal':
      return `Possible Goal by ${teamAndBot(gameEvent.event.value)}`
    case 'goal':
      return `Goal scored by ${teamAndBot(gameEvent.event.value)}`
    case 'invalidGoal': {
      const event = gameEvent.event.value
      return `Invalid Goal by ${teamAndBot(event)}: ${event.message}`
    }
    case 'aimlessKick':
      return `Aimless Kick by ${teamAndBot(gameEvent.event.value)}`
    case 'keeperHeldBall': {
      const event = gameEvent.event.value
      return `Keeper Held Ball by ${teamAndBot(event)}`
    }
    case 'attackerDoubleTouchedBall':
      return `Double Touch by ${teamAndBot(gameEvent.event.value)}`
    case 'attackerTouchedBallInDefenseArea':
      return `Attacker Touched Ball In Defense Area by ${teamAndBot(gameEvent.event.value)}`
    case 'botDribbledBallTooFar':
      return `Excessive Dribbling by ${teamAndBot(gameEvent.event.value)}`
    case 'botKickedBallTooFast': {
      const event = gameEvent.event.value
      return `Ball Kicked Too Fast by ${teamAndBot(event)} (${velocity(event.initialBallSpeed)})`
    }
    case 'attackerTooCloseToDefenseArea': {
      const event = gameEvent.event.value
      return `Robot Too Close To Defense Area by ${teamAndBot(event)} (${distance(event.distance)})`
    }
    case 'botInterferedPlacement':
      return `Ball Placement Interference by ${teamAndBot(gameEvent.event.value)}`
    case 'botCrashDrawn': {
      const event = gameEvent.event.value
      let text = `Robot Crash: Blue ${event.botBlue} and Yellow ${event.botYellow}`
      if (event.crashSpeed > 0) {
        text += ` (${velocity(event.crashSpeed)})`
      }
      return text
    }
    case 'botCrashUnique': {
      const event = gameEvent.event.value
      const byTeam = event.byTeam
      const otherTeam = oppositeTeam(byTeam)
      let text = `Robot Crash: ${formatTeam(byTeam)} ${event.violator} into ${formatTeam(otherTeam)} ${event.victim}`
      if (event.crashSpeed > 0) {
        text += ` (${velocity(event.crashSpeed)})`
      }
      return text
    }
    case 'botPushedBot': {
      const event = gameEvent.event.value
      const byTeam = event.byTeam
      const otherTeam = oppositeTeam(byTeam)
      let text = `Pushing: ${formatTeam(byTeam)} ${event.violator} pushed ${formatTeam(otherTeam)} ${event.victim}`
      if (event.pushedDistance > 0) {
        text += ` (${distance(event.pushedDistance)})`
      }
      return text
    }
    case 'botHeldBallDeliberately': {
      const event = gameEvent.event.value
      return `Ball Holding by ${teamAndBot(event)}`
    }
    case 'botTippedOver':
      return `Robot Tipped Over by ${teamAndBot(gameEvent.event.value)}`
    case 'botDroppedParts':
      return `Robot Dropped Parts by ${teamAndBot(gameEvent.event.value)}`
    case 'botTooFastInStop': {
      const event = gameEvent.event.value
      return `Robot Stop Speed exceeded by ${teamAndBot(event)} (${velocity(event.speed)})`
    }
    case 'defenderTooCloseToKickPoint': {
      const event = gameEvent.event.value
      return `Defender Too Close To Ball by ${teamAndBot(event)} (${distance(event.distance)})`
    }
    case 'defenderInDefenseArea': {
      const event = gameEvent.event.value
      return `Defender In Defense Area by ${teamAndBot(event)} (${distance(event.distance)})`
    }
    case 'multipleCards':
      return `Multiple Cards by ${teamAndBot(gameEvent.event.value)}`
    case 'multipleFouls': {
      const event = gameEvent.event.value
      return (
        `Multiple Fouls by ${teamAndBot(event)}: ` +
        event.causedGameEvents.map((cause: GameEvent) => mapGameEventToText(cause)).join(', ')
      )
    }
    case 'unsportingBehaviorMinor': {
      const event = gameEvent.event.value
      return `Unsporting Behavior (Minor) by ${teamAndBot(event)}: ${event.reason}`
    }
    case 'unsportingBehaviorMajor': {
      const event = gameEvent.event.value
      return `Unsporting Behavior (Major) by ${teamAndBot(event)}: ${event.reason}`
    }
    case 'boundaryCrossing':
      return `Boundary Crossing by ${teamAndBot(gameEvent.event.value)}`
    case 'penaltyKickFailed': {
      const event = gameEvent.event.value
      const reason = event.reason != null ? ': ' + event.reason : ''
      return `Penalty Kick Failed by ${teamAndBot(event)}${reason}`
    }
    case 'challengeFlag':
      return `Challenge Flag raised by ${teamAndBot(gameEvent.event.value)}`
    case 'challengeFlagHandled': {
      const event = gameEvent.event.value
      if (event.accepted) {
        return `Challenge Accepted by ${teamAndBot(event)}`
      }
      return `Challenge Rejected by ${teamAndBot(event)}`
    }
    case 'emergencyStop':
      return `Emergency Stop executed by ${teamAndBot(gameEvent.event.value)}`
    default:
      return 'unknown game event'
  }
}
