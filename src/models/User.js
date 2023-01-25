
//4. esitar la info. del usuario


// const { createHash } = require('crypto');
// const { text } = require('express');
const fs = require('fs');

const user = {
    fileName: './src/data/usersData.json',

    getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return this.getData();
	},

	findByPk: function (id) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},

	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},

    create: function (userData) {
        let allUser = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUser.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUser, null, ' '));
        return newUser;
    },
    delete: function(id) {
        let allUser = this.findAll();
        let finalUsers = allUser.filter(oneuser => oneuser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    },
}
// console.log(user.findByPk(3));

module.exports = user;