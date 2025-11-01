const IMAGES = [
  'https://images.ferryhopper.com/locations/Skiathos.jpg',
  'https://images.ferryhopper.com/locations/Naxos.jpg',
] as const

const cache = new Map<string, string | undefined>()

export const getPlanetImageFor = (key: string) => {
  const hit = cache.get(key)
  if (hit) return hit
  const img = IMAGES[Math.floor(Math.random() * IMAGES.length)]
  cache.set(key, img)
  return img
}
