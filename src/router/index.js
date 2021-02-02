import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Settings from "@/views/Settings";
import Search from "@/views/Search";
import Metadata from "@/views/Metadata";
import Format from "@/views/Format";
import Download from "@/views/Download";

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
  },
  {
    path: "/format",
    name: "Format",
    component: Format,
    props: route => ({
      metaDetails: route.params.metaDetails
    })
  },
  {
    path: "/download",
    name: "Download",
    component: Download,
    props: route => ({
      metaDetails: route.params.metaDetails
    })
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
