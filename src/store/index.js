import { createStore } from 'vuex';

export default createStore({
  state: {
    locations: [],
    filters: [],
    user: null,
  },
  mutations: {
    updateLocations(state) {
      state.locations = [
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
    },

    clearFilters(state) {
      state.filters = [];
    },

    toggleFilter(state, f) {
      if (state.filters.includes(f)) {
        state.filters = state.filters.filter((v) => v !== f);
      } else {
        state.filters.push(f);
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

    getLocations(state) {
      return state.locations;
    },

    getUser(state) {
      if (state.user != null) {
        return state.user;
      }

      return false;
    },
  },
});
