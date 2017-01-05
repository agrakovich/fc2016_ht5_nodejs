const express = require('express');
const User = require('../models/user');
const userRoutes = express.Router();
const config = require('../config/config.json');
const jwt    = require('jsonwebtoken');

userRoutes.post('/', function(req, res, next) {
    const user = new User({ username: req.body.username, password: req.body.password });
    user.save(function(err, user) {
        if(err){
            next(err);
        }
        else{
            console.log("New user - %s:%s",user.username,user.password);
            return res.send({ status: 'OK' });
        }
    });
});

userRoutes.post('/token', function(req, res, next) {
    console.log(req.body.name);
    User.findOne({
        username: req.body.username
    }, function(err, user) {

        if (err){
            next(err);
        }

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            if (user.checkPassword(req.body.password) === false) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                const token = jwt.sign(user, config.secretKey, {});
                res.json({
                    success: true,
                    token: token
                });
            }
        }
    });
});


module.exports = userRoutes;