<template>
  <div class="home">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[47.41322, -1.219482]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LControlLayers,
} from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
  },
  setup() {
    const zoom = ref(5);

    return {
      zoom,
    };
  },
};

</script>

<style lang="scss">
  .home {
    height: 100%;
    width: 100%;
  }
</style>
