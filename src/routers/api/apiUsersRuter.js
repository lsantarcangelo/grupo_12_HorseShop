// const sequelize = require('s');
const express = require('express');
const router = express.Router();
const apiUsersControlers = require('../../controllers/api/apiUsersControllers')

//rutas
//listado de usuarioa
router.get('/all',apiUsersControlers.allUsers);
//detalles de un usuarios
router.get('/profile/:id', apiUsersControlers.profile);
//agregar un usuario
// router.post('/create', apiUsersControlers.create);
//modificar un usuario
//router.get('/update/id', apiUsersControlers.update);
//Eliminar un usuario
//router.get('/delete/id', apiUsersControlers.delete);

module.exports = router;