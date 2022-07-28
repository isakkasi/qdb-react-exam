// const baseUrl = 'http://localhost:5000/question';
const baseUrl = 'http://api.buzoo.org/question/';


export const getAll = async () => {
    const url = baseUrl;
    const options = {};
    const res = await fetch(url, options);
    return res.json();
};

export const getById = async (id) => {
    const url = `${baseUrl}/${id}`;
    const options = {};
    const res = await fetch(url, options);
    return res.json();
}

export const create = async (data) => {
    data.author = localStorage.getItem('userId');
    const url = baseUrl;
    const options = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': localStorage.getItem('token'),
            userid: localStorage.getItem('userId'),
        },
        body: JSON.stringify(data),
    };
    const res = await fetch(url, options);
    return res.json();
};

export const edit = async (data) => {
    console.log(data);
    console.log(data._id);
    const url = baseUrl + `/${data._id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token'),
            userid: localStorage.getItem('userId'),
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(url, options);
    console.log(`Successful edit of question._id ${data._id}`);
    return res.json();
};

export const del = async (data) => {
    const url = baseUrl + `/${data._id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'X-Authorization': localStorage.getItem('token'),
            userid: localStorage.getItem('userId'),
        },
    };

    const res = await fetch(url, options);
    console.log(`Successful delete of question._id ${data._id}`);
    return res.json();
};

export const getAllComments = async (id) => {
    const url = `${baseUrl}/${id}/comments`;
    const options = {};
    const res = await fetch(url, options);
    return res.json();
};

export const createComment = async (data, id) => {
    const url = `${baseUrl}/${id}/comments`;
    const options = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    };
    const res = await fetch(url, options);
    return res.json();
};
