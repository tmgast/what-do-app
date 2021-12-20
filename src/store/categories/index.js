import { mapState, mapGetters } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    categories: [],
    filters: [],
  },
  computed: {
    ...mapState({
      categories: 'categories',
    }),
    ...mapGetters({
      getCategories: 'getCategories',
    }),
  },
  mutations,
  actions,
  getters,
};
