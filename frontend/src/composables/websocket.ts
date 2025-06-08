import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { computedAsync, useWebSocket } from '@vueuse/core'
import { fromBinary, type Message } from '@bufbuild/protobuf'
import type { GenMessage } from '@bufbuild/protobuf/codegenv1'

function determineWebSocketAddress(path: string): string {
  const isDev = import.meta.env.DEV
  
  if (isDev) {
    return `ws://localhost:8082${path}`
  }
  
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  return `${protocol}//${window.location.hostname}:${window.location.port}${path}`
}

export function useWebSocketProtobuf<T extends Message>(
  path: string,
  schema: GenMessage<T>,
  enabled?: MaybeRefOrGetter<boolean>
) {
  const url = computed(() => {
    const isEnabled = enabled ? toValue(enabled) : true
    return isEnabled ? determineWebSocketAddress(path) : undefined
  })

  const { data } = useWebSocket(url, {
    immediate: false,
    autoReconnect: {
      retries: 3,
      delay: 1000,
      onFailed() {
        console.error('Failed to connect WebSocket after 3 retries')
      },
    },
  })

  const message = computedAsync(async () => {
    if (!data.value || !url.value) return undefined

    try {
      // Convert blob to ArrayBuffer, then to Uint8Array
      const buffer = await (data.value as Blob).arrayBuffer()
      const uint8Array = new Uint8Array(buffer)
      
      // Decode the protobuf message
      return fromBinary(schema, uint8Array)
    } catch (error) {
      console.error('Failed to decode protobuf message:', error)
      return undefined
    }
  }, undefined)

  return { message }
}