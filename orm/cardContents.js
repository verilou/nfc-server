const { CardContent } = require('../models');

module.exports.createCardContent = (cardContent) =>
	CardContent.create(cardContent);
module.exports.deleteCardContent = (id) =>
	CardContent.destroy({
		where: {
			id,
		},
	});
