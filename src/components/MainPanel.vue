<template>
  <div class="search-container">
      <div class="search-wrapper">
        <div class="input-field search-field">
          <input id="search" type="search" placeholder="Search">
        </div>
      </div>

      <div class="filter-container">
        <div>
          <a
            class="waves-effect waves-light btn filter-btn blue-grey"
            :class="store.state.filters.length > 0?' bt lighten-4':' wt darken-4'"
            @click="store.commit('clearFilters')"
            >
            <span>filters</span>
          </a>
          <a
            class="btn-floating waves-effect waves-light"
            :class="hasFilter('hiking')?' purple':'red' "
            @click="store.commit('toggleFilter','hiking')"
            >
            <i class="material-icons">filter_hdr</i>
          </a>
          <a
            class="btn-floating waves-effect waves-light"
            :class="hasFilter('biking')?' purple':'red' "
            @click="store.commit('toggleFilter','biking')"
            >
            <i class="material-icons">directions_bike</i>
          </a>
          <a
            class="btn-floating waves-effect waves-light"
            :class="hasFilter('gaming')?' purple':'red' "
            @click="store.commit('toggleFilter','gaming')"
            >
            <i class="material-icons">casino</i>
          </a>
          <a
            class="btn-floating waves-effect waves-light"
            :class="hasFilter('photography')?' purple':'red' "
            @click="store.commit('toggleFilter','photography')"
            >
            <i class="material-icons">camera_alt</i>
          </a>
          <a
            class="btn-floating waves-effect waves-light"
            :class="hasFilter('crafting')?' purple':'red' "
            @click="store.commit('toggleFilter','crafting')"
            >
            <i class="material-icons">brush</i>
          </a>
        </div>
      </div>
  </div>
  <div ref="menu" class="fixed-action-btn menu" id="menu">
    <a class="btn-floating btn-large deep-purple lighten-2">
      <i class="large material-icons">settings</i>
    </a>
    <ul>
      <li v-if="!$store.getters.getUser"><a class="btn-floating red darken-2">
        <i class="material-icons">person_outline</i>
      </a></li>
      <li v-else><a class="btn-floating deep-purple darken-1">
        <i class="material-icons">person</i>
      </a></li>
    </ul>
  </div>
</template>

<script setup>
import M from 'materialize-css';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const menu = ref(null);

function hasFilter(f) {
  if (store.state.filters.includes(f)
    || store.state.filters.length === 0) {
    return true;
  }
  return false;
}

onMounted(() => {
  M.FloatingActionButton.init(menu.value, { direction: 'right', hoverEnabled: false });
});
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
