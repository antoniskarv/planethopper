import { ref } from 'vue'
import { getPlanets, type SwapiPlanet } from '@/services/swapi'

export const usePlanets = () => {
  const planets = ref<SwapiPlanet[]>([])
  const page = ref(1)
  const hasMore = ref(true)
  const loading = ref(false)
  const hasResults = ref(false)
  const error = ref<string | null>(null)

  const loadMore = async () => {
    if (loading.value || !hasMore.value) return
    loading.value = true
    error.value = null

    const data = await getPlanets(page.value)
      .catch((e: any) => ((error.value = e?.message ?? 'Failed to fetch planets'), null))
      .finally(() => (loading.value = false))

    if (!data) return

    if (!data.results || data.results.length === 0) {
      hasResults.value = false
      return
    }

    hasResults.value = true
    planets.value.push(...data.results)
    page.value = page.value + 1
    hasMore.value = Boolean(data.next)
  }

  const loadInitial = async () => {
    planets.value = []
    page.value = 1
    hasMore.value = true
    await loadMore()
  }

  return { planets, page, hasMore, loading, error, loadInitial, loadMore, hasResults }
}
