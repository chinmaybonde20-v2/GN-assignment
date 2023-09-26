<template>
  <nav class="navbar">
    <div class="logo">My App</div>
    <ul class="nav-links">
      <a><router-link to="/calc">Calculator</router-link></a>
      <a><router-link to="/form-list">FormData</router-link></a>
      <a><router-link to="/">Home</router-link></a>
      <a><router-link to="/about">About Us</router-link></a>
      <button @click="openFormFunction">Open Form</button>
    </ul>
  </nav>
</template>
  
<script setup lang="ts">
import { ref,provide } from "vue";

const varForShowForm = ref(false);

// function to change value of var
const openFormFunction = () => {
  varForShowForm.value=true;
};

provide ('sendVarBoxName', varForShowForm);
</script>
  <style>
/* Navbar styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: #fff;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  font-size: 18px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ff5733; /* Change color on hover */
}
</style>
  