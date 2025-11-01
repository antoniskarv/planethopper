import { formatPopulation } from '@/utils/formatPopulation'

describe('formatPopulation', () => {
  it('formats numeric strings to en-US', () => {
    expect(formatPopulation('2000000')).toBe('2,000,000')
  })
  it('returns Unknown for unknown', () => {
    expect(formatPopulation('unknown')).toBe('Unknown')
  })
  it('returns n/a for non numeric', () => {
    expect(formatPopulation('n/a')).toBe('n/a')
  })
})
