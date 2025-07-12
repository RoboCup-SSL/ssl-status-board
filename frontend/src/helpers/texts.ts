import { Referee_Stage, Referee_Command } from '@/proto/ssl_gc_referee_message_pb'
import { Team } from '@/proto/ssl_gc_common_pb'
import {
  type GameEvent,
  type GameEvent_BotCrashDrawn,
  type GameEvent_BotCrashUnique,
} from '@/proto/ssl_gc_game_event_pb'

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
  return 'Unknown'
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

const radToDeg = (rad: number): string => {
  return Math.ceil((rad * 180) / Math.PI) + '°'
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

function appendCrashDetails(
  event: GameEvent_BotCrashDrawn | GameEvent_BotCrashUnique,
  text: string,
) {
  const crashSpeed = event.crashSpeed
  const crashAngle = event.crashAngle
  const speedDiff = event.speedDiff
  if (crashSpeed > 0) {
    text += ` with ${velocity(crashSpeed)}`
  }
  if (crashAngle > 0) {
    text += ` @ ${radToDeg(crashAngle)}`
  }
  if (speedDiff > 0) {
    text += ` (Δ ${velocity(speedDiff)})`
  }
  return text
}

export const mapGameEventToText = (gameEvent: GameEvent): string => {
  if (!gameEvent.event) {
    return 'unknown game event'
  }

  switch (gameEvent.event.case) {
    case 'noProgressInGame':
      return `No progress for ${seconds(gameEvent.event.value.time)}`
    case 'placementFailed': {
      const event = gameEvent.event.value
      if (event.nearestOwnBotDistance != null) {
        return (
          `${teamAndBot(event)} failed placing ball ` +
          ` (${distance(event.remainingDistance)} remaining, ` +
          `nearest own bot at ${distance(event.nearestOwnBotDistance)})`
        )
      }
      return (
        `${teamAndBot(event)} failed placing ball ` +
        ` (${distance(event.remainingDistance)} remaining)`
      )
    }
    case 'placementSucceeded': {
      const event = gameEvent.event.value
      return (
        `${teamAndBot(event)} placed ball successfully ` +
        `over ${distance(event.distance)} ` +
        `within ${seconds(event.timeTaken)} ` +
        `and ${distance(event.precision)}`
      )
    }
    case 'botSubstitution':
      return `Team ${teamAndBot(gameEvent.event.value)} substitutes robots`
    case 'excessiveBotSubstitution':
      return `Team ${teamAndBot(gameEvent.event.value)} excessively substituted robots`
    case 'tooManyRobots': {
      const event = gameEvent.event.value
      return (
        `${teamAndBot(event)} has ${event.numRobotsOnField} robots on the field, ` +
        `but only ${event.numRobotsAllowed} are allowed`
      )
    }
    case 'ballLeftFieldTouchLine':
      return `${teamAndBot(gameEvent.event.value)} kicked ball out via touch line`
    case 'ballLeftFieldGoalLine':
      return `${teamAndBot(gameEvent.event.value)} kicked ball out via goal line`
    case 'possibleGoal':
      return `${teamAndBot(gameEvent.event.value)} might have scored a goal`
    case 'goal':
      return `${teamAndBot(gameEvent.event.value)} has scored a goal`
    case 'invalidGoal': {
      const event = gameEvent.event.value
      return `Scored goal by ${teamAndBot(event)} is invalid: ${event.message}`
    }
    case 'aimlessKick':
      return `${teamAndBot(gameEvent.event.value)} kicked aimlessly`
    case 'keeperHeldBall': {
      const event = gameEvent.event.value
      return `${teamAndBot(event)}'s keeper held the ball for ${seconds(event.duration)}`
    }
    case 'attackerDoubleTouchedBall':
      return `${teamAndBot(gameEvent.event.value)} touched ball twice`
    case 'attackerTouchedBallInDefenseArea':
      return `${teamAndBot(gameEvent.event.value)} touched ball in opponent defense area`
    case 'botDribbledBallTooFar':
      return `${teamAndBot(gameEvent.event.value)} dribbled ball too far`
    case 'botKickedBallTooFast': {
      const event = gameEvent.event.value
      return `${teamAndBot(event)} kicked ball too fast(${velocity(event.initialBallSpeed)})`
    }
    case 'attackerTooCloseToDefenseArea': {
      const event = gameEvent.event.value
      return `${teamAndBot(event)} too close to opponent defense area (${distance(event.distance)})`
    }
    case 'botInterferedPlacement':
      return `${teamAndBot(gameEvent.event.value)} interfered placement`
    case 'botCrashDrawn': {
      const event = gameEvent.event.value
      const text = `Bot Blue ${event.botBlue} and Yellow ${event.botYellow} crashed`
      return appendCrashDetails(event, text)
    }
    case 'botCrashUnique': {
      const event = gameEvent.event.value
      const byTeam = event.byTeam
      const otherTeam = oppositeTeam(byTeam)
      const violator = event.violator
      const victim = event.victim
      const text = `${formatTeam(byTeam)} ${violator} crashed into ${formatTeam(otherTeam)} ${victim}`
      return appendCrashDetails(event, text)
    }
    case 'botPushedBot': {
      const event = gameEvent.event.value
      const byTeam = event.byTeam
      const otherTeam = oppositeTeam(byTeam)
      const violator = event.violator
      const victim = event.victim
      const dist = event.pushedDistance
      let text = `${formatTeam(byTeam)} ${violator} pushed ${formatTeam(otherTeam)} ${victim}`
      if (dist > 0) {
        text += ` over ${distance(dist)}`
      }
      return text
    }
    case 'botHeldBallDeliberately': {
      const event = gameEvent.event.value
      return `${teamAndBot(event)} held ball deliberately for ${event.duration}`
    }
    case 'botTippedOver':
      return `${teamAndBot(gameEvent.event.value)} tipped over`
    case 'botDroppedParts':
      return `${teamAndBot(gameEvent.event.value)} dropped parts`
    case 'botTooFastInStop': {
      const event = gameEvent.event.value
      return `${teamAndBot(event)} too fast during stop (${velocity(event.speed)})`
    }
    case 'defenderTooCloseToKickPoint': {
      const event = gameEvent.event.value
      return `${teamAndBot(event)} too close to kick point (${distance(event.distance)})`
    }
    case 'defenderInDefenseArea': {
      const event = gameEvent.event.value
      return `${teamAndBot(event)} touched ball while fully inside own defense area (${distance(event.distance)})`
    }
    case 'multipleCards':
      return `${teamAndBot(gameEvent.event.value)} collected multiple cards`
    case 'multipleFouls': {
      const event = gameEvent.event.value
      return (
        `${teamAndBot(event)} collected multiple fouls: ` +
        event.causedGameEvents.map((cause: GameEvent) => mapGameEventToText(cause)).join(', ')
      )
    }
    case 'unsportingBehaviorMinor': {
      const event = gameEvent.event.value
      return `Unsporting behavior by ${teamAndBot(event)}: ${event.reason}`
    }
    case 'unsportingBehaviorMajor': {
      const event = gameEvent.event.value
      return `Major unsporting behavior by ${teamAndBot(event)}: ${event.reason}`
    }
    case 'boundaryCrossing':
      return `${teamAndBot(gameEvent.event.value)} kicked the ball over the field boundary`
    case 'penaltyKickFailed': {
      const event = gameEvent.event.value
      const reason = event.reason != null ? ': ' + event.reason : ''
      return `Penalty kick failed by ${teamAndBot(event)}${reason}`
    }
    case 'challengeFlag':
      return `${teamAndBot(gameEvent.event.value)} raised a challenge flag`
    case 'challengeFlagHandled': {
      const event = gameEvent.event.value
      if (event.accepted) {
        return `Challenge from ${teamAndBot(event)} accepted`
      }
      return `Challenge from ${teamAndBot(event)} rejected`
    }
    case 'emergencyStop':
      return `Emergency stop for ${teamAndBot(gameEvent.event.value)} executed`
    default:
      return 'unknown game event'
  }
}
