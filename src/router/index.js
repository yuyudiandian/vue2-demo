import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// 自动注册路由
function registerRoutes() {
  const routes = [];

  // 读取 components 文件夹下的所有 Vue 页面
  const componentFiles = import.meta.glob('../views/pages/*.vue');
  for (const path in componentFiles) {
    const componentPath = componentFiles[path]();
    const component = componentPath.default || componentPath;

    // 提取文件名作为路由路径
    let componentName = path.match(/\.\/(.*)\.vue$/)[1];
    componentName = componentName.split('/').pop().replace(/\.\w+$/, '');
    const route = {
      path: `/${componentName}`,
      name: componentName,
      component: () => import(`../views/pages/${componentName}.vue`)
    };

    routes.push(route);
  }
  console.log(routes)
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
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '../components/404.vue')
  }
]

const router = new VueRouter({
  routes: [...routes, ...registerRoutes()]
})

export default router
