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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  
  {
    path: "/Session",
    name: "Session",
    component: () => import("../views/Session.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("../components/Session/Login.vue"),
      },
      {
        path: "/Register",
         name: "Register",
         component: () => import("../components/Session/Register.vue"),
       },
      {
       path: "/PersonRegister",
        name: "PersonRegister",
        component: () => import("../components/Session/PersonRegister.vue"),
      },
      {
        path: "/OngDetails",
         name: "OngDetails",
         component: () => import("../components/Session/OngDetails.vue"),
       },
    ],
  },
  {
    path: "/ProfileHome",
    name: "ProfileHome",
    component: () => import("../views/ProfileHome.vue"),
    children: [
      {
        path: "",
        name: "Projects",
        component: () => import("../components/Projects.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
