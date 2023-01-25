const path = require('path')
const multer = require('multer');

// Configuracion Multer

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/users');
	},
	filename: (req, file, cb) => {
		let newFileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, newFileName);
	}
})
const uploadFile = multer( { storage });

module.exports = uploadFile;