const {body} = require('express-validator');

const validateLogin= [
    body('email')
        .notEmpty()
        .withMessage('Debe ingresar un correo electronico').bail()
        .isEmail()
        .withMessage('Debe ingresar un correo válido'),
    body('password')
    .notEmpty()
    .isLength({ min: 8, max:16  })
    .withMessage('Debe escribir una contraseña valida')
    .custom((value, { req }) =>{
        return true;
    }),
];

module.exports= validateLogin;
