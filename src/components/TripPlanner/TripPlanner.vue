<template>
  <section class="trip-planner">
    <header class="trip-planner__header">
      <div class="trip-planner__header title">Your planetary route</div>
    </header>

    <div v-if="selected.length === 0" class="trip-planner__empty">
      You have not selected any planets
    </div>

    <ol v-else class="trip-planner__list">
      <li v-for="p in selected" :key="p.url" class="trip-planner__item">
        {{ p.name }}
      </li>
    </ol>

    <button v-if="selected.length > 0" class="trip-planner__clear" @click="clear">
      ✕ clear list
    </button>
  </section>
</template>

<script setup lang="ts">
  import { useSelections } from '@/composables/useSelections'

  const { selected, clear } = useSelections()
</script>

<style lang="scss" scoped>
  @use '@/styles/variables' as *;

  .trip-planner {
    background: $color-sidebar-bg;
    display: grid;
    gap: 10px;

    &__header {
      display: flex;
      justify-content: space-between;
      justify-self: center;
      align-items: center;

      .title {
        font-size: 1.2em;
      }
    }

    &__empty {
      opacity: 0.7;
      padding: 6px 0;
      color: $color-subtext;
    }

    &__list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 6px;
    }

    &__item {
      background: #fff;
      padding: 6px 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    &__clear {
      justify-self: center;
      background: transparent;
      color: #c03636;
      border: none;
      padding: 0;
      cursor: pointer;
      font-weight: 500;
      transition: opacity 0.2s ease;

      &:hover:not(:disabled) {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
</style>
