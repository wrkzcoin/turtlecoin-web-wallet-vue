import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "./assets/scss/app.scss";
import "./vee-validate";
import VueClipboard from "vue-clipboard2";

Vue.use(Buefy);

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
