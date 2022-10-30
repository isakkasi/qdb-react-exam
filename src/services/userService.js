import { baseUrl } from '../config/api';
import * as request from './utils/requester';


const userCreate = async (data) => {
    // console.log(data);
    const url = `${baseUrl}/user/register`;
    const options = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    try {
        let res = await fetch(url, options);
        return res.json();
    } catch (err) {
        throw new Error(err);
    }
};

const userLogin = async (data) => {
    const url = `${baseUrl}/user/login`;
    const options = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    try {
        let res = await fetch(url, options);
        return res.json();
    } catch (err) {
        throw new Error(err);
    }
};

const userLogout = async (token) => {
    // let token = localStorage.getItem('auth').accessToken;
    const url = `${baseUrl}/user/logout`;
    const options = {
        method: 'get',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
    };
    try {
        await fetch(url, options);
        console.log('Successful logout');
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const getRoleConfig = async (role) => request.get(`/user/role/${role}`);
const getUserDetails = async (userId) => {
    if (userId) {
        return request.get(`/user/details/${userId}`);
    }
};

const getAll = async () => request.get('/user/list')


const userService = { userCreate, userLogin, userLogout, getRoleConfig, getUserDetails, getAll };

export default userService;
