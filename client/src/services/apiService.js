import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL =  'http://localhost:3001/api/v1/';

const login = async ({email,password}) => {
    try {
        await axios.post('/users/login', {email,password});
    }
    catch (e) {
        console.error('login error', e);
        throw new Error(e);
    }

}


const getJobs = async () => {
    try {
        const {data} = await axios.get('/users/jobs');
        return data;
    } catch (e) {
        console.error('get jobs error', e);
        throw new Error(e);
    }
}

export {
    login,
    getJobs
}