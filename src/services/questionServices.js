const baseUrl = 'http://localhost:5000/question';

export const getAll = async () => {
    const url = baseUrl;
    const options = {};
    const res = await fetch(url, options);
    return res.json();
};
