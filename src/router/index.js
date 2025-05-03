import { createWebHistory, createRouter } from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Whishlist from "@/pages/Whishlist.vue";
import Cart from "@/pages/Cart.vue";
import Checkout from "@/pages/Checkout.vue";
import Profile from "@/pages/Profile.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";
import store from "@/store";

const routes = [
  { path: "/", name: "home", component: Homepage },
  { path: "/wishlist", component: Whishlist },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  { path: "/product/details/:id", component: ProductDetails },
  { path: "/register", name: "register", component: Register },
  { path: "/login", name: "login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.authStatus) {
    next("/login");
  } else {
    next();
  }
});

export default router;
