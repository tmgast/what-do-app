import { createStore } from 'vuex';
import LocationStore from './locations';
import UserStore from './users';
import CategoryStore from './categories';

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
    CategoryStore,
  },
});
