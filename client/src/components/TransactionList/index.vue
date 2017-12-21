<template>
    <div class="tr-list">
            <v-radio-group class="nav1" row v-model="showType" style="min-width: 400px; max-width: 600px; margin: auto; ">
                <v-radio label="Alls" :value="0"></v-radio>
                <v-radio label="Invesment" :value="1"></v-radio>
                <v-radio label="Transfer" :value="2"></v-radio>
                <v-radio label="Add Fun" :value="3"></v-radio>
                <v-radio label="Withdraw" :value="4"></v-radio>
            </v-radio-group>
            <v-radio-group class="nav2" column v-model="showType" style="max-width: 600px; margin: auto; ">
                <v-radio label="Alls" :value="0"></v-radio>
                <v-radio label="Invesment" :value="1"></v-radio>
                <v-radio label="Transfer" :value="2"></v-radio>
                <v-radio label="Add Fun" :value="3"></v-radio>
                <v-radio label="Withdraw" :value="4"></v-radio>
            </v-radio-group>
        <label v-show="_listTransactions.length<1" style="width: 100%; padding: 10px;">None.</label>
        <transaction-item v-for="(item, i) in _listTransactions" :key="i" :id="item.id" :index="i" :processTransaction="processTransaction" :cancelTransaction="cancelTransaction" :state="item.state" :title="getTitle(item.type)" :content="getContent(item)" :createdAt="_getCreatedAt(item.createdAt)" :isAdmin="_isAdmin" v-show="showType === item.type || showType === 0"></transaction-item>
    </div>
</template>

<script>
import moment from 'moment'
import TransactionItem from './TransactionItem'
export default {
    props: {
        cancelTransaction: Function,
        processTransaction: Function,
        listTransactions: Array,
        isAdmin: Boolean
    },
    data() {
        return {
            showType: 0
        }
    },
    computed: {
        _listTransactions() {
            return this.listTransactions
        },
        _isAdmin() {
            return this.isAdmin
        },
    },
    methods: {
        getTitle(type) {
            switch (type) {
                case 1:
                    return 'Investment'
                case 2:
                    return 'Transfer'
                case 3:
                    return 'Add Fun'
                case 4:
                    return 'Withraw'
                default:
                    return 'Un-know'
            }
        },
        getContent(item) {
            switch (item.type) {
                case 1:
                    return `Sender: ${item.email}, Amount: ${item.package} PV`
                case 2:
                    return `Sender: ${item.email} to Receiver: ${item.note}, Amount: ${item.package} PV`
                case 3:
                    return `Sender: ${item.email}, E-wallet: ${item.note} , Amount: ${item.package} BTC`
                case 4:
                    return `Sender: ${item.email}, Amount: ${item.package} PV`
                default:
                    return 'Un-know'
            }
        },
        _getCreatedAt(time) {
            return moment(time).format('MMMM Do YYYY, h:mm:ss a')
        },
        toggleShowType(type) {
            this.showType = type
        }
    },
    components: {
        TransactionItem
    }
}
</script>

<style scoped>
.tr-list {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    min-width: 375px;
}

@media screen and (max-width: 800px) {
    .nav1 {
        display: none;
    }
}

@media screen and (min-width: 800px) {
    .nav2 {
        display: none;
    }
}
</style>
