<template>
  <div class="container">
    <!-- contact component -->
    <contact-page></contact-page>

  </div>
</template>

<script>


import ContactPage from '../../components/ContactPage/index'
export default {
  name: 'contactpage',
  components: {
    ContactPage
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