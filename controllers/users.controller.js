var UserProfileModel = require('../models/users.model');
var common = require('../helpers/common');
var messages = require('../configs/constants/messages');

exports.register = function(req,res, next){

    let userProfileModel = new UserProfileModel(req.body);

    //@ save object to database
    userProfileModel.save((err, saved) => {

        let resObj = {};
        let Common = new common.common();
        if (err) {
            let message = err.code == '11000' ? `${req.body.email} ${messages.alreadyTaken}` : 'Registration failed';
            resObj = Common.generateResponses(400, 'failed', message, err.code == '11000'? null : err);
        } else {
            let message = messages.accoundCreated;
            let result = {
                email: saved.email,
                created_at: saved.created_at
            };
            resObj = Common.generateResponses(200, 'success', message, null, result);
        }

        res.status(resObj.statusCode).json(resObj);

    });

};

exports.listing = function(req, res, next) {

    UserProfileModel.find({ }, '-_id -__v -password -created_at -updated_at', function (err, docs) {
        console.log('errr',err, docs)
        if(err) {
            res.render('error');
        }
        else {
            res.render('users-list', {users: docs});
        }

    });
};