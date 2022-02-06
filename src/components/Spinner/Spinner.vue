<template>
  <div class="loading-spinner">
    <div class="lds-grid">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
	.loading-spinner {
		text-align: center;
		padding: 1em;
		widows: 100%;
	}

	.lds-grid {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-grid div {
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #fff;
		animation: lds-grid 1.2s linear infinite;
	}
	.lds-grid div:nth-child(1) {
		top: 8px;
		left: 8px;
		animation-delay: 0s;
	}
	.lds-grid div:nth-child(2) {
		top: 8px;
		left: 32px;
		animation-delay: -0.4s;
	}
	.lds-grid div:nth-child(3) {
		top: 8px;
		left: 56px;
		animation-delay: -0.8s;
	}

	@keyframes lds-grid {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}
</style>
<script>
	export default {};
</script>
