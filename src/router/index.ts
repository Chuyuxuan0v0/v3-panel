
// 引入vue路由
import { createRouter, createWebHistory } from 'vue-router';

// 创建路由
const routes = [
  {
    path: '/login',  
    component: ()=>import('@/views/login/index.vue'),
    meta: {
      title: 'Login',
      // 是否需要登录
      requiresAuth: false,
      // 是否需要隐藏
      requiresHide: false
    }
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=>import('@/views/admin/index.vue'),
    meta: {
      // 这个是 自定义的集合，可以自己放任何路由有关的东西
      title:'ADMIN',
      requiresAuth: true,
      requiresHide: false
     }
  },
];

const router = createRouter({
    routes,
    history: createWebHistory() // 使用history模式
});


router.beforeEach((to, from, next) => {
  console.log(to, from,"to,form");
  document.title = to.meta.title as string; // 修改网页的title
  next()
  
})

export default router;
