const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../data/usersData.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');


const usersController = {
    findAll: () => {
        return users
    },
    
    findByPk: (id) => {
        let userFound = users.find(element => element.id === id);
        return userFound
    },
    
    findByField: (field, text) => {
        let userFound = users.find(element => element[field] === text);
        return userFound
    },

    login: (req, res) => {
        res.render('./users/login')
    },

    register: (req, res) => {
        res.render('./users/register')
    },

    profile: (req, res) => {
        let userProfile = users.find(element => element.id == req.params.id);
        res.render('./users/userProfile', {userProfile});
    },

    store: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        //let userCheck = users.find(element => element.email === req.body.email);
        //if (userCheck) {
        //    return res.render('./users/register', {
        //        errors: {
        //            email: 'Este mail ya esta registrado'
        //        },
        //        oldData: req.body
        //    })
        //}
        let newId = users[users.length - 1].id + 1;
        let newUser = {
            'id': newId,
            'firstName': req.body.firstName,
            'lastName': req.body.lastName,
            'email': req.body.email,
            'password': bcryptjs.hashSync(req.body.password, 10),
            'category': req.body.category,
            'image': req.file.filename
        };
        users.push(newUser);
        fs.writeFileSync(usersPath, JSON.stringify(users, null, ' '));
        res.redirect('/userProfile/' + newId);
    },

    delete: (req, res) => {
        let finalUsers = users.filter(element => element.id != req.params.id);
        fs.writeFileSync(usersPath, JSON.stringify(finalUsers, null, ' '));
        res.redirect('/');
    }
}

module.exports = usersController;