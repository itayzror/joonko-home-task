const {getUser} = require("./usersService");
const {ERRORS} = require("../../constants/errors");
const EMAIL_PROVIDERS = ['joonko.co'];

const verifyUser = ({email, password}) => {
    const emailProvider = email.split('@')[1];
    if(!EMAIL_PROVIDERS.includes(emailProvider)) {
        throw new Error(ERRORS.INVALID_MAIL_DOMAIN.msg)
    }
    const user = getUser({email});
    if(!user) {
        throw new Error(ERRORS.USER_DOES_NOT_EXIST.msg)
    }
    if(user.password !== password) {
        throw new Error(ERRORS.WRONG_PASSWORD.msg)
    }
    return user;

}

module.exports = {
    verifyUser
}