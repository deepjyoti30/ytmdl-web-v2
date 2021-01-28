import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Settings from "@/views/Settings";
import Search from "@/views/Search";
import Metadata from "@/views/Metadata";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("@/views/Terms.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/metadata",
    name: "Metadata",
    component: Metadata
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
