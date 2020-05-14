import Vue from "vue";
import FrWysiwyg from "./fr-wysiwyg.vue";
import "./assets/styles.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(FrWysiwyg)
}).$mount("#app");
