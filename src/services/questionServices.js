const baseUrl = 'http://localhost:5000/question';

export const getAll = async () => {
    const url = baseUrl;
    const options = {};
    const res = await fetch(url, options);
    return res.json();
};

export const create = async (data) => {
    data.author = localStorage.getItem('userId')
    const url = baseUrl;
    const options = {
        method: 'post',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify(data), 
    }
    const res = await fetch(url, options);
    return res.json();
}



