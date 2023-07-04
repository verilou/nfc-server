const { findUserById } = require('../../orm/users');

module.exports = async (ctx) => {
	const user = await findUserById(ctx.req.user.id);
	if (user) {
		ctx.body = user;
	}
};
