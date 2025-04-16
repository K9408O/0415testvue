<template>
    <fieldset>
      <legend><b>{{ childrenName }}</b> Choose:</legend>
  
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
  
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
    </fieldset>
  </template>
  
  <script>
  export default {
    props: ['childrenName'],
    emits: ['update-choice'],
    data() {
      return {
        picked: ''
      }
    },
    watch: {
      picked: {
        handler(newVal) {
          this.$emit('update-choice', newVal)
        },
        immediate: true
      }
    }
  }
  </script>
  