<template>
    <div>
        <transaction-list :isAdmin="false" :listTransactions="userHistoryTransaction">
        </transaction-list>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TransactionList from '../../../components/TransactionList'
import TransferList from '../../../components/Invest/History/TransferList'
export default {
    components: {
        TransactionList,
        TransferList
    },
    computed: {
        ...mapGetters(['userHistoryTransaction', 'userHistoryTransfer', 'user'])
    },
    methods: {
        ...mapActions(['getUserHistoryTransaction', 'getUserHistoryTransfer'])
    },
    mounted() {
        this.getUserHistoryTransaction({ idUser: this.user.id })
        this.getUserHistoryTransfer({ username: this.user.username, idUser: this.user.id })
    }
}
</script>

<style scoped>

</style>
