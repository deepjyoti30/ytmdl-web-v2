import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/scss/_tailwind.scss";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
