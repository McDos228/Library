const { User, Book }  = require('../../models');
const path = require('path');

class Admin {

    static async addBook({title, author, bookLink, pages, artLink, ganres, desc}){
        try {
            console.log(pages)
            let _title = title[0].toLowerCase();
            const book = await Book.findOne({where:{title : _title}})
            if(book) throw {message: 'this book already added to db'}
            let obj = {
                title : _title,
                author : author[0],
                link : path.join(`${__dirname}/../../${bookLink}`),
                art : path.join(`${__dirname}/../../${artLink}`),
                pages : pages[0],
                ganres : JSON.stringify(ganres),
                desc : desc[0]
            }
            console.log(obj, 'create obj')
            const newBook = await Book.create({
                title : _title,
                author : author[0],
                link : path.join(`${__dirname}/../../${bookLink}`),
                art : path.join(`${__dirname}/../../${artLink}`),
                pages : pages[0],
                ganres : JSON.stringify(ganres),
                desc : desc[0]
            })
            return newBook
        } catch (error) {
            console.log(error, 'dsada')
            throw error
        }
    }

    static async deleteBook({id}){
        try {
            const deletedBook = await Book.destroy({
                where : {id},
                returning : true
            })
            return deletedBook
        } catch (error) {
            throw error
        }
    }

    static async setRole({userId, role}){
        try {
            return await User.update({role},{where:{id : userId}, returning : true});
        } catch (error) {
            throw error
        }
    }

    static async updateBook({bookId, title, author, pages}){
        try {
            return await Book.update({
                title, 
                author, 
                pages,
                desc
            }, {where : {id : bookId}, returning : true})
        } catch (error) {
            throw error
        }
    }
}

module.exports = Admin