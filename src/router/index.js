import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Products",
    name: "Products",
    component: () => import(/* webpackChunkName: "products" */ "../views/Products.vue"),
  },
  {
    path: "/Contact",
    name: "contact",
    component: () => import(/* webpackChunkName: "contact" */ "../views/contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
