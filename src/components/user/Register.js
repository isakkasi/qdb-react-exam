import { useState } from "react";
import "./Register.css";
import { userApi } from "../../userServices";

export const Register = () => {

    const [value, setValue] = useState({})

    const submitHandler = async (e) => {
        e.preventDefault();

        await userApi(value);
        console.log('Successful');
    };
    
    const changeHandler = (e) => {
        setValue(data => {
            data[e.target.name] = e.target.value;
            return data;
        })

        // console.log(value);
        
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="container">
                    <h1 className="w3-center">Sign Up</h1>

                    <label htmlFor="username">
                        <b>Username</b>
                    </label>
                    <input type="text" name="username" required onChange={changeHandler} value={value.username}/>

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input type="password" name="password" required onChange={changeHandler} value={value.password} />

                    <label htmlFor="psw-repeat">
                        <b>Repeat Password</b>
                    </label>
                    <input type="password" name="pswRepeat" required onChange={changeHandler} value={value.pswRepeat} />

                    <p>
                        By creating an account you agree to our{" "}
                        <a href="/" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                        .
                    </p>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">
                            Cancel
                        </button>
                        <button type="submit" className="signupbtn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
