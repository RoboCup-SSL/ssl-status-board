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

const coloredBotId = (team: Team, botNumber: number): string => {
  const teamLetter = team === Team.BLUE ? 'B' : 'Y'
  const teamClass = team === Team.BLUE ? 'team-blue' : 'team-yellow'
  return `<span class="${teamClass}">${teamLetter}${botNumber}</span>`
}

const botId = (event: { byTeam?: Team; byBot?: number }): string => {
  if (event.byTeam === undefined || event.byBot === undefined || !event.hasOwnProperty('byBot')) {
    return ''
  }
  return coloredBotId(event.byTeam, event.byBot)
}

const appendColoredBotId = (text: string, event: { byTeam?: Team; byBot?: number }): string => {
  const bot = botId(event)
  return bot ? `${text} (${bot})` : text
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
      return appendColoredBotId('Ball Placement Failed', event)
    }
    case 'placementSucceeded': {
      const event = gameEvent.event.value
      return appendColoredBotId('Ball Placement Succeeded', event)
    }
    case 'botSubstitution':
      return appendColoredBotId('Robot Substitution', gameEvent.event.value)
    case 'excessiveBotSubstitution':
      return appendColoredBotId('Excessive Robot Substitution', gameEvent.event.value)
    case 'tooManyRobots': {
      const event = gameEvent.event.value
      const bot = botId(event)
      const detail = `${event.numRobotsOnField} of ${event.numRobotsAllowed}`
      return bot ? `Too Many Robots (${bot} - ${detail})` : `Too Many Robots (${detail})`
    }
    case 'ballLeftFieldTouchLine':
      return appendColoredBotId('Ball out over touch line', gameEvent.event.value)
    case 'ballLeftFieldGoalLine':
      return appendColoredBotId('Ball out over goal line', gameEvent.event.value)
    case 'possibleGoal':
      return appendColoredBotId('Possible Goal', gameEvent.event.value)
    case 'goal':
      return appendColoredBotId('Goal scored', gameEvent.event.value)
    case 'invalidGoal': {
      const event = gameEvent.event.value
      return `${appendColoredBotId('Invalid Goal', event)}: ${event.message}`
    }
    case 'aimlessKick':
      return appendColoredBotId('Aimless Kick', gameEvent.event.value)
    case 'keeperHeldBall': {
      const event = gameEvent.event.value
      return appendColoredBotId('Keeper Held Ball', event)
    }
    case 'attackerDoubleTouchedBall':
      return appendColoredBotId('Double Touch', gameEvent.event.value)
    case 'attackerTouchedBallInDefenseArea':
      return appendColoredBotId('Attacker Touched Ball In Defense Area', gameEvent.event.value)
    case 'botDribbledBallTooFar':
      return appendColoredBotId('Excessive Dribbling', gameEvent.event.value)
    case 'botKickedBallTooFast': {
      const event = gameEvent.event.value
      const bot = botId(event)
      return bot
        ? `Ball Kicked Too Fast (${bot} - ${velocity(event.initialBallSpeed)})`
        : `Ball Kicked Too Fast (${velocity(event.initialBallSpeed)})`
    }
    case 'attackerTooCloseToDefenseArea': {
      const event = gameEvent.event.value
      const bot = botId(event)
      return bot
        ? `Robot Too Close To Defense Area (${bot} - ${distance(event.distance)})`
        : `Robot Too Close To Defense Area (${distance(event.distance)})`
    }
    case 'botInterferedPlacement':
      return appendColoredBotId('Ball Placement Interference', gameEvent.event.value)
    case 'botCrashDrawn': {
      const event = gameEvent.event.value
      let text = `Robot Crash: ${coloredBotId(Team.BLUE, event.botBlue)} and ${coloredBotId(Team.YELLOW, event.botYellow)}`
      if (event.crashSpeed > 0) {
        text += ` (${velocity(event.crashSpeed)})`
      }
      return text
    }
    case 'botCrashUnique': {
      const event = gameEvent.event.value
      const byTeam = event.byTeam
      const otherTeam = oppositeTeam(byTeam)
      let text = `Robot Crash: ${coloredBotId(byTeam, event.violator)} into ${coloredBotId(otherTeam, event.victim)}`
      if (event.crashSpeed > 0) {
        text += ` (${velocity(event.crashSpeed)})`
      }
      return text
    }
    case 'botPushedBot': {
      const event = gameEvent.event.value
      const byTeam = event.byTeam
      const otherTeam = oppositeTeam(byTeam)
      let text = `Pushing: ${coloredBotId(byTeam, event.violator)} pushed ${coloredBotId(otherTeam, event.victim)}`
      if (event.pushedDistance > 0) {
        text += ` (${distance(event.pushedDistance)})`
      }
      return text
    }
    case 'botHeldBallDeliberately': {
      const event = gameEvent.event.value
      return appendColoredBotId('Ball Holding', event)
    }
    case 'botTippedOver':
      return appendColoredBotId('Robot Tipped Over', gameEvent.event.value)
    case 'botDroppedParts':
      return appendColoredBotId('Robot Dropped Parts', gameEvent.event.value)
    case 'botTooFastInStop': {
      const event = gameEvent.event.value
      const bot = botId(event)
      return bot
        ? `Robot Stop Speed exceeded (${bot} - ${velocity(event.speed)})`
        : `Robot Stop Speed exceeded (${velocity(event.speed)})`
    }
    case 'defenderTooCloseToKickPoint': {
      const event = gameEvent.event.value
      const bot = botId(event)
      return bot
        ? `Defender Too Close To Ball (${bot} - ${distance(event.distance)})`
        : `Defender Too Close To Ball (${distance(event.distance)})`
    }
    case 'defenderInDefenseArea': {
      const event = gameEvent.event.value
      const bot = botId(event)
      return bot
        ? `Defender In Defense Area (${bot} - ${distance(event.distance)})`
        : `Defender In Defense Area (${distance(event.distance)})`
    }
    case 'multipleCards':
      return appendColoredBotId('Multiple Cards', gameEvent.event.value)
    case 'multipleFouls': {
      const event = gameEvent.event.value
      return (
        appendColoredBotId('Multiple Fouls', event) + ': ' +
        event.causedGameEvents.map((cause: GameEvent) => mapGameEventToText(cause)).join(', ')
      )
    }
    case 'unsportingBehaviorMinor': {
      const event = gameEvent.event.value
      return `${appendColoredBotId('Unsporting Behavior (Minor)', event)}: ${event.reason}`
    }
    case 'unsportingBehaviorMajor': {
      const event = gameEvent.event.value
      return `${appendColoredBotId('Unsporting Behavior (Major)', event)}: ${event.reason}`
    }
    case 'boundaryCrossing':
      return appendColoredBotId('Boundary Crossing', gameEvent.event.value)
    case 'penaltyKickFailed': {
      const event = gameEvent.event.value
      const reason = event.reason != null ? ': ' + event.reason : ''
      return appendColoredBotId('Penalty Kick Failed', event) + reason
    }
    case 'challengeFlag':
      return appendColoredBotId('Challenge Flag raised', gameEvent.event.value)
    case 'challengeFlagHandled': {
      const event = gameEvent.event.value
      if (event.accepted) {
        return appendColoredBotId('Challenge Accepted', event)
      }
      return appendColoredBotId('Challenge Rejected', event)
    }
    case 'emergencyStop':
      return appendColoredBotId('Emergency Stop executed', gameEvent.event.value)
    default:
      return 'unknown game event'
  }
}
