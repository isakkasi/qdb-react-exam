const baseUrl = 'http://localhost:5000/';

export const getAllCourses = async () => {
    const url = baseUrl + 'course/';
    const options = {
        headers: {
            'X-Authorization': localStorage.getItem('token'),
        },
    };

    const res = await fetch(url, options);
    return res.json();
};

export const createCourse = async (data) => {
    const url = baseUrl + 'course/';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(url, options);
    return res.json();
};

export const editCourse = async (data) => {
    const url = baseUrl + `course/${data._id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(url, options);
    console.log(`Successful edit of course._id ${data._id}`);
    return res.json();
}

export const getAllAta = async () => {
    const url = baseUrl + 'ata/'
    const options = {
        headers: {
            'X-Authorization': localStorage.getItem('token')
        }
    }
    const res = await fetch(url, options);
    return res.json();
}

export const createAta = async (data) => {
    const url = baseUrl + 'ata/';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(url, options);
    return res.json();
};