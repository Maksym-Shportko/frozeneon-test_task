import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import axios from "axios";
import algoliasearch from "algoliasearch";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  bootstrap,
  algoliasearch,
  render: (h) => h(App),
}).$mount("#app");
