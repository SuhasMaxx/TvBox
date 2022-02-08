<template>
  <div class="loading-spinner">
    <div class="dots">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.loading-spinner {
  text-align: center;
  padding: 1em;
  widows: 100%;
}

.dots {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.dots div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  animation: glowFade 1.2s linear infinite;
}
.dots div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.dots div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.dots div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}

@keyframes glowFade {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
