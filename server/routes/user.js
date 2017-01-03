const express = require('express');
const User = require('../models/user');
const userRoutes = express.Router();
const config = require('../config/config.json');
const jwt    = require('jsonwebtoken');

const user = {
    username: 'test-user',
    password: 'test-password',
    id: 1
};

userRoutes.get('/', function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
});

userRoutes.post('/', function(req, res) {

    const nick = new User({
        name: 'Nick Cerminara',
        password: 'password',
        admin: true
    });

    nick.save(function(err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({ success: true });
    });
});

userRoutes.post('/authenticate', function(req, res) {
    console.log(req.body.name);
    User.findOne({
        name: req.body.name
    }, function(err, user) {

        if (err) throw err;
        console.log(user);
        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            if (user.password != req.body.password) {
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