<template>
  <v-container class="indigo lighten-1 container">

    <login-form :login="login" :isRequesting="formLogin.isRequesting" :loginErrorMessage="formLogin.loginErrorMessage"></login-form>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const LoginForm = () => import('../../components/Auth/LoginForm')

export default {
  name: 'loginpage',
  components: { LoginForm },
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapGetters(['formLogin'])
  },

}
</script>

<style scoped>
.container {
  max-width: 100%;
  width: 100%;
  padding: 0;
}
</style>