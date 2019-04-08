const { User, Book }  = require('../../models');

class Admin {

    static async addBook({title, author, bookLink, pages, artLink}){
        // console.log(title, author)

        // let strGanres = '';
        // if(typeof ganres === 'array') strGanres = JSON.stringify(ganres);

        const book = await Book.create({
            title : title[0],
            author : author[0],
            link : bookLink,
            art : artLink,
            pages : pages[0]
        })
        return book
    }

    static async setRole({userId, role}){
        try {
            return await User.update({role},{where:{userId}});
        } catch (error) {
            throw error
        }
    }

    // static async 
}

module.exports = Admin