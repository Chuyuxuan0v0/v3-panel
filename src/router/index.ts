
// 引入vue路由
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/login/index.vue';

// 创建路由
const routes = [
  {
    path: '/login',  
    component: Login,
    meta: {
      hidden: true
    }
  }
];

const router = createRouter({
    routes,
    history: createWebHistory() // 使用history模式
});

export default router;
