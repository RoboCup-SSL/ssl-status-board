// Team logo utilities
const knownLogos = new Set([
  'a-team',
  'ais',
  'ararabots',
  'blue',
  'carrossel-caipira',
  'cerberus',
  'cmμs',
  'delft-mercurians',
  'eagles',
  'er-force',
  'greentea',
  'ibis',
  'immortals',
  'itandroids',
  'kiks',
  'luhbots',
  'maracatronics',
  'mct-susano-logics',
  'mrl',
  'namec',
  'neon',
  'neuislanders',
  'op-amp',
  'orcabot',
  'pequi-mecânico',
  'red-dragons',
  'ri-one',
  'robôcin',
  'robodragons',
  'robofei',
  'roboime',
  'robojackets',
  'roboteam-twente',
  'seegoals',
  'spbunited',
  'src',
  'taurabots',
  'the-bots',
  'tigers-mannheim',
  'turtlerabbit',
  'titans',
  'traps',
  'ubc-thunderbots',
  'unball',
  'ultron',
  'umass-minutebots',
  'warthog-robotics',
  'uroborus',
  'utbots',
  'yellow',
  'zjunlict',
])

export const getTeamLogoUrl = (teamName: string): string => {
  const logoBaseName = teamName.toLowerCase().replace(' ', '-')

  if (knownLogos.has(logoBaseName)) {
    // Use URL import for dynamic loading that works with Vite
    return new URL(`../assets/logos/${logoBaseName}.png`, import.meta.url).href
  }

  // Return default logo
  return new URL('../assets/logos/no-logo.png', import.meta.url).href
}
