const path = require('path');
const db = require('../../database/models');
const User = db.Users;


const apiUsersControlers={
    allUsers: (req, res) => {
        User.findAll({
            attributes: ["id", "firstname",'lastname', "email"],
        })
        .then((users) => {
            for (let i = 0; i < users.length; i++) {
            users[i].setDataValue(
                "detail",
                `http://localhost:3030/api/users/profile/${users[i].id}`
            );
            }
    
            let response = {
            count: users.length,
            users: users,
            status: 200,
            };
    
            res.status(200).json(response);
        })
        .catch((error) => res.json(error));
    },
    
    profile: (req, res) => {
        User.findByPk(req.params.id)
        .then((user) => {
            let response = {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            user_img: `http://localhost:3030/images/avatars/${user.user_img}`,
            };
            res.status(200).json(response);
        })
        .catch((error) => console.error(error));
    },    
}

module.exports = apiUsersControlers;