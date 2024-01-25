import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// 自动注册路由
async function registerRoutes() {
  const routes = [];

  // 读取 components 文件夹下的所有 Vue 页面
  const requireComponent = await require.context('../views/pages', true, /\.vue$/);
  requireComponent.keys().forEach(fileName => {
    // 提取文件名作为路由路径
    const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');
    const route = {
      path: `/${componentName}`,
      name: componentName,
      component: () => import(/* webpackChunkName: "[request]" */ `../views/pages/${componentName}.vue`)
    };

    routes.push(route);
  });
  console.log("routes=", routes)
  return routes;
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "testView" */ '../views/Test.vue')
  }
]

const router = new VueRouter({
  routes: [...routes, ...await registerRoutes()]
})

export default router
