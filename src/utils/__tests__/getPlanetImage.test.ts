import { describe, it, expect } from 'vitest'
import { getPlanetImageFor } from '../getPlanetImage'

describe('getPlanetImageFor', () => {
  it('returns a valid image URL string', () => {
    const img = getPlanetImageFor('tatooine')
    expect(typeof img).toBe('string')
    expect(img).toMatch(/^https:\/\/images\.ferryhopper\.com/)
  })

  it('returns the same image for the same key', () => {
    const key = 'bdfbdfbdf'
    const first = getPlanetImageFor(key)
    const second = getPlanetImageFor(key)
    expect(second).toBe(first)
  })

  it('handles undefined key correctly', () => {
    const img = getPlanetImageFor(undefined as any)
    expect(typeof img).toBe('string')
  })
})
