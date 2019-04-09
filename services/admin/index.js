const { User, Book }  = require('../../models');

class Admin {

    static async addBook({title, author, bookLink, pages, artLink, ganres, desc}){
        try {

            const book = await Book.findOne({where:{title : title.toLowerCase(), author}})
            if(book) throw {message: 'this book already added to db'}

            const newBook = await Book.create({
                title : title[0].toLowerCase(),
                author : author[0],
                link : bookLink,
                art : artLink,
                pages : pages[0],
                ganres : JSON.stringify(ganres),
                desc
            })
            return newBook
        } catch (error) {
            throw error
        }
    }

    static async deleteBook({id}){
        try {
            const deletedBook = await Book.destroy({
                where : {id}
            }, {returning : true})
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