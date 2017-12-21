<template>
    <div class="form-register">
        <v-form v-model="valid" ref="registerForm">
            <div class="logo-w">
                <img class="logo" src="../../../assets/images/logo-ispace-1.png" />
            </div>
            <p class="headline">Create new account</p>

            <v-divider></v-divider>

            <v-text-field label="Username" v-model="username" :rules="usernameRules" :counter="6" required></v-text-field>

            <div class="form-item">
                <v-text-field class="margin-right" type="password" label="Password" v-model="password" :rules="passwordRules" required></v-text-field>
                <v-text-field class="margin-left" type="password" label="Repeat Password" v-model="repeatPassword" :rules="passwordRules" required></v-text-field>
            </div>

            <div class="form-item">
                <v-text-field class="margin-right" type="email" label="Email Address" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field class="margin-left" type="email" label="Repeat Email Address" v-model="repeatEmail" :rules="emailRules" required></v-text-field>
            </div>

            <country-select :country="country" @onChangeCountry="country = $event"></country-select>
            <div class="form-item">
                <v-text-field class="margin-right" type="number" label="Phone Code: +84" disabled></v-text-field>
                <v-text-field class="margin-left" style="" type="number" label="Phone number" v-model="phoneNumber" required></v-text-field>
            </div>

            <v-divider></v-divider>
            <v-text-field label="Username of referrer" v-model="referrerInput"></v-text-field>

            <v-checkbox label="I agree with the AGENCY AGREEMENT" v-model="agree"></v-checkbox>
            <h2 class="red--text body-2" v-show="_errorMessage && _errorMessage.length > 0">*{{errorMessage}}</h2>
            <v-btn primary :loading="_isRequesting" @click="requestRegister()">Register</v-btn>
            <v-btn @click="clearForm">Clear</v-btn>
        </v-form>
    </div>
</template>

<script> 
import CountrySelect from '../CountrySelect'
export default {
    name: 'form-login',
    props: {
        register: Function,
        errorMessage: String,
        isRequesting: Boolean,
        referrer: String,
    },
    components: {
        CountrySelect
    },
    data() {
        return {
            country: '',
            valid: false,
            referrerInput: '',
            username: '',
            usernameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length >= 6 || 'Name must be at least 6 characters'
            ],

            password: '',
            repeatPassword: '',
            passwordRules: [
                (v) => !!v || 'Password is required',
                (v) => (v === this.$data.password) || 'Repeat password does not match password'
            ],
            email: '',
            repeatEmail: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
                (v) => (v === this.$data.email) || 'Repeat email does not match email'
            ],
            phoneNumber: Number,
            agree: true,

            loginErrorMessage: ''
        }
    },
    mounted() {
        this.referrerInput = this._referrer
    },
    computed: {
        _register() {
            return this.register
        },
        _errorMessage() {
            return this.errorMessage
        },
        _isRequesting() {
            return this.isRequesting
        },
        _referrer() {
            return this.referrer
        }
    },
    methods: {
        clearForm() {
            this.$refs.registerForm.reset()
        },
        async requestRegister() {
            try {
                let user = {
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    phone: this.phoneNumber,
                    country: this.country,
                    referrer: this.referrerInput,
                }
                let response = await this._register(user)
                if (response === true) {
                    this.clearForm()
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
.divider {
    margin-top: 10px;
    margin-bottom: 10px;
}

.logo-w {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.logo {
    width: 50%;
    margin-bottom: auto;
}

.form-register {
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 6%;
    max-width: 600px;
    border-radius: 5px;
    background-color: white;
}

.form-item {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.margin-left {
    margin-left: 5px;
}

.margin-right {
    margin-right: 5px;
}

.form-register-footer {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.select-ttl {
    font-size: 17;
    margin: 0;
    margin-bottom: 5px;
}

.select-btn {
    width: 100%;
    margin: 0;
    padding: 5px;
}
</style>