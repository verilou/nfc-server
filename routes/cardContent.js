const Router = require('@koa/router');
const authRoute = require('../middlewares/authRoute');
const authOwnCardId = require('../middlewares/authOwnCardId');

const getTypes = require('../controllers/cardContents/getTypes');
const create = require('../controllers/cardContents/create');
const _delete = require('../controllers/cardContents/delete');

const cardContent = new Router({ prefix: '/cardContents' });

cardContent.get('/types', authRoute, getTypes);
cardContent.post('/:cardId', authRoute, authOwnCardId, create);
cardContent.delete('/:cardId', authRoute, authOwnCardId, _delete);

module.exports = cardContent;
