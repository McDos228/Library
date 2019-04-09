const express = require('express');
const bookSerivce = require('../../services').bookSerivce;


module.exports = express.Router()
    .get('/list', async(req, res, next)=>{
        res.json(await bookSerivce.getBooks())
    })

    .get('/details', async(req, res, next)=>{
        res.json(await bookSerivce.getBookDetails({...req.query}))
    })

    .get('/favorites/add', async(req, res, next)=>{
        const favorites = await bookSerivce.addFavorites({bookId : req.query.bookId, userId : req.user.userId});
        res.json(favorites)
    })

    .get('/favorites', async(req, res, next)=>{
        try {
            const favoritesList = await bookSerivce.getFavoritesBooks({...req.user})
            res.json(favoritesList)
        } catch (error) {
            next(error)
        }
    })
