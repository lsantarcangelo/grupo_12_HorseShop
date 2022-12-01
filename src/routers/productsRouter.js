const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

//Listar productos
router.get('/', productsController.index);

//Crear un producto
router.get('/create', productsController.create);
router.post('/create', productsController.store);

module.exports = router;
