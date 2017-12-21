<template>
    <div>
        <v-tabs dark v-model="active">
            <v-tabs-bar class="cyan">
                <v-tabs-item v-for="tab in tabs" :key="tab.name" :href="'#' + tab.name" ripple>
                    {{tab.name}}
                </v-tabs-item>
                <v-tabs-slider class="yellow"></v-tabs-slider>
            </v-tabs-bar>
            <v-tabs-items>
                <v-tabs-content v-for="(tab, i) in tabs" :key="i" :id="tab.name">
                    <v-card flat>
                        <component :isUpdating="isUpdating" :updateStatus="updateStatus" :user="user" :updateUser="updateUser" :updatePassword="updatePassword" :is="tab.component"></component>
                    </v-card>
                </v-tabs-content>
            </v-tabs-items>
        </v-tabs>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
const ProfileTab = () => import('../../../components/Invest/Account/Profile')
const ChangePassTab = () => import('../../../components/Invest/Account/ChangePass')

export default {
    name: 'account-page',
    components: {
        ProfileTab,
        ChangePassTab
    },
    data() {
        return {
            tabs: [
                { name: 'Profile', component: 'ProfileTab' },
                { name: 'Change Password', component: 'ChangePassTab' },
                // { name: 'E-wallet', component: 'ProfileTab' },
            ],
            active: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

        }
    },
    computed: {
        ...mapGetters([
            'user',
            'isUpdating',
            'updateStatus'
        ])
    },
    methods: {
        ...mapActions(['updateUser', 'updatePassword']),
    }
}
</script>

<style scoped>

</style>
