<template>
  <AppNavbar />
  <!-- <router-view></router-view> -->
  <AppParent />
  <AppChild />
</template>

<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import AppParent from "./components/AppParent.vue";
import AppChild from "./components/AppChild.vue";
</script>

<style>

</style>
