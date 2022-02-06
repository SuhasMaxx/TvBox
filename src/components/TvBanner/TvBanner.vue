<template>
  <div class="banner">
    <div class="logo">
      <router-link to="/" title="Home"
        ><font-awesome-icon class="brand-icon" :icon="['fas', 'film']" /> TV
        Box</router-link
      >
    </div>
    <div class="search-btn">
      <router-link to="/search" title="search"
        ><font-awesome-icon :icon="['fas', 'search']"
      /></router-link>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>
<style scoped>
.banner {
  margin: 0px;
  background-color: var(--ruby-red);
  color: white;
  text-align: left;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  font-size: 1.7em;
  font-weight: bold;
}

.logo {
  padding: 0.5em;
}

.search-btn {
  position: absolute;
  right: 1.5em;
  top: 0.7em;
  font-size: 1.5rem;
  color: white;
  z-index: 999;
}

.search-btn a {
  text-decoration: none;
  color: white;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .search-btn {
    right: 1em;
  }
}
</style>
