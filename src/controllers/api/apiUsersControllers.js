const path = require('path');
const db = require('../../database/models');
const User = db.Users;


const apiUsersControlers={
    allUsers: (req, res) => {
        User.findAll()
        .then(users => {
            return res.status(200).json({
                total: users.length,
                data: users,
                satatus: 200
            })
        })
        
    },
    
    profile: (req, res) => {
        User.findByPk(req.params.id)
        .then(user => {
            let respuesta ={
                meta:{
                    status: 200,
                    url: 'api/users/profile/id'
                },
                data: [
                    user.firstname,
                    user.lastname,
                    user.email, 
                    user.user_img
                ]
            }
            res.json(respuesta)
        })
    },
    // create: (req, res) => {
    //     User.create({
    //         firstname: req.body.firstName,
	// 		lastname: req.body.lastName,
	// 		email: req.body.email,
	// 		password: req.body.password, 
	// 		user_img: req.body.image, 
	// 		created_at: req.body.created_at,
	// 		updated_at: req.body.updated_at,
    //     })
    //     .then(confirm =>{
    //         if(confirm){
    //             response = {
    //                 meta:{
    //                     satatus: 200,
    //                     total : confirm.length,
    //                     url : '/api/user/create',
    //                 },
                    
    //                 data:confirm
    //             }
    //         }
    //         res.json(response)
    //     })
    //     .catch(err => res.send(err))
    // }
}

module.exports = apiUsersControlers;