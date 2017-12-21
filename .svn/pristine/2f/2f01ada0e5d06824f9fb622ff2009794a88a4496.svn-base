<template>
    <div>
        <action-form :listUser="listUser" :changeUserPassword="changeUserPassword" :username="user.username" :toggleModer="toggleModer" :transferPv="transferPv" :incrementPv="incrementPv" :decrementPv="decrementPv"></action-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const ActionForm = () => import('../../../components/AdminPage/ActionForm')
export default {
    components: {
        ActionForm
    },
    computed: {
        ...mapGetters(['user', 'listUser'])
    },
    methods: {
        ...mapActions(['transferPv', 'incrementPv', 'decrementPv', 'toggleModer', 'changeUserPassword', 'getListUser'])
    },
    async mounted() {
        await this.getListUser()
    }

}
</script>

<style scoped>

</style>
