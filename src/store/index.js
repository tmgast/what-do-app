import { createStore } from 'vuex';
import LocationStore from './locations';
import UserStore from './users';

export default createStore({
  state: {
    init: false,
  },
  getters: {
    hasInit(state) {
      return state.init;
    },
  },
  modules: {
    LocationStore,
    UserStore,
  },
});
