export type SwapiPlanet = {
  name: string
  climate: string
  terrain: string
  population: string
  url: string
}

type SwapiResponse = {
  next: string | null
  previous: string | null
  results: SwapiPlanet[]
}

export async function getPlanets(page = 1): Promise<SwapiResponse> {
  const res = await fetch(`https://swapi.py4e.com/api/planets/?page=${page}`)
  if (!res.ok) {
    throw new Error(`SWAPI error: ${res.status}`)
  }
  return res.json()
}
