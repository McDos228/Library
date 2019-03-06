const express = require('express');
// const authService = require('../../services').authService;
// const initToken = require('../../auth').AppleToken().initToken();
const appleToken = require('../../auth').AppleToken;

module.exports = express.Router()
    .post('/login', async(req, res, next)=>{
        try {
            // req
            //     .checkBody('username')
            //     .notEmpty()
            //     .withMessage('username is required!')
            //     .matches(/^[A-Za-z0-9]/, 'i')
            //     .withMessage('the username must contain numbers or letters');
            // req
            //     .checkBody('password')
            //     .notEmpty()
            //     .withMessage('password is required!')
            //     .matches(/^[A-Za-z0-9]/, 'i')
            //     .withMessage('the password must contain numbers or letters');

            // const errors = req.validationErrors();
            // if(errors) return next({message: errors.map(error=> error.msg).join()});
            // logger.log(req.body, 'login')
            const {token} = await authService.login(req.body);
            if(!token) return next({message : 'Login problems, try again later'})
            res.json({
                msg: 'You are successfuly logged in!',
                token
            })
        } catch (error) {
            logger.log(error)
            next(error)
        }
    })

    .post('/register', async(req, res, next)=>{
        try {
            // req
            //     .checkBody('username')
            //     .notEmpty()
            //     .withMessage('username is required!')
            //     .matches(/^[A-Za-z0-9]/, 'i')
            //     .withMessage('the username must contain numbers or letters');
            // req
            //     .checkBody('password')
            //     .notEmpty()
            //     .withMessage('password is required!')
            //     .matches(/^[A-Za-z0-9]/, 'i')
            //     .withMessage('the password must contain numbers or letters');
         
            // const errors = req.validationErrors();
            // if(errors) return next({message: errors.map(error=> error.msg).join()});
            // logger.log(req.body, 'register')
            const newUser = await authService.register(req.body);
            res.json({username : newUser.username})
        } catch (error) {
            logger.log(error)
            next(error)
        }
    })

    // .get('/logout', async(req, res, next)=>{
    //     try {
    //         if(!req.headers.token) next({message:'token required to be logged out'})
    //         const logout = await authService.logout(req.headers.token);
    //         res.json(logout)
    //     } catch (error) {
    //         next(error)
    //     }
    // })

    // .get('/token', async(req, res, next)=>{
    //     appleToken.initAppleToken()
    //     res.json(appleToken.getAppleToken())
    // })