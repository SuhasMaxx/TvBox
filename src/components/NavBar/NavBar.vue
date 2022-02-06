<template>
  <div class="nav">
    <a v-if="showHomebutton" @click="goBack()"
      ><font-awesome-icon :icon="['fas', 'angle-left']" /><span
        class="nav-label"
        >Home</span
      ></a
    >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    showHomebutton: Boolean,
    backPage: {
      type: String,
      default: "",
    },
  },
  methods: {
    goBack() {
      this.$router.push(this.backPage ? "/" + this.backPage : "/");
    },
  },
};
</script>

<style scoped>
.nav {
  margin: 0.5em;
}
.nav a {
  font-size: 1.5em;
  color: var(--cultured);
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
}
.nav a:hover {
  color: white;
}
.nav a .nav-label {
  font-size: 0.7em;
  margin-left: 0.2em;
  cursor: pointer;
}
</style>
