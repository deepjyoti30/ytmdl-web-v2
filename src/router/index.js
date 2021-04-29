import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/donate",
    name: "Donate",
    component: () => import("@/views/Donate.vue")
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
    path: "/manual",
    name: "Manual",
    component: () => import("@/views/ManualMetadata.vue")
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
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: () => import("@/views/Playlist.vue")
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  /**
   * Update the title based on the name of the component.
   */
  // Update the titke
  document.title = `${to.name} - Ytmdl Web`;

  next();
});

export default router;
