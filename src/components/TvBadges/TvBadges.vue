<template>
  <div class="color-info-blocks">
    <label class="rating" v-if="showDetails.rating.average" title="Ratings">★ {{ showDetails.rating.average }}</label>
    <label class="year" v-if="showDetails.premiered" title="Premiered on">{{premierYear}}</label>
    <label class="language" v-if="showDetails.language" title="Language">{{showDetails.language}}</label>
    <label class="runtime" v-if="showDetails.runtime" title="Runtime">{{ showDetails.runtime }} mins</label>
  </div>
</template>
<script>
import { UtilsMixins } from "../../utils/utils.mixin.js";
export default {
  props: {
    showDetails: Object,
  },
  mixins: [UtilsMixins],
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
