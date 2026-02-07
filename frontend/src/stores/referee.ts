import {defineStore} from 'pinia'
import {computed} from 'vue'
import {create} from '@bufbuild/protobuf'
import type {Referee, Referee_TeamInfo} from '../proto/ssl_gc_referee_message_pb'
import {Referee_TeamInfoSchema, RefereeSchema} from '../proto/ssl_gc_referee_message_pb'
import {useReferee} from '@/composables/referee'
import {Team} from '@/proto/ssl_gc_common_pb.ts'
import {GameEvent_Type} from "@/proto/ssl_gc_game_event_pb.ts";
import {ORIGIN_ERFORCE, ORIGIN_MAJORITY, ORIGIN_TIGERS, ORIGIN_UI} from "@/helpers/constants.ts";

export const useRefereeStore = defineStore('referee', () => {
  // Use the referee composable for WebSocket connection and protobuf decoding
  const { referee } = useReferee()

  // Create default referee message for fallback
  const createDefaultTeamInfo = (): Referee_TeamInfo => {
    return create(Referee_TeamInfoSchema, {
      name: '',
      score: 0,
      yellowCards: 0,
      yellowCardTimes: [],
      redCards: 0,
      timeouts: 0,
      timeoutTime: 0,
      goalkeeper: 0,
      foulCounter: 0,
      ballPlacementFailures: 0,
      canPlaceBall: false,
      maxAllowedBots: 11,
    })
  }

  const createDefaultReferee = (): Referee => {
    return create(RefereeSchema, {
      sourceIdentifier: '',
      matchType: 0,
      packetTimestamp: 0n,
      stage: 0,
      stageTimeLeft: 0n,
      command: 0,
      commandCounter: 0,
      commandTimestamp: 0n,
      yellow: createDefaultTeamInfo(),
      blue: createDefaultTeamInfo(),
      blueTeamOnPositiveHalf: false,
      nextCommand: undefined,
      gameEvents: [],
      gameEventProposals: [],
      currentActionTimeRemaining: 0n,
      statusMessage: '',
    })
  }

  // Development state for testing
  const createDevelopmentState = (): Referee => {
    const yellow = create(Referee_TeamInfoSchema, {
      // long name
      name: 'TIGERs Mannheim',
      score: 10,
      yellowCards: 10,
      yellowCardTimes: [15000000, 61000000, 120000000, 1],
      maxAllowedBots: 11,
    })

    const blue = create(Referee_TeamInfoSchema, {
      // short name
      name: 'SRC',
      score: 0,
      redCards: 5,
      maxAllowedBots: 6,
    })

    return create(RefereeSchema, {
      sourceIdentifier: 'dev',
      yellow,
      blue,
      stage: 6,
      command: 0,
      stageTimeLeft: 140000000n,
      gameEvents: [
        {
          type: GameEvent_Type.GOAL,
          origin: [ORIGIN_UI],
          createdTimestamp: 100000000n,
          event: {
            case: 'goal',
            value: {
              byTeam: Team.YELLOW,
              kickingBot: 5,
              kickingTeam: Team.YELLOW,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_CRASH_UNIQUE,
          origin: [ORIGIN_ERFORCE],
          createdTimestamp: 200000000n,
          event: {
            case: 'botCrashUnique',
            value: {
              byTeam: Team.BLUE,
              violator: 3,
              victim: 7,
              crashSpeed: 5.2,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_KICKED_BALL_TOO_FAST,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 300000000n,
          event: {
            case: 'botKickedBallTooFast',
            value: {
              byTeam: Team.YELLOW,
              byBot: 2,
              initialBallSpeed: 7.8,
              chipped: false,
            },
          },
        },
        {
          type: GameEvent_Type.DEFENDER_IN_DEFENSE_AREA,
          origin: [ORIGIN_TIGERS],
          createdTimestamp: 400000000n,
          event: {
            case: 'defenderInDefenseArea',
            value: {
              byTeam: Team.BLUE,
              byBot: 0,
              distance: 0.15,
            },
          },
        },
        {
          type: GameEvent_Type.UNSPORTING_BEHAVIOR_MINOR,
          origin: [ORIGIN_UI],
          createdTimestamp: 500000000n,
          event: {
            case: 'unsportingBehaviorMinor',
            value: {
              byTeam: Team.YELLOW,
              reason: 'Excessive celebration',
            },
          },
        },
        {
          type: GameEvent_Type.TOO_MANY_ROBOTS,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 600000000n,
          event: {
            case: 'tooManyRobots',
            value: {
              byTeam: Team.BLUE,
              numRobotsAllowed: 11,
              numRobotsOnField: 12,
            },
          },
        },
        {
          type: GameEvent_Type.PLACEMENT_SUCCEEDED,
          origin: [ORIGIN_TIGERS],
          createdTimestamp: 700000000n,
          event: {
            case: 'placementSucceeded',
            value: {
              byTeam: Team.YELLOW,
              timeTaken: 3.5,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_CRASH_DRAWN,
          origin: [ORIGIN_ERFORCE],
          createdTimestamp: 800000000n,
          event: {
            case: 'botCrashDrawn',
            value: {
              botYellow: 6,
              botBlue: 8,
              crashSpeed: 2.1,
            },
          },
        },
        {
          type: GameEvent_Type.PENALTY_KICK_FAILED,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 900000000n,
          event: {
            case: 'penaltyKickFailed',
            value: {
              byTeam: Team.BLUE,
              reason: 'Keeper stopped the ball',
            },
          },
        },
        {
          type: GameEvent_Type.BALL_LEFT_FIELD_GOAL_LINE,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 1000000000n,
          event: {
            case: 'ballLeftFieldGoalLine',
            value: {
              byTeam: Team.YELLOW,
              byBot: 1,
            },
          },
        },
        {
          type: GameEvent_Type.NO_PROGRESS_IN_GAME,
          origin: [ORIGIN_MAJORITY],
          createdTimestamp: 1100000000n,
          event: {
            case: 'noProgressInGame',
            value: {},
          },
        },
        {
          type: GameEvent_Type.PLACEMENT_FAILED,
          origin: [ORIGIN_TIGERS],
          createdTimestamp: 1200000000n,
          event: {
            case: 'placementFailed',
            value: {
              byTeam: Team.BLUE,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_SUBSTITUTION,
          origin: [ORIGIN_UI],
          createdTimestamp: 1300000000n,
          event: {
            case: 'botSubstitution',
            value: {
              byTeam: Team.YELLOW,
            },
          },
        },
        {
          type: GameEvent_Type.EXCESSIVE_BOT_SUBSTITUTION,
          origin: [ORIGIN_ERFORCE],
          createdTimestamp: 1400000000n,
          event: {
            case: 'excessiveBotSubstitution',
            value: {
              byTeam: Team.BLUE,
            },
          },
        },
        {
          type: GameEvent_Type.BALL_LEFT_FIELD_TOUCH_LINE,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 1500000000n,
          event: {
            case: 'ballLeftFieldTouchLine',
            value: {
              byTeam: Team.YELLOW,
              byBot: 3,
            },
          },
        },
        {
          type: GameEvent_Type.POSSIBLE_GOAL,
          origin: [ORIGIN_MAJORITY],
          createdTimestamp: 1600000000n,
          event: {
            case: 'possibleGoal',
            value: {
              byTeam: Team.BLUE,
            },
          },
        },
        {
          type: GameEvent_Type.INVALID_GOAL,
          origin: [ORIGIN_UI],
          createdTimestamp: 1700000000n,
          event: {
            case: 'invalidGoal',
            value: {
              byTeam: Team.BLUE,
              message: 'Ball never fully crossed goal line',
            },
          },
        },
        {
          type: GameEvent_Type.AIMLESS_KICK,
          origin: [ORIGIN_TIGERS],
          createdTimestamp: 1800000000n,
          event: {
            case: 'aimlessKick',
            value: {
              byTeam: Team.YELLOW,
              byBot: 7,
            },
          },
        },
        {
          type: GameEvent_Type.KEEPER_HELD_BALL,
          origin: [ORIGIN_ERFORCE],
          createdTimestamp: 1900000000n,
          event: {
            case: 'keeperHeldBall',
            value: {
              byTeam: Team.BLUE,
            },
          },
        },
        {
          type: GameEvent_Type.ATTACKER_DOUBLE_TOUCHED_BALL,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 2000000000n,
          event: {
            case: 'attackerDoubleTouchedBall',
            value: {
              byTeam: Team.YELLOW,
              byBot: 2,
            },
          },
        },
        {
          type: GameEvent_Type.ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA,
          origin: [ORIGIN_UI],
          createdTimestamp: 2100000000n,
          event: {
            case: 'attackerTouchedBallInDefenseArea',
            value: {
              byTeam: Team.BLUE,
              byBot: 6,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_DRIBBLED_BALL_TOO_FAR,
          origin: [ORIGIN_MAJORITY],
          createdTimestamp: 2200000000n,
          event: {
            case: 'botDribbledBallTooFar',
            value: {
              byTeam: Team.YELLOW,
            },
          },
        },
        {
          type: GameEvent_Type.ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA,
          origin: [ORIGIN_TIGERS],
          createdTimestamp: 2300000000n,
          event: {
            case: 'attackerTooCloseToDefenseArea',
            value: {
              byTeam: Team.BLUE,
              byBot: 4,
              distance: 0.08,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_INTERFERED_PLACEMENT,
          origin: [ORIGIN_ERFORCE],
          createdTimestamp: 2400000000n,
          event: {
            case: 'botInterferedPlacement',
            value: {
              byTeam: Team.BLUE,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_PUSHED_BOT,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 2500000000n,
          event: {
            case: 'botPushedBot',
            value: {
              byTeam: Team.YELLOW,
              violator: 5,
              victim: 2,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_HELD_BALL_DELIBERATELY,
          origin: [ORIGIN_UI],
          createdTimestamp: 2600000000n,
          event: {
            case: 'botHeldBallDeliberately',
            value: {
              byTeam: Team.BLUE,
              byBot: 10,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_TIPPED_OVER,
          origin: [ORIGIN_MAJORITY],
          createdTimestamp: 2700000000n,
          event: {
            case: 'botTippedOver',
            value: {
              byTeam: Team.YELLOW,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_DROPPED_PARTS,
          origin: [ORIGIN_TIGERS],
          createdTimestamp: 2800000000n,
          event: {
            case: 'botDroppedParts',
            value: {
              byTeam: Team.BLUE,
              byBot: 7,
            },
          },
        },
        {
          type: GameEvent_Type.BOT_TOO_FAST_IN_STOP,
          origin: [ORIGIN_ERFORCE],
          createdTimestamp: 2900000000n,
          event: {
            case: 'botTooFastInStop',
            value: {
              byTeam: Team.YELLOW,
              byBot: 3,
              speed: 2.5,
            },
          },
        },
        {
          type: GameEvent_Type.DEFENDER_TOO_CLOSE_TO_KICK_POINT,
          origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
          createdTimestamp: 3000000000n,
          event: {
            case: 'defenderTooCloseToKickPoint',
            value: {
              byTeam: Team.BLUE,
              byBot: 1,
            },
          },
        },
        {
          type: GameEvent_Type.MULTIPLE_CARDS,
          origin: [ORIGIN_UI],
          createdTimestamp: 3100000000n,
          event: {
            case: 'multipleCards',
            value: {
              byTeam: Team.YELLOW,
            },
          },
        },
        {
          type: GameEvent_Type.MULTIPLE_FOULS,
          origin: [ORIGIN_MAJORITY],
          createdTimestamp: 3200000000n,
          event: {
            case: 'multipleFouls',
            value: {
              byTeam: Team.BLUE,
              causedGameEvents: [
                {
                  type: GameEvent_Type.AIMLESS_KICK,
                  origin: [ORIGIN_TIGERS],
                  createdTimestamp: 3200000000n,
                  event: {
                    case: 'aimlessKick',
                    value: {
                      byTeam: Team.BLUE,
                    },
                  },
                },
                {
                  type: GameEvent_Type.KEEPER_HELD_BALL,
                  origin: [ORIGIN_ERFORCE],
                  createdTimestamp: 3200000000n,
                  event: {
                    case: 'keeperHeldBall',
                    value: {
                      byTeam: Team.BLUE,
                    },
                  },
                },
                {
                  type: GameEvent_Type.ATTACKER_DOUBLE_TOUCHED_BALL,
                  origin: [ORIGIN_TIGERS, ORIGIN_ERFORCE],
                  createdTimestamp: 3200000000n,
                  event: {
                    case: 'attackerDoubleTouchedBall',
                    value: {
                      byTeam: Team.BLUE,
                      byBot: 4,
                    },
                  },
                },
              ],
            },
          },
        },
        {
          type: GameEvent_Type.UNSPORTING_BEHAVIOR_MAJOR,
          origin: [ORIGIN_UI],
          createdTimestamp: 3300000000n,
          event: {
            case: 'unsportingBehaviorMajor',
            value: {
              byTeam: Team.BLUE,
              reason: 'Intentional damage to opponent',
            },
          },
        },
        {
          type: GameEvent_Type.BOUNDARY_CROSSING,
          origin: [ORIGIN_TIGERS],
          createdTimestamp: 3400000000n,
          event: {
            case: 'boundaryCrossing',
            value: {
              byTeam: Team.BLUE,
            },
          },
        },
        {
          type: GameEvent_Type.CHALLENGE_FLAG,
          origin: [ORIGIN_ERFORCE],
          createdTimestamp: 3500000000n,
          event: {
            case: 'challengeFlag',
            value: {
              byTeam: Team.YELLOW,
            },
          },
        },
        {
          type: GameEvent_Type.CHALLENGE_FLAG_HANDLED,
          origin: [ORIGIN_UI],
          createdTimestamp: 3600000000n,
          event: {
            case: 'challengeFlagHandled',
            value: {
              byTeam: Team.BLUE,
              accepted: true,
            },
          },
        },
        {
          type: GameEvent_Type.EMERGENCY_STOP,
          origin: [ORIGIN_MAJORITY],
          createdTimestamp: 3700000000n,
          event: {
            case: 'emergencyStop',
            value: {
              byTeam: Team.YELLOW,
            },
          },
        },
      ],
      packetTimestamp: 0n,
      commandTimestamp: 0n,
      commandCounter: 0,
      matchType: 0,
    })
  }

  // Get the current referee message, using WebSocket data or fallback to default state
  const refereeMsg = computed(() => {
    // Always prefer WebSocket data when available
    if (referee.value) {
      return referee.value
    }
    // Fallback: In development, show sample data; in production, show empty state
    return import.meta.env.DEV ? createDevelopmentState() : createDefaultReferee()
  })

  return {
    refereeMsg,
  }
})
