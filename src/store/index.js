import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import APIService from '@/services/APIService';

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: (state) => ({
    user: state.user,
    position: state.position,
    filters: state.filters,
    locations: state.locations,
    selected: state.selected,
  }),
});

export default createStore({
  state: {
    user: {
      email: '',
      name: '',
      imageUrl: '',
    },
    position: {
      coords: [34.6937, 135.5023],
      zoom: 10,
    },
    locations: [],
    results: [],
    filters: [],
    selected: null,
    search: '',
  },
  mutations: {
    completeLogin(state, u) {
      state.user = u;
    },

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
        state.results = state.locations.filter(
          (location) => state.filters.includes(location.category),
        );
      }
    },
  },
  actions: {
    async getLogin({ commit, state }) {
      try {
        const gUser = await state.auth.signIn();

        if (!gUser) {
          return;
        }

        const profile = gUser.getBasicProfile();
        const u = {
          email: profile.getEmail(),
          name: profile.getName(),
          imageUrl: profile.getImageUrl(),
        };
        commit('completeLogin', u);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
  getters: {
    getUserPhoto(state) {
      if (!state.user) {
        return null;
      }

      return state.user.imageUrl;
    },

    getUserName(state) {
      if (!state.user) {
        return null;
      }

      return state.user.name;
    },

    getUserEmail(state) {
      if (!state.user) {
        return null;
      }

      return state.user.email;
    },

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
      return state.user.email !== '';
    },
  },
  plugins: [
    vuexLocal.plugin,
  ],
});
