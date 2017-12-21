<template>
    <div style="max-width: 100%;">
        <v-data-table v-bind:headers="headers" v-bind:items="userInterestList" v-bind:search="search" v-bind:pagination.sync="pagination" hide-actions class="elevation-1">
            <template slot="headerCell" scope="props">
                <span v-tooltip:bottom="{ 'html': props.header.text }">
                    {{ props.header.text }}
                </span>
            </template>
            <template slot="items" scope="props">
                <td class="text-xs-right">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.pv_received }} PV ({{ props.item.interset_received }})</td>
                <td class="text-xs-right">{{ _getDateTime(props.item.createdAt) }}</td>
            </template>
        </v-data-table>
        <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
    data() {
        return {
            search: '',
            pagination: {},
            selected: [],
            headers: [
                { text: 'Receive', value: 'name'},
                { text: 'Amount', value: 'pv_received' },
                { text: 'Time', value: 'createdAt' },
            ],
        }
    },
    computed: {
        ...mapGetters(['user', 'userInterestList']),
        pages() {
            return this.pagination.rowsPerPage ? Math.ceil(this.userInterestList.length / this.pagination.rowsPerPage) : 0
        }
    },
    methods: {
        ...mapActions(['getInterestList']),
        _getDateTime(time)   {
            return moment(time).format('MM/D/YYYY, h:mm:ss a')
        }
    },
    async mounted() {
        await this.getInterestList({ idUser: this.user.id })
        this.pagination.sortBy = this.headers[2].value
        this.pagination.descending = true
    }
}
</script>


<style scoped>

</style>
