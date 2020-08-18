import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import Breakpoints from "./plugins/Breakpoints";
import VueJSModal from "vue-js-modal";
import Globals from "./mixins/Globals";

Vue.use(Breakpoints);
Vue.use(VueJSModal, {});
Vue.mixin(Globals);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
