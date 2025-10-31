<script setup lang="ts">
  import { type SwapiPlanet } from '@/services/swapi'
  import { formatPopulation } from '@/utils/formatPopulation'
  import './PlanetCard.scss'

  defineProps<{ planet: SwapiPlanet }>()
</script>

<template>
  <article class="planet-card">
    <div class="planet-card__thumb" aria-hidden="true"></div>
    <div class="planet-card__content">
      <h3 class="planet-card__name">{{ planet.name }}</h3>
      <div class="planet-card__meta">
        <div><strong>terrain:</strong> {{ planet.terrain }}</div>
        <div><strong>population:</strong> {{ formatPopulation(planet.population) }}</div>
      </div>
    </div>
  </article>
</template>
