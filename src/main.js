import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import storeRaw from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';

Vue.config.productionTip = false
Vue.use(Vuex);



const store = new Vuex.Store(storeRaw);

new Vue({
  store: store,

  render: h => h(App),
}).$mount('#app')
