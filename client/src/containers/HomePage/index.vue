<template>
  <div class="container">
    <!-- home component -->
    <home></home>

  </div>
</template>

<script>
import '../../../node_modules/swiper/dist/css/swiper.min.css'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import Home from '../../components/HomePage/index'
export default {
  name: 'homepage',
  components: {
    Home
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  max-width: 100%;
  width: 100%;
}
</style>