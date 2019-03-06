const express = require('express');
const auth = require('./auth');
const AuthHelper = require('../auth');
const admin = require('./admin');

module.exports = express.Router()
    .use('/auth', auth)
    .use('/admin', AuthHelper.isAuth, AuthHelper.isAdmin, admin)