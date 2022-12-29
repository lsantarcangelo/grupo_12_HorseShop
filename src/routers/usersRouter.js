const express = require('express');
const router = express.Router();
const path = require('path');
const { body } = require('express-validator');
const usersController = require('../controllers/usersController');

// Configuracion Multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'));
    },
    filename: (req, file, cb) => {
        const newFilename = 'user' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});
const upload = multer({ storage });

const validations = [
    body('firstName').notEmpty().withMessage('Debe completar el campo Nombre'),
    body('lastName').notEmpty().withMessage('Debe completar el campo Apellido'),
    body('category').notEmpty().withMessage('Debe completar el campo Categoria'),
    body('email')
        .notEmpty().withMessage('Debe ingresar un correo electronico').bail()
        .isEmail().withMessage('Debe ingresar un correo válido'),
    body('passwprd').notEmpty().withMessage('Debe escribir una contrasena'),
    body('passConfirm').notEmpty().withMessage('Por favor confirme su contrasena'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['jpg', 'png'];
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

//Login de usuario
router.get('/login', usersController.login);

//Formulario de registro de nuevo usuario
router.get('/register', usersController.register);
//Procesar el registro de nuevo usuario
router.post('/register', upload.single('image'), validations, usersController.store);

module.exports = router;