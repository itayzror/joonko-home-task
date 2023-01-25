const USERS = require('../../constants/users');


const getUser = ({email}) => {
    return USERS.find(user => user.email === email);
}


module.exports = {
    getUser
}
