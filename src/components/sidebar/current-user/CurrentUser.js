import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import userService from '../../../services/userService';

import { Avatar } from './Avatar';
import { UserMenu } from './UserMenu';

import styles from './CurrentUser.module.css';
import { Link } from 'react-router-dom';

export const CurrentUser = () => {
    const { auth } = useContext(AuthContext);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        userService.getUserDetails(auth._id).then((result) => setUserDetails(result));
    }, [auth._id]);

    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <Link to="/profile">
                        <Avatar avatar={userDetails?.avatar || '/avatar.png'} />
                    </Link>
                </div>
                <div className={styles.greeting}>
                    {auth?.username ? (
                        <span>
                            Welcome,{' '}
                            <p>
                                <strong>{auth.username}</strong>
                            </p>
                        </span>
                    ) : (
                        <span>
                            Welcome,{' '}
                            <p>
                                <strong>Guest</strong>
                            </p>
                        </span>
                    )}
                </div>
            </div>
            <div className={styles.userMenu}>
                <UserMenu />
            </div>
        </div>
    );
};
