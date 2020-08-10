import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "fontsource-montserrat";
import VueTheMask from "vue-the-mask";
import VImageInput from 'vuetify-image-input';
Vue.use(VueTheMask);
Vue.component('VImageInput', VImageInput);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
