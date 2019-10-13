import Vue from "vue";
import App from "./App.vue";
import { extend, configure, ValidationProvider } from "vee-validate";
import { required } from "vee-validate/dist/rules";

Vue.config.productionTip = false;

extend("required", required);

const configVeeValidate = {
  classes: {
    valid: "",
    invalid: "is-invalid"
  },
  mode: "aggressive"
};
configure(configVeeValidate);

Vue.component("ValidationProvider", ValidationProvider);

new Vue({
  render: h => h(App)
}).$mount("#app");
