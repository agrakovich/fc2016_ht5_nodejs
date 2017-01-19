const express = require('express');
const UserModel = require('../models/authentification').UserModel;
const authRoutes = express.Router();

authRoutes.post('/register', function(req, res, next) {
    const user = new UserModel({ phone: req.body.phone, password: req.body.password });
    user.save(function(err, user) {
        if(err){
            next(err);
        }
        else{
            return res.send({ status: 'OK' });
        }
    });
});


module.exports = authRoutes;