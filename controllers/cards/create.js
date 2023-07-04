const createNewCard = require('../../services/cards/create');
module.exports = async (ctx) => {
	const { user } = ctx.req;
	ctx.body = await createNewCard(user);
};
