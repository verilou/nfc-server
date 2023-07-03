const { findUserById } = require('../../orm/users');

module.exports = async (ctx) => {
	const user = await findUserById(ctx?.session?.passport?.user);
	if (user) {
		ctx.body = user;
	}
};
