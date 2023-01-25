const express = require('express');
const router = express.Router();

const {getJobByUserDepartments} = require("./jobsService");
const authMiddleware = require('../../middlewares/authMiddleware')

router.get('/jobs', authMiddleware, (req, res) => {
    const {user} = res.locals;
    const jobs = getJobByUserDepartments(user);
    res.status(200).json({jobs});
});

module.exports = router;