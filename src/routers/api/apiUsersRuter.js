// const sequelize = require('s');
const express = require('express');
const router = express.Router();
const apiUsersControlers = require('../../controllers/api/apiUsersControllers')

//rutas
//listado de usuarioa
router.get('/all',apiUsersControlers.allUsers);
//detalles de un usuarios
router.get('/profile/:id', apiUsersControlers.profile);


module.exports = router;