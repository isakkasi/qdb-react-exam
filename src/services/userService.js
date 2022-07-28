const baseUrl = 'api.buzoo.org';


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

        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('username', user.username);
        localStorage.setItem('userId', user._id);
        return user;
    } catch (error) {
        return error;
    }
};

const userLogout = async () => {
    let token = localStorage.getItem('token');
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
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        console.log('Successful logout');
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const userService = {userCreate, userLogin, userLogout}

export default userService;
