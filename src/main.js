// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
window.axios = require('axios');

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})
