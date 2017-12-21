/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var sha1 = require('sha1');
var md5 = require('md5');
var randomstring = require('randomstring');
module.exports = {
    // CRUD USER
    /** 
     *  Function : Create a new user
     *  Method : POST
     *  Inputs : email,useranme, password, phone, country
     */
    create: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (req.body.email == '' || req.body.username == '' || req.body.password == '' || req.body.phone == '' || req.body.country == '')
            return res.json({ success: false, message: 'Please enter full information.' });
        let newUser = req.body;
        let password = newUser.password;
        newUser.password = sha1(password + md5(password));

        // Check information available
        let usernameAvail = await User.find({ username: req.body.username });
        let emailAvail = await User.find({ email: req.body.email });
        let phoneAvail = await User.find({ phone: req.body.phone });
        if (usernameAvail.length > 0)
            return res.json({ success: false, message: 'Username is available in system!.' });
        if (emailAvail.length > 0)
            return res.json({ success: false, message: 'Email is available in system!.' });
        if (phoneAvail.length > 0)
            return res.json({ success: false, message: 'Phone number is available in system!.' });

        // Add user to DB
        
        User.create(newUser).exec(async (err, newUser) => {
            if (err) // If error is exists
                return res.json({ success: false, message: 'Failed to create new user!.', errQuery: err });
            else // If success
            {
                Bagbitcoin.create({ id_user: newUser.id }).exec((err, newBag) => {
                    if (err)
                        console.log(err)
                    else
                        console.log('Created new bag.')
                }); // Create new bag
                res.json({ success: true, message: 'Successfully created a new account.' });
            }
        });
    },

    /** 
     *  Function : Read a user in database
     *  Method : POST
     *  Inputs : An Object conditions
     */
    read: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.conditions)
            return res.json({ success: false, message: 'You need send me a Object about conditions to use this route.' });
        User.findOne({
            where: req.body.conditions,
        }).exec((err, user) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!user)
                res.json({ success: false, message: 'Can\'t find user to show!!' });
            else
                res.json({ success: true, message: 'Load information user success!', users: user });
        });
    },

    /** 
     *  Function : Update a user in database
     *  Method : PUT
     *  Inputs : An Object conditions and Object infoUpdate need to update
     */
    update: async (req, res, next) => {
        if (req.method != 'PUT')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.conditions || !req.body.infoUpdate)
            return res.json({ success: false, message: 'You need send me a Object about conditions and a Object about information need to update(infoUpdate: { some attributes }) to use this route.' });
        User.update({
            where: req.body.conditions
        }, req.body.infoUpdate, (err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (updated.length <= 0)
                res.json({ success: false, message: 'Can\'t find user to update!!' });
            else
                res.json({ success: true, message: 'Updated user have name ' + updated[0].name });
        });
    },

    /** 
     *  Function : Update for user
     *  Method : PUT
     *  Inputs : An Object conditions and Object informations need to update
     */
    updateUser: async (req, res, next) => {
        if (req.method != 'PUT')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.conditions)
            return res.json({ success: false, message: 'You need send me a Object about conditions and a Object about information need to update(infoUpdate: { some attributes }) to use this route.' });
        let updateInfo = {};
        updateInfo = req.body;
        // if (req.body.password) {
        //     updateInfo.password = sha1(req.body.password + md5(req.body.password));
        // }
        User.update({
            where: req.body.conditions
        }, updateInfo, (err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (updated.length <= 0)
                res.json({ success: false, message: 'Can\'t find user to update!!' });
            else
                res.json({ success: true, message: 'Updated user have name ' + updated[0].fullname });
        });
    },

    /** 
    *  Function : Update Password for user
    *  Method : PUT
    *  Inputs : An Object conditions(id, oldPassword) and newPassword
    */
    updatePasswordUser: async (req, res, next) => {
        if (req.method != 'PUT')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.conditions || !req.body.newPassword)
            return res.json({ success: false, message: 'You need send me a Object about conditions and newPassword use this route.' });
        let newPassword = sha1(req.body.newPassword + md5(req.body.newPassword));
        let oldPassword = sha1(req.body.conditions.oldPassword + md5(req.body.conditions.oldPassword));
        User.update({
            where: { id: req.body.conditions.id, password: oldPassword }
        }, { password: newPassword }, (err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (updated.length <= 0)
                res.json({ success: false, message: 'Can\'t find user to update!!' });
            else
                res.json({ success: true, message: 'Updated user have name ' + updated[0].fullname });
        });
    },

    /** 
     *  Function : Delete a user in database
     *  Method : DELETE
     *  Inputs : An Object conditions to delete
     */
    delete: async (req, res, next) => { // Delete user by Object conditions
        if (req.method != 'DELETE')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.conditions)
            return res.json({ success: false, message: 'You need send me a Object about conditions to use this route.' });
        let conditions = JSON.parse(req.body.conditions);
        User.destroy(conditions).exec((err, deleted) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (deleted.length <= 0)
                res.json({ success: false, message: 'Can\'t find user to delete!!' });
            else
                res.json({ success: true, message: 'Deleted user have name ' + deleted[0].name });
        });
    },

    /** 
     *  Function : Login User
     *  Method : POST
     *  Inputs : An Object information to login (Email, password)
     */
    login: async (req, res, next) => { //information = {email, password}
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (req.body.login_token) {
            User.findOne({ token: req.body.login_token }, (err, user) => {
                if (err)
                    return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
                if (user)
                    return res.json({ success: true, message: 'You has logged!', user: user });
                else
                    return res.json({ success: false, message: 'Failed to confirm token login or user is login in another computer.' });
            });
        } else {
            if (!req.body.email || !req.body.email || req.body.email == '' || req.body.password == '')
                return res.json({ success: false, message: 'Email or password is empty or undefine.' });
            let password = sha1(req.body.password + md5(req.body.password));
            User.findOne({
                where: {
                    or: [
                        { email: req.body.email, password: password },
                        { username: req.body.email, password: password }
                    ]
                }
            }).exec((err, user) => {
                if (err)
                    return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
                if (!user)
                    res.json({ success: false, message: 'Email and password is not match!' });
                else {
                    if (user.isActive <= 0)
                        return res.json({ success: false, message: 'This username is blocked by adminstrator! Reason: ' + user.reasonBlock });
                    User.update({
                        or: [
                            { email: req.body.email },
                            { username: req.body.email }
                        ]
                    }, { // Give token login for user
                            token: sha1(md5(req.body.email) + md5(Date.now())) + sha1(req.body.password + Date.now()),
                        }).exec((err, updated) => {
                            if (err)
                                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
                            if (updated.length <= 0)
                                res.json({ success: false, message: 'Failed to created token for login user.!!' });
                            else {
                                console.log('1 User logged.')
                                res.json({ success: true, message: 'Login success!', user: updated[0] });
                            }
                        });
                }
            });
        }
    },

    /** 
     *  Function : Get User By Token
     *  Method : POST
     *  Inputs : cookie.login_token
     */
    getUserByToken: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        User.findOne({ token: req.cookies.login_token || req.body.login_token }).exec((err, user) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!user)
                res.json({ success: false, message: 'Failed to get user.(Failed confirm token)' });
            else
                res.json({ success: true, message: 'Success to get user!', user: user });
        });
    },

    /** 
     *  Function : Get list user for admin
     *  Method : POST
     *  Inputs : 
     */
    getListUsers: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        User.find({}).exec(async (err, users) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!users)
                return res.json({ success: false, message: 'Failed to get list user.' });
            else {
                await Promise.all(users.map(async (user, index) => {
                    let bag = await Bagbitcoin.findOne({ id_user: user.id });
                    // if (!bag)
                    //     return res.json({ success: false, message: 'Failed to get bagbitcoin of user id #' + user.id });
                    users[index].investment = bag.investment || 0;
                    users[index].balance_wallet = bag.balance_wallet || 0;
                    users[index].total_withdraw = bag.total_withdraw || 0;
                }));
                res.json({ success: true, message: 'Success to get list user!', users: users });
            }
        });
    },

    /** 
     *  Function : Get list admin for admin
     *  Method : POST
     *  Inputs : 
     */
    getListUserIsAdmin: (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        User.find({
            where: {
                admin: { '>=': 2 }
            }
        }).exec((err, admins) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!admins)
                res.json({ success: false, message: 'Failed to get list admins.' });
            else
                res.json({ success: true, message: 'Success to get list admins!', admins: admins });
        });
    },

    /** 
     *  Function : Get list moder for admin
     *  Method : POST
     *  Inputs : 
     */
    getListUserIsModer: (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        User.find({
            where: {
                admin: { '>=': 1 }
            }
        }).exec((err, moders) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (!moders)
                res.json({ success: false, message: 'Failed to get list moders.' });
            else
                res.json({ success: true, message: 'Success to get list moders!', moders: moders });
        });
    },

    /** 
     *  Function : Block user
     *  Method : POST
     *  Inputs : idUser, reasonBlock
     */
    blockUser: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.idUser || !req.body.reasonBlock || req.body.idUser == '' || req.body.reasonBlock == '')
            return res.json({ success: false, message: 'You need to type idUser and reasonBlock to block user.' });
        let user = await User.findOne({ id: idUser });
        if (user.isAdmin >= 2)
            return res.json({ success: false, message: 'You can not block a user is admin.' });
        User.update({ id: req.body.idUser }, {
            isActive: 0,
            reasonBlock: req.body.reasonBlock
        }).exec((err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (updated.length <= 0)
                res.json({ success: false, message: 'Not found user in DB.' });
            else
                res.json({ success: true, message: 'Success to block username ' + updated[0].username });
        })
    },

    /** 
    *  Function : Toggle Moder
    *  Method : POST
    *  Inputs : usernameReceiver
    */

    toggleModer: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.usernameReceiver || req.body.usernameReceiver == '')
            return res.json({ success: false, message: 'You need to type username to toggle user.' });
        let nextLevel;
        let userCurrent = await User.findOne({ username: req.body.usernameReceiver });
        if (userCurrent.isAdmin == 2)
            return res.json({ success: false, message: 'Failed!! you can\'t not toggle moder for username is admin.' });
        if (userCurrent.isAdmin != 1)
            nextLevel = 1;
        else
            nextLevel = 0;
        User.update({ username: req.body.usernameReceiver }, {
            isAdmin: nextLevel,
        }).exec((err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (updated.length <= 0)
                res.json({ success: false, message: 'Not found user in DB.' });
            else
                res.json({ success: true, currentLevel: updated[0].isAdmin, message: 'Success to toggleModer.' });
        })
    },
    /** 
    *  Function : Update Password for user
    *  Method : POST
    *  Inputs : usernameReceiver
    */
    resetPasswordUser: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        if (!req.body.usernameReceiver || req.body.usernameReceiver == '')
            return res.json({ success: false, message: 'You need send me username use this route.' });
        let createPass = randomstring.generate(10);
        let newPassword = sha1(createPass + md5(createPass));
        User.update({
            where: { username: req.body.usernameReceiver }
        }, { password: newPassword }, (err, updated) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if (updated.length <= 0)
                res.json({ success: false, message: 'Can\'t find user to reset password!!' });
            else
                res.json({ success: true, message: 'NewPassword : ' + createPass + '. Please send this new password for email ' + updated[0].email });
        });
    },

    /** 
    *  Function : GET Bitcoin Address E
    *  Method : POST
    *  Inputs :
    */
    getBitcoinAddress: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        User.findOne({ id: 1 }).exec((err, user) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if(!user)
                return res.json({success : false, message: 'Not found user in DB'});
            
            res.json({ success: true, addressAdmin: user.eWallet });
        });
    },

     /** 
    *  Function : Get all the people that user refer to
    *  Method : POST
    *  Inputs : idUser
    */
    getRefer: async (req, res, next) => {
        if (req.method != 'POST')
            return res.json({ success: false, message: 'Something is wrong at router\'\s method.' });
        let user = await User.findOne({id: req.body.idUser});
        if(!user)
            return res.json({success : false, message : 'Not found user in DB'});

        User.find({ referer: user.username }).exec((err, users) => {
            if (err)
                return res.json({ success: false, message: 'Error about query, please try again!', errQuery: err });
            if(!user)
                return res.json({success : false, message: 'Not found user in DB'});
                
            let allUsername = [];
            Promise.all(users.map((user, index) => { // Adding necessary informations
                // let u = {};
                // u.username = user.username;
                // u.createAt = user.createdAt;
                allUsername.push(user);
            }));
            console.log(allUsername)
            //Done
            res.json({ success: true, refers: allUsername });
        });
    }
};  