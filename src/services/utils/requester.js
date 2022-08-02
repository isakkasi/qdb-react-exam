import { baseUrl } from '../../config/api';

export const requester = async (method, url, data) => {
    let options = {};

    options.method = method;
    options.headers = {
        'content-type': 'application/json',
    };
    if(localStorage.getItem('auth').accessToken) {
        options.headers['X-Authorization'] = JSON.parse(localStorage.getItem('auth')).accessToken
    }
    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        let res = await fetch(baseUrl + url, options);
        if(res.ok){
            return res.json();

        } else {
            throw new Error ({message: 'Bad request'})
        }
    } catch (error) {
        return error;
    }
};

export const get = requester.bind({}, 'GET');
export const post = requester.bind({}, 'POST');
export const patch = requester.bind({}, 'PATCH');
export const put = requester.bind({}, 'PUT');
export const del = requester.bind({}, 'DELETE');
