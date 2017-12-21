import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

//modules
import authentication from './modules/Authentication'
import admin from './modules/Admin'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    userBagBitcoin: { total: 0, balance: 0, invest: 0 },
    userHistoryTransaction: [],
    userHistoryTransfer: [],
    userInterestList: [],
    adminEwallet: '',
    userListReference: [],
    bitcoinPrice: { "15m": 3724.67, "last": 3724.67, "buy": 3725.75, "sell": 3723.59, "symbol": "$" }
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
        authentication,
        admin
    }
})
