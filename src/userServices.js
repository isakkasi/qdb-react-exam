export const userApi = async (data) => {
    // const data = {};
    const url = "http://localhost:5000/user/register";
    const options = {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    };

    let res = await fetch(url, options);
    return res.json();
};
