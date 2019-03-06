const express = require('express');
const auth = require('./auth');
const AuthHelper = require('../auth');
// const playlist = require('./playlist');

module.exports = express.Router()
    .use('/auth', auth)
    // .use('/playlist', AuthHelper.isAuth, playlist)