<template>
  <h3>This is Child</h3>
  <h4>This is var in child => {{ varInChild }}</h4>

  <button @click="sendDataFunction">send data to parent</button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";


const varInChild = ref("Gunjan");

const emits = defineEmits<{
  sendVarBox: (data: string) => void;
}>();

const sendDataFunction = () => {
  emits("sendVarBox",varInChild.value);

};
</script>

<style>
</style>










<!-- 


 <template>
  <div>
    <h3>This is Child</h3>
    <h3>Var in child = {{ varInChild }}</h3>
    <button @click="sendDataFunction">Send data to parent</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const varInChild = ref("Chinmay");

const emits = defineEmits<{
  sendVarBox: (data: string) => void;
}>(); // Define the emits function to send data to the parent

const sendDataFunction = () => {
  emits("sendVarBox", varInChild.value); // Emit the data to the parent
};
</script>

<style>
</style>  -->
