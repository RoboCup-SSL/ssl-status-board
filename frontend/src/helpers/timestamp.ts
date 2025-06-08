// Timestamp formatting utilities

export const formatTimestamp = (microseconds: number): string => {
  if (microseconds <= 0) {
    return '0:00'
  }

  const totalSeconds = Math.floor(microseconds / 1000000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const formatDuration = (microseconds: number): string => {
  if (microseconds <= 0) {
    return '0:00'
  }

  const totalSeconds = Math.ceil(microseconds / 1000000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}