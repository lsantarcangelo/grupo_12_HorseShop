const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000

//Levantando servidor
app.listen(PORT, () => console.log('Servidor corriendo en el puerto' + PORT));

//Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/shopping-cart', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/shoping-cart.html'))
})

app.get('/detalle', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/detalle-producto.html'))
})

//Recursos estaticos
app.use(express.static('public'));