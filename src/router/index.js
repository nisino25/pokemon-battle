import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: '/:catchAll(.*)',
    // name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  },

  {
    path: '/vsAI',
    name: 'vsAI',
    component: () => import('../views/vsAI.vue')
  },
  // {
  //   path: '/settings',
  //   name: 'settings',
  //   component: () => import('../views/settings.vue')
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
