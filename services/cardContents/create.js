const { CARD_CONTENT_TYPE } = require('../../constants');
const { createCardContent } = require('../../orm/cardContents');

const create = (cardId, cardContentType, value) => {
	if (
		!CARD_CONTENT_TYPE.includes(cardContentType) ||
		cardContentType === '' ||
		cardContentType === undefined ||
		value == undefined
	) {
		return false;
	}

	return createCardContent({ cardId, value, type: cardContentType });
};

module.exports = create;
