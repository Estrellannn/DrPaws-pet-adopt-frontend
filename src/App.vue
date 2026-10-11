<script setup>
import NavVue from './components/Nav.vue';
import FooterVue from './components/Footer.vue';
</script>

<template>
  <NavVue v-if="!$route.meta.hideLayout"></NavVue>
  <router-view></router-view>
  <FooterVue v-if="!$route.meta.hideLayout"></FooterVue>
</template>

<style>
	
</style>