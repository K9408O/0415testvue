<template>
    <div>
      <h1 class="title">Child1 Title</h1>
      <slot />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Child1'
  }
  </script>
  
  <style scoped>
  .title {
    color: cyan;
  }
  </style>