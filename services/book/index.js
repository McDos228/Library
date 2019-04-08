const {Book} = require('../../models');

class BookService {
    static async getBooks(){
        return await Book.findAll();
    }

    static async getFavoritesBooks({userId}){

    }

    static async getBookDetails({bookId}){
        
    }
}

module.exports = BookService