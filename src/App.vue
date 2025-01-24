<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppRoot'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Common utility classes */
.text-primary {
  color: #007bff;
}

.text-success {
  color: #28a745;
}

.text-warning {
  color: #ffc107;
}

.text-danger {
  color: #dc3545;
}

.bg-white {
  background-color: #fff;
}

.rounded {
  border-radius: 8px;
}

.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-outline {
  border: 1px solid #ddd;
  background: transparent;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
}

/* Grid system */
.grid {
  display: grid;
  gap: 20px;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1200px) {
  .container {
    max-width: 960px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 720px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 540px;
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 100%;
  }
  
  .grid-cols-2,
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>