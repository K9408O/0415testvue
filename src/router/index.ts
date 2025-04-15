// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage }, // ✅ 預設首頁
    { path: '/homepage', name: 'HomePage', component: HomePage },//雖然葉面一樣但name不能取相同的名稱
    { path: '/page1', name: 'Page1', component: Page1 },
    { path: '/page2', name: 'Page2', component: Page2 },
    { path: '/page3', name: 'Page3', component: Page3 },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router