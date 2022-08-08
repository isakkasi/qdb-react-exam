import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import styles from './UserMenu.module.css'

import userService from '../../../services/userService';
import { UserRegLoginForm } from '../user-reg-login/UserRegLoginForm';

import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
    const { auth, userLogout } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({ register: false, login: false });

    const navigate = useNavigate()

    const onClose = (func) => {
        setCredentials((state) => ({
            ...state,
            [func]: false,
        }));
    };

    const open = (e) => {
        e.preventDefault();
        let target = e.currentTarget.name;

        setCredentials((state) => {
            return {
                ...state,
                [target]: true,
            };
        });
    };

    useEffect(() => {}, [credentials]);

    const logout = (e) => {
        e.preventDefault();
        console.log('Logout');
        if (userService.userLogout(auth.accessToken)) {
            userLogout();
            navigate('/')
        }


    };

    return (
        <div className={styles.center}>
            <div className={styles.relative}>
                {auth.accessToken ? (
                    <a href="/" className={styles.userMenuBtn} name="logout" onClick={logout}>
                        Logout
                        {/* <i className="fa fa-right-from-bracket"></i> */}
                    </a>
                ) : (
                    <>
                        <a href="/" className={styles.userMenuBtn} name="login" onClick={(e) => open(e)}>
                            <span>Login</span>
                            {/* <i className="fa fa-right-to-bracket"></i> */}
                        </a>
                        <a href="/" className={styles.userMenuBtn} name="register" onClick={(e) => open(e)}>
                            <span>Register</span>
                            {/* <i className="fa fa-arrows-to-dot fa-fw"></i> */}
                        </a>
                    </>
                )}
            </div>

            {credentials.register && (
                <UserRegLoginForm func="register" onClose={onClose}>
                    Register
                </UserRegLoginForm>
            )}

            {credentials.login && (
                <UserRegLoginForm func="login" onClose={onClose}>
                    Login
                </UserRegLoginForm>
            )}
        </div>
    );
};
