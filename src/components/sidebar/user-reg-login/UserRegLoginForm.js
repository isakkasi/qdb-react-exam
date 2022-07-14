import { useEffect, useState } from 'react';
import { userCreate, userLogin } from '../../../services/userServices';
import { Logo } from '../../common/Logo';
import { TextInput } from '../../common/TextInput';
import './UserRegLoginForm.css';

export const UserRegLoginForm = ({ func, children, onClose, sendUser }) => {
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const user = await lib[e.target.name].post(formData);
            console.log(user);
            onClose(func);
            sendUser(user);
        } catch (error) {
            throw new Error(error);
        }
    };

    const lib = {
        register: {
            ok: 'Register',
            post: userCreate,
        },
        login: {
            ok: 'Login',
            post: userLogin,
        },
    };

    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const getFormData = (field, value) => {
        setFormData((state) => ({
            ...state,
            [field]: value,
        }));
        console.log(formData);
    };

    return (
        <div className="overlay">
            <div className="backdrop" onClick={() => onClose(func)}></div>

            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>
                            <strong>{children}</strong>
                        </h2>
                        <button className="btn" onClick={() => onClose(func)}>
                            X
                        </button>
                    </header>

                    <form onSubmit={submitHandler} name={func}>
                        <Logo />

                        <TextInput name="username" getValues={getFormData}>
                            Username
                        </TextInput>
                        <TextInput name="password" type="password" getValues={getFormData}>
                            Password
                        </TextInput>
                        {func === 'register' ? (
                            <TextInput name="repeatPass" type="password" getValues={getFormData}>
                                Repeat password
                            </TextInput>
                        ) : null}

                        <div className="form-submit">
                            <button className="save-btn" type="submit">
                                {lib[func].ok}
                            </button>
                            <button className="cancel-btn" type="button" onClick={() => onClose(func)}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
