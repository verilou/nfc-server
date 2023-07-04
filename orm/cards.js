const { Card, User, CardContent } = require('../models');
const includeUserModel = { include: { model: User, as: 'createdByUser' } };
module.exports.createCard = (newCard) => Card.create(newCard);

module.exports.getCardById = (id) => Card.findByPk(id, includeUserModel);
module.exports.getCardByUuid = (uuid) =>
	Card.findOne({ where: { path: uuid }, include: CardContent });
module.exports.listCards = (clientId) =>
	Card.findAll({
		where: { clientId },
		...includeUserModel,
	});
