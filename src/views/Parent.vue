<template>
    <div>
      Child Name: <input v-model="ChildName" />
  
      <!-- 傳遞 props + 接收子元件事件 -->
      <Child :childrenName="ChildName" @update-choice="getReturnData" />
  
      <br />
      <div>
        Parent said: {{ DisplayMsg }}
      </div>
      <br />
    </div>
  </template>
  
  <script>
  import Child from './site/Child.vue'
  
  export default {
    components: { Child },
    data() {
      return {
        DisplayMsg: '',   // 儲存來自子元件的回傳值
        ChildName: '',    // 綁定輸入框內容
      }
    },
    methods: {
      getReturnData(ans) {
        this.DisplayMsg = ans
      }
    }
  }
  </script>
  