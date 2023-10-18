(async () => {
    console.log("import user inside async")
	const sequelize = await require('../core/sequelize');
	const connect = require('../core/connect');
	const user = require('./User')(sequelize);
	const client = require('./Client')(sequelize);
	const card = require('./Card')(sequelize);
	const cardContent = require('./CardContent')(sequelize);

	connect(sequelize);

	card.belongsTo(user, { as: 'createdByUser' });
	card.belongsTo(client);
	card.hasMany(cardContent);

	cardContent.belongsTo(card);

	user.belongsTo(client);
	user.hasMany(card, { foreignKey: 'createdByUserId' });

	client.hasMany(user);
	client.hasMany(card);

	module.exports.User = sequelize.models.user;
	module.exports.Client = sequelize.models.client;
	module.exports.Card = sequelize.models.card;
	module.exports.CardContent = sequelize.models.cardContent;
})();
