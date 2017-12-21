<template>
    <div>
        <div style="margin-left: 20px">
            <v-switch label="Show all history processed" value color="green" :input-value="historyShow" @click="historyShow = !historyShow"></v-switch>
        </div>
        <div style="min-width: 400px;">
            <transaction-list v-show="!historyShow" :isAdmin="true" :processTransaction="processTransaction" :listTransactions="listTransactions" :cancelTransaction="cancelTransaction">
            </transaction-list>
            <transaction-list v-show="historyShow" :isAdmin="false" :processTransaction="processTransaction" :listTransactions="historyListTransactions" :cancelTransaction="cancelTransaction">
            </transaction-list>
        </div>

        <!-- <v-tabs dark>
                        <v-tabs-bar class="cyan">
                            <v-tabs-item :href="'#transaction' " ripple>
                                Transaction
                            </v-tabs-item>
                            <v-tabs-item :href="'#transfer' " ripple>
                                Transfer
                            </v-tabs-item>
                            <v-tabs-slider class="yellow"></v-tabs-slider>
                        </v-tabs-bar>
                        <v-tabs-items>
                            <v-tabs-content :id="'transaction'">
                                <transaction-list :isAdmin="true" :processTransaction="processTransaction" :listTransactions="listTransactions" :cancelTransaction="cancelTransaction">
                                </transaction-list>
                            </v-tabs-content>
                            <v-tabs-content :id="'transfer'">
                              
                            </v-tabs-content>
                            
                        </v-tabs-items>
                    </v-tabs> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TransactionList from '../../../components/TransactionList'
export default {
    components: {
        TransactionList
    },
    data() {
        return {
            historyShow: false,
        }
    },
    computed: {
        ...mapGetters(['listTransactions', 'historyListTransactions', 'user']),
    },
    methods: {
        ...mapActions(['getTransactionList',
            'getAllTransactionList',
            'processTransaction',
            'cancelTransaction']),
    },
    async mounted() {
        await this.getTransactionList()
        await this.getAllTransactionList()
    }

}
</script>

<style scoped>

</style>
