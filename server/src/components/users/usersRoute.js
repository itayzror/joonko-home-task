const express = require('express');
const {verifyUser} = require("./usersContorller");
const getStatusCode = require("../../utils/getStatusCode");
const router = express.Router();


router.post('/login', (req, res) => {
    try {
        const {email, password} = req.body;
        verifyUser({email,password});
        res.cookie('_user_session', JSON.stringify({email}))
        res.sendStatus(200)
    }
    catch (e) {
        res.sendStatus(getStatusCode(e.message));
    }


});



module.exports = router;