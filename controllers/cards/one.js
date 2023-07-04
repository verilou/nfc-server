const { getCardByUuid } = require('../../orm/cards');

module.exports = async (ctx) => {
	ctx.body = await getCardByUuid(ctx.params.uuid);
};
