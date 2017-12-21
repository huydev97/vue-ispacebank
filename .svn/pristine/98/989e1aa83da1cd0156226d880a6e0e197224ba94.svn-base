/**
 * tokenAdmin
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
    
      // User is allowed, proceed to the next policy, 
      // or if this is the last policy, the controller
      if (req.cookies.login_token || req.body.login_token) {
          let token = req.cookies.login_token || req.body.login_token;
        User.findOne({token : token}).exec((err, user)=> {
            if(err)
                return res.json({ success: false, message: 'Failed to check token User.', errQuery : err });
            if(user)
            {
                if(user.isAdmin >= 2)
                    return next();
                else
                    res.json({ success: false, message: 'Just admin can use this action.'});
            }
            else
                res.json({ success: false, message: 'You need signin to use this action.'});
        });
      }else
        res.json({ success: false, message: 'You need signin to use this action.'});
      // User is not allowed
      // (default res.forbidden() behavior can be overridden in `config/403.js`)
      //return res.forbidden('You are not permitted to perform this action.');
    };
    