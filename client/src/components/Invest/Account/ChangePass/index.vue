<template>
    <div class="cp-container">
        <h2 class="body-3 green--text" style="font-size: 40px">Change Password</h2>
        <v-divider></v-divider>
        <div style="max-width: 500px; width: 100%; margin: 10px;">
            <h2 class="body-2 green--text" style="margin: 0; padding: 0">Current Password</h2>
            <v-text-field type="password" style="margin: 0; padding: 0" v-model="currentPass"></v-text-field>

            <h2 class="body-2 green--text" style="margin: 0; padding: 0">New Password</h2>
            <v-text-field type="password" style="margin: 0; padding: 0" v-model="password" :rules="passwordRules"></v-text-field>

            <h2 class="body-2 green--text" style="margin: 0; padding: 0">New Password Again</h2>
            <v-text-field type="password" style="margin: 0; padding: 0" v-model="repeatPassword" :rules="passwordRules"></v-text-field>

            <p class="green--text" v-if="updateStatus.type === true && updateStatus.message.length>0">{{updateStatus.message}}</p>
            <p class="red--text" v-if="updateStatus.type === false && updateStatus.message.length>0">{{updateStatus.message}}</p>
            <v-btn :loading="_isUpdating" class="green white--text" @click="requestUpdatePassword()">Submit</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'change-pass-tab',
    props: {
        user: Object,
        updatePassword: Function,
        isUpdating: Boolean,
        updateStatus: Object
    },
    computed: {
        _user() {
            return this.user
        },
        _isUpdating() {
            return this.isUpdating
        },
        _updatePassword() {
            return this.updatePassword({
                idUser: this.user.id,
                oldPassword: this.currentPass,
                newPassword: this.repeatPassword
            })
        }
    },
    methods: {
        requestUpdatePassword() {
            this._updatePassword
        }
    },
    data() {
        return {
            currentPass: '',
            password: '',
            repeatPassword: '',
            passwordRules: [
                (v) => !!v || 'Password is required',
                (v) => (v === this.$data.password) || 'Repeat password does not match password'
            ],
        }
    }
}
</script>

<style scoped>
.cp-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
</style>
