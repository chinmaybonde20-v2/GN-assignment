<template>
    <div class="bodys">
      <label for="num1">Number 1</label>
      <input type="number" v-model="num1" />
  
      <label for="num2">Number 2</label>
      <input type="number" v-model="num2" />
      <br />
  
      <button @click="addition">+</button>
      <button @click="subtraction">-</button>
      <button @click="multiplication">×</button>
      <button @click="division">÷</button>
  
      <h2>Output for Sum: {{ sum }}</h2>
      <h2>Output for Subtraction: {{ subtract }}</h2>
      <h2>Output for Multiplication: {{ multiply }}</h2>
      <h2>Output for Division: {{ divide }}</h2>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const num1 = ref<number>(0);
  const num2 = ref<number>(0);
  const sum = ref<number>(0);
  const subtract = ref<number>(0);
  const multiply = ref<number>(0);
  const divide = ref<number> (0);
  
  const addition = () => {
    sum.value = num1.value + num2.value;
  };
  
  const subtraction = () => {
    subtract.value = num1.value - num2.value;
  };
  
  const multiplication = () => {
    multiply.value = num1.value * num2.value;
  };
  
  const division = () => {
    const n2 = num2.value;
    if (n2 !== 0) {
      divide.value = num1.value / n2;
    } else {
      divide.value = "Cannot divide by zero";
    }
  };
  </script>
  
  <style>
.bodys{
  padding: 20px;
}
</style>



