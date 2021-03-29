import Vue from 'vue'
import App from './App'

const vm = new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  components: {
    App: App
  },
  template: '<App/>'
}).$mount('#root')