/**
 * TransactionController
 *
 * @description :: Server-side logic for managing transactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // CRUD USER
    /** 
     *  Function : Create a new user
     *  Method : POST
     *  Inputs : idUser, package
     */
    create: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.idUser || !req.body.package || !req.body.type || req.body.idUser == '' || req.body.package == '' || req.body.type == '')
            return res.json({ success: false, message: 'Some fields is lost.' });
        Transaction.create({
            id_user: req.body.idUser,
            type: req.body.type,
            package: req.body.package,
            note: req.body.note || ''
        }).exec((err, transaction) => {
            if (err)
                res.json({ success: false, message: 'Failed to create tranaction.', errQuery: err });
            else
                res.json({ success: true, message: 'Success to create tranaction!.' });
        });
    },

    /** 
    *  Function : Update a transaction in database
    *  Method : PUT
    *  Inputs : An idTransaction and Object informations need to update
    */
    update: async (req, res, next) => {
        if (req.method != 'PUT')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.idTransaction || !req.body.infoUpdate)
            return res.json({ success: false, message: 'You need send me  idTransaction and a Object about information need to update(infoUpdate: { some attributes }) to use this route.' });
        Transaction.update({ id: req.body.idTransaction }, req.body.infoUpdate, (err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (updated.length <= 0)
                res.json({ success: false, message: 'Can\'t find transaction to update!!' });
            else
                res.json({ success: true, message: 'Updated transaction have name ' + updated[0].name });
        });
    },

    /** 
     *  Function : Delete a transaction in database
     *  Method : DELETE
     *  Inputs : Id transaction to delete
     */
    delete: async (req, res, next) => { // Delete user by Object conditions
        if (req.method != 'DELETE')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.id_transaction)
            return res.json({ success: false, message: 'You need send me a Object about conditions to use this route.' });
        Transaction.destroy({
            id: req.body.id_transaction
        }).exec((err, deleted) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (deleted.length <= 0)
                res.json({ success: false, message: 'Can\'t find transaction to delete!!' });
            else
                res.json({ success: true, message: 'Deleted transaction id : #' + deleted[0].id, id_transaction: deleted[0].id });
        });
    },

    /** 
     *  Function : WithDraw
     *  Method : POST
     *  Inputs : idUser, howPV
     */
    withDraw: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.idUser || req.body.idUser == '' || !req.body.howPV || req.body.howPV == '')
            return res.json({ success: false, message: 'You need to send me idUser,howPV to use this route.' });
        let now = new Date();
        let date = now.getDate();
        // if (date != 5 || 20)
        //     return res.json({ success: false, message: 'You can only withDraw on 5 or 20 monthly.' });
        let bag = await Bagbitcoin.findOne({ id_user: req.body.idUser });
        if (!bag)
            return res.json({ success: false, message: 'Not found bag bitcoin of user.' });
        if (bag.balance_wallet <= 40)
            return res.json({ success: false, message: 'Your must have more 40PV to withDraw.' });
        if (bag.balance_wallet < req.body.howPV)
            return res.json({ success: false, message: 'You can only withdraw as low or equal to the number of pv you have.' });
        Transaction.create({
            id_user: req.body.idUser,
            type: 4,
            package: req.body.howPV,
            note: req.body.note || 'Withdraw'
        }).exec((err, transaction) => {
            if (err)
                res.json({ success: false, message: 'Failed to create tranaction.', errQuery: err });
            else
                res.json({ success: true, message: 'Success! Created request to withdraw!.' });
        });
    },

    /** 
     *  Function : acceptWithDraw
     *  Method : POST
     *  Inputs : idUser,idTransaction
     */
    acceptWithDraw: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.idUser || req.body.idUser == '' || !req.body.howPV || req.body.howPV == '')
            return res.json({ success: false, message: 'You need to send me idUser,howPV to use this route.' });
        let bag = await Bagbitcoin.findOne({ id_user: req.body.idUser });
        let trans = await Bagbitcoin.findOne({ id: req.body.idTransaction });
        if (!trans)
            return res.json({ success: false, message: 'Not found transaction of user.' });
        if (!bag)
            return res.json({ success: false, message: 'Not found bag bitcoin of user.' });
        let newWallet = parseFloat(bag.blance_wallet) + parseFloat(trans.package);
        let newTotal = parseFloat(bag.total_withdraw) - parseFloat(trans.package);
        Bagbitcoin.update({ id_user: req.body.idUser }, { blance_wallet: newWallet, total_withdraw: newTotal }).exec((err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Failed to update bag bitcoin for user.', errQuery: err });
        });
        Transaction.update({
            id_user: req.body.idUser,
        }, { state: 1 }).exec((err, transaction) => {
            if (err)
                res.json({ success: false, message: 'Failed to update tranaction.', errQuery: err });
            else
                res.json({ success: true, message: 'Success! Accepted withdraw request!.' });
        });
    },

    /** 
     *  Function : Get list transaction in database
     *  Method : POST
     *  Inputs :
     */
    getListTransactions: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        let trans = [];
        let whereFit = {};
        if (req.body.getAll)
            whereFit.state = { '>=': 0 };
        else
            whereFit.state = { '<=': 0 };
        Transaction.find(whereFit).exec(async (err, transactions) => {
            if (err)
                return res.json({ stransactionsuccess: false, message: 'Error about query, please try again!', errQuery: err });
            if (!transactions)
                return res.json({ success: false, message: 'Failed to get list transactions.' });
            await Promise.all(transactions.map(async (transaction, index) => {
                let user = await User.findOne({ id: transaction.id_user });
                if (user) {
                    transactions[index].email = user.email;
                    transactions[index].fullname = user.fullname;
                    //trans.push(transaction);
                }
            }));
            res.json({ success: true, message: 'Success to get list transactions!', transactions: transactions });
        });
    },
    /** 
     *  Function : Get list transaction in database
     *  Method : POST
     *  Inputs :idUser
     */
    getListMyTransactions: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.idUser || req.body.idUser == '')
            return res.json({ success: false, message: 'You need to send me idUser.' });
        let trans = [];
        Transaction.find({ id_user: req.body.idUser }).exec(async (err, transactions) => {
            if (err)
                return res.json({ stransactionsuccess: false, message: 'Error about query, please try again!', errQuery: err });
            if (!transactions)
                return res.json({ success: false, message: 'Failed to get list transactions.' });
            await Promise.all(transactions.map(async (transaction, index) => {
                let user = await User.findOne({ id: transaction.id_user });
                if (user) {
                    transactions[index].email = user.email;
                    transactions[index].fullname = user.fullname;
                    //trans.push(transaction);
                }
            }));
            res.json({ success: true, message: 'Success to get list transactions!', transactions: transactions });
        });
    },

    /** 
    *  Function : Get list history transfer
    *  Method : POST
    *  Inputs : username
    */
    getHistoryMyTranfers: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.username || req.body.username == '')
            return res.json({ success: false, message: 'You need send me  username to use this route.' });
        Transaction.find({
                where : { 
                    or : [ 
                        {sender: req.body.username},
                        { note: req.body.username}
                    ]
                    , type:2
                } 
                
        }).exec((err, historys) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!historys)
                res.json({ success: false, message: 'Failed to get list historys transfer PV.' });
            else
                res.json({ success: true, message: 'Success to get list historys transfer PV!', historys: historys });
        });
    },

    /** 
    *  Function : Get list history transfer
    *  Method : POST
    *  Inputs : 
    */
    getHistoryTranfers: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        Transaction.find({type : 2}).exec((err, historys) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!historys)
                res.json({ success: false, message: 'Failed to get list historys transfer PV.' });
            else
                res.json({ success: true, message: 'Success to get list historys transfer PV!', historys: historys });
        });
    },


};