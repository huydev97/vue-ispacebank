import * as types from './mutation-types'
export default {
    [types.UPDATE_USER_BAG_BITCOIN](state, newBag) {
        state.userBagBitcoin = newBag
    },
    [types.UPDATE_USER_HISTORY_TRANSACTION](state, list) {
        state.userHistoryTransaction = list
    },
    [types.UPDATE_BITCOIN_PRICE](state, price) {
        state.bitcoinPrice = price
    },
    [types.UPDATE_USER_HISTORY_TRANSFER](state, historys) {
        state.userHistoryTransfer = historys
    },
    [types.UPDATE_INTEREST_LIST](state, interest) {
        state.userInterestList = interest
    },
    [types.UPDATE_ADMIN_EWALLET](state, ewallet) {
        state.adminEwallet = ewallet
    },
    [types.UPDATE_USER_LIST_REFERENCE](state, list) {
        state.userListReference = list
    }
}
