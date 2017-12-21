<template>
    <div style="margin: auto; width: 60%; min-width: 300px;">
        <v-form ref="actionForm">
            <v-select v-bind:items="actions" v-model="action" label="Actions" required></v-select>
            <v-text-field v-show="action && action.type === 0" label="username of sender" v-model="_username" disabled></v-text-field>
            <v-select v-bind:items="_listUser" v-model="userSelected" item-text="username" label="Username of Receiver" autocomplete>
                <template slot="item" scope="data">
                    <template>
                        <v-list-tile-content>
                            <v-list-tile-title v-html=" data.item.username"></v-list-tile-title>
                            <v-list-tile-sub-title v-if="data.item.fullname" v-html="'Name: ' +data.item.fullname"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </template>
                </template>

            </v-select>
            <v-text-field v-show="action && action.type !== 3 && action.type !== 4" label="Amount of PV" v-model="pv" type="number" required></v-text-field>
            <v-text-field label="Your password" v-model="password" type="password" required></v-text-field>

            <v-btn primary dark @click.stop="doAction" :loading="isRequesting">Submit</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    props: {
        listUser: Array,
        username: String,
        transferPv: Function,
        incrementPv: Function,
        decrementPv: Function,
        toggleModer: Function,
        changeUserPassword: Function
    },
    data() {
        return {
            isRequesting: false,
            action: null,
            actions: [
                { type: 0, text: 'Transfer PV' },
                { type: 1, text: 'Increment PV' },
                { type: 2, text: 'Decrement PV' },
                { type: 3, text: 'Toggle Moder' },
                { type: 4, text: 'Change User Password' }
            ],
            pv: 0,
            password: '',
            usernameSender: '',
            // usernameReceiver: '',
            // email2: '',
            // emailRules: [
            //     (v) => !!v || 'E-mail is required',
            //     (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            // ],
            userSelected: { username: '' },
        }
    },
    computed: {
        _username() {
            return this.username || ''
        },
        _listUser() {
            return this.listUser
        }
    },
    methods: {
        async doAction(e) {
            if (!this.action) {
                return alert('You need to choose an action!')
            }
            if (this.userSelected.email == '') {
                return alert('You need to write an email!')
            }
            this.isRequesting = true
            switch (this.action.type) {
                case 0:
                    let res1 = await this.transferPv({
                        usernameSender: this._username,
                        usernameReceiver: this.userSelected.username,
                        pv: this.pv,
                        usernameAdmin: this._username,
                        password: this.password
                    })
                    if (res1) {
                        this.$refs.actionForm.reset()
                    }
                    this.isRequesting = false
                    return
                case 1:
                    let res2 = await this.incrementPv({
                        usernameReceiver: this.userSelected.username,
                        pv: this.pv,
                        password: this.password
                    })
                    if (res2) {
                        this.$refs.actionForm.reset()
                    }
                    this.isRequesting = false
                    return
                case 2:
                    let res3 = await this.decrementPv({
                        usernameReceiver: this.userSelected.username,
                        pv: this.pv,
                        password: this.password
                    })
                    if (res3) {
                        this.$refs.actionForm.reset()
                    }
                    this.isRequesting = false
                    return
                case 3:
                    let res4 = await this.toggleModer({
                        usernameReceiver: this.userSelected.username,
                        password: this.password
                    })
                    if (res4) {
                        this.$refs.actionForm.reset()
                    }
                    this.isRequesting = false
                    return
                case 4:
                    let res5 = await this.changeUserPassword({
                        usernameReceiver: this.userSelected.username,
                        password: this.password
                    })
                    if (res5) {
                        this.$refs.actionForm.reset()
                    }
                    this.isRequesting = false
                    return
                default:
                    this.isRequesting = false
                    return alert('You must choose an action first!')
            }
        }
    },
    mounted() {
        this.email2 = this._userEmail
    }
}
</script>

<style scoped>

</style>
