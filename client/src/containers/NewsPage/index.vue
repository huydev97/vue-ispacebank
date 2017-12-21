<template>
  <div class="container">
    
      <news-page></news-page>

  </div>
</template>

<script>


import NewsPage from '../../components/NewsPage/index'
export default {
  name: 'newspage',
  components: {
    NewsPage
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