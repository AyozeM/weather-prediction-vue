import Vue from 'vue'
import App from './App.vue'
import { i18n } from './config/multilanguage';

new Vue({
  el: '#app',
  render: h => h(App),
  i18n
})
