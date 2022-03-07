import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/pacientes",
    alias: "/pacientes",
    name: "pacientes",
    component: () => import("./components/PacienteList"),
  },
  {
    path: "/pacientes-add",
    alias: "/pacientes-add",
    name: "Adicionar Pacientes",
    component: () => import("./components/PacienteAdd"),
  },
  // {
  //   path: "/users/:id",
  //   name: "users-details",
  //   component: () => import("./components/User")
  // },
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddUser")
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
