<template src="./showblock.template.html" />
<script>
/**
 * Small show block with show info on Home page
 *
 * @class ShowBlock
 */
export default {
  props: {
    showDetails: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    // this.getData();
  },
  methods: {
    navigateToShow() {
      this.$router.push("/show/" + this.showDetails.id);
    },
  },
};
</script>
<style src="./showblock.style.css" scoped></style>
