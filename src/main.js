import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/scss/_tailwind.scss";
import VueResource from "vue-resource";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTelegramPlane,
  faPatreon,
  faPaypal
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub, faTelegramPlane, faEnvelope, faPatreon, faPaypal);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
