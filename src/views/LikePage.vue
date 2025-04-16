<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>Power by {{ author }}</div>
    <div>Total like : {{ likes }}</div>
    <i @click="increaseLike" class="fa fa-thumbs-up" style="cursor: pointer; font-size: 24px;"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapMutations } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState(['author', 'likes'])
  },
  methods: {
    ...mapMutations(['incrementLikes']),
    increaseLike() {
      this.incrementLikes()
    }
  }
})
</script>

<style scoped>
.fa-thumbs-up {
  color: #007bff;
  margin-top: 10px;
}
</style>

<!-- <template>
  <div>
    <h1>這是 LikePage.vue</h1>
    <p>按讚數功能即將啟動 🔥</p>
  </div>
</template>

<script>
  export default {
    name: 'LikePage'
  }
  </script> -->