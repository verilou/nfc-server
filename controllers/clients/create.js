const { StatusCodes } = require('http-status-codes');
const createClient = require('../../services/client/create');

module.exports = async (ctx) => {
	const { body } = ctx.request;
	const client = await createClient(body);
	if (client) {
		ctx.body = client;
	} else {
		ctx.status = StatusCodes.BAD_REQUEST;
		ctx.body = {
			message: "La requete n'est pas au bon format",
		};
	}
};
