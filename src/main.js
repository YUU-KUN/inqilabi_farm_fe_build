import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import VueCurrency from 'vue-currency-filter'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import moment from 'moment'
import App from './App.vue'

//load CSS
import '../public/css/materialdesignicons.min.css'
import '../public/css/vendor.bundle.base.css'
import '../public/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//load js
import '../public/js/vendor.bundle.base.js'
import '../public/js/polyfill.min.js'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueCurrency, {
  name: 'rupiah',
  symbol : 'Rp',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
})

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).locale('id').format('D MMM YYYY') 
  }
})

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://116.193.190.201/api'
axios.defaults.headers.common['Content-Type'] = 'application/json'
if (localStorage.getItem("Authorization")) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("Authorization")
}

new Vue({
  router,
  store,
  methods: {
    isAuthenticate : function(){
      if(localStorage.getItem("Authorization")){
        let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
        this.axios.get("/profile", conf)
        .then(response => {
          if(response.data.auth == false || response.data.status == 0){
            this.$store.commit('logout')
          } else {
            this.$store.commit('userDetail', response.data.user)
          }
        })
        .catch(error => {
          this.$store.commit('logout')
        });
      } else {
        this.$store.commit('logout')
      }
    },
  },
  mounted(){
    this.isAuthenticate()
  },
  render: h => h(App)
}).$mount('#app')
