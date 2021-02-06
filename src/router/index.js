import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () => import("@/views/Settings.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/Search.vue")
  },
  {
    path: "/metadata",
    name: "Metadata",
    component: () => import("@/views/Metadata.vue")
  },
  {
    path: "/format",
    name: "Format",
    component: () => import("@/views/Format.vue"),
    props: route => ({
      metaDetails: route.params.metaDetails
    })
  },
  {
    path: "/download",
    name: "Download",
    component: () => import("@/views/Download.vue"),
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
