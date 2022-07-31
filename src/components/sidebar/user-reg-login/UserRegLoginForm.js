import { useState } from 'react';

import userService from '../../../services/userService';
import { FormOverlay } from '../../common/FormOverlay';

import { Logo } from '../../common/Logo';
import { TextInput } from '../../common/Inputs';

import styles from './UserRegLoginForm.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export const UserRegLoginForm = ({ func, children, onClose }) => {
    const [formData, setFormData] = useState({});
    const { userLogin } = useContext(AuthContext);

    const lib = {
        register: {
            ok: 'Register',
            post: userService.userCreate,
        },
        login: {
            ok: 'Login',
            post: userService.userLogin,
        },
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if(func === 'register' && formData.password !== formData.repeatPass) {
            throw new Error('Password and Repeat Password should match')
        }
        try {
            const user = await lib[e.target.name].post({ ...formData, role: 'User' });
            console.log(user);
            userLogin(user);
            onClose(func);
        } catch (error) {
            throw new Error(error);
        }
    };

    const getFormData = (field, value) => {
        setFormData((state) => ({
            ...state,
            [field]: value,
        }));
    };

    return (
        <FormOverlay onClose={onClose} func={func}>
            <form onSubmit={submitHandler} name={func}>
                <Logo />

                <TextInput name="username" getValues={getFormData}>
                    Username
                </TextInput>
                <TextInput name="password" type="password" getValues={getFormData}>
                    Password
                </TextInput>
                {func === 'register' && (
                    <TextInput name="repeatPass" type="password" getValues={getFormData}>
                        Repeat password
                    </TextInput>
                )}

                <div className={styles['form-submit']}>
                    <button className={styles['save-btn']} type="submit">
                        {lib[func].ok}
                    </button>
                    <button className={styles['cancel-btn']} type="button" onClick={() => onClose(func)}>
                        Cancel
                    </button>
                </div>
            </form>
        </FormOverlay>
    );
};
