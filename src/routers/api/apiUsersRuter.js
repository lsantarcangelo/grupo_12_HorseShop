// const sequelize = require('s');
const express = require('express');
const router = express.Router();
const apiUsersControllers = require('../../controllers/api/apiUsersControllers')

//rutas
//listado de usuarioa
router.get('/all', apiUsersControllers.allUsers);
//detalles de un usuarios
router.get('/profile/:id', apiUsersControllers.profile);


module.exports = router;