import Vue from 'vue'
import App from './App.vue'

import Home from './assets/Components/Home';

Vue.component("name1",Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
