import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import GenderOverview from "../views/GenderOverview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/cart/",
    name: "cart",
    component: Cart,
  },
  {
    path: "/:gender/",
    name: "gender-overview",
    component: GenderOverview,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
