const { StatusCodes } = require('http-status-codes');
const { getCardById } = require('../orm/cards');

const authOwnCardId = async (ctx, next) => {
	const { user } = ctx.req;
	const card = await getCardById(ctx?.params?.cardId);
	if (
		user === undefined ||
		user?.id === undefined ||
		!card ||
		card.createdByUserId !== user.id ||
		card.clientId !== user.clientId
	) {
		ctx.status = StatusCodes.FORBIDDEN;
		return;
	}
	ctx.state.card = card;
	await next();
};

module.exports = authOwnCardId;
