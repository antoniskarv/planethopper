import { ref } from 'vue'
import type { SwapiPlanet } from '@/services/swapi'

export type SelectedPlanet = {
  id?: string
  name: string
  url?: string
}

const selected = ref<SelectedPlanet[]>([])

export function useSelections() {
  const extractIdFromUrl = (url: string) => {
    const match = url.match(/\/(\d+)\/?$/)
    return match ? match[1] : url
  }

  const isSelected = (planet: SwapiPlanet) => {
    const id = extractIdFromUrl(planet.url)
    return selected.value.some(p => p.id === id)
  }

  const select = (planet: SwapiPlanet) => {
    const id = extractIdFromUrl(planet.url)
    if (isSelected(planet)) return
    if (selected.value.length >= 5) return

    selected.value.push({
      id,
      name: planet.name,
      url: planet.url,
    })
  }

  const clear = () => (selected.value = [])

  return { selected, isSelected, select, clear, extractIdFromUrl }
}
