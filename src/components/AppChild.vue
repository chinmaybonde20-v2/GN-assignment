<template>
  <div>
    <h2>AppChild.vue</h2>
    <p>Value of a in AppChild: {{ childValue }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";

// Inject the provided value from AppParent.vue
const childValue = inject("providedValue");
</script>
