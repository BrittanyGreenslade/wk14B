import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import Game from "@/views/Game.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
