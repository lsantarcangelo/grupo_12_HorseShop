const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator'); 
const db = require('../../database/models');

const User = db.Users;
const controller = {
	register: (req, res) => {
		return res.render('../src/views/users/register');
	},
	
	processRegister: async (req, res) => {
		
			const resultValidation = validationResult(req);
						
				if (resultValidation.errors.length > 0) {
					return res.render('../views/users/register', {
					errors: resultValidation.mapped(),
					oldData: req.body
				});
			}

			let userInDB = await User.findOne({ where: {
				email: req.body.email				
			}});

			if (userInDB) {
				return res.render('../views/users/register', {
					errors: {
						email: {
							msg: 'Este correo electronico ya se encuentra registrado'
							}
						},
						oldData: req.body
					});
				}else {
					
			console.log('consolelog3')	
														
					await User.create({
					firstname: req.body.firstName,
					lastname: req.body.lastName,
					email: req.body.email,
					password: bcryptjs.hashSync(req.body.password, 10),
					type:  1,
					user_img: req.file.filename, 
					created_at: req.body.created_at,
					updated_at: req.body.updated_at,
				})
				

				.then(()=>{			
					return res.redirect('login')
				})
				.catch((error)=>{console.log(error)	})
				
			};
			
		},
	

	
	login: (req, res) => {
		return res.render('../src/views/users/login');
	},

	loginProcess: async (req, res) => {
		
			const resultValidation = validationResult(req);
					
				if (resultValidation.errors.length > 0) {
					return res.render('../src/views/users/login', {
					errors: resultValidation.mapped(),
					oldData: req.body
				});
			}
			
	
			let userToLogin = await User.findOne({ where: {email: req.body.email}});
			if ( userToLogin){	
			let correctPassword = bcryptjs.compareSync(
				req.body.password, userToLogin.password
				);
				if (correctPassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
	
					if(req.body.recordame) {
						res.cookie('userEmail', req.body.email, { 
							maxAge: (1000 * 60) * 60 
						});
					}
	
					return res.redirect('/');
				} 
				return res.render('../src/views/users/login', {
					errors: {
						email: {
							msg: 'Los datos no coinciden'
						},
					}
				});
			}
	
			return res.render('../src/views/users/login', {
				errors: {
					email: {
						msg: 'Este correo electrónico no esta asociado a ninguna cuenta'
					}
				}
			})


		},
	
	
		profile: async (req, res) => {
			try {
				let logedUser = await User.findAll({
					where: { id: req.session.userLogged.id },
				});
				res.render("users/userProfile", { logedUser});
			} 
		catch (error) {
			res.send(error);
		}
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}

}



module.exports = controller;