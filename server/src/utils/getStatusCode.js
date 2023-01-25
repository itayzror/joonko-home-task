const {ERRORS} = require("../constants/errors");


const getStatusCode = (msg) => {
    const error =  Object.keys(ERRORS).find(key => ERRORS[key].msg === msg);
    if(error){
        return ERRORS[error].statusCode;
    }
    return ERRORS.SERVER_ERROR.statusCode;
}

module.exports = getStatusCode;