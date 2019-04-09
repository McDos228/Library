const fs = require('fs');
const mv = require('mv');
const path = require('path');
const multiparty = require('multiparty');

promisifyUpload = (req, next) => new Promise((resolve, reject) => {
    const form = new multiparty.Form();

    form.parse(req, (err, fields = {}, files= {})=> {
		if (err) return reject(err);

		if(!fields.title) return next({message :'no book title found'})
		if(!files.book) return next({message :'no book upload'})
		if(!files.art) return next({message :'no art upload'})
		if(!fields.author) return next({message :'no author found'})

		let title = fields.title[0];
		let bookExt = path.extname(files.book[0].originalFilename);
		let artExt = path.extname(files.art[0].originalFilename);
		let bookLink = path.join(`uploads/book/${title}-${Date.now()}${bookExt}`);
		let artLink = path.join(`uploads/arts/${title}-art-${Date.now()}${artExt}`);

		const links = [];
		links.push({tmpPath : files.book[0].path, link : bookLink}, {tmpPath : files.art[0].path, link : artLink})

		for(linkObj of links) {
			mv(linkObj.tmpPath, linkObj.link, err => {
				if (err) throw err;
			});
		}

		let res = {
			...files,
			fields,
		}
		res.fields.bookLink = bookLink;
		res.fields.artLink = artLink;
        return resolve(res);
    });
});

deleteFile = links => {
	return new Promise((resolve, reject) => {
		for (const link of links) {
			fs.unlink(link, err => {
				if (err) reject(err);
			});
		}		
		resolve({ message: 'Task successfully deleted' });
	});
};

module.exports = {
	promisifyUpload,
	deleteFile
};