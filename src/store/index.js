import { createStore } from 'vuex';
import APIService from '@/services/APIService';

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
      APIService.getLocations()
        .then((response) => {
          state.locations = response.data;
          this.commit('applyFilters');
        })
        .catch((error) => {
          console.log(error);
        });
      this.commit('applyFilters');
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
    async getLogin(state) {
      try {
        console.log(state.auth);
        /* eslint no-underscore-dangle: 0 */
        const gUser = await state.auth.signIn();

        if (!gUser) {
          return null;
        }

        state.user = gUser;
        console.log(gUser);
        return true;
      } catch (error) {
        console.log(error);
        return null;
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

    isLoggedIn(state) {
      return state.user !== null;
    },
  },
});
