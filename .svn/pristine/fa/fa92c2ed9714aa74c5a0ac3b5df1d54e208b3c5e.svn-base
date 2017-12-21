import * as types from './mutation-types'

export default {
    [types.LOGIN_SUCCESS](state, user) {
        state.isAuthenticated = true
        state.user = user
        state.formLogin.isRequesting = false
        state.formLogin.loginErrorMessage = ''
    },
    [types.LOGIN_REQUEST](state) {
        state.formLogin.isRequesting = true
        state.formLogin.loginErrorMessage = ''
    },
    [types.LOGIN_FAIL](state, { errorMessage }) {
        state.isAuthenticated = false
        state.formLogin.isRequesting = false
        state.formLogin.loginErrorMessage = errorMessage
    },

    [types.LOGOUT](state) {
        state.isAuthenticated = false
        state.user = {}
        state.formLogin.isRequesting = false
        state.formLogin.loginErrorMessage = ''
        state.formRegister.isRequesting = false
        state.formRegister.RegisterErrorMessage = ''
    },

    [types.REGISTER_SUCCESS](state) {
        state.formRegister.isRequesting = false
        state.formRegister.registerErrorMessage = ''
    },
    [types.REGISTER_REQUEST](state) {
        state.formRegister.isRequesting = true
        state.formRegister.registerErrorMessage = ''
    },
    [types.REGISTER_FAIL](state, { errorMessage }) {
        state.isAuthenticated = false
        state.formRegister.isRequesting = false
        state.formRegister.registerErrorMessage = errorMessage
    },
    [types.REQUEST_UPDATE](state) {
        state.isUpdating = true
        state.updateStatus = { type: true, message: '' }
    },
    [types.STOP_REQUEST_UPDATE](state, updateStatus) {
        state.isUpdating = false
        state.updateStatus = updateStatus
    }

}

