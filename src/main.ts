import { createApp } from 'vue'
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primevue/resources/themes/md-dark-deeppurple/theme.css";

import App from './App.vue'
import PrimeVue from 'primevue/config';

createApp(App).use(PrimeVue).mount('#app')
