const ERRORS = {
    USER_DOES_NOT_EXIST: {msg: "User does not exists" , statusCode: 404},
    WRONG_PASSWORD: {msg: "Wrong Password", statusCode: 401},
    INVALID_COOKIE: {msg: "Invalid cookie", statusCode: 401},
    INVALID_MAIL_DOMAIN: {msg: "Invalid mail domain", statusCode: 401},
    SERVER_ERROR: {msg: "Server error", statusCode: 500}
}


module.exports = {ERRORS}