
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(page) {
  router.push(`/${page}`)
}
</script>


<template>
<div  class="layout">    <!-- 導覽列固定在上方 -->
  <div  class="nav">
    <button @click="goTo('homepage')">homepage</button>
    <button @click="goTo('page1')">Page 1</button>
    <button @click="goTo('page2')">'DELETE' </button>
    <button @click="goTo('preLineDisplay')">preLineDisplay</button>
    <button @click="goTo('page3')">OpenTime </button>
    <button @click="goTo('ParentSloted')">ParentSloted </button>
    <button @click="goTo('Parent')">Parent </button>
    <br>
    <button @click="goTo('LifeCycle')">LifeCycle </button>
    <button @click="goTo('LikePage')">LikePage </button>
  </div>
  <hr>
     <!-- 主要內容 -->
     <main class="content">
      <router-view />
    </main>
</div>
<h3>聽你在瓜</h3>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 10px;
}

.content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
