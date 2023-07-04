const { StatusCodes } = require('http-status-codes');
const createNewContentCard = require('../../services/cardContents/create');
module.exports = async (ctx) => {
	const card = ctx.state.card;
	const { type, value } = ctx.request.body;
	const newContent = await createNewContentCard(card.id, type, value);
	if (!newContent) {
		ctx.status = StatusCodes.BAD_REQUEST;
		return;
	}

	ctx.body = newContent;
};
