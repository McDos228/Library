const {Book} = require('../../models');

class BookService {
    static async getBooks(){
        return await Book.find();
    }

    static async getFavoritesBooks({userId}){

    }

    static async getBookDetails({bookId}){
        
    }
}

module.exports = BookService