import { createApp } from 'vue';
import router from './router.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue'


library.add(fas);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);

app.mount('#app')
