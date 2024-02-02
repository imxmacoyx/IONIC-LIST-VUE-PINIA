import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import PersonaList from "@/views/PersonaList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/personaList",
  },
  {
    path: "/personaList",
    name: "Personas",
    component: PersonaList,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
