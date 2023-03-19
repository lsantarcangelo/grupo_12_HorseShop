// const sequelize = require('s');
const express = require('express');
const router = express.Router();
const apiUsersControllers = require('../../controllers/api/apiUsersControllers')

//rutas
//listado de usuarioa
router.get('/users', apiUsersControllers.allUsers);
//detalles de un usuarios
router.get('/users/:id', apiUsersControllers.profile);


module.exports = router;