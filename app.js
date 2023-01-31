const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routers/mainRouter');
const productsRouter = require('./src/routers/productsRouter');
const usersRouter = require('./src/routers/usersRouter');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies =require('cookie-parser');


const PORT = process.env.PORT || 3000


//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cookies());
app.use(session({
    secret: 'secreto!!!',
    resave: false,
    saveUninitialized: false,
}));

//Middlewares de aplicacion
const userLoggedMiddleware= require('./src/middleware/userLoggedMiddleware');
app.use(userLoggedMiddleware);

//Motor de vistas
app.set('View', path.resolve('./views/index.ejs'))
app.set('view engine', 'ejs'); 

//Levantando servidor
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
});


//Rutas
app.use('/',mainRouter);
app.use('/products', productsRouter);
app.use('/', usersRouter);