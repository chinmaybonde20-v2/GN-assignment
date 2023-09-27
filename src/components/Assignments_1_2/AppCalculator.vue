<template>
    <div><br><br>
     
      <input v-model="num1" type="number" placeholder="Enter first no."/><br><br>
      <input v-model="num2" type="number" placeholder="Enter second no."/><br /><br>

      
      <button @click="add">+</button>
      <button @click="subtract">-</button>
      <button @click="multiply">*</button>
      <button @click="divide">/</button>
      <br /><br />

      <h3>Result: {{ result }}</h3>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const num1 = ref<number>(null);
  const num2 = ref<number>(null);
  const result = ref<number | null>(null);
  
  const add = () => {
    result.value = num1.value + num2.value;
  };
  
  const subtract = () => {
    result.value = num1.value - num2.value;
  };
  
  const multiply = () => {
    result.value = num1.value * num2.value;
  };
  
  const divide = () => {
    if (num2.value !== 0) {
      result.value = num1.value / num2.value;
    } else {
      alert('Cannot divide by zero');
    }
  };
  </script>
  
  <style>
    button{
        margin: 10px;
    }
  </style>