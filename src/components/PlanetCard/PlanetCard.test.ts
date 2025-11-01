import { render, screen, fireEvent } from '@testing-library/vue'
import PlanetCard from './PlanetCard.vue'
import type { SwapiPlanet } from '@/services/swapi'

const makePlanet = (rest: Partial<SwapiPlanet> = {}): SwapiPlanet => ({
  name: 'Tatooine',
  population: '200000',
  climate: 'arid',
  terrain: 'desert',
  url: 'https://swapi.dev/api/planets/1/',
  ...rest,
})

describe('PlanetCard', () => {
  it('renders planet info', async () => {
    render(PlanetCard, { props: { planet: makePlanet() } })
    expect(screen.getByRole('heading', { name: /tatooine/i })).toBeInTheDocument()
    expect(screen.getByText(/terrain/i)).toBeInTheDocument()
    expect(screen.getByText(/population/i)).toBeInTheDocument()
  })

  it('calls onSelect when clicked', async () => {
    const onSelect = vi.fn()
    render(PlanetCard, { props: { planet: makePlanet(), onSelect } })

    await fireEvent.click(screen.getByRole('heading', { name: /tatooine/i }))
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
