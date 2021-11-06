<template>
  <div class="home">
    <MainPanel />
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[34.6937, 135.5023]"
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
} from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';
import MainPanel from '@/components/MainPanel.vue';

export default {
  name: 'Home',
  components: {
    MainPanel,
    LMap,
    LTileLayer,
  },
  setup() {
    const zoom = ref(12);

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
