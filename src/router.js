import Home from './pages/Home/Home.vue';
import Search from './pages/Search/Search.vue';
import ShowDetails from './pages/ShowDetails/ShowDetails.vue';
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/show/:id', component: ShowDetails },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router