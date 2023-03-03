const db = require('../../database/models/index');
const User = db.Users;
// const User = require('../../models/User');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	User.findAll()
	.then(users => {
		let userWhitCookie = users.find((i) => i.email === emailInCookie);

	if (userWhitCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
	})	
}

module.exports = userLoggedMiddleware;