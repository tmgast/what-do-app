<template>
  <div class="search-container">
      <div class="search-wrapper">
        <div class="input-field search-field">
          <input id="search" type="search" placeholder="Search">
        </div>
      </div>
  </div>
  <div ref="menu" class="fixed-action-btn menu" id="menu">
    <a class="btn-floating btn-large deep-purple lighten-2">
      <i class="large material-icons">settings</i>
    </a>
    <ul>
      <li v-if="anonymous()"><a class="btn-floating red darken-2">
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

const menu = ref(null);

onMounted(() => {
  M.FloatingActionButton.init(menu.value, { direction: 'right', hoverEnabled: false });
});

// replace with user-check
function anonymous() {
  return true;
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
