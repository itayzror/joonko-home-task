const {getUser} = require("../components/users/usersService");
const getCookieParsed = require("../utils/getCookieParsed");
const getStatusCode = require("../utils/getStatusCode");
const {ERRORS} = require("../constants/errors");


const authMiddleware = (req, res, next) => {
    try {
        const cookies = getCookieParsed(req.headers.cookie);
        if (!cookies['_user_session']) {
            throw new Error(ERRORS.INVALID_COOKIE.msg);
        }

        const session = JSON.parse(cookies['_user_session']);
        if (!session.email) {
            throw new Error(ERRORS.INVALID_COOKIE.msg);
        }
        const user = getUser({email: session.email});
        res.locals.user = user;
        next();
    } catch (e) {
        return res.status(getStatusCode(e.message)).end();
    }
}

module.exports = authMiddleware;