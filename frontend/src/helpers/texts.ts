import {Referee_Stage, Referee_Command} from '@/proto/ssl_gc_referee_message_pb'
import {Team} from '@/proto/ssl_gc_common_pb'
import {type GameEvent} from '@/proto/ssl_gc_game_event_pb'

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
    return 'Both'
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
const velocity = (v: number): string => {
  if (v <= 0) {
    return ''
  }
  return Number(Math.ceil(v * 10) / 10).toFixed(1) + 'm/s'
}

const distance = (v: number): string => {
  if (v <= 0) {
    return ''
  }
  return Number(Math.ceil(v * 100) / 100).toFixed(2) + 'm'
}

const formatDetails = (text: string, parts: string[], separator = ' - '): string => {
  const filtered = parts.filter(p => p !== '')
  return filtered.length > 0 ? `${text} (${filtered.join(separator)})` : text
}

export const mapGameEventToText = (gameEvent: GameEvent): string => {
  if (!gameEvent.event) {
    return 'unknown game event'
  }

  switch (gameEvent.event.case) {
    case 'noProgressInGame':
      return `No progress in game`
    case 'placementFailed': {
      const event = gameEvent.event.value
      return formatDetails('Ball placement failed', [botId(event)])
    }
    case 'placementSucceeded': {
      const event = gameEvent.event.value
      return formatDetails('Ball placement succeeded', [botId(event)])
    }
    case 'botSubstitution': {
      const event = gameEvent.event.value
      return formatDetails('Robot substitution', [botId(event)])
    }
    case 'excessiveBotSubstitution': {
      const event = gameEvent.event.value
      return formatDetails('Excessive robot substitution', [botId(event)])
    }
    case 'tooManyRobots': {
      const event = gameEvent.event.value
      const robotCount = `${event.numRobotsOnField} of ${event.numRobotsAllowed}`
      return formatDetails('Too many robots on the field', [botId(event), robotCount])
    }
    case 'ballLeftFieldTouchLine': {
      const event = gameEvent.event.value
      return formatDetails('Ball out over touch line', [botId(event)])
    }
    case 'ballLeftFieldGoalLine': {
      const event = gameEvent.event.value
      return formatDetails('Ball out over goal line', [botId(event)])
    }
    case 'possibleGoal': {
      const event = gameEvent.event.value
      return formatDetails('Possible goal', [botId(event)])
    }
    case 'goal': {
      const event = gameEvent.event.value
      return formatDetails('Goal scored', [botId(event)])
    }
    case 'invalidGoal': {
      const event = gameEvent.event.value
      const message = event.message
      return `${formatDetails('Invalid goal', [botId(event)])}: ${message}`
    }
    case 'aimlessKick': {
      const event = gameEvent.event.value
      return formatDetails('Robot kicked aimlessly', [botId(event)])
    }
    case 'keeperHeldBall': {
      const event = gameEvent.event.value
      return formatDetails('Keeper held ball', [botId(event)])
    }
    case 'attackerDoubleTouchedBall': {
      const event = gameEvent.event.value
      return formatDetails('Robot double touched ball', [botId(event)])
    }
    case 'attackerTouchedBallInDefenseArea': {
      const event = gameEvent.event.value
      return formatDetails('Attacker touched ball in defense area', [botId(event)])
    }
    case 'botDribbledBallTooFar': {
      const event = gameEvent.event.value
      return formatDetails('Robot dribbled ball too far', [botId(event)])
    }
    case 'botKickedBallTooFast': {
      const event = gameEvent.event.value
      const speed = velocity(event.initialBallSpeed)
      return formatDetails('Robot kicked ball too fast', [botId(event), speed])
    }
    case 'attackerTooCloseToDefenseArea': {
      const event = gameEvent.event.value
      const dist = distance(event.distance)
      return formatDetails('Attacker too close to defense area', [botId(event), dist])
    }
    case 'botInterferedPlacement': {
      const event = gameEvent.event.value
      return formatDetails('Robot interfered ball placement', [botId(event)])
    }
    case 'botCrashDrawn': {
      const event = gameEvent.event.value
      const bots = `${coloredBotId(Team.BLUE, event.botBlue)} and ${coloredBotId(Team.YELLOW, event.botYellow)}`
      const crashSpeed = event.crashSpeed > 0 ? velocity(event.crashSpeed) : ''
      return formatDetails('Robots crashed', [bots, crashSpeed])
    }
    case 'botCrashUnique': {
      const event = gameEvent.event.value
      const violator = coloredBotId(event.byTeam, event.violator)
      const victim = coloredBotId(oppositeTeam(event.byTeam), event.victim)
      const bots = (violator && victim) ? `${violator} into ${victim}` : ''
      const crashSpeed = event.crashSpeed > 0 ? velocity(event.crashSpeed) : ''
      return formatDetails('Robots crashed', [bots, crashSpeed])
    }
    case 'botPushedBot': {
      const event = gameEvent.event.value
      const violator = coloredBotId(event.byTeam, event.violator)
      const victim = coloredBotId(oppositeTeam(event.byTeam), event.victim)
      const dist = event.pushedDistance > 0 ? distance(event.pushedDistance) : ''
      const bots = `${violator} pushed ${victim}`
      return formatDetails('Robot pushed', [bots, dist])
    }
    case 'botHeldBallDeliberately': {
      const event = gameEvent.event.value
      return formatDetails('Robot held ball deliberately', [botId(event)])
    }
    case 'botTippedOver': {
      const event = gameEvent.event.value
      return formatDetails('Robot tipped over', [botId(event)])
    }
    case 'botDroppedParts': {
      const event = gameEvent.event.value
      return formatDetails('Robot dropped parts', [botId(event)])
    }
    case 'botTooFastInStop': {
      const event = gameEvent.event.value
      const speed = velocity(event.speed)
      return formatDetails('Robot exceeded stop speed', [botId(event), speed])
    }
    case 'defenderTooCloseToKickPoint': {
      const event = gameEvent.event.value
      const dist = distance(event.distance)
      return formatDetails('Defender too close to kick point', [botId(event), dist])
    }
    case 'defenderInDefenseArea': {
      const event = gameEvent.event.value
      const dist = distance(event.distance)
      return formatDetails('Defender touched ball in defense area', [botId(event), dist])
    }
    case 'multipleCards': {
      const event = gameEvent.event.value
      return formatDetails('Multiple yellow cards', [botId(event)])
    }
    case 'multipleFouls': {
      const event = gameEvent.event.value
      const causes = event.causedGameEvents.map((cause: GameEvent) => mapGameEventToText(cause)).join(', ')
      return formatDetails('Multiple fouls', [botId(event)]) + ': ' + causes
    }
    case 'unsportingBehaviorMinor': {
      const event = gameEvent.event.value
      const reason = event.reason
      return `${formatDetails('Unsporting behavior (minor)', [botId(event)])}: ${reason}`
    }
    case 'unsportingBehaviorMajor': {
      const event = gameEvent.event.value
      const reason = event.reason
      return `${formatDetails('Unsporting behavior (major)', [botId(event)])}: ${reason}`
    }
    case 'boundaryCrossing': {
      const event = gameEvent.event.value
      return formatDetails('Ball crossed boundary', [botId(event)])
    }
    case 'penaltyKickFailed': {
      const event = gameEvent.event.value
      const reason = event.reason != null ? ': ' + event.reason : ''
      return formatDetails('Penalty kick failed', [botId(event)]) + reason
    }
    case 'challengeFlag': {
      const event = gameEvent.event.value
      return formatDetails('Challenge flag raised', [botId(event)])
    }
    case 'challengeFlagHandled': {
      const event = gameEvent.event.value
      if (event.accepted) {
        return formatDetails('Challenge accepted', [botId(event)])
      }
      return formatDetails('Challenge rejected', [botId(event)])
    }
    case 'emergencyStop': {
      const event = gameEvent.event.value
      return formatDetails('Emergency stop executed', [botId(event)])
    }
    default:
      return 'unknown game event'
  }
}
