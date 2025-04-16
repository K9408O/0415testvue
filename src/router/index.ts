// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'
import preLineDisplay from '../views/PreLineDisplay.vue'
import ParentSloted from '../views/ParentSloted.vue'
import Parent from '../views/Parent.vue'
import LifeCycle from '../views/LifeCycle.vue'
import LikePage from '../views/LikePage.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage }, // ✅ 預設首頁
    { path: '/homepage', name: 'HomePage', component: HomePage },//雖然葉面一樣但name不能取相同的名稱
    { path: '/page1', name: 'Page1', component: Page1 },
    { path: '/page2', name: 'Page2', component: Page2 },
    { path: '/page3', name: 'Page3', component: Page3 },
    { path: '/preLineDisplay', name: 'preLineDisplay', component: preLineDisplay },
    { path: '/ParentSloted', name: 'ParentSloted', component: ParentSloted },
    { path: '/Parent', name: 'Parent', component: Parent },
    { path: '/LifeCycle', name: 'LifeCycle', component: LifeCycle },
    { path: '/LikePage', name: 'LikePage', component: LikePage },
]//

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router