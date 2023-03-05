const express = require('express');
const router = express.Router();
const path = require('path');
const validateProducts = require('../middleware/validateProducts');
const productsController = require('../controllers/productsController');

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


//Listar productos
router.get('/', productsController.list);

//Listar productos por categoria
router.get('/category/1/', productsController.man);
router.get('/category/2/', productsController.woman);
router.get('/category/3/', productsController.kids);
router.get('/category/4/', productsController.accesories);

//Crear un producto
router.get('/create', productsController.create);
router.post('/create', upload.single('image'), validateProducts, productsController.store);

// Detalle de un producto // 
router.get('/detail/:id/', productsController.detail); 

// Editar un producto
router.get('/edit/:id/', productsController.edit);
router.put('/edit/:id/', upload.single('image'), productsController.update);

//Eliminar un producto
router.post('/delete/:id/', productsController.destroy)


module.exports = router;
