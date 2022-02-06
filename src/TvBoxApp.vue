<template>
  <div class="app-container">
    <tv-banner></tv-banner>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TvBanner from "./components/TvBanner/TvBanner.vue";
/**
 * TVBox main component
 * The Application shows information about TV shows, fetched from the TV MAze API (https://api.tvmaze.com). On home page user can see top TV shows from each genre.
 * The app als features Search page where user can search by typing text. A fuzzy algorithm is used (with a fuzziness value of 2), meaning that shows will be found even if your query contains small typos
 * Every search result is clickable and it takes you to show details page, where you can find more infomration about the show
 *
 * @class TvBoxApp
 */
export default {
  components: {
    TvBanner,
  },
};
</script>

<style scoped>
.content {
  padding-top: 60px;
}
</style>
