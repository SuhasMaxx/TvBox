<template>
  <div class="full-width">
    <h1 class="banner">
      <router-link to="/" title="Home"><font-awesome-icon class="brand-icon" :icon="['fas', 'film']" /> TV Box</router-link>
    </h1>
    <div class="search-btn"><router-link to="/search" title="search"><font-awesome-icon :icon="['fas', 'search']" /></router-link></div>
    <router-view></router-view>
  </div>
  
</template>
<style src="./style.css" scoped></style>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components:{
    FontAwesomeIcon
  }
}
</script>
