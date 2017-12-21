/**
 * ConfirmPassword
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
var sha1 = require('sha1');
var md5 = require('md5');
module.exports = function (req, res, next) {

    // User is allowed, proceed to the next policy, 
    // or if this is the last policy, the controller
    if (req.cookies.login_token || req.body.login_token) {
        
        if (!req.body.password || req.body.password == '')
            return res.json({ success: false, message: 'You need send me password to use this action.' });
        let token = req.body.login_token || req.cookies.login_token;
        if(req.body.type && req.body.type > 3 && req.body.type < 3)
        {
            next();
        }
        else
        {
            User.findOne({ where : {
                token: token, password: sha1(req.body.password + md5(req.body.password))
            }  }).exec((err, user) => {
                if (err)
                    return res.json({ success: false, message: 'Failed to check password user.', errQuery: err });
                if (user)
                    return next();
                else
                    res.json({ success: false, message: 'Password wrong!.' });
            });
        }
    } else
        res.json({ success: false, message: 'You need signin to use this action.' });
    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    // return res.forbidden('You are not permitted to perform this action.');
};
