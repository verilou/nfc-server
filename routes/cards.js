const Router = require('@koa/router');
const cardCreate = require('../controllers/cards/create');
const cardList = require('../controllers/cards/list');
const cardOne = require('../controllers/cards/one'); 
const authRoute = require('../middlewares/authRoute');

const card = new Router({ prefix: '/cards' });
card.post('/', authRoute, cardCreate);
card.get('/', authRoute, cardList);
card.get('/:uuid', cardOne);
module.exports = card;
