import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue'


library.add(fas);
library.add(fab);

createApp(App)

.component('font-awesome-icon', FontAwesomeIcon)

.use(router)
.use(store)

.mount('#app')
