<template>
    <div>
        <v-list two-line subheader>
            <v-subheader>List User</v-subheader>
            <label v-show="_listUser && _listUser.length<1" style="width: 100%; padding: 10px;">None.</label>
            <user-row v-for="(item,i) in _listUser"  v-if="!(item.username === _username)" :key="i" :user="item" :index="i" :toggleUserActive="toggleUserActive"></user-row>
        </v-list>
    </div>
</template>

<script>
import UserRow from './UserRow'
export default {
    props: {
        username: String,
        listUser: Array,
        toggleUserActive: Function
    },
    computed: {
        _listUser() {
            return this.listUser
        },
        _username() {
            return this.username
        }
    },
    components: {
        UserRow
    }
}
</script>

<style scoped>

</style>
