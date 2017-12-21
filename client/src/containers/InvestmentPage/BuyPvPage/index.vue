<template>
    <div class="white grey--text text--light-3">
        <buy-pv-form :adminEwallet="adminEwallet" :idUser="user.id" :eWallet="user.eWallet" :buyPv="buyPv" :bitcoinPrice="bitcoinPrice"></buy-pv-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BuyPvForm from '../../../components/Invest/BuyPvForm'
export default {
    components: {
        BuyPvForm
    },
    computed: {
        ...mapGetters(['user', 'bitcoinPrice', 'adminEwallet'])
    },
    methods: {
        ...mapActions(['buyPv', 'getAdminEwallet'])
    },
    async mounted() {
        await this.getAdminEwallet()
    }
}
</script>

<style scoped>

</style>
