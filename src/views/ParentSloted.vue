<template>
    <div>
      <h1 class="title">Parent Sloted</h1>
      <div>
        <Child1>
          <h1 class="title">Parent Pass Sloted1</h1>
        </Child1>
      </div>
      <div>
        <Child2>
          <h1 class="title">Parent Pass Sloted2</h1>
        </Child2>
      </div>
    </div>
  </template>
  
  <script>
  import Child1 from './Slot/Child1.vue'
  import Child2 from './Slot/Child2.vue'
  
  export default {
    components: {
      Child1,
      Child2
    }
  }
  </script>
  
  <style scoped>
  .title {
    color: blue;
  }
  </style>
  