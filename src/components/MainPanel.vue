<template>
  <div class="search-container">
      <div class="search-wrapper">
        <div class="input-field search-field">
          <input v-model="search" id="search" type="search" placeholder="Search">
        </div>
      </div>

      <Component :is="SideMenu" />

      <div class="filter-container">
        <div>
          <a
            class="waves-effect waves-light btn filter-btn blue-grey"
            :class="$store.state.filters.length > 0?' bt lighten-4':' wt darken-4'"
            @click="$store.commit('clearFilters')"
            >
            <span>filters</span>
          </a>
            <Component :is="MapQuickFilter"
              v-for="poi in quickFilters"
              :key="poi.name"
              :icon="poi.icon"
              :enabled=hasFilter(poi.name)
              @click="$store.commit('toggleFilter', poi.name)" />
        </div>
      </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import MapQuickFilter from '@/components/MapQuickFilter.vue';
import SideMenu from '@/components/SideMenu.vue';

const quickFilters = [
  {
    name: 'landmark',
    icon: 'temple_buddhist',
  },
  {
    name: 'music',
    icon: 'theater_comedy',
  },
  {
    name: 'park',
    icon: 'attractions',
  },
];

const store = useStore();
function hasFilter(f) {
  return (store.getters.getFilters).indexOf(f) >= 0;
}
</script>

<style lang="scss">
.search-container {
  z-index: 1000;
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
