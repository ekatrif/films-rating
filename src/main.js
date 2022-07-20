import Vue from "vue";

import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
