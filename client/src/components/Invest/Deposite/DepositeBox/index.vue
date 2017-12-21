<template>
    <div style="padding: 10px; max-width: 500px; width: 100%">

        <v-card class="white black--text" style="border-radius: 5px;">
            <v-card-title primary-title>
                <div class="headline">
                    <b class="green--text">{{_pv || 0}} PV</b>
                </div>
            </v-card-title>
            <v-card-text>
                <div style="display: flex; flex-direction: row;">
                    <div>
                        <b>Dayly:</b> 15 days<br />
                        <b>Estimate ratio:</b> {{_lai}}%<br />
                        <b>Estimate amount:</b> {{(_pv*_lai)/100 | formatMoney}} PV
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <b>Operating time:</b> {{15*_chuky}} days<br/>
                        <b>Total estimate ratio:</b> {{_lai*_chuky}}%<br />
                        <b>Total estimate:</b> {{_pv*_lai*_chuky/100 | formatMoney}} PV
                    </div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-dialog v-model="dialog" lazy absolute>
                    <v-btn slot="activator" class="green" dark>Investment Now</v-btn>
                    <v-card>
                        <v-card-title>
                            <div class="headline">Please enter your password?</div>
                        </v-card-title>
                        <v-card-text>Invest {{_pv}} pv</v-card-text>
                        <v-card-text>
                            <v-text-field label="Your password" v-model="password" type="password" required></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
                            <v-btn class="green--text darken-1" :loading="isRequesting" flat="flat" @click.native="requestInvestment({username: _username,pv: _pv, password})">Agree</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
export default {
    name: 'deposite-box',
    data() {
        return {
            dialog: false,
            isRequesting: false,
            password: '',
        }
    },
    props: {
        username: String,
        pv: Number,
        lai: Number,
        chuky: Number,
        investment: Function
    },
    computed: {
        _username() {
            return this.username
        },
        _pv() {
            return this.pv
        },
        _lai() {
            return this.lai
        },
        _chuky() {
            return this.chuky
        },
    },
    methods: {
        async requestInvestment(options) {
            this.isRequesting = true
            let success = await this.investment(options)
            if (success) {
                this.dialog = false
                this.password = ''
            }
            this.isRequesting = false
        }
    },
    filters: {
        formatMoney: function(value) {
            return value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    }
}
</script>

<style scoped>

</style>
