const sequelize = require('../core/sequelize');
const connect = require('../core/connect');

const user = require('./User')(sequelize);
const client = require('./Client')(sequelize);
const card = require('./Card')(sequelize);

connect(sequelize);

user.belongsTo(client);
client.hasMany(user);

module.exports.User = user;
module.exports.Client = client;
module.exports.Card = card;
