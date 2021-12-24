<template>
  <div class="search-container">
      <div class="search-wrapper">
        <div class="input-field search-field">
          <input id="search" type="search" placeholder="Search">
        </div>
      </div>

      <div class="filter-container">
        <div v-if="$store.getters.hasCategories">
          <a
            class="waves-effect waves-light btn filter-btn blue-grey"
            @click="$store.commit('clearFilters')"
            >
            <span>filters</span>
          </a>
            <Component :is="MapQuickFilter"
              v-for="poi in $store.getters.getCategories"
              :key="poi._id"
              :icon="poi.icon"
              :colorClass="poi.colorClass"
              :enabled="hasFilter(poi.name)"
              @click="$store.commit('toggleFilter', poi.name)" />
        </div>
      </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import MapQuickFilter from '@/components/MapQuickFilter.vue';

const store = useStore();

store.commit('updateCategories');

function hasFilter(f) {
  return store.getters.getActiveFilters.indexOf(f) !== -1;
}
</script>

<style lang="scss">
.search-container {
  z-index: 10;
  width:  100%;
  position: absolute;
  top: 0;
  left: 0;

  .search-wrapper {
    width: 50%;
    background: white;
    border-radius: 50px;
    margin-left: 25%;
  }

  .filter-container {
    margin-left: 25%;
  }

  .filter-btn {
    opacity: 40%;
    font-weight: 700;
    border-radius: 25px;
  }

  .wt {
    color: #fff;
  }

  .bt {
    color: #000;
  }

  .btn-floating {
    margin-left: 5px;
  }
}

.search-field {
  padding-left: 2.5%;
  width: 95%;
}

.menu {
  left: 24px;
  right: auto;
}
</style>
