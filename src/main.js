// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './HelloWorld';
import router from './router';
import 'bootstrap';
import './assets/custom.css';
import axios from 'axios';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  axios,
  router,
  render: h => h(App)
}).$mount("#app");
