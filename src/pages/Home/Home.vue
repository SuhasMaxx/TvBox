<template src="./home.template.html"></template>
<style src="./home.style.css" scoped></style>
<script>
import ShowRow from "../../components/ShowRow/ShowRow.vue";
import {TvMazeService} from '../../services/tvmaze.service.ts';

/**
 * TV Box homepage component
 * The Application basically shows the top 5 movies from user search query, using OMDB API ( http://www.omdbapi.com ). The homepage has 2 sections, Search and Featured
 * Search page is searching section for movies and Featured page shows information of predefined 2 featured movies.
 *
 * @class MovieBox
 */
export default {
  props: {
  },
  components: {
    ShowRow,
  },
  /**
   * Sets default page mode to "Search"
   */
  data() {
    return {
      selectedMode: 'Search',
      spinning: true,
      topShowsList: []
    }
  },
  created(){
    this.topShowsList= [];
  },
  
  mounted() {
    this.spinning = true;
    setTimeout(() => this.loadTopTenShows(), 500);
    // this.loadTopTenShows();
  },

  methods: {
    async loadTopTenShows(){
      this.topShowsList = await TvMazeService.getTopTVShows();
      this.spinning = false;
    }
  },
  computed: {
  }
}
</script>
