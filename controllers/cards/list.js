const { listCards } = require('../../orm/cards');

module.exports = async (ctx) => {
	ctx.body = await listCards(ctx.req.user.clientId);
};
