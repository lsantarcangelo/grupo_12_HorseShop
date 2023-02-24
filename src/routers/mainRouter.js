const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


//Rutas
router.get('/', mainController.index);

router.get('/productCart', (req, res)=>{
    res.render('../views/products/productCart')
});


module.exports = router