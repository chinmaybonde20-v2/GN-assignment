<template>
  <h1>Button from parent</h1>
  <button @click="openForm">Add a new member</button>

  <FormList :sendOpenVarBox="varForOpenForm"/>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FormList from "./FormList.vue";
const varForOpenForm = ref(false);

// function to open form
const openForm = () => {
    varForOpenForm.value=true;
};
</script>

<style>
</style>