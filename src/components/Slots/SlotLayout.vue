<template>
  <div class="container">
    <div class="column left">
      <slot name="son"></slot>
    </div>
    <div class="column right">
      <slot name="daughter"></slot>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
</script>
  
  <style scoped>
.container {
  display: flex;
  padding: 20px;
}

.column {
  flex: 1;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 18px;
}

.left {
  background-color: red;
}

.right {
  background-color: blue;
}
</style>
