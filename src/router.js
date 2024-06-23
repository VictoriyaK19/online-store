import { createRouter, createWebHistory } from "vue-router";

const TheHome = () => import("./pages/TheHome.vue");
const TheStore = () => import("@/pages/TheStore.vue");
const FAQuestions = () => import('@/pages/FAQuestions.vue');
const AboutUs = () => import('@/pages/AboutUs.vue');
const MyProfile = () => import("./pages/user/MyProfile.vue");
const MyCart = () => import("./pages/user/MyCart.vue");
const NotFound = () => import("./pages/NotFound.vue");
const TheProduct = () => import("./pages/TheProduct.vue");
const TheAuth = () => import('@/pages/TheAuth.vue');

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

