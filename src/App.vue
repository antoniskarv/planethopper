<template>
  <div class="app">
    <header class="header">
      <div class="app-title">Planet Hopper</div>

      <button @click="onRestart">
        <fa-icon icon="fa-redo"></fa-icon>
        restart demo
      </button>
    </header>

    <main class="layout">
      <section class="list">
        <div class="planet-list">
          <PlanetCard
            v-for="p in planets"
            :key="p.url"
            :planet="p"
            :selected="isSelected(keyOf(p))"
            :onSelect="() => select(p)"
          />
        </div>

        <div class="loadmore">
          <button @click="loadMore" v-if="hasMore === true">
            {{ loading ? 'Loading…' : 'Fetch planets' }}
          </button>
          <p v-if="error" class="error">{{ error }}</p>
        </div>
      </section>

      <aside class="sidebar">
        <TripPlanner />
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { usePlanets } from '@/composables/usePlanets'
  import { useSelections } from '@/composables/useSelections'
  import PlanetCard from '@/components/PlanetCard/PlanetCard.vue'
  import TripPlanner from '@/components/TripPlanner/TripPlanner.vue'

  const { planets, hasMore, loading, error, loadInitial, loadMore } = usePlanets()
  const { isSelected, select, keyOf } = useSelections()

  onMounted(loadInitial)

  function onRestart() {
    window.location.reload()
  }
</script>

<style lang="scss" scoped>
  @use './styles/variables' as *;
  @use './styles/mixins' as *;

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: $color-bg;
    color: $color-text;
  }

  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem 2rem;
    background: #fff;

    .app-title {
      font-size: 75px;
      font-weight: 400;
    }

    button {
      position: absolute;
      background: #fff;
      right: 2rem;
    }
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 377px;
    gap: 1.5rem;
    padding: 1.5rem;
    flex: 1;
    align-items: start;
    background: #fff;
  }

  .planet-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: visible;
  }

  .loadmore {
    display: grid;
    place-items: start;
    gap: 0.5rem;
    margin-top: 1rem;

    button {
      background: #fff;
      border: 1px solid $color-subtext;
      color: $color-text;
      border-radius: 0;
      padding: 0.45rem 0.9rem;
      cursor: pointer;
    }
  }

  .error {
    color: #b91c1c;
    font-size: 0.9rem;
  }

  .sidebar {
    background: $color-sidebar-bg;
    height: 100%;
    padding: $spacing;
    top: 1rem;
    height: 100%;
  }

  @media (max-width: 960px) {
    .header {
      justify-content: space-between;
      padding-bottom: 0;
      .app-title {
        font-size: 25px;
        font-weight: 550;
      }
      button {
        top: 1.5em;
        right: 0.5em;
      }
    }
    .layout {
      grid-template-columns: 1fr;
    }
    .sidebar {
      order: -1;
      position: sticky;
      height: fit-content;
      top: 1rem;
      z-index: 10;
    }
    .loadmore {
      place-items: center;
    }
  }

  @media (min-width: 960px) {
    .header {
      button {
        top: 1.5em;
        right: 1.5em;
      }
    }
  }
</style>
