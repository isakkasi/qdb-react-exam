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
            <Link to="/profile">
                <Avatar avatar={userDetails?.avatar || '/avatar.png'} />
            </Link>
            <div className={styles.user}>
                {auth?.username ? (
                    <span>
                        Welcome,{' '}
                        <strong>
                            {auth.username} <br />
                        </strong>
                    </span>
                ) : (
                    <span>
                        Welcome,{' '}
                        <strong>
                            Guest <br />
                        </strong>
                    </span>
                )}
                <br />
                <br />
                <br />
            </div>
            <UserMenu />
        </div>
    );
};
