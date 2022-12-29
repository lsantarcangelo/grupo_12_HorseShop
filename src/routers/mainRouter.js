const express = require('express')
const router = express.Router();



//Rutas
router.get('/', (req, res) => {
    res.render('index')
});

router.get('/productCart', (req, res)=>{
    res.render('../views/products/productCart')
});


module.exports = router