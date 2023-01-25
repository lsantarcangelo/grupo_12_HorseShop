const {body} = require('express-validator');

const validateLogin= [
    body('email')
        .notEmpty().withMessage('Debe ingresar un correo electronico').bail()
        .isEmail().withMessage('Debe ingresar un correo válido'),
    body('password').notEmpty().withMessage('Debe escribir una contrasena')
    .custom((value, { req }) =>{
        return true;
    }),
];

module.exports= validateLogin;
