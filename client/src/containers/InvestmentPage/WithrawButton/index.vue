<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent>
            <v-btn success dark slot="activator" small>Withraw</v-btn>
            <v-card style="min-width: 300px; padding: 5px;">
                <v-card-title>
                    <span class="headline">Withraw</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Amount of PV" type="number" v-model="amount" required></v-text-field>
                                <v-text-field label="Your password" v-model="password" type="password" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn class="blue--text darken-1" flat @click.native="requestCreateTransaction">Send Request</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            dialog: false,
            amount: 0,
            password: ''
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['withDrawPv']),
        async requestCreateTransaction(e) {
            let options = {
                idUser: this.user.id,
                howPv: this.amount,
                password: this.password
            }
            let success = await this.withDrawPv(options)
            if (success) {
                this.dialog = false
                this.password = ''
                this.amount = 0
            } 
        }
    }
}
</script>

<style scoped>

</style>
