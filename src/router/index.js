import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Game from "@/views/Game.vue";
Vue.use(VueRouter);
//adding the new 'views' and their paths
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
