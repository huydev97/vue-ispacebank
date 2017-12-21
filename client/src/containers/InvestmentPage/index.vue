<template>
    <div class="white" style="margin: 1%; border-radius: 7px; overflow: hidden; min-height: 600px;">
        <v-layout row wrap>
            <side-left-menu :fullname="user.fullname || ''" :menus="menus">
                <div>
                    <withraw-button></withraw-button>
                    <v-btn success small to="/investment/buypv">Add Fun</v-btn>
                </div>
                <div>
                    <v-btn v-if="user.isAdmin > 0" success small to="/investment/transferpv">Transfer</v-btn>
                    <v-btn success small to="/investment/historytransaction">History</v-btn>
                    <v-btn success small to="/investment/interest">Interest</v-btn>
                </div>
            </side-left-menu>
            <div class="right-side">
                <router-view style="padding: 0px;"></router-view>
            </div>
        </v-layout>
    </div>
</template>

<script>
import store from '../../store'
import SideLeftMenu from '../../components/Invest/SideLeftMenu'
import WithrawButton from './WithrawButton'
import { mapGetters } from 'vuex'

export default {
    name: 'investment-page',
    components: {
        SideLeftMenu,
        WithrawButton
    },
    data() {
        return {
            menus: [
                { name: 'Dashboard', to: '/investment/dashboard', action: 'fa-newspaper-o' },
                { name: 'Make Deposit', to: '/investment/deposit', action: 'fa-dropbox' },
                { name: 'Affiliate Program', to: '/investment/affiliate', action: 'fa-pie-chart' },
                { name: 'Account Settings', to: '/investment/account', action: 'fa-user-circle-o' },
                { name: 'Agency Agreement', to: '/investment/agreement', action: 'fa-file-text' },
                { name: 'Privacy Policy', to: '/investment/privacy', action: 'fa-file-text' }
            ],

        }
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>

<style scoped>
.right-side {
    flex: 1;
    min-height: 600px;
    padding: 5px;
    background-color: #f2f4f8;
    background-image: url('../../assets/images/bg-pattern.png');
    background-repeat: no-repeat;
}
</style>
