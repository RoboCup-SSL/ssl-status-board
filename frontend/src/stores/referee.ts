import {defineStore} from 'pinia'
import {computed} from 'vue'
import {create} from '@bufbuild/protobuf'
import type {Referee, Referee_TeamInfo} from '../proto/ssl_gc_referee_message_pb'
import {Referee_TeamInfoSchema, RefereeSchema} from '../proto/ssl_gc_referee_message_pb'
import {useReferee} from '@/composables/referee'
import {Team} from '@/proto/ssl_gc_common_pb.ts'
import {GameEvent_Type} from "@/proto/ssl_gc_game_event_pb.ts";
import {ORIGIN_ERFORCE, ORIGIN_TIGERS} from "@/helpers/constants.ts";

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
      name: 'Yellow',
      score: 0,
      yellowCards: 10,
      yellowCardTimes: [15000000, 61000000, 120000000, 1],
      maxAllowedBots: 11,
    })

    const blue = create(Referee_TeamInfoSchema, {
      name: 'Blue',
      score: 10,
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
          origin: [ORIGIN_TIGERS],
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
          origin: [ORIGIN_ERFORCE],
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
