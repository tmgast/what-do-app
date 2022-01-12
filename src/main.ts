import { createApp } from 'vue';
import GAuth from 'vue3-google-oauth2';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css';
import 'leaflet/dist/leaflet.css';
import 'materialize-css/dist/css/materialize.css';

const gauthOption = {
  clientId: process.env.VUE_APP_GAUTH_CLIENT,
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: 'false',
};

createApp(App).use(GAuth, gauthOption).use(store).use(router)
  .mount('#app');

//store.state.auth = app.$gAuth;
