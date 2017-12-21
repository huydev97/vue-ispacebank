<template>
    <div class="white" style="margin: 1%; border-radius: 7px; overflow: hidden; min-height: 700px;">
        <v-layout row wrap>
            <side-left-menu :fullname="user.fullname" :menus="menus"></side-left-menu>
            <div class="right-side" style="flex: 1;border-left-style: solid; border-left-width: 1px; border-left-color: rgba(0,0,0,0.1);">
                <router-view style="padding: 0px;"></router-view>
            </div>
        </v-layout>
    </div>
</template>

<script>
import store from '../../store'
import SideLeftMenu from '../../components/Invest/SideLeftMenu'
import { mapGetters } from 'vuex'
export default {
    components: {
        SideLeftMenu
    },
    data() {
        return {
            menus: [
                // { name: 'Tổng Quan', to: '/admin', action: 'fa-newspaper-o' },
                { name: 'History', to: '/admin/history', action: 'fa-envelope' },
                { name: 'Users', to: '/admin/users', action: 'fa-users' },
                { name: 'Actions', to: '/admin/actions', action: 'fa-pencil' }
            ],

        }
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>

<style scoped>

</style>
