<template src="./homepage.template.html"></template>
<script>
import ShowRow from "../../components/ShowRow/ShowRow.vue";
import { TvMazeService } from "../../services/tvmaze.service.js";

/**
 * TV Box homepage component
 * The page shows top shows from each Genre ( maximum 20 ). User can click on any show and go to its details page. Each genre list is scrollable and has navigation buttons.
 *
 * @class Home
 */
export default {
  components: {
    ShowRow,
  },
  /**
   * Sets default page mode to "Search"
   */
  data() {
    return {
      selectedMode: "Search",
      spinning: true,
      topShowsList: [],
    };
  },
  created() {
    this.topShowsList = [];
  },

  mounted() {
    this.spinning = true;
    /* manual timeout to check shimmer */
    setTimeout(() => this.loadTopTenShows(), 200);
  },
  methods: {
    async loadTopTenShows() {
      this.topShowsList = await TvMazeService.getTopTVShows();
      this.spinning = false;
    },
  },
};
</script>
<style src="./homepage.style.css" scoped></style>
