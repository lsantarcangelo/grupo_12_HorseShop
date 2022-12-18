const express = require('express');
const app = express();
const path = require('path');
const mainRouters = require('./src/routers/mainRouter');
const productsRouter = require('./src/routers/productsRouter');
const methodOverride = require('method-override');



const PORT = process.env.PORT || 3000

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(methodOverride('_method'));

//Motor de vistas
app.set('View', path.resolve('./views/index.ejs'))
app.set('view engine', 'ejs'); 

//Levantando servidor
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
});


//Rutas
// router.get('/', mainRouters)
app.use('/',mainRouters);

app.use('/products', productsRouter);