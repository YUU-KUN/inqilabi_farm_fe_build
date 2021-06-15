import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
// import RegisterPhone from '../views/auth/RegisterPhone.vue'

import Navbar from '../views/layouts/Navbar.vue'
import Header from '../views/layouts/Header.vue'
import Footer from '../views/layouts/Footer.vue'

import ProfileCompletion from '../views/ProfileCompletion.vue'
import ChoosePackage from '../views/ChoosePackage.vue'
import PaketDombaJantan from '../views/PaketDombaJantan.vue'
import PaketPatunganSapi from '../views/PaketPatunganSapi.vue'
import Checkout from '../views/Checkout.vue'
import ConfirmCheckout from '../views/ConfirmCheckout.vue'
import UploadBukti from '../views/UploadBukti.vue'
import Pembayaran from '../views/Pembayaran.vue'
import Report from '../views/Report.vue'
import ReportAdmin from '../views/Report Admin.vue'
import ReportDetail from '../views/Report Detail.vue'
import ReportCreate from '../views/Report Create.vue'

import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    components: {default: Login, header: Header, footer: Footer}
  },
  {
    path: '/register',
    name: 'register',
    components: {default: Register, header: Header, footer: Footer}
  },
  {
    path: '/',
    name: 'Dashboard',
    components: {default: Dashboard, header: Header, footer: Footer},
    meta: {
      title: "Dashboard",
      requiresAuth: true
    }
  },
  {
    path: '/reportCreate',
    name: 'Report Create',
    components: {default: ReportCreate, header: Header, footer: Footer},
    meta: {
      title: "Report Create",
      requiresAuth: true
    }
  },
  {
    path: '/reportDetail',
    name: 'Report Detail',
    components: {default: ReportDetail, header: Header, footer: Footer},
    meta: {
      title: "Report Detail",
      requiresAuth: true
    }
  },
  {
    path: '/reportAdmin',
    name: 'Report Admin',
    components: {default: ReportAdmin, header: Header, footer: Footer},
    meta: {
      title: "Report Admin",
      requiresAuth: true
    }
  },
  {
    path: '/report',
    name: 'Report',
    components: {default: Report, header: Header, footer: Footer},
    meta: {
      title: "Report",
      requiresAuth: true
    }
  },
  {
    path: '/pembayaran',
    name: 'Pembayaran',
    components: {default: Pembayaran, header: Header, footer: Footer},
    meta: {
      title: "Pembayaran",
      requiresAuth: true
    }
  },
  {
    path: '/uploadBukti',
    name: 'UploadBukti',
    components: {default: UploadBukti, header: Header, footer: Footer},
    meta: {
      title: "UploadBukti",
      requiresAuth: true
    }
  },
  {
    path: '/confirmCheckout',
    name: 'ConfirmCheckout',
    components: {default: ConfirmCheckout, header: Header, footer: Footer},
    meta: {
      title: "ConfirmCheckout",
      requiresAuth: true
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    components: {default: Checkout, header: Header, footer: Footer},
    meta: {
      title: "Checkout",
      requiresAuth: true
    }
  },
  {
    path: '/paketPatunganSapi',
    name: 'Paket Patungan Sapi',
    components: {default: PaketPatunganSapi, header: Header, footer: Footer},
    meta: {
      title: "Paket Patungan Sapi",
      requiresAuth: true
    }
  },
  {
    path: '/paketDombaJantan',
    name: 'Paket Domba Jantan',
    components: {default: PaketDombaJantan, header: Header, footer: Footer},
    meta: {
      title: "Paket Domba Jantan",
      requiresAuth: true
    }
  },
  {
    path: '/choosePackage',
    name: 'Choose Package',
    components: {default: ChoosePackage, header: Header, footer: Footer},
    meta: {
      title: "Choose Package",
      requiresAuth: true
    }
  },
  {
    path: '/profileCompletion',
    name: 'Profile Completion',
    components: {default: ProfileCompletion, header: Header, footer: Footer},
    meta: {
      title: "Profile Completion",
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer},
    meta: {
      title: "Home",
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login') 
//   } else {
//     next() 
//   }
// })

export default router
