import type { Referee } from '@/proto/ssl_gc_referee_message_pb'
import { RefereeSchema } from '@/proto/ssl_gc_referee_message_pb'
import { useWebSocketProtobuf } from './websocket'

export function useReferee() {
  const { message: referee } = useWebSocketProtobuf<Referee>('/api/referee', RefereeSchema)

  return { referee }
}
