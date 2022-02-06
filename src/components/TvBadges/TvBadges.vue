<template>
  <div class="color-info-blocks">
    <label v-if="showDetails.rating.average" class="rating" title="Ratings"
      >★ {{ showDetails.rating.average }}</label
    >
    <label v-if="showDetails.premiered" class="year" title="Premiered on">{{
      premierYear
    }}</label>
    <label v-if="showDetails.language" class="language" title="Language">{{
      showDetails.language
    }}</label>
    <label v-if="showDetails.runtime" class="runtime" title="Runtime"
      >{{ showDetails.runtime }} mins</label
    >
  </div>
</template>
<script>
import { UtilsMixins } from "../../utils/utils.mixin.js";
export default {
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
};
</script>
<style scoped>
.color-info-blocks {
  display: block;
  font-style: italic;
}
.color-info-blocks label:nth-child(1) {
  margin-left: 0em;
}
.color-info-blocks label {
  padding: 0.5em;
  border-radius: 1em;
  margin-left: 0.5em;

  color: var(--cultured);
  min-width: 25px;
  font-size: 0.8em;
  display: inline-block;
}
.rating {
  background-color: var(--carnelian);
}
.year {
  background-color: #1bba18;
}
.language {
  background-color: #7f1b18;
}
.runtime {
  background-color: #187f1b;
}
</style>
