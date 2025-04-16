<template>
  <div>
    <input v-model="content" />
    <p>{{ toLowerCasts }}</p>
    <br />
    <p>Open Time: {{ openTimeDisplay }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: 'CastToLow',
      openTime: new Date(), // 初始化時就記錄時間
    };
  },
  computed: 	{//只有依賴的資料變動才會重新計算
    toLowerCasts() {
      return this.content.toLowerCase();
    },
    openTimeDisplay() {
      // return this.openTime.toUTCString();
      return this.openTime.toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    }
  }
};
</script>
