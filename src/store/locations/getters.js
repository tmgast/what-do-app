export default {
  getFilters(state) {
    return state.filters;
  },

  hasFilter(state, getters, rootState, f) {
    console.log(state);
    try {
      if (!state.filters) {
        return false;
      }

      return state.filters.includes(f);
    } catch (error) {
      console.log(error);
    }
    return false;
  },

  getLocations(state) {
    return state.results;
  },
};
