const express = require('express');
const adminService = require('../../services').adminService;
const fileService = require('../../services/files');
const path = require('path');

module.exports = express.Router()

    .post('/add/book', async(req, res, next)=>{
        try {
            const parsedBook = await fileService.promisifyUpload(req);
            // console.log(parsedBook.fields, 'parsedBook')
            const newBook = await adminService.addBook(parsedBook.fields);
            res.json(newBook)
        } catch (error) {
            next(error)
        }
    })

    .put('/set/role', async(req, res, next)=>{
        try {
            const newRole = await adminService.setRole(req.body);
            res.json(newRole)
        } catch (error) {
            next(error)
        }
    })

    .put('/update/book', async(req, res, next)=>{

    })