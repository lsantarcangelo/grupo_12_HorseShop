const express = require('express');
const router = express.Router();
const path = require('path');

// Configuracion Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images'));
    },
    filename: (req, file, cb) => {
        const newFilename = 'prod' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});
const upload = multer({ storage });

const productsController = require('../controllers/productsController');

//Listar productos
router.get('/', productsController.list);

//Crear un producto
router.get('/create', productsController.create);
router.post('/create', upload.single('image'), productsController.store);

// Detalle de un producto // 
router.get('/productDetail/:id/', productsController.detail); 

module.exports = router;
