module.exports = (sequelize) => {
	const { Client, User } = sequelize.models;

	//Client assosiations
	Client.hasMany(User);

	// User assosiations
	User.belongsTo(Client, { as: 'userAdmin' });
};
