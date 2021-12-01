import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    user: {
      email: '',
      name: '',
      imageUrl: '',
    },
  },
  mutations,
  actions,
  getters,
};
