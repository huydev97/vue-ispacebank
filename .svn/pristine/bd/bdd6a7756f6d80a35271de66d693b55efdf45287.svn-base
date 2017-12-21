<template>
    <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
        <deposite-box :username="user.username" :investment="investment" v-for="item in _depositeListData" :key="item.id" :pv="item.pv" :lai="item.lai * 100" :chuky="item.chuky"></deposite-box>
    </div>
</template>

<script>
const DepositeBox = () => import('../DepositeBox')

export default {
    name: 'deposite-list',
    props: {
        investment: Function,
        depositeListData: Array,
        user: Object
    },
    components: {
        DepositeBox
    },
    computed: {
        _depositeListData() {
            return this.depositeListData
        },
        _user() {
            return this.user
        }
    }
}
</script>

<style scoped>

</style>
