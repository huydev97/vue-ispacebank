<template>
    <div>

        <v-breadcrumbs icons divider="forward" class="text-xs-left">
            <v-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">
                {{ item.text }}
            </v-breadcrumbs-item>
        </v-breadcrumbs>
        <h2 class="black--text title" style="margin-left: 20px;">Sales Dashboard</h2>
        <v-divider></v-divider>
        <bitcoin-price-box :bitcoinPrice="bitcoinPrice"></bitcoin-price-box>
        <pv-box :totalWithdraw="userBagBitcoin.total" :balanceWallet="userBagBitcoin.balance" :investment="userBagBitcoin.invest"></pv-box>
        <prolfile-box :user="user"></prolfile-box>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
const BitcoinPriceBox = () => import('../../../components/Invest/Dashboard/BitcoinPriceBox')
const ProlfileBox = () => import('../../../components/Invest/Dashboard/ProlfileBox')
const PvBox = () => import('../../../components/Invest/Dashboard/PVBox')

export default {
    name: 'dashboard-investment',
    components: {
        ProlfileBox,
        PvBox,
        BitcoinPriceBox
    },
    data() {
        return {
            items: [
                {
                    text: 'Invesment',
                    disabled: false
                },
                {
                    text: 'Dashboard',
                    disabled: true
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['user', 'userBagBitcoin', 'bitcoinPrice']),
    },
}
</script>

<style scoped>
.db-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.db-box {
    flex: 1;
    min-width: 250px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
}
</style>
