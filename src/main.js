import { createApp } from 'vue';
import router from './router';

import App from './App.vue';

import Header from './components/AppHeader.vue';

import CategoryMenu from './components/CategoryMenu.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import axios from '@/axios';

/* Import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, fab);


const app = createApp(App);

app.component('header-e', Header);
app.component('category-menu', CategoryMenu);
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.globalProperties.$axios = axios;
app.use(router);

app.mount('#app');
