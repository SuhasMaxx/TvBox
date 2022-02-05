import { createApp } from 'vue/dist/vue.esm-bundler';
import router from './router';
import TvBoxApp from './TvBoxApp.vue';
import './assets/css/global.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(TvBoxApp)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount('#app')