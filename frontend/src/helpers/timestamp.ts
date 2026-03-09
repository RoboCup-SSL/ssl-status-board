export const formatDuration = (microseconds: number): string => {
  if (microseconds === 0) {
    return '0:00'
  }

  const sign = microseconds < 0 ? '-' : ''
  const absMicroseconds = Math.abs(microseconds)
  const totalSeconds = Math.ceil(absMicroseconds / 1000000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  return `${sign}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
