import getters from './getters'
import actions from './actions'
import mutations from './mutations'

// initial state
const state = {
    isAuthenticated: false,
    user: {},
    formLogin: {
        isRequesting: false,
        loginErrorMessage: ''
    },
    formRegister: {
        isRequesting: false,
        registerErrorMessage: ''
    },
    isUpdating: false,
    updateStatus: { type: true, message: '' }
}

export default {
    state,
    getters,
    actions,
    mutations
}
