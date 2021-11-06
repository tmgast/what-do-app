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
      <div ref="markers" class="markers">
      <l-marker
        v-for="location in locations"
        :key="location.coords.lat"
        :lat-lng="[location.coords.lat, location.coords.lon]"
        >
        <l-icon :icon-url="iconUrl()" :icon-size="iconSize()" />
      </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LIcon,
  LMarker,
  LControlLayers,
  // LTooltip,
  // LPopup,
} from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';
import MainPanel from '@/components/MainPanel.vue';

export default {
  name: 'Home',
  components: {
    MainPanel,
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
    let locations = null;
    const iconWidth = 25;
    const iconHeight = 25;

    function iconUrl() {
      return `https://placekitten.com/${iconWidth}/${iconHeight}`;
    }

    function iconSize() {
      return [iconWidth, iconHeight];
    }

    locations = [
      {
        name: 'Osaka Castle',
        coords: { lat: 34.6864842, lon: 135.5240135 },
        url: 'https://www.google.com/maps/place/Osaka+Castle/@34.6864842,135.5240135,14z/data=!4m5!3m4!1s0x6000e0cd5c283afd:0xf01d07d5ca11e41!8m2!3d34.6869673!4d135.5259154',
        rating: 4.0,
      },
      {
        name: 'The Symphony Hall',
        coords: { lat: 34.7014543, lon: 135.4845376 },
        url: 'https://www.google.com/maps/place/The+Symphony+Hall/@34.7014543,135.4845376,17z/data=!3m1!5s0x6000e68a9b325373:0xd37aa5395c669194!4m5!3m4!1s0x6000e6625ea61209:0x23d768f3ca51af80!8m2!3d34.7014541!4d135.4859772',
        rating: 4.3,
      },
      {
        name: 'Universal Studios Japan',
        coords: { lat: 34.6664671, lon: 135.4332258 },
        url: 'https://www.google.com/maps/place/Universal+Studios+Japan/@34.6664671,135.4332258,15.65z/data=!4m5!3m4!1s0x6000e0d083d5e25d:0x3605fe25303252aa!8m2!3d34.665442!4d135.4323382',
        rating: 4.5,
      },
    ];

    return {
      zoom,
      iconUrl,
      iconSize,
      locations,
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
