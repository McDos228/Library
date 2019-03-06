const { User, Book }  = require('../../models');

class Admin {

    static async addBook({title, author, pages, art, link, ganres}){
        let strGanres = '';
        if(typeof ganres === 'array') strGanres = JSON.stringify(ganres);

        const book = await Book.create({
            title,
            author,

        })

    }

    static async setRole({userId, role}){
        try {
            return await User.update({role},{where:{userId}});
        } catch (error) {
            throw error
        }
    }
}

module.exports = Admin