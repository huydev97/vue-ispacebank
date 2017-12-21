<template>
  <div>
    <deposite-list :user="user" :investment="investment" :depositeListData="depositeListData"></deposite-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const DepositeList = () => import('../../../components/Invest/Deposite/DepositeList')

export default {

  name: 'deposite-page',
  components: {
    DepositeList
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['investment'])
  },
  data() {
    return {
      depositeListData: [
        { id: 1, pv: 250, lai: 0.1, chuky: 20 },
        { id: 2, pv: 1500, lai: 0.13, chuky: 20 },
        { id: 3, pv: 5000, lai: 0.15, chuky: 20 },
        { id: 4, pv: 15000, lai: 0.18, chuky: 20 },
        { id: 5, pv: 45000, lai: 0.23, chuky: 20 },
      ]
    }
  }
}
</script>

<style scoped>

</style>
