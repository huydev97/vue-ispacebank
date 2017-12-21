/**
 * HistoryinterestreceivedController
 *
 * @description :: Server-side logic for managing historyinterestreceiveds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /** 
     *  Function : Get history interest received
     *  Method : POST
     *  Inputs : id_user
     */
    getListMyHistory: (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if(!req.body.id_user)
            return res.json({ success: false, message: 'Missed id_user to load history interest received.' });
        Historyinterestreceived.find({id_user : req.body.id_user}).exec((err, historys) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again !', errQuery: err });
            if (!users)
                res.json({ success: false, message: 'Failed to get history interest received !' });
            else
                res.json({ success: true, message: 'Success to get history interest received !', historys: historys });
        });
    }
};

