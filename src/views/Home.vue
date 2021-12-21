<template>
  <div class="home">
    <SideMenu />
    <MainPanel />
    <l-map
      class="map"
      ref="map"
      :zoom="zoom"
      :center="center"
      @move="$store.commit('updatePosition', this.$refs.map.leafletObject)"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <div ref="marker" class="markers">
      <l-marker
        v-for="location in $store.getters.getLocations"
        :key="location._id"
        :lat-lng="[location.latitude, location.longitude]"
        @click="$store.commit('selectLocation',
          {map: this.$refs.map.leafletObject, location: location._id})"
        >
        <l-icon :className="getColorClass(location.category)" :icon-size="iconSize()">
          <i class='material-icons'>{{ getIcon(location.category) }}</i>
        </l-icon>
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
    const map = ref(null);
    const zoom = ref(12);
    const store = useStore();
    const center = ref(store.state.LocationStore.position.coords);
    store.commit('updateLocations');

    function iconUrl() {
      return image;
    }

    function iconSize() {
      return [40, 40];
    }

    function getIcon(c) {
      const catIcon = store.getters.getCategories.find((v) => v.name === c);
      return catIcon.icon;
    }

    function getColorClass(c) {
      const catIcon = store.getters.getCategories.find((v) => v.name === c);
      return catIcon.colorClass;
    }

    return {
      map,
      zoom,
      center,
      iconUrl,
      iconSize,
      getIcon,
      getColorClass,
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

  .leaflet-control-layers {
    visibility: hidden;
  }

  .leaflet-marker-icon {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    color: #fff;
    text-align: center;

    i {
      line-height: 40px;
    }
  }
</style>
