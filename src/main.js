import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/scss/_tailwind.scss";

import Adsense from "vue-google-adsense/dist/Adsense.min.js";
import InFeedAdsense from "vue-google-adsense/dist/InFeedAdsense.min.js";

Vue.use(require("vue-script2"));

// Use adsense
Vue.use(Adsense);
Vue.use(InFeedAdsense);

Vue.config.productionTip = false;

// Check that service workers are supported
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
