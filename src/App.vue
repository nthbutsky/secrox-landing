<script setup lang="ts">
import ScrxHero from '@/components/hero/hero.vue'
</script>

<template>
  <scrx-hero />
</template>

<style lang="scss">
body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	background: linear-gradient(-45deg, #773520, #631332, #0e4c62, #0b5d4a);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
``