const express = require('express');
const auth = require('./auth');
const AuthHelper = require('../auth');
const admin = require('./admin');
const book = require('./book')

module.exports = express.Router()
    .use('/auth', auth)
    .use('/admin', AuthHelper.isAuth, AuthHelper.isAdmin, admin)
    .use('/books', AuthHelper.isAuth, book)
