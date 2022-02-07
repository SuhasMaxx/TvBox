<template src="./showdetails.template.html"></template>

<script>
import { useRoute } from "vue-router";
import NavBar from "../../components/NavBar/NavBar.vue";
import { TvMazeService } from "../../services/tvmaze.service.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { UtilsMixins } from "../../utils/utils.mixin.js";
import TvBadges from "../../components/TvBadges/TvBadges.vue";
import NoImage from "../../components/NoImage/NoImage.vue";

/**
 * TV Box Show Details page component
 * Details about the show, inclusing poster, cast, rating etc.
 *
 * @class Home
 */
export default {
  components: {
    FontAwesomeIcon,
    NavBar,
    TvBadges,
    NoImage,
  },
  mixins: [UtilsMixins],
  props: {},
  data() {
    return {
      showId: 0,
      showDetails: null,
      blurBackStyle: {},
    };
  },
  computed: {
    premierYear: function () {
      return this.getYear(this.showDetails.premiered);
    },
  },
  mounted() {
    const route = useRoute();
    this.showId = route.params.id || 1;
    this.getShowData();
  },
  methods: {
    async getShowData() {
      this.showDetails = await TvMazeService.getShowDetails(this.showId);
      this.blurBackStyle = {
        "background-image": `url('${this.showDetails.image.original}')`,
      };
    },
  },
};
</script>
<style src="./showdetails.style.css"></style>
