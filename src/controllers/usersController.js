const fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../data/usersData.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const { validationResult } = require('express-validator');

const usersController = {
    login: (req, res) => {
        res.render('./users/login')
    },

    register: (req, res) => {
        res.render('./users/register')
    },

    store: (req, res) => {
        // let newUser = {
        //     'id': users[users.length - 1].id + 1,
        //     'firstName': req.body.firstName,
        //     'lastName': req.body.lastName,
        //     'email': req.body.email,
        //     'password': req.body.password,
        //     'category': req.body.category,
        //     'image': req.body.image
        // };
        // users.push(newUser);
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

    }
}

module.exports = usersController;