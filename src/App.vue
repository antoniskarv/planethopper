<template>
  <div class="app">
    <header class="header">
      <h1>Planet Hopper</h1>
      <button @click="onRestart">Restart Demo</button>
    </header>

    <main class="layout">
      <section class="list">
        <p>Planets</p>
      </section>

      <aside class="sidebar">
        <p>Trips</p>
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
function onRestart() {
  window.location.reload()
}
</script>

<style lang="scss" scoped>
@use "./styles/variables" as *;
@use "./styles/mixins" as *;

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
