import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as request from '../../../services/utils/requester';

import styles from './UserSettings.module.css';

export const UserSettings = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const defaultUserData = {
        fullName: '',
        avatar: '',
        email: '',
        role: '',
        dateOfBirth: '',
        placeOfBirth: '',
    };
    const [userData, setUserData] = useState(defaultUserData);

    const roleOptions = ['User', 'Examiner', 'Instructor', 'Invigilator', 'Admin'];

    useEffect(() => {
        request.get('/user/list')
        .then((result) => setUsers([{ _id: 1, username: 'Select user' }, ...result]));
    }, []);

    const selectUserHandler = (e) => {
        const userId = e.target.value;
        setSelectedUser((state) => userId || state);
        if (userId && userId !== '1') {
            request.get(`/user/details/${userId}`)
            .then((result) => setUserData((state) => (result ? result : defaultUserData)));
        } else {
            setUserData(state => defaultUserData)
        }
    };

    const changeDataHandler = (e) => {
        setUserData((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        request.put(`/user/details/${selectedUser}`, userData).then(() => navigate('/settings'));
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <div>
            <div className={styles.centered}>
            <h2 className={styles.h2}>{userData.fullName}</h2>
                <img className={styles.face} src={userData.avatar || '/avatar.png'} alt="avatar" />

            </div>
                <select name="userId" id="userId" onChange={selectUserHandler} className={styles.select}>
                    {users.map((x) => (
                        <option key={x._id} value={x._id}>
                            {x.username}
                        </option>
                    ))}
                </select>


            </div>
            <div>
                <label htmlFor="avatar-url">
                        Avatar
                <input type="text" id='avatar-url' name="avatar" value={userData.avatar} onChange={changeDataHandler} />
                </label>
                
                
                <input type="text" name="fullName" value={userData.fullName} onChange={changeDataHandler} />
                <input type="text" name="email" value={userData.email} onChange={changeDataHandler} />
            </div>
            <select name="role" id="role" value={userData.role} onChange={changeDataHandler}>
                {roleOptions.map((x, i) => (
                    <option key={i} value={x}>
                        {x}
                    </option>
                ))}
            </select>
            <input type="date" name="dateOfBirth" value={userData.dateOfBirth} onChange={changeDataHandler} />
            <input type="text" name="placeOfBirth" value={userData.placeOfBirth} onChange={changeDataHandler} />
            <input type="submit" value="Send" />
            {/* {JSON.stringify(userData)} */}
        </form>
    );
};
