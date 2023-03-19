const express = require('express');
const router = express.Router();
const categoriesApiController = require('../../controllers/api/categoriesApiController');

//Listar Categorias
router.get('/', categoriesApiController.list);


module.exports = router;