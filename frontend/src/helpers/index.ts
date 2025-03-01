import {type TeamJson} from "@/proto/ssl_gc_common_pb";
import {type GameEventJson} from "@/proto/ssl_gc_game_event_pb";
import {fromJson} from "@bufbuild/protobuf";
import {
  type DurationJson,
  DurationSchema,
  type TimestampJson,
  timestampMs,
  TimestampSchema
} from "@bufbuild/protobuf/wkt";
import formatDuration from "format-duration";
import dayjs from "dayjs";

export const teams: TeamJson[] = ['YELLOW', 'BLUE']

export const opponent = (team: TeamJson) => {
  switch (team) {
    case 'BLUE':
      return 'YELLOW'
    case 'YELLOW':
      return 'BLUE'
    default:
      return team
  }
}

export const teamOptions = [
  {label: 'Yellow', value: 'YELLOW'},
  {label: 'Blue', value: 'BLUE'}
]

export function gameEventForTeam(gameEvent: GameEventJson): TeamJson {
  for (const value of Object.values(gameEvent)) {
    if (typeof value === 'object') {
      const attr = value as { [key: string]: any }
      for (const key of Object.keys(attr)) {
        if (key === 'byTeam') {
          return attr['byTeam'] as TeamJson
        }
      }
    }
  }
  return 'UNKNOWN' as TeamJson
}

export function gameEventDetails(gameEventJson: GameEventJson) {

  return gameEventJson as { [key: string]: any }
}

export const formatDurationJson = function (duration: DurationJson): string {
  const dur = fromJson(DurationSchema, duration)
  const milliseconds = Number(dur.seconds) * 1000 + dur.nanos / 1000000
  return formatDuration(milliseconds)
}

export const durationSeconds = function (duration: DurationJson): number {
  const dur = fromJson(DurationSchema, duration)
  return Number(dur.seconds) + dur.nanos / 1000000000.0
}

export const timestampJsonMs = function (timestamp: TimestampJson): number {
  const ts = fromJson(TimestampSchema, timestamp)
  return timestampMs(ts)
}

export const formatTimestamp = function (timestamp: TimestampJson): string {
  return dayjs(timestamp).format("MMM, DD YYYY HH:mm:ss,SSS")
}
