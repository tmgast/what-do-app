import APIService from '@/services/APIService';

export default {
  updateLocations(state) {
    APIService.getLocations()
      .then((response) => {
        state.locations = response.data;
        this.commit('applyFilters');
      })
      .catch((error) => {
        console.log(error);
      });
  },

  selectLocation(state, l) {
    APIService.getLocation(l)
      .then((response) => {
        state.selected = response.data;
      })
      .catch((error) => {
        console.log(`Error: ${error.message}`);
      });
  },

  clearFilters(state) {
    state.filters = [];

    this.commit('applyFilters');
  },

  updatePosition(state, map) {
    const center = map.getCenter();
    const zoom = map.getZoom();
    state.position.coords = [center.lat, center.lng];
    state.zoom = zoom;
  },

  toggleFilter(state, f) {
    try {
      if (state.filters.includes(f)) {
        state.filters = state.filters.filter((v) => v !== f);
      } else {
        state.filters.push(f);
      }
      this.commit('applyFilters');
    } catch (err) {
      console.log(err);
    }
  },

  applyFilters(state) {
    state.results = state.locations.slice(0);
    if (state.filters.length > 0 || state.search.length > 0) {
      // eslint-disable-next-line max-len
      state.results = state.locations.filter((location) => state.filters.includes(location.category));
    }
  },
};
