import APIService from '@/services/APIService';

export default {
  updatePosition(state, map) {
    const center = map.getCenter();
    state.position.zoom = map.getZoom();
    state.position.coords = [center.lat, center.lng];
    state.bDirty = true;
  },

  updateSearch(state, { value }) {
    state.search = value;
  },

  updateLocations(state) {
    state.bDirty = false;

    if (state.search !== '') {
      this.commit('applySearch');
    } else {
      APIService.getLocations(state.position)
        .then((response) => {
          state.locations = response.data;
          this.commit('applyFilters');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },

  selectLocation(state, { map, location }) {
    APIService.getLocation(location).then((response) => {
      state.selected = response.data;
      this.dispatch('flyTo', { map, location: state.selected });
    });
  },

  clearFilters(state) {
    state.filters = [];

    this.commit('applyFilters');
  },

  applySearch(state) {
    if (state.search !== '') {
      APIService.searchLocations(state.search).then((response) => {
        state.locations = response.data;
        this.commit('applyFilters');
      });
    } else {
      this.commit('updateLocations');
    }
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
    if (state.filters.length > 0) {
      // eslint-disable-next-line max-len
      state.results = state.locations.filter((location) => state.filters.includes(location.category));
    }
  },
};
