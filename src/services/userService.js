import { baseUrl } from '../config/api';
import * as request from './utils/requester';

const userCreate = async (data) => {
    console.log(data);
    const url = `${baseUrl}/user/register`;
    const options = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    let res = await fetch(url, options);
    return res.json();
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
        let user = await res.json();

        return user;
    } catch (error) {
        return error;
    }
};

const userLogout = async () => {
    let token = localStorage.getItem('auth').accessToken;
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

const getRoleConfig = async (role) => request.get(`/user/role/${role}`)

const userService = { userCreate, userLogin, userLogout, getRoleConfig };

export default userService;
