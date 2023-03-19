const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

//Listar productos
router.get('/', productsApiController.list);
// Detalle de un producto // 
router.get('/:id/', productsApiController.detail); 

module.exports = router;