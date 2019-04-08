const { User, Token } = require('../models');
const config = require('../config');
const jwt = require('jsonwebtoken');

isAdmin = (req, res, next) => {
    return User.findOne({where: {id: req.user.userId}})
        .then(user => {
            if (user.role !== 'admin') return res.status(400).json("You can`t visit this page!")
            return next()
        })
};

isAuth = (req, res, next) => {
    if (!req.headers.token) return res.status(401).json("You are not authorized!");
    jwt.verify(req.headers.token, config.secret, (err, decode) => {
        if(err) throw err
        req.user = decode;
        return next();
    })
};

module.exports = {
    isAuth,
    isAdmin
}