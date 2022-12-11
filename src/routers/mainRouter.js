const express = require('express')
const router = express.Router();



//Rutas
router.get('/', (_req, res) => {
    res.render('index')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/register', (req, res) => {
    res.render( 'register')
});

router.get('/productCart', (req, res)=>{
    res.render('../views/products/productCart')
});


module.exports = router