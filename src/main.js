import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css';
import 'leaflet/dist/leaflet.css';
import 'materialize-css/dist/css/materialize.css';

createApp(App).use(store).use(router).mount('#app');
