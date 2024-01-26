import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import fileNames from '../utils/fileName.js'

Vue.use(VueRouter)

// 自动注册路由
function registerRoutes() {
  const routes = [];

  fileNames.forEach(fileName => {
    const route = {
      path: `/${fileName}`,
      name: fileName,
      component: () => import(/* webpackChunkName: "[request]" */ `../views/pages/${fileName}.vue`)
    };

    routes.push(route);
  });
  console.log("routes=", routes)
  return routes;
}

let routes = [
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
    component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue')
  }
]
routes = [...routes, ...registerRoutes()]
console.log("routes=", routes)
const router = new VueRouter({
  routes
})

export default router
