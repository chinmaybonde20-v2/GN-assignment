<template>
  <div>
    <h1>AppParent.vue</h1>
    <p>Value of a in AppParent: {{ a }}</p>
    <AppChild />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";

// Create a variable 'a' in AppParent.vue
const a = ref("chinmay");

// Provide 'a' to child components
provide("providedValue", a);
</script>
