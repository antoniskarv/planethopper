import { ref } from 'vue'
import type { SwapiPlanet } from '@/services/swapi'

export type SelectedPlanet = {
  key: string
  name: string
  url: string
}

const selected = ref<SelectedPlanet[]>([])

export function useSelections() {
  const keyOf = (planet: SwapiPlanet) => String(planet.url || planet.name)

  const isSelected = (key: string) => selected.value.some(p => p.key === key)

  const select = (planet: SwapiPlanet) => {
    const key = keyOf(planet)
    if (isSelected(key)) return
    if (selected.value.length >= 5) return

    selected.value.push({
      key,
      name: planet.name,
      url: planet.url,
    })
  }

  const clear = () => (selected.value = [])

  return { selected, isSelected, select, clear, keyOf }
}
