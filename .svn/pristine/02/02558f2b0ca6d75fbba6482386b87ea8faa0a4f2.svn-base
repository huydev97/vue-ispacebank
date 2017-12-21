<template>
    <div>
        <user-list :listUser="listUser" :username="user.username" :toggleUserActive="toggleUserActive"></user-list>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserList from '../../../components/AdminPage/UserList'
export default {
    components: {
        UserList
    },
    methods: {
        ...mapActions(['getListUser', 'toggleUserActive'])
    },
    computed: {
        ...mapGetters(['listUser', 'user'])
    },
    async mounted() {
        await this.getListUser()
    }
}
</script>

<style scoped>

</style>
