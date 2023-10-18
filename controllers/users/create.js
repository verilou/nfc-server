const { StatusCodes } = require('http-status-codes');
const createUser = require('../../services/users/create');

module.exports = async (ctx) => {
	const { body } = ctx.request;
	const user = await createUser(body);
	if (user && user[1]) {
		ctx.body = user;
	} else if (!user[1]) {
        ctx.status = StatusCodes.BAD_REQUEST
        ctx.body = "email already in use"
	} else {
		ctx.status = StatusCodes.BAD_REQUEST;
	}
};
