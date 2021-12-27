export default {
  getActiveFilters(state) {
    return state.filters;
  },

  getLocations(state) {
    return state.results;
  },

  getSearch(state) {
    return state.search;
  },
};
