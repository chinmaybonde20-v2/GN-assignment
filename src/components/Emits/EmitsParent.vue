<template>
  <h3>This is parent</h3>
  <h4>This is var from child => {{ boxVarInParent }}</h4>
  <hr>
  <EmitsChild @sendVarBox="updateLocalVarFunction"/>
</template>

<script setup lang="ts">
import EmitsChild from "./EmitsChild.vue";
import { ref } from "vue";

const boxVarInParent = ref("");

const updateLocalVarFunction = (data: string) => {
  boxVarInParent.value = data;
};
</script>

<style>

</style>























<!-- 
<template>
  <div>
    <h3>This is parent</h3>
    <h3>Var from child => {{ varFromChild }}</h3>
    <hr />
    <EmitsChild @sendVarBox="updateVarFromChild" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import EmitsChild from "./EmitsChild.vue";

const varFromChild = ref("");

const updateVarFromChild = (data: string) => {
  varFromChild.value = data;
};
</script>

<style>
</style> -->
