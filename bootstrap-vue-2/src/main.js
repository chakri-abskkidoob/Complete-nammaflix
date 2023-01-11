import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from 'vee-validate'
import { BPagination } from 'bootstrap-vue'

Vue.component('b-pagination', BPagination)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: 'veeFields',
  // This is not required but avoids possible naming conflicts
  errorBagName: 'veeErrors'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
})
.$mount('#app')