import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Cookies from 'js-cookie';

import './index.scss';
import Job from "../../components/Job/Job";
import {getJobs} from "../../services/apiService";
import Header from "../../components/Header/Header";

const Jobs = () => {
    const history = useHistory();
    const [jobs, setJobs] = useState([]);

    useEffect(async () => {
        const getNewJobs = async () => {
            try {
                const res = await getJobs()

                if (res?.jobs) {
                    setJobs(res.jobs);
                }
            } catch (err) {
                console.error('error get jobs', err);
            }
        };

        getNewJobs();
    }, [])

    const onClickLogout = () => {
        Cookies.remove('_user_session');
        history.push('/login');
    }


    return (
        <div>
            <Header handleLogout={onClickLogout}/>
            <div className="jobs">
                {jobs.map(job => <Job key={job.applyUrl} position={job}/>)}
            </div>
        </div>
    )
}

export default Jobs;