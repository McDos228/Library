const express = require('express');
const adminService = require('../../services').adminService;
const fileService = require('../../services/files');

module.exports = express.Router()

    .post('/add/book', async(req, res, next)=>{
        try {
            const parsedBook = await fileService.promisifyUpload(req, next);
            const newBook = await adminService.addBook(parsedBook.fields);
            res.json(newBook)
        } catch (error) {
            next(error)
        }
    })

    .delete('/delete/book', async(req, res,next)=>{
        try {
            const deleteBook = await adminService.deleteBook({...req.body});
            fileService.deleteFile(re.body.link);
            res.json(deleteBook)
        } catch (error) {
            next(error)
        }
    })

    
    .put('/update/book', async(req, res, next)=>{
        try {
            const updatedBook = await adminService.updateBook({...req.body})
            res.json(updatedBook)
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