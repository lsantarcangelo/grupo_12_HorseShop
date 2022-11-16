const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000

//Motor de vistas
app.set('view engine', 'ejs'); 

//Levantando servidor
app.listen(PORT, () => console.log('Servidor corriendo en el puerto' + PORT));

//Rutas
app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/index'))
});

app.get('/login', (req, res) => {
    res.render(path.join(__dirname, '/views/login'))
});

app.get('/register', (req, res) => {
    res.render(path.join(__dirname, '/views/register'))
});

app.get('/shopping-cart', (req, res)=>{
    res.render(path.join(__dirname, '/views/shoping-cart'))
});

app.get('/detalle', (req, res)=>{
    res.render(path.join(__dirname, '/views/product-detail'))
});

//Recursos estaticos
app.use(express.static('public'));