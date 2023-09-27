<template>
  <div>
    <h1>Parent Component</h1>
    <p>Parent Variable: {{ varInParent }}</p>
    <PropChild :varFromParent="varInParent" />
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from "vue";
import PropChild from "./PropChild.vue";

const varInParent = "chinmay";
</script>
  