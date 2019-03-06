const { User, Token } = require('../models');

isAdmin = (req, res, next) => {
    return User.findOne({where: {id: req.user.id}})
        .then(user => {
            if (user.role !== 'admin') return res.status(400).json("You can`t visit this page!")
            return next()
        })
};

isAuth = (req, res, next) => {
    return Token.findOne({where: {token: req.headers.token}})
        .then(token => {
            if (!token) return res.status(401).json("You are not authorized!");
            return next()
        })
};

module.exports = {
    isAuth,
    isAdmin
}