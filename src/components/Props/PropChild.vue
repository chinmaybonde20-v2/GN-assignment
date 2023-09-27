<template>
  <div>
    <h2>Child Component</h2>
    <p>Received Variable from Parent: {{ varFromParent }}</p>
  </div>
</template>
  
  <script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  varFromParent: String,
});
</script>
  