const { StatusCodes } = require('http-status-codes');

const authRoute = async (ctx, next) => {
    console.log(ctx.state)
	const { user } = ctx.req;
	if (user === undefined || user?.id === undefined) {
		ctx.status = StatusCodes.FORBIDDEN;
        return;
	}
	await next();
};

module.exports = authRoute;
