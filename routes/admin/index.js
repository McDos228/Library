const express = require('express');
const adminService = require('../../services').adminService;

module.exports = express.Router()

    .post('/add/book', async(req, res, next)=>{
        try {
            const newBook = await adminService.addBook(req.body);
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