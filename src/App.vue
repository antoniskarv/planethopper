<template>
  <div class="app">
    <header class="header">
      <h1>Planet Hopper</h1>
      <button @click="onRestart">Restart Demo</button>
    </header>

    <main class="layout">
      <section class="list">
        <section class="list">
          <ul class="planet-list">
            <li v-for="p in planets" :key="p.url" class="planet-item">
              <strong>{{ p.name }}</strong>
              <span class="meta"> • terrain: {{ p.terrain }} • population: {{ p.population }}</span>
            </li>
          </ul>

          <div class="loadmore">
            <button @click="loadMore" :disabled="loading || !hasMore">
              {{ loading ? 'Loading…' : hasMore ? 'Load more' : 'No more planets' }}
            </button>
            <p v-if="error" class="error">{{ error }}</p>
          </div>
        </section>
      </section>

      <aside class="sidebar">
        <p>Trips</p>
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { usePlanets } from '@/composables/usePlanets'

  const { planets, hasMore, loading, error, loadInitial, loadMore } = usePlanets()

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
    @include flex-between;
    padding: 1rem 2rem;
    background: white;
    border-bottom: 1px solid $color-border;
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 1rem;
    padding: 1rem 2rem;
    flex: 1;
  }

  .list {
    @include card;
  }

  .planet-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.5rem;
  }
  .planet-item {
    @include card;
  }
  .meta {
    opacity: 0.7;
    margin-left: 0.25rem;
  }
  .loadmore {
    display: grid;
    place-items: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }
  .error {
    color: #b91c1c;
  }

  .sidebar {
    background: $color-sidebar-bg;
    border-radius: $radius;
    padding: $spacing;
  }

  @media (max-width: 960px) {
    .layout {
      grid-template-columns: 1fr;
    }
    .sidebar {
      order: -1;
    }
  }
</style>
