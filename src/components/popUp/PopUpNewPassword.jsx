import React from 'react';
import { popUpLogo } from '../../assets/img';

const PopUpNewPassword = ({ setIsOpen, setPopupState }) => {
    return (
        <>
            <div className="pop-up-block pop-up-newpassword custom-popup-content">
                <span className="logo"><img src={popUpLogo} alt="logo" /></span>
                <h3 className="title">Create New Password</h3>
                <form className="form">
                    <label className="label-password">
                        Password
                        <input type="password" id="password-one" placeholder="Enter your password" />
                        <i className="eye-icon" id="tooglePassword-one"></i>
                    </label>
                    <label className="label-password">
                        New Password
                        <input type="password" id="new-password" placeholder="Enter your new password" />
                        <i className="eye-icon" id="tooglenewPassword"></i>
                    </label>
                    <button className="form-btn" onClick={(e) => {
                            e.preventDefault();
                            setPopupState("welcome");
                        }}>Continue</button>
                </form>
                <button className="custom-popup-close" onClick={() => setIsOpen(false)}></button>
            </div>
        </>
    );
};

export default PopUpNewPassword;
