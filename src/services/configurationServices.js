
// const baseUrl = 'http://localhost:5000/';
const baseUrl = 'api.buzoo.org';

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

export const deleteCourse = async (data) => {
    const url = baseUrl + `course/${data._id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'X-Authorization': localStorage.getItem('token'),
        },
    };

    const res = await fetch(url, options);
    console.log(`Successful delete of course._id ${data._id}`);
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

export const getAtaById = async (id) => {
    const url = baseUrl + `ata/${id}`
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

export const editAta = async (data) => {
    const url = baseUrl + `ata/${data._id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(url, options);
    console.log(`Successful edit of ata._id ${data._id}`);
    return res.json();
}

export const deleteAta = async (data) => {
    const url = baseUrl + `ata/${data._id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'X-Authorization': localStorage.getItem('token'),
        },
    };

    const res = await fetch(url, options);
    console.log(`Successful delete of ata._id ${data._id}`);
    return res.json();
}