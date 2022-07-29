import { baseUrl } from '../../config/api';

export const requester = async (method, url, data) => {
    console.log(method);
    console.log('Request method: '+method);
    let options ={};
    
    options.method = method;
    options.headers = {
        'content-type': 'application/json',
        'X-Authorization': localStorage.getItem('token'),
    };
    if(data){
        options.body = JSON.stringify(data);
    }
    
    try {
        let res = await fetch(baseUrl + url, options);
        console.log('res.status');
        return res.json();
    } catch (error) {
        return error;
    }
};

export const get = requester.bind(this, 'GET');
export const post = requester.bind(this, 'POST');
export const patch = requester.bind(this, 'PATCH');
export const put = requester.bind(this, 'PUT');
export const del = requester.bind(this, 'DELETE');
