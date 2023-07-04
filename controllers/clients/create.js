const { StatusCodes } = require('http-status-codes');
const createClient = require('../../services/clients/create');

module.exports = async (ctx) => {
	const { body } = ctx.request;
	const client = await createClient(body);
	if (client) {
		ctx.body = client;
	} else {
		ctx.status = StatusCodes.BAD_REQUEST;
	}
};
