import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount('#app');