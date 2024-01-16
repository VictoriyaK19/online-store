import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./pages/TheHome.vue";
import NotFound from "./pages/NotFound.vue";
import TheStore from "@/pages/TheStore";
import FAQuestions from '@/pages/FAQuestions';
import AboutUs from '@/pages/AboutUs';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/home" },
      { path: "/home", component: TheHome },
      { path: "/store", component: TheStore },
      { path: "/abutus", component: AboutUs },
      { path: "/faq", component: FAQuestions },
  
      { path: "/:notFound(.*)", component: NotFound },
    ],
  });

export default router;
