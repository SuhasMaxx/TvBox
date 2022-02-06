<template src="./searchresultblock.template.html"></template>
<script>
import { UtilsMixins } from "../../utils/utils.mixin.js";
import TvBadges from "../TvBadges/TvBadges.vue";
import NoImage from "../NoImage/NoImage.vue";
/**
 * Small show block with show info on Home page
 *
 * @class ShowBlock
 */
export default {
  components: {
    TvBadges,
    NoImage,
  },
  mixins: [UtilsMixins],
  props: {
    showDetails: {
      type: Object,
      default: null,
    },
  },
  computed: {
    premierYear: function () {
      return this.getYear(this.showDetails.premiered);
    },
  },
  methods: {
    gotoShowDetails() {
      this.$router.push("/show/" + this.showDetails.id);
    },
  },
};
</script>
<style src="./searchresultblock.style.css" scoped></style>
