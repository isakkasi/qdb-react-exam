import { Logo } from "../common/Logo";
import { TextInput } from "../common/TextInput";
import "./Login.css";

export const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="overlay">
            <div className="backdrop"></div>
            {/* onClick={onClose} */}
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>
                            <strong>Login</strong>
                        </h2>
                        <button className="btn">{/* onClick={onClose} */}X</button>
                    </header>


                    <form onSubmit={submitHandler}>
                        <Logo />

                        <TextInput name="username">Username</TextInput>
                        <TextInput name="password">Password</TextInput>

                        <div className="form-submit">
                            <button className="save-btn" type="submit">
                                Login
                            </button>
                            <button className="cancel-btn" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
