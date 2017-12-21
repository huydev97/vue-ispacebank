import Vue from 'vue'
import App from './App'
import Cookie from 'vue-cookie'
import Vuetify from 'vuetify'
import store from './store'
import router from './router'
import('../node_modules/vuetify/dist/vuetify.min.css')
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
     load: {
     key: 'AIzaSyBv8uKC9GOqiLpGLqInVw5Fv-7Ohbju5QU',
     libraries: 'places',
     region: 'VN',
     language: 'en-us'
   }
 })


Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Cookie)

// kiểm tra môi khi đổi link
router.beforeEach(async (to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    // nếu chưa đăng nhập test đăng nhập tự động
    if (!store.getters.isAuthenticated) {
      await store.dispatch('checkAuth')
    }
    // nếu ko được xác thực tài khoản nhảy qua lại login page
    if (!store.getters.isAuthenticated) {
      return next('/login')
    }
  }
  //check admin route
  if (to.matched.some(record => record.meta.isAdmin)) {
    // nếu chưa đăng nhập test đăng nhập tự động
    if (!store.getters.isAuthenticated) {
      await store.dispatch('checkAuth')
    }
    // nếu là admin level 2
    if (!(store.getters.user.isAdmin === 2)) {
      return next('/investment')
    } 
  }

  next()

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})


