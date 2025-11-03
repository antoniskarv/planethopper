export function formatPopulation(value: string): string {
  if (value === 'unknown') return 'Unknown'

  const num = Number(value)

  if (isNaN(num)) return value

  return num.toLocaleString('en-US')
}
