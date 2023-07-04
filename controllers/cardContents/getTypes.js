const { CARD_CONTENT_TYPE } = require('../../constants');

module.exports = (ctx) => {
	ctx.body = CARD_CONTENT_TYPE;
};
