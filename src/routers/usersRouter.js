const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// controlers
const usersController = require('../controllers/usersController');

//middelware
const validations = require('../middleware/validateRegisterMiddeware');
const validateLogin = require('../middleware/validateLoginMiddelware');
const guestMiddleware =require('../middleware/guestMiddelware')
const authMiddleware= require('../middleware/authMiddleware')


// Configuracion Multer
const uploadFile = require('../middleware/multerMiddelware');

//Formulario de registro de nuevo usuario
router.get('/register', guestMiddleware, usersController.register);

//Procesar el registro de nuevo usuario //
router.post('/register', uploadFile.single('image'), validations, usersController.processRegister);

//Login de usuario
router.get('/login',guestMiddleware , usersController.login);

//prosesar de usuario
router.post('/login', validateLogin, usersController.loginProcess);

//Perfil de usuario
router.get('/userProfile',authMiddleware , usersController.profile);

// Logout
router.get('/logout/', usersController.logout);


module.exports = router;