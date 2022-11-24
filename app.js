const express = require('express');
const app = express();
const path = require('path');
const mainRouters =require('./src/routers/mainRouter');

const PORT = process.env.PORT || 3000

//Recursos estaticos
app.use(express.static('public'));

//Motor de vistas
app.set('View', path.resolve('./views/index.ejs'))
app.set('view engine', 'ejs'); 

//Levantando servidor
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
});


//Rutas
// router.get('/', mainRouters)
app.use('/',mainRouters)


