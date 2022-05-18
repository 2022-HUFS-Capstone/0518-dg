import Vue from "vue";
import VueRouter from "vue-router";
import Info from "@/views/Info.vue";
import Relay from "@/views/Relay.vue";
import Event from "@/views/Event.vue";
import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import test from "@/views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Info",
    component: Info,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/relay",
    name: "Relay",
    component: Relay
  },
  {
    path: "/event",
    name: "Event",
    component: Event,
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/test",
    name: "test",
    component: test
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
