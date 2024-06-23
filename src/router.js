import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./pages/TheHome.vue";

import TheStore from "@/pages/TheStore";
import FAQuestions from '@/pages/FAQuestions';
import AboutUs from '@/pages/AboutUs';
import MyProfile from "./pages/user/MyProfile.vue";
import MyCart from "./pages/user/MyCart.vue";
import NotFound from "./pages/NotFound.vue";
import TheProduct from "./pages/TheProduct.vue";
import TheAuth from '@/pages/TheAuth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/home" },
      { path: "/home", component: TheHome },
      { path: "/store", component: TheStore },
      { path: "/store/:productId", component: TheProduct },
      { path: "/aboutus", component: AboutUs },
      { path: "/faq", component: FAQuestions },
      { path: "/myprofile", component: MyProfile },
      { path: "/auth", component: TheAuth },
      { path: "/mycart", component: MyCart },
      { path: "/:notFound(.*)", component: NotFound },
    ],
  });

export default router;
