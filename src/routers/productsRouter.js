const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//Listar productos
router.get('/', productsController.list);

//Crear un producto
router.get('/create', productsController.create);
router.post('/create', productsController.store);

// Detalle de un producto // 
router.get('/productDetail/:id/', productsController.detail); 

module.exports = router;
