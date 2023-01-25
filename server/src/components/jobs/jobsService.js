const {OPEN_JOBS} = require("../../constants/jobs");


const getJobByUserDepartments = (user) => {
    const jobs = OPEN_JOBS.filter(job=>user.departments.includes(job.department));
    return jobs;
}

module.exports = {
    getJobByUserDepartments
}