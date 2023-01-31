const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator'); 

const User = require('../models/User');

const controller = {
	register: (req, res) => {
		return res.render('../views/users/register');
	},
	processRegister: (req, res) => {

		const resultValidation = validationResult(req);
				
			if (resultValidation.errors.length > 0) {
				return res.render('../views/users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('../views/users/register', {
				errors: {
					email: {
						msg: 'Este correo electronico ya se encuentra registrado'
					}
				},
				oldData: req.body
			});
		}

		let userTOCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			passConfirm: bcryptjs.hashSync(req.body.password, 10),
			image: req.file.filename
		}
		
		User.create(userTOCreate);

		return res.render('../views/users/login')

	},
	login: (req, res) => {
		return res.render('../views/users/login');
	},

	loginProcess: (req, res) => {
		const resultValidation = validationResult(req);
				
			if (resultValidation.errors.length > 0) {
				return res.render('../views/users/login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		

		let userToLogin = User.findByField('email', req.body.email);
		if(userToLogin) {
			
			let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (correctPassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.recordame) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/');
			} 
			return res.render('../views/users/login', {
				errors: {
					email: {
						msg: 'Los datos no coinciden'
					}
				}
			});
		}

		return res.render('../views/users/login', {
			errors: {
				email: {
					msg: 'Este correo electrónico no esta asociado a ninguna cuenta'
				}
			}
		});
	},
	
	profile: (req, res) => {
		return res.render('../views/users/userProfile', {
			userProfile: req.session.userLogged
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}

}



module.exports = controller;