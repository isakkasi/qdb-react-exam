import { useState } from 'react';
import * as userServices from '../../../services/userServices';
import { UserRegLoginForm } from '../user-reg-login/UserRegLoginForm';

import './CurrentUser.css';

export const UserMenu = ({ sendUser }) => {
    const [credentials, setCredentials] = useState({ register: false, login: false });

    const onClose = (func) => {
        console.log('Close: ' + func);
        setCredentials((state) => ({
            ...state,
            [func]: false,
        }));
    };

    const open = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        setCredentials((state) => ({
            ...state,
            [e.target.name]: true,
        }));
    };

    const logout = (e) => {
        e.preventDefault();
        if (userServices.userLogout()) {
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
                    <i className="fa fa-angle-right"></i>
                </a>
                <a href="/" className="user-menu-btn" name="register" onClick={(e) => open(e)}>
                    Reg
                </a>
                <a href="/" className="user-menu-btn" name="logout" onClick={logout}>
                    <i className="fa fa-angle-left"></i>
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
