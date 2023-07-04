const { v4: uuidv4 } = require('uuid');
const { createCard, getCardById } = require('../../orm/cards');

module.exports = async (createdByUser) => {
	const path = uuidv4();
	const cardContent = {
		createdByUserId: createdByUser.id,
		path,
		clientId: createdByUser.clientId,
	};
	const card = await createCard(cardContent);
	return getCardById(card.id);
};
