const path = require('path');
const {body} = require('express-validator')

const validations = [
    body('firstName').notEmpty().withMessage('Debe completar el campo Nombre'),
    body('lastName').notEmpty().withMessage('Debe completar el campo Apellido'),
    body('category').notEmpty().withMessage('Debes elegir una categoria'),
    body('email')
        .notEmpty().withMessage('Debe ingresar un correo electronico').bail()
        .isEmail().withMessage('Debe ingresar un correo válido'),
    body('password').trim().notEmpty().withMessage('Debe escribir una contrasena'),
    body('passConfirm').trim().notEmpty().withMessage('Por favor confirme su contrasena').bail()
        .custom((value, {req}) => value === req.body.password).withMessage("Las contraseña no coincide"),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png'];
        if(!file) {
            throw new Error('Debe cargar una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;
    })
];

module.exports = validations;
