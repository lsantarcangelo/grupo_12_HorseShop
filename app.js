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

app.get('/shoping-cart', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/shoping-cart.html'))
})

//Recursos estaticos
app.use(express.static('public'));