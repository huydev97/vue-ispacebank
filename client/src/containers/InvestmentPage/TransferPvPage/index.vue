<template>
    <div class="white grey--text text--light-3">
        <transfer-pv-form :idUser="user.id" :usernameSender="user.username" :userTransferPv="userTransferPv"></transfer-pv-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TransferPvForm from '../../../components/Invest/TransferPvForm'
export default {
    components: {
        TransferPvForm
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['userTransferPv'])
    }
}
</script>

<style scoped>

</style>
