const express = require('express');
const bookSerivce = require('../../services').bookSerivce;


module.exports = express.Router()
    .get('/list', async(req, res, next)=>{
        res.json(await bookSerivce.getBooks())
    })
