import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    position: {
      coords: [34.6937, 135.5023],
      zoom: 10,
    },
    locations: [],
    results: [],
    filters: [],
    selected: null,
    search: '',
    bDirty: false,
  },
  mutations,
  actions,
  getters,
};
