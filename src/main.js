import Vue from "vue";
import App from "./App.vue";
import { extend, ValidationProvider } from "vee-validate";
import { required } from "vee-validate/dist/rules";

Vue.config.productionTip = false;

extend("required", required);

Vue.component("ValidationProvider", ValidationProvider);

new Vue({
  render: h => h(App)
}).$mount("#app");
