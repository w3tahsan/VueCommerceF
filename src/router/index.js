import { createWebHistory, createRouter } from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Whishlist from "@/pages/Whishlist.vue";
import Cart from "@/pages/Cart.vue";
import Checkout from "@/pages/Checkout.vue";
import Profile from "@/pages/Profile.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";

const routes = [
  { path: "/",name:'home', component: Homepage },
  { path: "/wishlist", component: Whishlist },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/profile", name:'profile', component: Profile },
  { path: "/product/details", component: ProductDetails },
  { path: "/register", name: "register", component: Register },
  { path: "/login", name: "login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
