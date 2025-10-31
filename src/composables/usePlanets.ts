import { ref } from 'vue'
import { getPlanets, type SwapiPlanet } from '@/services/swapi'

export function usePlanets() {
  const planets = ref<SwapiPlanet[]>([])
  const page = ref(1)
  const hasMore = ref(true)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function loadInitial() {
    planets.value = []
    page.value = 1
    hasMore.value = true
    await loadMore()
  }

  async function loadMore() {
    if (loading.value || !hasMore.value) return

    loading.value = true
    error.value = null

    const pageToFetch = page.value

    const data = await getPlanets(pageToFetch)
      .catch((err: any) => {
        error.value = err?.message ?? 'Failed to fetch planets'
        return null
      })
      .finally(() => {
        loading.value = false
      })

    if (!data) return

    planets.value.push(...data.results)
    page.value++
    hasMore.value = Boolean(data.next)
  }

  return { planets, page, hasMore, loading, error, loadInitial, loadMore }
}
