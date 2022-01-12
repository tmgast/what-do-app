import { Store } from 'vuex';
import GAuth from 'vue3-google-oauth2';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
    $gAuth: GAuth
  }
}
