import { useState } from 'react';

import userService from '../../../services/userService';
import { FormOverlay } from '../../common/FormOverlay';

import { Logo } from '../../common/Logo';
import { TextInput } from '../../common/Inputs';

import styles from './UserRegLoginForm.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export const UserRegLoginForm = ({ func, children, onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPass: '',
        error: '',
    });
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
        if (func === 'register' && formData.password !== formData.repeatPass) {
            getFormData('error', 'Password and Repeat Password should match');
            return;
        }

        if (formData.error !== '') {
            return;
        }
        lib[e.target.name]
            .post(formData)
            .then((user) => {
                if (user.message) {
                    throw new Error(user.message);
                } else {
                    userService
                        .getUserDetails(user._id)
                        .then((userDetails) => {
                            user.role = userDetails?.role || '';
                            // console.log(user);
                            userLogin(user);
                            onClose(func);
                        })
                        .catch((err) => {
                            console.log(err);
                            throw new Error(err);
                        });
                }
            })
            .catch((err) => {
                getFormData('error', err.message);
                
                // console.log(err.message);
                // throw new Error(err);
            });

        // try {
        //     const user = await lib[e.target.name].post(formData);
        //     const userDetails = await userService.getUserDetails(user._id)
        //     user.role = userDetails.role
        //     console.log(user);
        //     userLogin(user);
        //     onClose(func);
        // } catch (error) {
        //     throw new Error(error);
        // }
    };

    const getFormData = (field, value) => {
        let errorMessage;
        if (field === 'username' && value.length < 3) {
            errorMessage = 'Username shall be at least 3 symbols long!';
        } else if (field === 'password' && value.length < 3) {
            errorMessage = 'Password shall be at least 3 symbols long!';
        } else if (func === 'register' && field === 'repeatPass' && value !== formData.password) {
            errorMessage = 'Password and Repeat Password should match';
        } else if (field === 'error') {
            errorMessage = value;
        } else {
            errorMessage = '';
        }
        setFormData((state) => ({
            ...state,
            [field]: value,
            error: errorMessage,
        }));
        // console.log(formData.error);
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
                    <div className={styles.error}>{formData.error && <span>Error: {formData.error}</span>}</div>
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
