<script>
export default {
  name: 'App',
  data() {
    return {//這邊return是宣告用
      message: 'Hello World',
      isShow: true,
      x: 100,
      y: 2,
      firstName: 'Chris',
      lastName: 'Lee',
      users1: ['Jake', 'Allan', 'Eason'],//迴圈通常會跟著陣列一起使用
      users2: [
        { name: 'Jake', email: 'jake@gmail.com' },
        { name: 'Allan', email: 'allan@gmail.com' },
        { name: 'Eason', email: 'eason@gmail.com' },
      ],
    };
  },
  computed: {
    displayText() {
      switch (this.x) {
        case 0: return 'x = 0';
        case 1: return 'x = 1';
        case 2: return 'x = 2';
        default: return 'x != 0';
      }
    },
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    sayHi() {
      // alert(this.message);
      this.isShow = !this.isShow;
    },
    myFunction() {
      return this.x * this.y;
      //注意在這邊要用 this 來取得定義在 data() 內的變數
    },
    myFunction2: function (value) {
      return this.x * this.y + value;
    },
  }
  
};

</script>

<template>
    <button @click="sayHi">切不了的訊息</button>
  <p v-if="isShow">{{ message }}</p>
  <!-- <div> -->
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <p v-for="(user, index) in users1" :key="user">{{ index +1+'.'}} {{ user }}</p>

  <p v-for="(user, index) in users2" :key="user.email">
    {{ index +1+'.'}} {{ user.name }} {{ user.email }}
  </p>
  <br>
  <div v-for="(user, index) in users1" :key="user">
    <p v-if="user === 'Jake'">{{ index +1+'.' }} {{ user }}</p>
  </div>
  <hr>
  <p>{{ fullName }}</p>
  <p>{{ sayHi() }}</p>
  <p v-if="x === 0">x = 0</p>
  <p v-else-if="x === 1">x = 1</p>
  <p v-else-if="x === 2">x = 2</p>
  <p v-else>x != 0</p>
  <p>displayText={{ displayText }}</p>
  <h2>呱呱呱呱呱呱呱</h2>
  <p v-if="isShow">Hello World22</p>
  {{ message }}
  <hr>
  {{ x * y }}<br>
  {{'myFunction='+ myFunction() }}<br>
  {{'myFunction2='+ myFunction2(100) }}
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
