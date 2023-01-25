const express = require('express');
const router = express.Router();

const jobRoute = require('../components/jobs/jobsRoute');
const usersRoute = require('../components/users/usersRoute');

router.use('/users', usersRoute);
router.use('/users', jobRoute);

module.exports = router;