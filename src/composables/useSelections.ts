import { ref } from 'vue'
import type { SwapiPlanet } from '@/services/swapi'

export type SelectedPlanet = {
  name: string
  url: string
}

const selected = ref<SelectedPlanet[]>([])

export function useSelections() {
  function isSelected(name: string) {
    return selected.value.some(p => p.name === name)
  }

  function select(planet: SwapiPlanet) {
    if (isSelected(planet.name)) return
    if (selected.value.length >= 5) return

    selected.value.push({ name: planet.name, url: planet.url })
  }

  function clear() {
    selected.value = []
  }

  return { selected, isSelected, select, clear }
}
