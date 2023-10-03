<template>
  <SlotLayout>
    <!-- son -->
    <template #son>
      <h1>Kalpesh</h1>
    </template>
    <!-- daughter -->
    <template #daughter>
      <h1>Suchita</h1>
    </template>
  </SlotLayout>
</template>

<script setup lang="ts">
import SlotLayout from './SlotLayout.vue';
</script>

<style></style>