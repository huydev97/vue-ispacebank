/**
 * GiveinterestController
 *
 * @description :: Server-side logic for managing giveinterests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
}
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
rule.second = 0;
var j = schedule.scheduleJob(rule, function () {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hours = now.getHours();
    // let minutes = now.getMinutes();
    // let seconds = now.getSeconds();
    // let milliseconds = now.getMilliseconds();
    var dat = new Date(year, month, date);
    Bagbitcoin.find({}).exec((err, bags) => { //{ next_received: dat }
        if (err)
            console.log(err)
        else {
            if (bags.length <= 0)
                console.log('Updated inerest for 0 user');
            else {
                let count = 0;
                bags.map((bag, index) => {
                    if (bag.period > 0) {
                        //let next = addDays(bag.next_received, 15);
                        let new_pre = bag.period - 1;
                        let interest = (bag.investment * (bag.interest_percent / 15)) / 100;
                        let interestPercentForOneDay = (bag.interest_percent / 15);
                        interest = parseFloat(interest);
                        interestPercentForOneDay = parseFloat(interestPercentForOneDay);
                        Bagbitcoin.update({ id: bag.id }, {
                            period: new_pre,
                            //next_received: next ,
                            balance_wallet: parseFloat(bag.balance_wallet) + interest,
                        }).exec(async (err, updated) => {
                            if (err)
                                console.log('Failed to update interest. ' + err);
                            else {
                                let user = await User.findOne({id : updated[0].id_user});
                                Historyinterestreceived.create({
                                    id_user: bag.id_user, interset_received: interestPercentForOneDay, pv_received: interest,
                                    name: user.username,
                                    note: 'Type : Bonus for reference. Noti:' + (err || 'Success'),
                                }).exec((err, history) => {
                                    if (!history)
                                        console.log('Failed to create history for : #' + user.username + '. ' + err);
                                }); // Save history received interest
                                console.log('Updated interest for ' + user.username + '(+' + interest + 'PV)');
                                count++;
                            }
                        });
                    }
                });
                console.log('Updated interest for '+count+ 'users.');
            }
        }
    });
});
module.exports = {

    getHistoryInterestReceived: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        Historyinterestreceived.find({}).exec((err, historys) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!historys)
                res.json({ success: false, message: 'Failed to get list history received interest.' });
            else
                res.json({ success: true, message: 'Success to get list history received interest!', historys: historys });
        })
    }
};

