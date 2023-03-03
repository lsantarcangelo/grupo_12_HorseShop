const path = require('path');
const {body} = require('express-validator')

const validations = [
    body('firstName')
    .notEmpty().withMessage('Debe completar el campo Nombre')
    .isLength({ min: 2, max: 20 })
    .withMessage('debe tener almenos 2 caracteres '),
    body('lastName')
    .notEmpty().withMessage('Debe completar el campo Apellido')
    .isLength({ min: 2, max: 20 })
    .withMessage('debe tener almenos 2 caracteres '),
    body('email')
        .notEmpty()
        .withMessage('Debe ingresar un correo electronico')
        .bail()
        .isEmail()
        .withMessage('Debe ingresar un correo válido'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Debe escribir una contrasena').bail()
    .isLength({ min: 8, max: 16 })
    .withMessage('Debe tener almenos 8 caracteres ')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
    .withMessage("Debe contener al menos un numero, una letra mayuscula y un minimo de 8(ocho) caracteres " ),
    body('passConfirm')
    .trim()
    .notEmpty()
    .withMessage('Por favor confirme su contrasena').bail()
        .custom((value, {req}) => value === req.body.password).withMessage("La contraseña no coincide"),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.png'];
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
