

// const baseUrl = 'http://localhost:5000/dashboard'
const baseUrl = 'api.buzoo.org/dashboard';


export const getInfo = async () => {
    const url = baseUrl;
    const options = {headers: {
        'X-Authorization' : localStorage.getItem('token')
    }};

    const res = await fetch (url, options);
    return res.json();

}