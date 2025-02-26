import React from 'react';
import { popUpLogo } from '../../assets/img';

const PopUpLogIn = ({ setIsOpen, setPopupState }) => {
    return (
        <div className="pop-up-block pop-up-login custom-popup-content">
            <span className="logo">
                <img src={popUpLogo} alt="logo" />
            </span>
            <h3 className="title">Hey there, welcome back!</h3>
            <form className="form">
                <label>
                    Email
                    <input type="email" placeholder="Enter your email" />
                </label>
                <label className="label-password">
                    Password
                    <input type="password" placeholder="Enter your password" />
                    <i className="eye-icon" id="tooglePassword"></i>
                </label>
                <button
                    className="form-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        setPopupState("welcome"); 
                    }}
                >
                    Login
                </button>
                <a
                    href="#"
                    className="custom-popup-login-link"
                    onClick={(e) => {
                        e.preventDefault();
                        setPopupState("confirm"); 
                    }}
                >
                    Forgot Password?
                </a>
            </form>
            <button
                className="custom-popup-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close popup"
            ></button>
        </div>
    );
};

export default PopUpLogIn;