import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./plugins/i18n";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
