import { useEffect } from 'react';
import { useState } from 'react';
import * as request from '../../../services/utils/requester';

export const UserSettings = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [userData, setUserData] = useState('');

    const roleOptions = ['User', 'Examiner', 'Instructor', 'Invigilator', 'Admin'];

    useEffect(() => {
        request.get('/user/list').then((result) => setUsers([{ _id: null, username: 'Select user' }, ...result]));
    }, []);

    useEffect(() => {
        if (selectedUser) {
            request.get(`/user/details/${selectedUser}`).then((result) => setUserData((state) => result));
        }
    }, [selectedUser]);

    const selectUserHandler = (e) => {
        const userId = e.target.value;
        setSelectedUser((state) => userId);
    };

    return (
        <form>
            <select name="userId" id="userId" onChange={selectUserHandler}>
                {users.map((x) => (
                    <option key={x._id} value={x._id}>
                        {x.username}
                    </option>
                ))}
            </select>
            <input type="text" value={userData.fullName} />
            <input type="text" value={userData.email} />
            <select name="role" id="role" value={userData.role}>
                {roleOptions.map((x, i) => (
                    <option key={i} value={x}>{x}</option>
                ))}
            </select>
            <input type="date" value={userData.dateOfBirth} />
            <input type="text" value={userData.placeOfBirth} />
            <input type="submit" value="Send" />
            {JSON.stringify(userData)}
        </form>
    );
};
