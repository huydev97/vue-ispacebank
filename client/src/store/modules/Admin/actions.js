import * as types from './mutation-types'
import axios from 'axios'
import VueCoookie from 'vue-cookie'
import router from '../../../router'
import config from '../../../../config/config'

export default {
    async getTransactionList({ commit, state }) {
        let results = await axios({
            method: 'POST',
            url: `${config.host}/transaction/getListTransactions`,
            data: {
                login_token: VueCoookie.get('login_token')
            }
        })
        let { success, transactions } = results.data
        if (success)
            await commit(types.SET_LIST_TRANSACTION, transactions.reverse())
    },
    async getAllTransactionList({ commit, state }) {
        let results = await axios({
            method: 'POST',
            url: `${config.host}/transaction/getListTransactions`,
            data: {
                login_token: VueCoookie.get('login_token'),
                getAll: true
            }
        })
        let { success, transactions } = results.data
        if (success)
            await commit(types.SET_HISTORY_LIST_TRANSACTION, transactions.reverse())
    },
    /*
        xử lý giao dịch
        processTransaction({ commit, state }, transactionOptions)
        transactionOptions: {
            id: Number, ID of transaction
            state: Number, 1: processed, 0: wait of process
        }
    */
    async processTransaction({ commit, state }, transactionOptions) {
        try {
            let results = await axios({
                method: 'PUT',
                url: `${config.host}/transaction/update`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    idTransaction: transactionOptions.id,
                    infoUpdate: {
                        state: 1
                    }
                }
            })
            let { success } = results.data
            if (success) {
                await commit(types.DELETE_TRANASCTION, transactionOptions.id)
            }
            return success
        } catch (err) {
            console.log(err)
        }
    },
    async processTransaction({ commit, state }, transactionOptions) {
        try {
            let results = await axios({
                method: 'PUT',
                url: `${config.host}/transaction/update`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    idTransaction: transactionOptions.id,
                    infoUpdate: {
                        state: 1
                    },
                }
            })
            let { success } = results.data
            if (success) {
                await commit(types.DELETE_TRANASCTION, transactionOptions.id)
            }
            return success
        } catch (err) {
            console.log(err)
        }
    },
    async cancelTransaction({ commit, state }, transactionOptions) {
        try {
            let results = await axios({
                method: 'PUT',
                url: `${config.host}/transaction/update`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    idTransaction: transactionOptions.id,
                    infoUpdate: {
                        state: 2
                    }
                }
            })
            let { success } = results.data
            if (success) {
                await commit(types.DELETE_TRANASCTION, transactionOptions.id)
            }
            return success
        } catch (err) {
            console.log(err)
        }
    },
    /*
        chuyển pv
        transferPv({ commit, state }, options)
        options: {
            emailAdmin: String, email admin xử lý
            email1: String, email người nhận
            email2: String, email người gửi,
             pv: Number, số pv
        }
    */
    async transferPv({ commit, state }, options) {
        try {
            let results = await axios({
                method: 'POST',
                url: `${config.host}/bagbitcoin/transfer`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    usernameAdmin: options.usernameAdmin,
                    usernameSend: options.usernameSender,
                    usernameReceived: options.usernameReceiver,
                    howPV: options.pv,
                    password: options.password
                },
                timeout: 10000,
            })
            let { success, message } = results.data
            alert(message)
            return success
        } catch (err) {
            console.log(err)
        }
    },
    /*
        cộng pv
        incrementPv({ commit, state }, options)
        options: {
            emailAdmin: String, email admin xử lý
            email1: String, email người nhận,
            pv: Number, số pv
        }
    */
    async incrementPv({ commit, state }, options) {
        try {
            let results = await axios({
                method: 'POST',
                url: `${config.host}/bagbitcoin/pvAction`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    typeDo: '+',
                    usernameReceiver: options.usernameReceiver,
                    howPV: options.pv,
                    password: options.password
                },
                timeout: 10000,
            })
            let { success, message } = results.data
            alert(message)
            return success
        } catch (err) {
            console.log(err)
        }
    },

    /*
        trừ pv
        decrementPv({ commit, state }, options)
        options: {
            emailAdmin: String, email admin xử lý
            email1: String, email người nhận,
            pv: Number, số pv
        }
    */
    async decrementPv({ commit, state }, options) {
        try {
            let results = await axios({
                method: 'POST',
                url: `${config.host}/bagbitcoin/pvAction`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    typeDo: '-',
                    usernameReceiver: options.usernameReceiver,
                    howPV: options.pv,
                    password: options.password
                },
                timeout: 10000,
            })
            let { success, message } = results.data
            alert(message)
            return success
        } catch (err) {
            console.log(err)
        }
    },
    /*
        lấy danh sách các user
    */
    async getListUser({ commit, state }) {
        try {
            let results = await axios({
                method: 'POST',
                url: `${config.host}/user/getlistusers`,
                data: {
                    login_token: VueCoookie.get('login_token')
                },
                timeout: 10000,
            })
            let { success, message, users } = await results.data

            await commit(types.SET_LIST_USER, users)
        } catch (err) {
            console.log(err)
        }
    },

    /*
        cấm một người nào đó
        bannedUser({commit, state}, options)
        options: {
            idUser: Number,
            isActive: Boolean 
        }
    */

    async toggleUserActive({ dispatch, commit, state }, options) {
        try {
            let results = await axios({
                method: 'PUT',
                url: `${config.host}/user/update`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    conditions: {
                        id: options.idUser
                    },
                    infoUpdate: {
                        isActive: options.isActive === 0 ? 1 : 0
                    },
                    password: options.password
                },
                timeout: 10000,
            })
            let { success, message } = await results.data
            if (success) {
                await commit(types.BANNED_USER, options.index)
            }
            return success
        } catch (err) {
            console.log(err)
        }
    },
    /*
        set moder cho người nào đó bằng email
        setModer({ commit, state }, options) 
        options: {
           emailUser: String
        }
    */
    async toggleModer({ commit, state }, options) {
        try {
            let results = await axios({
                method: 'POST',
                url: `${config.host}/user/togglemoder`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    usernameReceiver: options.usernameReceiver,
                    password: options.password
                },
                timeout: 10000,
            })
            let { success, message, currentLevel } = await results.data
            if (success) {
                alert(`This acount now is ${currentLevel === 1 ? 'moder' : 'normal user'}!`)
            } else {
                alert(message)
            }
            return success
        } catch (err) {
            console.log(err)
        }
    },
    /*
        random một mật khẩu mới cho người chơi
        options: {
            emailUser: String
        }
    */
    async changeUserPassword({ commit, state }, options) {
        try {
            let results = await axios({
                method: 'POST',
                url: `${config.host}/user/resetPasswordUser`,
                data: {
                    login_token: VueCoookie.get('login_token'),
                    usernameReceiver: options.usernameReceiver,
                    password: options.password
                },
                timeout: 10000,
            })
            let { success, message } = await results.data
            if (success) {
                alert(message)
            } else {
                alert(message)
            }
            return success
        } catch (err) {
            console.log(err)
        }
    }

}