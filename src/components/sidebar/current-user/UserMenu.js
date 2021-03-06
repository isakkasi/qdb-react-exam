import { useEffect, useState } from 'react';

import userService from '../../../services/userService';
import Tooltip from '../../common/Tooltip';
import { UserRegLoginForm } from '../user-reg-login/UserRegLoginForm';

import './CurrentUser.css';

export const UserMenu = ({ getUser }) => {
    const [credentials, setCredentials] = useState({ register: false, login: false });

    let username = localStorage.getItem('username');
    let userId = localStorage.getItem('userId');
    let token = localStorage.getItem('token');

    const [user, setUser] = useState({ username, userId, token });

    const sendUser = (user) => {
        setUser((state) => user);
    };

    useEffect(() => {
        getUser(user);
    }, [getUser, user]);

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
        if (userService.userLogout()) {
            sendUser({});
        }
    };

    return (
        <div className="w3-center">
            <a href="/" className="user-menu-btn">
                <i className="fa fa-envelope"></i>
            </a>
            <a href="/" className="user-menu-btn">
                <i className="fa fa-user"></i>
            </a>
            <a href="/" className="user-menu-btn">
                <i className="fa fa-cog"></i>
            </a>
            <div>
                <a href="/" className="user-menu-btn" name="login" onClick={(e) => open(e)}>
                    <i className="fa fa-right-to-bracket"></i>
                </a>
                <a href="/" className="user-menu-btn" name="register" onClick={(e) => open(e)}>
                    <i className="fa fa-arrows-to-dot fa-fw"></i>
                </a>
                <a href="/" className="user-menu-btn" name="logout" onClick={logout}>
                    <i className="fa fa-right-from-bracket"></i>
                </a>
            </div>

            {credentials.register && (
                <UserRegLoginForm func="register" onClose={onClose} sendUser={sendUser}>
                    Register
                </UserRegLoginForm>
            )}

            {credentials.login && (
                <UserRegLoginForm func="login" onClose={onClose} sendUser={sendUser}>
                    Login
                </UserRegLoginForm>
            )}
        </div>
    );
};
