<template>
  <div>
    <h2>在執行以下的DeleteData()</h2>
    <button @click="DeleteData">刪除資料</button>
    <p>{{ deleteMsg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleteMsg: ''
    };
  },
  methods: {
    DeleteData() {
      fetch('weatherforecast/delete', { method: 'DELETE' }) // ✅ 指定 DELETE 方法
        .then(r => r.text())
        .then(r => {
          this.deleteMsg = r; // ✅ 回傳結果
        })
        .catch(err => {
          this.deleteMsg = '發生錯誤：' + err.message; // ✅ 錯誤處理
        });
    }
  }
}
</script>