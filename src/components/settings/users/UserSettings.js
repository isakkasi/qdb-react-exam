import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as request from '../../../services/utils/requester';

import styles from './UserSettings.module.css';

export const UserSettings = ({ userProfileId }) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(userProfileId || '1');
    const defaultUserData = {
        fullName: '',
        avatar: '',
        email: '',
        role: '',
        dateOfBirth: '',
        placeOfBirth: '',
        error: '',
    };
    const [userData, setUserData] = useState(defaultUserData);

    const roleOptions = ['User', 'Examiner', 'Instructor', 'Invigilator', 'Admin'];

    useEffect(() => {
        request.get('/user/list').then((result) => setUsers([{ _id: 1, username: 'Select user' }, ...result]));
    }, []);

    useEffect(() => {
        if (selectedUser && selectedUser !== '1') {
            request
                .get(`/user/details/${selectedUser}`)
                .then((result) => setUserData((state) => result))
                .catch((err) => setUserData((state) => defaultUserData));
        } else {
            setUserData((state) => defaultUserData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedUser]);

    const selectUserHandler = (e) => {
        const userId = e.target.value;
        setSelectedUser((state) => userId || state);
        // if (userId && userId !== '1') {
        //     request.get(`/user/details/${userId}`)
        //     .then((result) => setUserData((state) => (result ? result : defaultUserData)));
        // } else {
        //     setUserData(state => defaultUserData)
        // }
    };

    const changeDataHandler = (e) => {
        let error = '';
        switch (e.target.name) {
            case 'email':
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
                    error = '';
                } else {
                    error = 'Enter valid email';
                }
                break;

            case 'dateOfBirth':
                let date = new Date(e.target.value);
                if (date.getFullYear() < 2023) {
                    error = '';
                } else {
                    error = 'You need to be born to use the app';
                }
                break;

            default:
                break;
        }
        setUserData((state) => ({
            ...state,
            [e.target.name]: e.target.value,
            error,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(userData.error) {
            return;
        }

        request.put(`/user/details/${selectedUser}`, userData)
        .then(() => navigate('/settings'))
        .catch (err => {
            setUserData((state) => ({
                ...state,
                error: err
            }))
        })
    };

    // console.log(users.filter(x => x._id === "62eed98324c6575a3a753911")[0].username);
    // console.log(userProfileId);

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <div className={styles.centered}>
                <div>
                    <h2 className={styles.h2}>{userData.fullName}</h2>
                    <img className={styles.face} src={userData.avatar || '/avatar.png'} alt="avatar" />
                </div>
                <label htmlFor="userId">
                    Username
                    <select name="userId" id="userId" onChange={selectUserHandler} className={styles.textInput} disabled={!!userProfileId}>
                        {userProfileId && users.length ? (
                            <option key={userProfileId} value={userProfileId}>
                                {users.filter((x) => x._id === userProfileId)[0].username || ''}
                            </option>
                        ) : (
                            users.map((x) => (
                                <option key={x._id} value={x._id}>
                                    {x.username}
                                </option>
                            ))
                        )}
                    </select>
                </label>
                <div className={styles.error}>{userData.error && <span>{userData.error}</span>}</div>
            </div>

            <div className={styles.container}>
                <div>
                    <label htmlFor="avatar-url">
                        Avatar
                        <input type="text" className={styles.textInput} id="avatar-url" name="avatar" value={userData.avatar} onChange={changeDataHandler} />
                    </label>
                </div>
                <div>
                    <label htmlFor="name">
                        Full name
                        <input id="name" type="text" className={styles.textInput} name="fullName" value={userData.fullName} onChange={changeDataHandler} />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                        <input id="email" type="email" className={styles.textInput} name="email" value={userData.email} onChange={changeDataHandler} />
                    </label>
                </div>
                <div>
                    <label htmlFor="role">
                        Role
                        <select
                            className={styles.textInput}
                            name="role"
                            id="role"
                            value={userData.role}
                            onChange={changeDataHandler}
                            disabled={!!userProfileId}
                        >
                            {roleOptions.map((x, i) => (
                                <option key={i} value={x}>
                                    {x}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="DoB">
                        Date of Birth
                        <input id="DoB" type="date" className={styles.textInput} name="dateOfBirth" value={userData.dateOfBirth} onChange={changeDataHandler} />
                    </label>
                </div>
                <div>
                    <label htmlFor="PoB">
                        Place of Birth
                        <input
                            id="PoB"
                            type="text"
                            className={styles.textInput}
                            name="placeOfBirth"
                            value={userData.placeOfBirth}
                            onChange={changeDataHandler}
                        />
                    </label>
                </div>
            </div>
            <div className={styles.centered}>
                <input type="submit" value="Update" className={styles.submitBtn} />
            </div>
            <div className={styles.right}></div>
            {/* {JSON.stringify(userData)} */}
        </form>
    );
};
