import HomePage from "./pages/HomePage/HomePage.vue";
import SearchPage from "./pages/SearchPage/SearchPage.vue";
import ShowDetails from "./pages/ShowDetails/ShowDetails.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/search", component: SearchPage },
  { path: "/show/:id", component: ShowDetails },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
