import { createStore } from 'vuex';

export default createStore({
  state: {
    locations: [],
    results: [],
    filters: [],
    selected: null,
    search: '',
    user: null,
  },
  mutations: {
    updateLocations(state) {
      state.locations = [
        {
          id: 1,
          name: 'Osaka Castle',
          type: 'landmark',
          coords: { lat: 34.6864842, lon: 135.5240135 },
          url: 'https://www.google.com/maps/place/Osaka+Castle/@34.6864842,135.5240135,14z/data=!4m5!3m4!1s0x6000e0cd5c283afd:0xf01d07d5ca11e41!8m2!3d34.6869673!4d135.5259154',
          rating: 4.0,
        },
        {
          id: 2,
          name: 'The Symphony Hall',
          type: 'music',
          coords: { lat: 34.7014543, lon: 135.4845376 },
          url: 'https://www.google.com/maps/place/The+Symphony+Hall/@34.7014543,135.4845376,17z/data=!3m1!5s0x6000e68a9b325373:0xd37aa5395c669194!4m5!3m4!1s0x6000e6625ea61209:0x23d768f3ca51af80!8m2!3d34.7014541!4d135.4859772',
          rating: 4.3,
        },
        {
          id: 3,
          name: 'Universal Studios Japan',
          type: 'park',
          coords: { lat: 34.6664671, lon: 135.4332258 },
          url: 'https://www.google.com/maps/place/Universal+Studios+Japan/@34.6664671,135.4332258,15.65z/data=!4m5!3m4!1s0x6000e0d083d5e25d:0x3605fe25303252aa!8m2!3d34.665442!4d135.4323382',
          rating: 4.5,
        },
      ];

      this.commit('applyFilters');
    },

    selectLocation(state, l) {
      state.selected = state.locations.find((location) => location.id === l);
    },

    clearFilters(state) {
      state.filters = [];

      this.commit('applyFilters');
    },

    toggleFilter(state, f) {
      if (state.filters.includes(f)) {
        state.filters = state.filters.filter((v) => v !== f);
      } else {
        state.filters.push(f);
      }
      this.commit('applyFilters');
    },

    applyFilters(state) {
      if (!state.filters.length && !state.search.length) {
        state.results = state.locations.slice(0);
      } else {
        state.results = state.locations.filter((location) => state.filters.includes(location.type));
      }
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getFilters(state) {
      return state.filters;
    },

    hasFilter(state, f) {
      return state.filters.includes(f);
    },

    getLocations(state) {
      return state.results;
    },

    getUser(state) {
      if (state.user != null) {
        return state.user;
      }

      return false;
    },
  },
});
