import "./Login.css";

export const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{margin: 50+'px'}}>
            <h2 className="w3-center">Login Form</h2>

            <form onSubmit={submitHandler}>
                <div className="imgcontainer">
                    <img src="https://png.pngitem.com/pimgs/s/117-1177878_square-academic-cap-graduation-ceremony-graduate-university-graduation.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="username">
                        <b>Username</b>
                    </label>
                    <input type="text" name="username" required />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password" name="password" required />

                    <button type="submit">Login</button>
                    
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn">
                        Cancel
                    </button>
                    <span className="psw">
                        Forgot <a href="/">password?</a>
                    </span>
                </div>
            </form>
        </div>
    );
};
