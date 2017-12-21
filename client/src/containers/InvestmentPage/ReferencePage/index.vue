<template>
    <div style="text-align: center; overflow-x:scroll">
        <h2 class="headline indigo--text text--darken-2">List Of Reference</h2>
        <v-data-table v-bind:headers="headers" :items="userListReference" hide-actions class="elevation-1 ">
            <template slot="items" scope="props">
                <td class="text-xs-right">{{ props.item.username }}</td>
                <td class="text-xs-right">{{ props.item.email }}</td>
                <td class="text-xs-right">{{ props.item.investment }}</td>
                <td class="text-xs-right">{{ getTime(props.item.createAt) }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                { text: 'Invest', value: 'invest' },
                { text: 'Register Date', value: 'time' },
            ]
        }
    },
    computed: {
        ...mapGetters(['userListReference', 'user'])
    },
    methods: {
        ...mapActions(['getListReference']),
        getTime(timestamp) {
            return moment(timestamp).format('DD/MM/YY hh:mm a')
        }
    },
    async mounted() {
        await this.getListReference({ idUser: this.user.id })
    }
}
</script>
