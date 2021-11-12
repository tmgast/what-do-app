<template>
  <div class="home">
    <SideMenu />
    <MainPanel />
    <l-map
      class="map"
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[34.6937, 135.5023]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <div ref="markers" class="markers">
      <l-marker
        v-for="location in $store.getters.getLocations"
        :key="location.id"
        :lat-lng="[location.coords.lat, location.coords.lon]"
        @click="$store.commit('selectLocation', location.id)"
        >
        <l-icon :html="iconHtml()" :icon-url="iconUrl()" :icon-size="iconSize()" />
      </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import {
  LMap,
  LTileLayer,
  LIcon,
  LMarker,
  LControlLayers,
  // LTooltip,
  // LPopup,
} from '@vue-leaflet/vue-leaflet';
import image from '@/assets/logo.png';
import SideMenu from '@/components/SideMenu.vue';
import MainPanel from '@/components/MainPanel.vue';

export default {
  name: 'Home',
  components: {
    MainPanel,
    SideMenu,
    LMap,
    LTileLayer,
    LIcon,
    LControlLayers,
    LMarker,
    // LTooltip,
    // LPopup,
  },
  setup() {
    const zoom = ref(12);
    const iconWidth = 55;
    const iconHeight = 55;
    const store = useStore();
    store.commit('updateLocations');

    function iconUrl() {
      return image;
    }

    function iconHtml() {
      return '<i class="material-icons">person_outline</i>';
    }

    function iconSize() {
      return [iconWidth, iconHeight];
    }

    return {
      zoom,
      iconUrl,
      iconHtml,
      iconSize,
    };
  },
};
</script>

<style lang="scss">
  .home {
    height: 100%;
    width: 100%;
  }

  .map {
    z-index: 1;
  }
</style>
