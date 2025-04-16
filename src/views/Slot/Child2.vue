<template>
    <div>
      <h1 class="title">Child2 Title</h1>
      <slot />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Child2'
  }
  </script>
  
  <style>
  .title {
    color: purple;
  }
  </style>
  