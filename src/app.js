import { createApp } from 'vue/dist/vue.esm-bundler';
import router from './router';
import TvBoxApp from './TvBoxApp.vue';
import './assets/css/global.css'

import FontAwesomeIcon from './utils/FontAwesomeIcon.js';

createApp(TvBoxApp)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount('#app')