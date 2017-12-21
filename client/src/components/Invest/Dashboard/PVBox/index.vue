<template>
    <div class="pv-wrapper">
        <div class="pv-box">
            <h2 class="body-2 grey--text">Total Withdraw</h2>
            <h1 class="display-1">{{_totalWithdraw || 0}} PV</h1>
        </div>
        <div class="pv-box">
            <h2 class="body-2 grey--text">Balance Wallet</h2>
            <h1 class="display-1">{{_balanceWallet || 0}} PV</h1>
        </div>
        <div class="pv-box">
            <h2 class="body-2 grey--text">Investment</h2>
            <h1 class="display-1">{{_investment || 0}} PV</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pv-box',
    props: {
        totalWithdraw: Number,
        balanceWallet: Number,
        investment: Number
    },
    computed: {
        _totalWithdraw() {
            return this.totalWithdraw
        },
        _balanceWallet() {
            return this.balanceWallet
        },
        _investment() {
            return this.investment
        }
    }
}
</script>

<style scoped>
.pv-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.pv-box {
    flex: 1;
    min-width: 250px;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
}
</style>
