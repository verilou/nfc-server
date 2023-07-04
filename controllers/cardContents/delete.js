const deleteCardContent = require('../../orm/cardContents')

module.exports = async (ctx) => {
    const card = ctx.state.card;
    ctx.body = await deleteCardContent(card.id)
}