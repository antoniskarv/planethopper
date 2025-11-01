<script setup lang="ts">
  import { type SwapiPlanet } from '@/services/swapi'
  import { formatPopulation } from '@/utils/formatPopulation'
  import { getPlanetImageFor } from '@/utils/getPlanetImage'

  import './PlanetCard.scss'

  const props = defineProps<{
    planet: SwapiPlanet
    selected?: boolean
    onSelect?: () => void
  }>()

  const imageKey = String(props.planet.url ?? props.planet.name)
  const imgSrc = getPlanetImageFor(imageKey)

  const handleClick = () => props.onSelect?.()
</script>

<template>
  <div class="planet-card" :class="{ 'planet-card--selected': selected }" @click="handleClick">
    <div class="planet-card__thumb" aria-hidden="true">
      <img class="planet-card__thumb" :src="imgSrc" :alt="planet.name" loading="lazy" />
    </div>
    <div class="planet-card__content">
      <h3 class="planet-card__name">{{ planet.name }}</h3>
      <div class="planet-card__meta">
        <div>terrain: {{ planet.terrain }}</div>
        <div>population: {{ formatPopulation(planet.population) }}</div>
      </div>
    </div>
  </div>
</template>
