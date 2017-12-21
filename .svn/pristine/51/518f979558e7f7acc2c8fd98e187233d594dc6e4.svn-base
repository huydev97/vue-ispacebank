<template>
    <v-container class="indigo lighten-1 container">
        <register-form :referrer="_referrer" :isRequesting="formRegister.isRequesting" :errorMessage="formRegister.registerErrorMessage" :register="register"></register-form>

    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const RegisterForm = () => import('../../components/Auth/RegisterForm')

export default {
    props: ['referrer'],
    name: 'registerpage',
    components: { RegisterForm },
    computed: {
        ...mapGetters(['formRegister']),
        _referrer() { return this.referrer },
    },
    methods: {
        ...mapActions(['register'])
    }
}
</script>

<style scoped>
.container {
    max-width: 100%;
    width: 100%;
    padding: 0;
}
</style>
