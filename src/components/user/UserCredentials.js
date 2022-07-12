import { useEffect, useState } from 'react';
import { Logo } from '../common/Logo';
import { TextInput } from '../common/TextInput';
import './UserCredentials.css';

export const UserCredentials = ({
    func,
    children,
    onClose
}) => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    const lib = {
        register: {
            ok: 'Register',
        },
        login: {
            ok: 'Login',
        },
    };

    const [formData, setFormData] = useState({})
    
    useEffect(() => {
        console.log(formData);
    }, [formData])
    
    const getFormData = (field, value) => {
        
        setFormData(state => ({
            ...state,
            [field]: value,
        }))
        console.log(formData);
    }


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

                    <form onSubmit={submitHandler}>
                        <Logo />

                        <TextInput name="username" getValues={getFormData}>Username</TextInput>
                        <TextInput name="password" type="password" getValues={getFormData}>Password</TextInput>
                        {func === 'register' ? <TextInput name="repeatPass" type="password" getValues={getFormData}>Repeat password</TextInput> : null}

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
