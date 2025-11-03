<template>
  <div class="planet-card" :class="{ 'planet-card--selected': selected }" @click="handleClick">
    <div class="planet-card__thumb" aria-hidden="true">
      <img class="planet-card__thumb" :src="imgSrc" :alt="planet.name" @error="handleImgError" />
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

<script setup lang="ts">
  import { ref } from 'vue'
  import { type SwapiPlanet } from '@/services/swapi'
  import { formatPopulation } from '@/utils/formatPopulation'
  import { useSelections } from '@/composables/useSelections'
  import { getPlanetImageFor } from '@/utils/getPlanetImage'
  const { extractIdFromUrl } = useSelections()

  const props = defineProps<{
    planet: SwapiPlanet
    selected?: boolean
    onSelect?: () => void
  }>()

  const imageKey = String(extractIdFromUrl(props.planet.url))
  const placeholderImg = new URL('@/assets/placeholder.png', import.meta.url).href

  const imgSrc = ref(getPlanetImageFor(imageKey))

  const handleClick = () => props.onSelect?.()
  const handleImgError = () => (imgSrc.value = placeholderImg)
</script>

<style lang="scss" scoped>
  @use '@/styles/variables' as *;
  @use '@/styles/mixins' as *;

  .planet-card {
    @include card;
    display: grid;
    grid-template-columns: $thumb-size 1fr;
    gap: $gap-md;
    align-items: center;
    cursor: pointer;

    &__thumb {
      width: $thumb-size;
      height: $thumb-size;
      object-fit: cover;
    }

    &__name {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &__meta {
      display: grid;
      gap: 0.25rem;
      font-size: 0.9rem;
      color: $color-subtext;
    }

    &:hover {
      border: 1px solid $color-accent;
    }

    &--selected {
      outline: 2px solid $color-accent;
    }
  }
</style>
