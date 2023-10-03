<template>
  <div class="container">
    <SlotLayout>
      <!-- for son -->
      <template #son>
        <h1>Chetan</h1>
      </template>
      <!-- for daughter -->
      <template #daughter>
        <h1>Mohini</h1>
        <h1>Lalita</h1>
      </template>
    </SlotLayout>
  </div>
</template>
  
  <script setup lang="ts">
import SlotLayout from "./SlotLayout.vue";
</script>
  
  