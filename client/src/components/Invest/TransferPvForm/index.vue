<template>
    <div style="padding: 10px;">
        <h2 class="headline black--text text--light-2">Request Transfer</h2>
        <v-form v-model="valid">
            <v-text-field label="Username of Receiver" v-model="usernameReceiver" type="string" required></v-text-field>
            <v-text-field label="Amount of PV" v-model="amount" type="number" required></v-text-field>
            <v-text-field label="Your password" v-model="password" type="password" required></v-text-field>
            <v-btn success @click.stop="onTransfer">Transfer</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
    props: {
        idUser: Number,
        usernameSender: String,
        userTransferPv: Function
    },
    data() {
        return {
            valid: false,
            amount: 0,
            usernameReceiver: '',
            password: ''
        }
    },
    computed: {
        _idUser() {
            return this.idUser
        },
        _usernameSender() {
            return this.usernameSender
        }
    },
    methods: {
        onTransfer(e) {
            if (this.amount <= 0) {
                alert('Amount of bitcoin must be greater than 0')
            } else {
                let res = this.userTransferPv({
                    usernameSend: this._usernameSender,
                    usernameReceived: this.usernameReceiver,
                    howPV: this.amount,
                    password: this.password
                })
                if (res) {
                    this.amount = 0
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
