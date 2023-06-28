const { Client, User } = require("./database");

module.exports = () => {
	//Client assosiations
	Client.hasMany(User);

	// User assosiations
	User.belongsTo(Client);
};
