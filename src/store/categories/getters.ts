export default {
  getCategories(state) {
    return JSON.parse(JSON.stringify(state.categories));
  },

  hasCategories(state) {
    return state.categories.length > 0;
  },
};
