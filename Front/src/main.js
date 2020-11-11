import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from './plugins/vuetify';
import axios from 'axios';

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  baseURL: `http://localhost:3000/api`,
  Headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
