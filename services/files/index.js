const fs = require('fs');
const mv = require('mv');
const path = require('path');
const multiparty = require('multiparty');

const promisifyUpload = (req) => new Promise((resolve, reject) => {
    const form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {
		if (err) return reject(err);
		let title = fields.title[0];
		let bookExt = path.extname(files.book[0].originalFilename);
		let artExt = path.extname(files.art[0].originalFilename);
		let bookLink = path.join(`uploads/book/${title}-${Date.now()}${bookExt}`);
		let artLink = path.join(`uploads/arts/${title}-art-${Date.now()}${artExt}`);

		mv(files.book[0].path, bookLink, err => {
			if (err) throw err;
		});

		mv(files.art[0].path, artLink, err => {
			if (err) throw err;
		});

		let res = {
			...files,
			fields,
		}
		res.fields.bookLink = bookLink;
		res.fields.artLink = artLink;
        return resolve(res);
    });
});


// storeFile = (req, res, next) => {
// 	const form = new multiparty.Form();
// 	return form.parse(req, (err, fields, files) => {
// 		console.log(fields.title[0])
// 		let title = fields.title[0];
// 		let author = fields.author[0];
// 		let ext = path.extname(files.file[0].originalFilename);
// 		let link = path.join(`${__dirname}/../../../uploads/${title}${ext}`);
		
// 		// console.log(fields)
// 		return {title, author, link};
// 	})
// };

// createFile = (text, link) => {
// 	return new Promise((resolve, reject) => {
// 		fs.appendFile(utils.filePath(link), text, err => {
// 			if (err) {
// 				reject(err);
// 			}
// 		});
// 		resolve({ message: 'Task successfully created' });
// 	});
// };

// deleteLocalFile = link => {
// 	return new Promise((resolve, reject) => {
// 		fs.unlink(link, err => {
// 			if (err) reject(err);
// 		});
// 		resolve({ message: 'Task successfully deleted' });
// 	});
// };

module.exports = {
	// storeFile,
	// createFile
	promisifyUpload
	// deleteLocalFile
};