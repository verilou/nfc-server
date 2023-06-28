const { getAllUsers } = require('../../orm/users');

module.exports = async (ctx) => {
	ctx.body = await getAllUsers();
};
