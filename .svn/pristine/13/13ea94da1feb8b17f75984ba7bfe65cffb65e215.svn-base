import * as types from './mutation-types'
export default {
    [types.SET_LIST_TRANSACTION](state, list) {
        state.listTransactions = list
    },
    [types.SET_HISTORY_LIST_TRANSACTION](state, list) {
        state.historyListTransactions = list
    },
    async [types.DELETE_TRANASCTION](state, id) {
        let list = await state.listTransactions.filter((item) => item.id !== id)
        state.listTransactions = list
    },
    [types.SET_LIST_USER](state, list) {
        state.listUser = list
    },
    [types.BANNED_USER] (state, index) {
        state.listUser[index].isActive = state.listUser[index].isActive === 0 ? 1 : 0
    }
}