<script setup lang="ts">
  import { useSelections } from '@/composables/useSelections'
  import './TripPlanner.scss'

  const { selected, clear } = useSelections()
</script>

<template>
  <section class="trip-planner">
    <header class="trip-planner__header">
      <h2>Your planetary route</h2>
    </header>

    <div v-if="selected.length === 0" class="trip-planner__empty">
      You have not selected any planets
    </div>

    <ol v-else class="trip-planner__list">
      <li v-for="p in selected" :key="p.url" class="trip-planner__item">
        {{ p.name }}
      </li>
    </ol>

    <button class="trip-planner__clear" :disabled="selected.length === 0" @click="clear">
      ✕ clear list
    </button>
  </section>
</template>
