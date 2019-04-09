const {Book, Favorite} = require('../../models');

class BookService {
    static async getBooks(){
        try {
            return await Book.findAll();
        } catch (error) {
            throw error
        }
    }

    static async getFavoritesBooks({userId}){
        return await Favorite.findAll({include : Book, where: {userId}});
    }
    
    static async addFavorites({userId, bookId}){
        try {
            const favoriteBook = await Favorite.findOne({where:{userId, bookId}})
            if(favoriteBook) return {message : 'this book is already in your favorites'}
            return await Favorite.create({
                userId,
                bookId
            })    
        } catch (error) {
            throw error  
        }
    }

    static async getBookDetails({bookId}){
        try {
            return await Book.find({
                where : {id : bookId}
            });    
        } catch (error) {
            throw error
        }
    }
}

module.exports = BookService