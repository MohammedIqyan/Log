import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();  
    const passwordRef1 = useRef();
    const passwordRef2 = useRef();
    const eyeIconRef1 = useRef();
    const eyeIconRef2 = useRef();

    const handleSubmit = () => {
        navigate('/');
    };

    const togglePasswordVisibility = (inputRef, eyeIconRef) => {
        if (inputRef.current.type === "password") {
            inputRef.current.type = "text";
            eyeIconRef.current.classList.add("active");
        } else {
            inputRef.current.type = "password";
            eyeIconRef.current.classList.remove("active");
        }
    };

    return (
        <div className="login">
            <h1>SignIn Form</h1>
            <div className="m" id="mm">
                <input
                    type="text"
                    placeholder="Enter User Name"
                />
                <div className="password-input">
                    <input
                        type="password"
                        placeholder="Enter the Password"
                        ref={passwordRef1}
                    />
                    <i
                        ref={eyeIconRef1}
                        onClick={() => togglePasswordVisibility(passwordRef1, eyeIconRef1)}
                        className="fa-regular fa-eye icon1"
                    ></i>
                </div>
                <div className="password-input">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        ref={passwordRef2}
                    />
                    <i
                        ref={eyeIconRef2}
                        onClick={() => togglePasswordVisibility(passwordRef2, eyeIconRef2)}
                        className="fa-regular fa-eye icon1"
                    ></i>
                </div>
            </div>
            <button onClick={handleSubmit} className="btn">Login</button>
        </div>
    );
};

export default SignIn;
