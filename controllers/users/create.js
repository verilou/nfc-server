const { StatusCodes } = require('http-status-codes');
const createUser = require('../../services/users/create');

module.exports = async (ctx) => {
	const { body } = ctx.request;
	const user = await createUser(body);
	if (user) {
		ctx.body = user;
	} else {
		ctx.status = StatusCodes.BAD_REQUEST;
		ctx.body = {
			message: "La requete n'est pas au bon format",
		};
	}
};
