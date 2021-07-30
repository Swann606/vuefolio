import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* eslint-disable */

const routes = [
  {
    path: "/",
    name: "Loader",
    component: () => import(/* webpackChunkName: "loader" */ "../views/Loader.vue"),
  },
  {
    path: "",
    name: "Main",
    component: () => import(/* webpackChunkName: "main" */ "../layout/MainLayout.vue"),
    children:[
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/porfolio",
        name: "Porfolio",
        component: () =>
            import(/* webpackChunkName: "porfolio" */ "../views/Porfolio.vue"),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
      },
    ] 
  },
  
  {
    path: '*',
    component: () => import(/* webpackChunkName: "Error404" */'../views/Error404.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
