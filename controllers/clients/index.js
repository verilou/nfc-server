const { getAllClients } = require('../../orm/clients');

module.exports = async (ctx) => {
	ctx.body = await getAllClients();
};
