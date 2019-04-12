const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const config = require('../../config/index');
const { User }  = require('../../models');

class Auth {
    static async login({username, password, email}){
        try {
            const user = await User.findOne({where: {email}});
            if(!user) throw {message : 'no user found'}
            if(bcrypt.compareSync(password, user.password)){
                let token = jwt.sign({
                    userId: user.dataValues.id,
                    username,
                    role : user.dataValues.role
                }, config.secret, { expiresIn: '1w' })
                return {token}
            }      
        } catch (error) {
            throw error
        }
    }

    static async register({username, password, email}){
        try {
            let pass = bcrypt.hashSync(password, salt);
            const user = await User.create({
                username : username,
                password : pass,
                email : email,
                role : 'user'
            });
            if (!user) throw {message :'Error while signing up'}
            return user;
        } catch (error) {
            throw error
        }
    }
}

module.exports = Auth