<template>
    <div>
      <h1>Life Cycle</h1>
      <p>目前狀態：{{ status }}</p>
      <h3>Console 模擬輸出：</h3>
      <ul>
        <li v-for="(log, index) in logList" :key="index">{{ log }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        status: 'stanby',
        logList: []
      };
    },
    watch: {
      status: {
        handler(newVal) {
          const msg = 'Status: ' + newVal;
          this.logList.push(msg);
          console.log(msg);
        },
        immediate: true
      }
    },
    beforeCreate() {
      // 雖然這裡寫了修改，但此時 this.status 還不可用
      // 不會真正改動或觸發 watch
      this.status = 'initializing';
    },
    created() {
      this.status = 'initializing done';
    },
    beforeMount() {
      this.status = 'pre-online';
    },
    mounted() {
      this.status = 'online';
    },
    beforeUnmount() {
      this.status = 'Unmount';
    }
  };
  </script>
  